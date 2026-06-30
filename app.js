/* ITIL V5 Learning Dashboard — Phase 3.1 app engine */
(function () {
  "use strict";

  const APP_VERSION = "4.0";
  const STORAGE_PREFIX = "itil_v5_learning_phase4";
  const PASS_MARK = 65;

  const $ = (id) => document.getElementById(id);
  const sectionById = Object.fromEntries(SECTIONS.map((section) => [section.id, section]));

  const state = {
    currentSectionId: SECTIONS[0].id,
    currentTopicTab: "overview",
    examQuestions: [],
    answers: [],
    flags: [],
    currentQuestion: 0,
    examMode: "study",
    examTitle: "",
    examSubTitle: "",
    timerId: null,
    timeLeft: 0,
    lastResult: null,
    flashcards: [],
    flashIndex: 0,
    flashFlipped: false,
  };

  function safeGet(key, fallback) {
    try {
      const value = localStorage.getItem(`${STORAGE_PREFIX}_${key}`);
      return value === null ? fallback : JSON.parse(value);
    } catch (error) {
      return fallback;
    }
  }

  function safeSet(key, value) {
    try {
      localStorage.setItem(`${STORAGE_PREFIX}_${key}`, JSON.stringify(value));
    } catch (error) {
      console.warn("Could not save local progress:", error);
    }
  }

  function safeRemove(key) {
    try {
      localStorage.removeItem(`${STORAGE_PREFIX}_${key}`);
    } catch (error) {}
  }

  function progress() {
    return safeGet("progress", { history: [], questionStats: {} });
  }

  function saveProgress(nextProgress) {
    safeSet("progress", nextProgress);
  }

  function toast(message) {
    const toastEl = $("toast");
    toastEl.textContent = message;
    toastEl.classList.add("show");
    window.setTimeout(() => toastEl.classList.remove("show"), 1800);
  }

  function shuffle(items) {
    const copy = items.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function sectionQuestions(sectionId) {
    return QUESTION_BANK.filter((question) => question.sectionId === sectionId);
  }

  function showView(viewId) {
    if (state.timerId && viewId !== "exam") {
      window.clearInterval(state.timerId);
      state.timerId = null;
    }

    document.querySelectorAll(".view").forEach((view) => view.classList.remove("active"));
    $(viewId).classList.add("active");

    document.querySelectorAll(".nav-btn").forEach((button) => {
      button.classList.toggle("active", button.dataset.view === viewId || (viewId === "sectionDetail" && button.dataset.view === "sections"));
    });

    if (viewId === "home") renderHome();
    if (viewId === "sections") renderSectionGrid();
    if (viewId === "practice") renderPractice();
    if (viewId === "progress") renderProgress();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderHome() {
    renderSummaryStats();
    renderSectionCards($("homeSectionGrid"));
  }

  function renderSummaryStats() {
    const data = progress();
    const attempts = data.history.length;
    const best = attempts ? Math.max(...data.history.map((entry) => entry.scorePct)) : 0;
    const questionTotal = QUESTION_BANK.length;
    const sectionTotal = SECTIONS.length;

    const stats = [
      ["📚", sectionTotal, "Study sections"],
      ["❓", questionTotal, "Draft questions"],
      ["🧪", attempts, "Attempts"],
      ["🏆", `${best}%`, "Best score"],
    ];

    $("summaryStats").innerHTML = stats.map(([icon, value, label]) => `
      <div class="stat-card">
        <strong>${icon} ${escapeHtml(value)}</strong>
        <span>${escapeHtml(label)}</span>
      </div>
    `).join("");
  }

  function renderSectionGrid() {
    renderSectionCards($("sectionGrid"));
  }

  function renderSectionCards(container) {
    container.innerHTML = SECTIONS.map((section) => `
      <button class="section-card" type="button" data-section-open="${section.id}" style="border-left-color:${section.color}">
        <div class="num">Section ${section.order}</div>
        <h3>${section.emoji} ${escapeHtml(section.title)}</h3>
        <small>${escapeHtml(section.short)}</small>
      </button>
    `).join("");
  }

  function openSection(sectionId) {
    state.currentSectionId = sectionId;
    state.currentTopicTab = "overview";
    renderSectionDetail();
    showView("sectionDetail");
  }

  function renderSectionDetail() {
    const section = sectionById[state.currentSectionId];
    const count = sectionQuestions(section.id).length;
    $("topicTopline").textContent = `Section ${section.order} · ${count} practice questions`;
    $("topicTitle").textContent = `${section.emoji} ${section.title}`;
    $("topicIntro").textContent = section.intro;

    document.querySelectorAll(".topic-tab").forEach((button) => {
      button.classList.toggle("active", button.dataset.topicTab === state.currentTopicTab);
    });

    $("topicContent").innerHTML = renderTopicTab(section, state.currentTopicTab);
    $("topicPracticeBtn").onclick = () => startSectionExam(section.id, "exam");
    $("topicStudyPracticeBtn").onclick = () => startSectionExam(section.id, "study");
    $("topicFlashBtn").onclick = () => startFlashcards(section.id);
  }

  function renderTopicTab(section, tab) {
    if (tab === "overview") {
      return `<div class="learning-points">${section.overview.map(([title, text]) => `
        <div class="learning-point"><strong>${escapeHtml(title)}</strong><span>${escapeHtml(text)}</span></div>
      `).join("")}</div>`;
    }

    if (tab === "mindmap") {
      return renderMindMapTab(section);
    }

    if (tab === "terms") {
      return `<div class="term-grid">${section.terms.map(([term, definition]) => `
        <div class="term-card"><strong>${escapeHtml(term)}</strong><span>${escapeHtml(definition)}</span></div>
      `).join("")}</div>`;
    }

    if (tab === "exam") {
      return `<div class="focus-list">${section.examFocus.map((text, index) => `
        <div class="focus-item"><strong>${index + 1}. Exam focus</strong><span>${escapeHtml(text)}</span></div>
      `).join("")}</div>`;
    }

    return `<div class="trap-list">${section.traps.map(([title, text]) => `
      <div class="trap-item"><strong>${escapeHtml(title)}</strong><span>${escapeHtml(text)}</span></div>
    `).join("")}</div>`;
  }


  function renderMindMapTab(section) {
    const maps = (typeof MIND_MAPS !== "undefined" && MIND_MAPS[section.id]) ? MIND_MAPS[section.id] : [];
    if (!maps.length) {
      return `
        <div class="mindmap-empty">
          <strong>🧠 Mind map not added yet</strong>
          <span>Add the map content into <code>content.js</code> for this section.</span>
        </div>
      `;
    }

    return `
      <div class="mindmap-intro">
        <strong>🧠 Section mind maps</strong>
        <span>These mind maps are recreated directly in HTML inside the app. This avoids GitHub 404 path issues while preserving the colour, structure and study detail more closely.</span>
      </div>
      ${maps.map((map) => {
        if (map.html) {
          return `<article class="mindmap-rich-card">${map.html}</article>`;
        }
        return `
          <article class="mindmap-inline-card">
            <div class="mindmap-inline-core">
              <strong>${escapeHtml(map.title)}</strong>
              ${map.subtitle ? `<span>${escapeHtml(map.subtitle)}</span>` : ""}
            </div>
            <div class="mindmap-inline-grid">
              ${(map.branches || []).map((branch) => `
                <section class="mindmap-inline-branch">
                  <h4>${escapeHtml(branch.title)}</h4>
                  <ul>
                    ${(branch.items || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
                  </ul>
                </section>
              `).join("")}
            </div>
            ${map.note ? `<div class="mindmap-inline-note">${escapeHtml(map.note)}</div>` : ""}
          </article>
        `;
      }).join("")}
    `;
  }


  function renderPractice() {
    $("practiceSectionList").innerHTML = SECTIONS.map((section) => {
      const count = sectionQuestions(section.id).length;
      return `
        <div class="compact-row">
          <div>
            <strong>${section.emoji} ${escapeHtml(section.title)}</strong><br>
            <span class="muted">${count} draft questions · Section ${section.order}</span>
          </div>
          <div class="compact-row-actions">
            <button class="mini-btn" type="button" data-section-open="${section.id}">Read</button>
            <button class="mini-btn" type="button" data-section-study="${section.id}">Study Mode</button>
            <button class="mini-btn" type="button" data-section-exam="${section.id}">Exam Mode</button>
            <button class="mini-btn" type="button" data-section-flash="${section.id}">Flashcards</button>
          </div>
        </div>
      `;
    }).join("");
  }

  function startSectionExam(sectionId, mode) {
    const section = sectionById[sectionId];
    const questions = shuffle(sectionQuestions(sectionId));
    if (!questions.length) {
      toast("No questions added for this section yet.");
      return;
    }
    startExam({
      questions,
      mode,
      title: `${section.emoji} ${section.title}`,
      subTitle: mode === "study" ? "Study Mode · instant feedback" : "Exam Mode · feedback at the end",
      timeLimitSeconds: mode === "exam" ? Math.max(300, questions.length * 60) : 0,
    });
  }

  function startMockExam() {
    const count = Math.min(40, QUESTION_BANK.length);
    const questions = balancedMockQuestions(count);
    startExam({
      questions,
      mode: "exam",
      title: "🎯 Mock Exam",
      subTitle: `${questions.length} questions · feedback shown at the end`,
      timeLimitSeconds: Math.max(900, questions.length * 75),
    });
  }

  function balancedMockQuestions(count) {
    const perSection = Math.max(1, Math.floor(count / SECTIONS.length));
    const selected = [];
    SECTIONS.forEach((section) => selected.push(...shuffle(sectionQuestions(section.id)).slice(0, perSection)));
    const remaining = shuffle(QUESTION_BANK.filter((question) => !selected.some((picked) => picked.id === question.id)));
    while (selected.length < count && remaining.length) selected.push(remaining.shift());
    return shuffle(selected).slice(0, count);
  }

  function startSmartReview() {
    const data = progress();
    const weakIds = Object.entries(data.questionStats)
      .filter(([, stat]) => stat.attempts > 0 && stat.correct < stat.attempts)
      .sort((a, b) => (a[1].correct / a[1].attempts) - (b[1].correct / b[1].attempts))
      .map(([id]) => id);
    const weak = weakIds.map((id) => QUESTION_BANK.find((question) => question.id === id)).filter(Boolean);
    const fallback = shuffle(QUESTION_BANK).slice(0, Math.min(15, QUESTION_BANK.length));
    const questions = weak.length ? weak.slice(0, 20) : fallback;
    startExam({
      questions,
      mode: "study",
      title: "🧠 Smart Review",
      subTitle: weak.length ? "Questions you have previously missed" : "No weak questions yet, so this uses a starter review set",
      timeLimitSeconds: 0,
    });
  }

  function startExam(config) {
    if (state.timerId) window.clearInterval(state.timerId);
    state.examQuestions = config.questions;
    state.answers = Array(config.questions.length).fill(null);
    state.flags = Array(config.questions.length).fill(false);
    state.currentQuestion = 0;
    state.examMode = config.mode;
    state.examTitle = config.title;
    state.examSubTitle = config.subTitle;
    state.timeLeft = config.timeLimitSeconds || 0;
    state.lastResult = null;

    $("examModeLabel").textContent = config.mode === "study" ? "Study Mode" : "Exam Mode";
    $("examTitle").textContent = config.title;
    $("examSubTitle").textContent = config.subTitle;

    if (state.timeLeft > 0) startTimer();
    else $("timer").textContent = "No timer";

    showView("exam");
    renderQuestion();
  }

  function startTimer() {
    renderTimer();
    state.timerId = window.setInterval(() => {
      state.timeLeft -= 1;
      renderTimer();
      if (state.timeLeft <= 0) {
        window.clearInterval(state.timerId);
        state.timerId = null;
        submitExam(true);
      }
    }, 1000);
  }

  function renderTimer() {
    const minutes = Math.floor(Math.max(0, state.timeLeft) / 60);
    const seconds = Math.max(0, state.timeLeft) % 60;
    $("timer").textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }

  function renderQuestion() {
    const question = state.examQuestions[state.currentQuestion];
    if (!question) return;
    const selected = state.answers[state.currentQuestion];
    const reveal = state.examMode === "study" && selected !== null;
    const section = sectionById[question.sectionId];

    $("examProgressBar").style.width = `${((state.currentQuestion + 1) / state.examQuestions.length) * 100}%`;
    $("examCounter").textContent = `Question ${state.currentQuestion + 1} of ${state.examQuestions.length} · ${state.answers.filter((answer) => answer !== null).length} answered · ${state.flags.filter(Boolean).length} flagged`;

    $("questionBox").innerHTML = `
      <div class="question-meta">
        <span class="badge">${escapeHtml(section.title)}</span>
        <span class="badge ${question.status === "validated" ? "validated" : question.status === "needs-review" ? "review" : "draft"}">${statusLabel(question.status)}</span>
      </div>
      <div class="question-text">${escapeHtml(question.question)}</div>
      <div class="option-list">
        ${question.options.map((option, index) => {
          let className = "option-btn";
          if (selected === index) className += " selected";
          if (reveal && index === question.answer) className += " correct";
          if (reveal && selected === index && selected !== question.answer) className += " wrong";
          return `<button class="${className}" type="button" data-answer="${index}">
            <span class="letter">${String.fromCharCode(65 + index)}</span>
            <span>${escapeHtml(option)}</span>
          </button>`;
        }).join("")}
      </div>
      ${reveal ? `<div class="explanation"><strong>Explanation</strong><br>${escapeHtml(question.explanation)}</div>` : ""}
    `;

    $("prevQuestionBtn").disabled = state.currentQuestion === 0;
    $("nextQuestionBtn").disabled = state.currentQuestion === state.examQuestions.length - 1;
    $("flagQuestionBtn").textContent = state.flags[state.currentQuestion] ? "Unflag" : "Flag";
    renderDots();
  }

  function statusLabel(status) {
    if (status === "validated") return "Validated";
    if (status === "needs-review") return "Needs Review";
    return "Draft";
  }

  function selectAnswer(index) {
    if (state.examMode === "exam" && state.answers[state.currentQuestion] !== null) return;
    state.answers[state.currentQuestion] = index;
    renderQuestion();
  }

  function renderDots() {
    $("questionDots").innerHTML = state.examQuestions.map((_, index) => {
      const classes = ["q-dot"];
      if (index === state.currentQuestion) classes.push("current");
      if (state.answers[index] !== null) classes.push("answered");
      if (state.flags[index]) classes.push("flagged");
      return `<button class="${classes.join(" ")}" type="button" data-goto-question="${index}">${index + 1}</button>`;
    }).join("");
  }

  function submitExam(fromTimer = false) {
    const unanswered = state.answers.filter((answer) => answer === null).length;
    if (!fromTimer && unanswered && state.examMode === "exam") {
      const ok = window.confirm(`You have ${unanswered} unanswered questions. Finish anyway?`);
      if (!ok) return;
    }
    if (state.timerId) window.clearInterval(state.timerId);
    state.timerId = null;

    const correct = state.examQuestions.reduce((total, question, index) => total + (state.answers[index] === question.answer ? 1 : 0), 0);
    const scorePct = Math.round((correct / state.examQuestions.length) * 100);
    const result = {
      id: Date.now(),
      date: new Date().toISOString(),
      title: state.examTitle.replace(/^[^A-Za-z0-9]+\s*/, ""),
      mode: state.examMode,
      total: state.examQuestions.length,
      correct,
      scorePct,
      pass: scorePct >= PASS_MARK,
      questions: state.examQuestions.map((question, index) => ({
        id: question.id,
        sectionId: question.sectionId,
        answer: state.answers[index],
        correctAnswer: question.answer,
        isCorrect: state.answers[index] === question.answer,
      })),
    };
    state.lastResult = result;
    updateProgress(result);
    renderResults();
    showView("results");
  }

  function updateProgress(result) {
    const data = progress();
    data.history.unshift(result);
    data.history = data.history.slice(0, 25);
    result.questions.forEach((entry) => {
      if (!data.questionStats[entry.id]) data.questionStats[entry.id] = { attempts: 0, correct: 0 };
      data.questionStats[entry.id].attempts += 1;
      if (entry.isCorrect) data.questionStats[entry.id].correct += 1;
    });
    saveProgress(data);
  }

  function renderResults() {
    const result = state.lastResult;
    $("resultsContent").innerHTML = `
      <span class="eyebrow">${result.mode === "study" ? "Study result" : "Exam result"}</span>
      <h2>${escapeHtml(result.title)}</h2>
      <div class="score-big ${result.pass ? "pass" : "fail"}">${result.scorePct}%</div>
      <p>${result.correct} correct out of ${result.total}. ${result.pass ? "Pass mark reached." : `Pass mark is ${PASS_MARK}%.`}</p>
    `;
    $("reviewArea").classList.remove("show");
    $("reviewToggleBtn").textContent = "Show Review";
    renderReview();
  }

  function renderReview() {
    const result = state.lastResult;
    if (!result) return;
    $("reviewArea").innerHTML = result.questions.map((entry, index) => {
      const question = QUESTION_BANK.find((item) => item.id === entry.id);
      const userAnswer = entry.answer === null ? "Unanswered" : question.options[entry.answer];
      const correctAnswer = question.options[question.answer];
      return `
        <div class="review-card ${entry.isCorrect ? "correct" : "wrong"}">
          <strong>${index + 1}. ${escapeHtml(question.question)}</strong>
          <p>Your answer: ${escapeHtml(userAnswer)}</p>
          <p>Correct answer: ${escapeHtml(correctAnswer)}</p>
          <p>${escapeHtml(question.explanation)}</p>
        </div>
      `;
    }).join("");
  }

  function startFlashcards(sectionId = null) {
    const sections = sectionId ? [sectionById[sectionId]] : SECTIONS;
    state.flashcards = [];
    sections.forEach((section) => {
      section.terms.forEach(([term, definition]) => {
        state.flashcards.push({ sectionTitle: section.title, term, definition });
      });
    });
    state.flashcards = shuffle(state.flashcards);
    state.flashIndex = 0;
    state.flashFlipped = false;
    $("flashTitle").textContent = sectionId ? `${sectionById[sectionId].emoji} ${sectionById[sectionId].title}` : "All Flashcards";
    showView("flashcards");
    renderFlashcard();
  }

  function renderFlashcard() {
    const card = state.flashcards[state.flashIndex];
    if (!card) {
      $("flashCard").innerHTML = "No flashcards available yet.";
      $("flashCounter").textContent = "";
      return;
    }
    $("flashCard").innerHTML = state.flashFlipped
      ? `<strong>${escapeHtml(card.term)}</strong>${escapeHtml(card.definition)}<br><br><span class="muted">${escapeHtml(card.sectionTitle)}</span>`
      : `<strong>${escapeHtml(card.term)}</strong><span class="muted">Tap to reveal the definition</span>`;
    $("flashCounter").textContent = `${state.flashIndex + 1} of ${state.flashcards.length}`;
    $("flashPrevBtn").disabled = state.flashIndex === 0;
    $("flashNextBtn").disabled = state.flashIndex === state.flashcards.length - 1;
  }

  function renderProgress() {
    const data = progress();
    const bySection = SECTIONS.map((section) => {
      const sectionQuestionIds = sectionQuestions(section.id).map((question) => question.id);
      const stats = sectionQuestionIds.map((id) => data.questionStats[id]).filter(Boolean);
      const attempts = stats.reduce((total, stat) => total + stat.attempts, 0);
      const correct = stats.reduce((total, stat) => total + stat.correct, 0);
      const pct = attempts ? Math.round((correct / attempts) * 100) : 0;
      return { section, attempts, pct };
    });

    const historyHtml = data.history.length ? `
      <h3>Recent attempts</h3>
      <table class="progress-table">
        <thead><tr><th>Date</th><th>Mode</th><th>Score</th><th>Status</th></tr></thead>
        <tbody>${data.history.slice(0, 10).map((entry) => `
          <tr>
            <td>${new Date(entry.date).toLocaleDateString()}</td>
            <td>${escapeHtml(entry.title)} · ${entry.mode === "study" ? "Study" : "Exam"}</td>
            <td><span class="progress-pill">${entry.scorePct}%</span></td>
            <td>${entry.pass ? "✅ Pass" : "📚 Review"}</td>
          </tr>
        `).join("")}</tbody>
      </table>
    ` : `<p>No attempts yet. Complete a practice session to build progress data.</p>`;

    const sectionHtml = `
      <h3>Performance by section</h3>
      <table class="progress-table">
        <thead><tr><th>Section</th><th>Attempts</th><th>Accuracy</th><th>Suggested action</th></tr></thead>
        <tbody>${bySection.map(({ section, attempts, pct }) => `
          <tr>
            <td>${section.emoji} ${escapeHtml(section.title)}</td>
            <td>${attempts}</td>
            <td><span class="progress-pill">${attempts ? `${pct}%` : "—"}</span></td>
            <td>${attempts === 0 ? "Start practice" : pct < PASS_MARK ? "Review notes and retry" : "Maintain with flashcards"}</td>
          </tr>
        `).join("")}</tbody>
      </table>
    `;

    $("progressContent").innerHTML = `${historyHtml}<br>${sectionHtml}`;
  }

  function resetProgress() {
    const ok = window.confirm("Reset local progress and history for this app?");
    if (!ok) return;
    safeRemove("progress");
    toast("Progress reset");
    renderHome();
    renderProgress();
  }

  function toggleTheme() {
    const isDark = document.body.classList.toggle("dark");
    safeSet("theme", isDark ? "dark" : "light");
    $("themeToggle").textContent = isDark ? "☀️" : "🌙";
  }

  function restoreTheme() {
    const theme = safeGet("theme", "light");
    if (theme === "dark") {
      document.body.classList.add("dark");
      $("themeToggle").textContent = "☀️";
    }
  }

  function bindEvents() {
    document.body.addEventListener("click", (event) => {
      const viewTarget = event.target.closest("[data-view-target]");
      if (viewTarget) showView(viewTarget.dataset.viewTarget);

      const navButton = event.target.closest(".nav-btn[data-view]");
      if (navButton) showView(navButton.dataset.view);

      const sectionOpen = event.target.closest("[data-section-open]");
      if (sectionOpen) openSection(sectionOpen.dataset.sectionOpen);

      const sectionStudy = event.target.closest("[data-section-study]");
      if (sectionStudy) startSectionExam(sectionStudy.dataset.sectionStudy, "study");

      const sectionExam = event.target.closest("[data-section-exam]");
      if (sectionExam) startSectionExam(sectionExam.dataset.sectionExam, "exam");

      const sectionFlash = event.target.closest("[data-section-flash]");
      if (sectionFlash) startFlashcards(sectionFlash.dataset.sectionFlash);

      const action = event.target.closest("[data-action]");
      if (action && action.dataset.action === "start-mock") startMockExam();
      if (action && action.dataset.action === "start-smart") startSmartReview();
      if (action && action.dataset.action === "start-flash-all") startFlashcards();

      const tab = event.target.closest("[data-topic-tab]");
      if (tab) {
        state.currentTopicTab = tab.dataset.topicTab;
        renderSectionDetail();
      }

      const answer = event.target.closest("[data-answer]");
      if (answer) selectAnswer(Number(answer.dataset.answer));

      const goto = event.target.closest("[data-goto-question]");
      if (goto) {
        state.currentQuestion = Number(goto.dataset.gotoQuestion);
        renderQuestion();
      }
    });

    $("themeToggle").addEventListener("click", toggleTheme);
    $("resetBtn").addEventListener("click", resetProgress);
    $("prevQuestionBtn").addEventListener("click", () => { state.currentQuestion -= 1; renderQuestion(); });
    $("nextQuestionBtn").addEventListener("click", () => { state.currentQuestion += 1; renderQuestion(); });
    $("flagQuestionBtn").addEventListener("click", () => { state.flags[state.currentQuestion] = !state.flags[state.currentQuestion]; renderQuestion(); });
    $("finishExamBtn").addEventListener("click", () => submitExam(false));
    $("reviewToggleBtn").addEventListener("click", () => {
      $("reviewArea").classList.toggle("show");
      $("reviewToggleBtn").textContent = $("reviewArea").classList.contains("show") ? "Hide Review" : "Show Review";
    });
    $("flashCard").addEventListener("click", () => { state.flashFlipped = !state.flashFlipped; renderFlashcard(); });
    $("flashPrevBtn").addEventListener("click", () => { state.flashIndex -= 1; state.flashFlipped = false; renderFlashcard(); });
    $("flashNextBtn").addEventListener("click", () => { state.flashIndex += 1; state.flashFlipped = false; renderFlashcard(); });
  }

  function init() {
    restoreTheme();
    bindEvents();
    renderHome();
    renderSectionGrid();
    renderPractice();
  }

  window.addEventListener("DOMContentLoaded", init);
})();
