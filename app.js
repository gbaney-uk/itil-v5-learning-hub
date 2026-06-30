const STORAGE_KEY = "gary_itil_v5_phase1_progress";
const THEME_KEY = "gary_itil_v5_phase1_theme";

const sections = [
  {
    id: "four-dimensions",
    title: "The Four Dimensions",
    short: "Organization and People, Information and Technology, Partners and Suppliers, Value Streams and Processes.",
    color: "#1f6fa9",
    intro: "The four dimensions help you avoid looking at services from only a technology view. A good service needs people, information, technology, suppliers, partners, value streams and processes working together.",
    points: [
      ["Organization and People", "Culture, skills, roles, responsibilities and ways of working."],
      ["Information and Technology", "Data, knowledge, tools, platforms, architecture and security."],
      ["Partners and Suppliers", "External and internal relationships that help deliver or support services."],
      ["Value Streams and Processes", "The work steps used to turn demand into value."],
      ["External factors", "Political, economic, social, technological, legal and environmental factors can affect all four dimensions."],
      ["Exam focus", "Expect scenario questions where one dimension has been ignored."],
    ],
  },
  {
    id: "service-value",
    title: "Service Value and Co-Creation",
    short: "Value is created through active cooperation between provider and consumer.",
    color: "#2aa6a1",
    intro: "ITIL focuses on value. The provider does not simply hand value to the customer; value is co-created through service relationships and use of the service.",
    points: [
      ["Value", "The perceived benefit, usefulness and importance of something."],
      ["Co-creation", "Provider and consumer both contribute to value."],
      ["Utility", "What the service does. This is fitness for purpose."],
      ["Warranty", "How the service performs. This is fitness for use."],
      ["Outcome", "The result the customer wants to achieve."],
      ["Output", "A tangible or intangible deliverable produced by an activity."],
    ],
  },
  {
    id: "service-relationships",
    title: "Service Relationships",
    short: "Provider, consumer, customer, user and sponsor roles.",
    color: "#7a5cff",
    intro: "A service relationship is the cooperation between provider and consumer. Understanding the roles helps you answer scenario questions correctly.",
    points: [
      ["Service provider", "The organization or team delivering the service."],
      ["Service consumer", "The organization or person using the service relationship."],
      ["Customer", "Defines requirements and takes responsibility for outcomes."],
      ["User", "Uses the service."],
      ["Sponsor", "Authorizes budget for service consumption."],
      ["Interactions", "Can include service actions, access to resources and transfer of goods."],
    ],
  },
  {
    id: "itil-value-system",
    title: "The ITIL Value System",
    short: "The system that helps the organization create value through services.",
    color: "#ef6c00",
    intro: "The ITIL value system describes how all the components and activities of the organization work together to enable value creation.",
    points: [
      ["Guiding principles", "Recommendations that guide decisions and actions."],
      ["Governance", "How the organization is directed and controlled."],
      ["Service value chain", "Activities that transform demand into value."],
      ["Practices", "Organizational resources designed for performing work."],
      ["Continual improvement", "Ongoing improvement at every level."],
      ["System thinking", "The components should be understood together, not in isolation."],
    ],
  },
  {
    id: "governance",
    title: "Governance",
    short: "Evaluate, direct and monitor the organization.",
    color: "#c2410c",
    intro: "Governance ensures the organization is directed and controlled. It sets expectations, checks performance and makes sure management acts within agreed direction.",
    points: [
      ["Evaluate", "Assess strategy, risks, opportunities and current performance."],
      ["Direct", "Set policies, priorities and direction."],
      ["Monitor", "Check performance, compliance and progress against direction."],
      ["Management", "Plans, builds, runs and improves within the direction set by governance."],
      ["Risk", "Governance makes sure risk is understood and controlled."],
      ["Exam focus", "Governance is not the same as day-to-day management."],
    ],
  },
  {
    id: "guiding-principles",
    title: "The ITIL Guiding Principles",
    short: "Seven recommendations that guide decisions and behaviour.",
    color: "#16803c",
    intro: "The guiding principles can be used in almost any situation. They help teams make practical decisions while staying focused on value.",
    points: [
      ["Focus on value", "Everything should link directly or indirectly to value."],
      ["Start where you are", "Use what already exists where it has value."],
      ["Progress iteratively with feedback", "Move in manageable steps and learn as you go."],
      ["Collaborate and promote visibility", "Work together and make work visible."],
      ["Think and work holistically", "Avoid improving one area while damaging another."],
      ["Keep it simple and practical", "Remove unnecessary complexity."],
      ["Optimize and automate", "Simplify and improve before automating."],
    ],
  },
  {
    id: "product-service-lifecycle",
    title: "ITIL Product and Service Lifecycle",
    short: "Discover, design, acquire, build, transition, operate, deliver and support.",
    color: "#0f766e",
    intro: "The product and service lifecycle describes the activities used to manage products and services across their life. The activities are not always linear.",
    points: [
      ["Discover", "Identify needs, opportunities and demand."],
      ["Design", "Define the service, product, requirements and architecture."],
      ["Acquire", "Obtain components, products or services from third parties."],
      ["Build", "Create, configure and test internally."],
      ["Transition", "Move into live use in a controlled way."],
      ["Operate, Deliver and Support", "Run the service, make it available and help users."],
    ],
  },
  {
    id: "value-chain-practices",
    title: "Value Chain and Practices",
    short: "How value chain activities and management practices support value creation.",
    color: "#b45309",
    intro: "The service value chain uses activities to convert demand into value. Practices provide the capability needed to perform work across the value chain.",
    points: [
      ["Plan", "Create shared understanding of vision, current state and improvement direction."],
      ["Improve", "Improve products, services and practices."],
      ["Engage", "Understand stakeholder needs and maintain relationships."],
      ["Design and transition", "Ensure products and services meet expectations."],
      ["Obtain/build", "Create or source service components."],
      ["Deliver and support", "Deliver services and support users."],
    ],
  },
  {
    id: "value-streams-mapping",
    title: "Value Streams and Mapping",
    short: "Map the flow from demand to value and remove waste.",
    color: "#0369a1",
    intro: "A value stream is a series of steps used to create and deliver value. Mapping helps identify delays, waste, handoffs and bottlenecks.",
    points: [
      ["Value stream", "Steps used to create and deliver value to a consumer."],
      ["Trigger", "The event or demand that starts the flow."],
      ["Lead time", "Total time from request to value delivered."],
      ["Cycle time", "Time taken to complete one activity."],
      ["Handoffs", "Transfers between people or teams, often creating delay."],
      ["Value Stream Mapping", "Visualises the flow so it can be improved."],
    ],
  },
  {
    id: "continual-improvement",
    title: "Continual Improvement",
    short: "Keep improving services, practices and ways of working.",
    color: "#9333ea",
    intro: "Continual improvement is a recurring activity. It should happen at all levels and should be based on evidence, not guesswork.",
    points: [
      ["What is the vision?", "Understand the direction and desired outcome."],
      ["Where are we now?", "Assess the current state and baseline."],
      ["Where do we want to be?", "Define measurable targets."],
      ["How do we get there?", "Plan improvement actions."],
      ["Take action", "Carry out the improvement."],
      ["Did we get there?", "Measure and confirm the result."],
      ["How do we keep momentum?", "Embed improvement and continue."],
    ],
  },
  {
    id: "itil-ai-frameworks",
    title: "ITIL, AI and Other Frameworks",
    short: "AI, automation, DevOps, Agile, Lean, COBIT, ISO 20000 and related frameworks.",
    color: "#be185d",
    intro: "ITIL can work with other methods and frameworks. AI and automation should support value, not be added just because they are new.",
    points: [
      ["AI in service management", "Can support classification, prediction, knowledge and automation."],
      ["Responsible AI", "Needs transparency, governance, human oversight and risk control."],
      ["Agile and DevOps", "Help teams deliver faster with collaboration and feedback."],
      ["Lean", "Focuses on value and removing waste."],
      ["COBIT", "Supports governance and control."],
      ["ISO 20000", "Provides requirements for a service management system."],
    ],
  },
];

const questionBank = [
  q("four-dimensions", "Which dimension addresses culture, skills, roles and organizational structure?", ["Information and Technology", "Organization and People", "Partners and Suppliers", "Value Streams and Processes"], 1, "Organization and People covers culture, skills, roles and structure."),
  q("four-dimensions", "A new tool is implemented but staff receive no training. Which dimension has been neglected?", ["Information and Technology", "Partners and Suppliers", "Organization and People", "Value Streams and Processes"], 2, "Training and skills sit within Organization and People."),
  q("four-dimensions", "Which dimension includes data, knowledge, tools and supporting technology?", ["Organization and People", "Information and Technology", "Partners and Suppliers", "Value Streams and Processes"], 1, "Information and Technology includes data, information, knowledge and technologies."),

  q("service-value", "What does utility describe?", ["How the service performs", "What the service does", "The service cost", "The legal contract"], 1, "Utility is fitness for purpose: what the service does."),
  q("service-value", "What does warranty describe?", ["How the service performs", "The customer journey", "The product name", "The project budget"], 0, "Warranty is fitness for use: availability, capacity, continuity and security."),
  q("service-value", "Which statement best describes value co-creation?", ["The provider creates all value alone", "The consumer creates all value alone", "Provider and consumer actively contribute to value", "Value is only measured by price"], 2, "Value is co-created through the relationship between provider and consumer."),

  q("service-relationships", "Who authorizes the budget for service consumption?", ["User", "Sponsor", "Service desk", "Supplier"], 1, "The sponsor authorizes budget for service consumption."),
  q("service-relationships", "Who defines service requirements and takes responsibility for outcomes?", ["Customer", "User", "Sponsor", "Service provider"], 0, "The customer defines requirements and is accountable for outcomes."),
  q("service-relationships", "Cloud storage where the consumer uses provider resources without owning them is an example of what?", ["Transfer of goods", "Access to resources", "A warranty breach", "A change model"], 1, "Access to resources lets the consumer use provider resources without ownership transfer."),

  q("itil-value-system", "Which component of the ITIL value system guides decisions and actions?", ["Guiding principles", "Service desk", "Configuration item", "Incident model"], 0, "Guiding principles guide decisions and actions."),
  q("itil-value-system", "What is the purpose of the service value chain?", ["To transform demand into value", "To replace governance", "To document every supplier contract", "To remove all practices"], 0, "The service value chain transforms demand into value."),
  q("itil-value-system", "Which component supports ongoing improvement at every level?", ["Continual improvement", "Incident management", "A known error", "A project board"], 0, "Continual improvement supports ongoing improvement across the organization."),

  q("governance", "What are the three governance activities?", ["Plan, build, run", "Evaluate, direct, monitor", "Design, transition, operate", "Detect, resolve, close"], 1, "Governance uses evaluate, direct and monitor."),
  q("governance", "Which governance activity sets policies and priorities?", ["Evaluate", "Direct", "Monitor", "Support"], 1, "Direct sets direction, policies and priorities."),
  q("governance", "Which statement is correct?", ["Governance and management are identical", "Governance directs and monitors; management plans and executes", "Management always controls governance", "Governance only manages incidents"], 1, "Governance sets direction and monitors; management executes within that direction."),

  q("guiding-principles", "Which guiding principle recommends using what already exists where it has value?", ["Focus on value", "Start where you are", "Keep it simple and practical", "Optimize and automate"], 1, "Start where you are means assess and reuse what is already useful."),
  q("guiding-principles", "Which principle recommends simplifying before automation?", ["Collaborate and promote visibility", "Optimize and automate", "Progress iteratively with feedback", "Think and work holistically"], 1, "Optimize and automate means optimize first, then automate where useful."),
  q("guiding-principles", "A team improves incident handling but creates more work for change teams. Which principle was ignored?", ["Think and work holistically", "Keep it simple and practical", "Start where you are", "Focus on value"], 0, "Thinking holistically avoids local improvements that damage the wider system."),

  q("product-service-lifecycle", "Which lifecycle activity identifies needs, opportunities and demand?", ["Discover", "Design", "Build", "Support"], 0, "Discover identifies needs, opportunities and demand."),
  q("product-service-lifecycle", "Which activity obtains components or services from third parties?", ["Build", "Acquire", "Operate", "Deliver"], 1, "Acquire obtains components, products or services from third parties."),
  q("product-service-lifecycle", "Which activity handles incidents and user issues?", ["Discover", "Design", "Support", "Acquire"], 2, "Support handles incidents, service requests and user support needs."),

  q("value-chain-practices", "Which service value chain activity understands stakeholder needs and maintains relationships?", ["Plan", "Engage", "Improve", "Obtain/build"], 1, "Engage is about stakeholders, needs and relationships."),
  q("value-chain-practices", "Which practice acts as the single point of contact for users?", ["Service desk", "Problem management", "Deployment management", "Supplier management"], 0, "The service desk is the single point of contact between provider and users."),
  q("value-chain-practices", "What is the purpose of problem management?", ["Restore service as quickly as possible", "Reduce likelihood and impact of incidents by managing causes", "Authorize every change", "Create all service requests"], 1, "Problem management manages causes of incidents and reduces likelihood and impact."),

  q("value-streams-mapping", "What is a value stream?", ["A series of steps used to create and deliver value", "A server diagram", "A supplier invoice", "A user password reset"], 0, "A value stream is a series of steps used to create and deliver value."),
  q("value-streams-mapping", "What is lead time?", ["The time for one activity", "The total time from request to value delivered", "The time to restart a server", "The time between audits"], 1, "Lead time is the total elapsed time from request to value delivered."),
  q("value-streams-mapping", "A flow has seven handoffs and long waiting time between teams. What should be investigated?", ["Waste and bottlenecks", "More documentation only", "Removing all users", "Increasing approvals"], 0, "Excess handoffs often create waiting waste and bottlenecks."),

  q("continual-improvement", "What is the first step of the continual improvement model?", ["Take action", "What is the vision?", "Did we get there?", "How do we get there?"], 1, "The model starts by asking: What is the vision?"),
  q("continual-improvement", "Why measure the current state before improving?", ["To create a baseline", "To avoid feedback", "To remove governance", "To replace the service desk"], 0, "A baseline allows you to compare before and after improvement."),
  q("continual-improvement", "What is a continual improvement register used for?", ["Tracking improvement ideas and opportunities", "Storing user passwords", "Approving all changes", "Replacing incident records"], 0, "A continual improvement register tracks improvement ideas and opportunities."),

  q("itil-ai-frameworks", "How should AI initiatives be assessed?", ["By novelty only", "By their real contribution to value and risk control", "By removing all human oversight", "By supplier marketing material only"], 1, "AI should support value and be governed appropriately."),
  q("itil-ai-frameworks", "How do ITIL and DevOps complement each other?", ["DevOps replaces ITIL", "ITIL provides service management structure while DevOps supports collaboration and automation", "They are identical", "They cannot work together"], 1, "ITIL and DevOps can complement each other when integrated well."),
  q("itil-ai-frameworks", "What is ISO 20000?", ["An international standard for service management systems", "A programming language", "A chatbot framework", "A network cable standard"], 0, "ISO 20000 specifies requirements for a service management system."),
];

function q(sectionId, question, options, answer, explanation) {
  return { id: `${sectionId}-${question.length}-${options[answer].length}`, sectionId, question, options, answer, explanation };
}

let currentView = "home";
let activeSectionId = null;
let exam = null;
let flash = null;
let timerId = null;

const $ = (id) => document.getElementById(id);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function getProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || { attempts: [], questionStats: {} };
  } catch {
    return { attempts: [], questionStats: {} };
  }
}

function saveProgress(progress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function toast(message) {
  const t = $("toast");
  t.textContent = message;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 1800);
}

function showView(viewId) {
  currentView = viewId;
  $$(".view").forEach(v => v.classList.remove("active"));
  $(viewId).classList.add("active");
  $$(".nav-btn").forEach(btn => btn.classList.toggle("active", btn.dataset.view === viewId || (viewId === "sectionDetail" && btn.dataset.view === "sections") || (["exam", "results", "flashcards"].includes(viewId) && btn.dataset.view === "practice")));
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (viewId === "progress") renderProgress();
  if (viewId === "home") renderSummary();
}

function renderSummary() {
  const progress = getProgress();
  const attempts = progress.attempts;
  const best = attempts.length ? Math.max(...attempts.map(a => a.percent)) : 0;
  const totalAnswered = Object.values(progress.questionStats).reduce((sum, s) => sum + s.attempts, 0);
  const weak = Object.values(progress.questionStats).filter(s => s.attempts > 0 && s.correct / s.attempts < 0.65).length;
  $("summaryStats").innerHTML = [
    [sections.length, "Learning sections"],
    [questionBank.length, "Phase 1 questions"],
    [`${best}%`, "Best score"],
    [weak, "Weak questions"],
  ].map(([num, label]) => `<div class="stat-card"><strong>${num}</strong><span>${label}</span></div>`).join("");
}

function renderSectionCards(targetId, compact = false) {
  const html = sections.map((section, index) => `
    <button class="section-card" style="--card-color:${section.color}" type="button" data-section-open="${section.id}">
      <span class="num">${index + 1}</span>
      <strong>${section.title}</strong>
      <small>${section.short}</small>
      <div class="card-footer">Open section →</div>
    </button>
  `).join("");
  $(targetId).innerHTML = html;
}

function renderPracticeList() {
  $("practiceSectionList").innerHTML = sections.map((section) => {
    const count = questionBank.filter(q => q.sectionId === section.id).length;
    return `
      <div class="compact-item">
        <div><strong>${section.title}</strong><small>${count} starter questions</small></div>
        <button class="secondary-btn" type="button" data-practice-section="${section.id}">Practice</button>
      </div>
    `;
  }).join("");
}

function openSection(sectionId) {
  const section = sections.find(s => s.id === sectionId);
  if (!section) return;
  activeSectionId = sectionId;
  const number = sections.findIndex(s => s.id === sectionId) + 1;
  $("topicTopline").textContent = `Section ${number}`;
  $("topicTitle").textContent = section.title;
  $("topicIntro").textContent = section.intro;
  $("topicPoints").innerHTML = section.points.map(([title, text]) => `<div class="learning-point"><strong>${title}</strong>${text}</div>`).join("");
  $("topicPracticeBtn").onclick = () => startExam("section", sectionId);
  $("topicFlashBtn").onclick = () => startFlashcards(sectionId);
  showView("sectionDetail");
}

function shuffle(items) {
  const copy = items.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function startExam(mode, sectionId = null) {
  stopTimer();
  let questions = [];
  let title = "";
  let subtitle = "";
  let seconds = 0;

  if (mode === "mock") {
    questions = shuffle(questionBank).slice(0, Math.min(20, questionBank.length));
    title = "Mock Exam";
    subtitle = "Timed mixed-topic practice. Phase 1 uses 20 questions.";
    seconds = 30 * 60;
  } else if (mode === "smart") {
    questions = smartQuestions();
    title = "Smart Review";
    subtitle = "Questions selected from weak or previously missed areas.";
    seconds = 0;
  } else {
    const section = sections.find(s => s.id === sectionId);
    questions = shuffle(questionBank.filter(q => q.sectionId === sectionId));
    title = section ? section.title : "Section Practice";
    subtitle = "Practise this section without a timer.";
    seconds = 0;
  }

  if (!questions.length) {
    toast("No questions available yet for this mode.");
    return;
  }

  exam = {
    mode,
    sectionId,
    questions,
    current: 0,
    answers: Array(questions.length).fill(null),
    flags: Array(questions.length).fill(false),
    submitted: false,
    seconds,
    startedAt: new Date().toISOString(),
  };

  $("examModeLabel").textContent = mode === "mock" ? "Timed practice" : mode === "smart" ? "Targeted review" : "Section practice";
  $("examTitle").textContent = title;
  $("examSubTitle").textContent = subtitle;
  if (seconds > 0) startTimer(); else $("timer").textContent = "No timer";
  showView("exam");
  renderQuestion();
}

function smartQuestions() {
  const progress = getProgress();
  const weakIds = Object.entries(progress.questionStats)
    .filter(([, s]) => s.attempts > 0 && s.correct / s.attempts < 0.75)
    .map(([id]) => id);
  const weak = questionBank.filter(q => weakIds.includes(q.id));
  if (weak.length >= 5) return shuffle(weak).slice(0, 15);
  return shuffle([...weak, ...questionBank.filter(q => !weakIds.includes(q.id))]).slice(0, 15);
}

function startTimer() {
  updateTimer();
  timerId = setInterval(() => {
    if (!exam) return;
    exam.seconds -= 1;
    updateTimer();
    if (exam.seconds <= 0) submitExam(true);
  }, 1000);
}

function stopTimer() {
  if (timerId) clearInterval(timerId);
  timerId = null;
}

function updateTimer() {
  if (!exam) return;
  const mins = Math.floor(Math.max(exam.seconds, 0) / 60).toString().padStart(2, "0");
  const secs = Math.max(exam.seconds, 0) % 60;
  $("timer").textContent = `${mins}:${secs.toString().padStart(2, "0")}`;
}

function renderQuestion() {
  if (!exam) return;
  const question = exam.questions[exam.current];
  const section = sections.find(s => s.id === question.sectionId);
  const selected = exam.answers[exam.current];
  const submitted = exam.submitted;

  $("examProgressBar").style.width = `${((exam.current + 1) / exam.questions.length) * 100}%`;
  const answered = exam.answers.filter(a => a !== null).length;
  const flagged = exam.flags.filter(Boolean).length;
  $("examCounter").textContent = `Question ${exam.current + 1} of ${exam.questions.length} · ${answered} answered${flagged ? ` · ${flagged} flagged` : ""}`;

  $("questionBox").innerHTML = `
    <div class="question-meta">${section ? section.title : "ITIL V5"}</div>
    <div class="question-text">${escapeHtml(question.question)}</div>
    <div class="option-list">
      ${question.options.map((option, index) => {
        let cls = "option-btn";
        if (selected === index) cls += " selected";
        if (submitted && index === question.answer) cls += " correct";
        if (submitted && selected === index && selected !== question.answer) cls += " wrong";
        return `<button class="${cls}" type="button" data-option="${index}" ${submitted ? "disabled" : ""}><span class="option-letter">${String.fromCharCode(65 + index)}</span><span>${escapeHtml(option)}</span></button>`;
      }).join("")}
    </div>
    ${submitted ? `<div class="explanation"><strong>Explanation:</strong> ${escapeHtml(question.explanation)}</div>` : ""}
  `;

  $$("[data-option]").forEach(btn => btn.addEventListener("click", () => selectAnswer(Number(btn.dataset.option))));
  $("prevQuestionBtn").disabled = exam.current === 0;
  $("nextQuestionBtn").disabled = exam.current === exam.questions.length - 1;
  $("flagQuestionBtn").textContent = exam.flags[exam.current] ? "Unflag" : "Flag";
  renderQuestionDots();
}

function renderQuestionDots() {
  $("questionDots").innerHTML = exam.questions.map((_, index) => {
    let cls = "q-dot";
    if (index === exam.current) cls += " current";
    if (exam.answers[index] !== null) cls += " answered";
    if (exam.flags[index]) cls += " flagged";
    return `<button class="${cls}" type="button" data-jump="${index}">${index + 1}</button>`;
  }).join("");
  $$("[data-jump]").forEach(btn => btn.addEventListener("click", () => {
    exam.current = Number(btn.dataset.jump);
    renderQuestion();
  }));
}

function selectAnswer(index) {
  if (!exam || exam.submitted) return;
  exam.answers[exam.current] = index;
  renderQuestion();
}

function nextQuestion() {
  if (exam && exam.current < exam.questions.length - 1) {
    exam.current += 1;
    renderQuestion();
  }
}

function prevQuestion() {
  if (exam && exam.current > 0) {
    exam.current -= 1;
    renderQuestion();
  }
}

function toggleFlag() {
  if (!exam) return;
  exam.flags[exam.current] = !exam.flags[exam.current];
  renderQuestion();
}

function submitExam(fromTimer = false) {
  if (!exam) return;
  const unanswered = exam.answers.filter(a => a === null).length;
  if (!fromTimer && unanswered && !confirm(`You have ${unanswered} unanswered questions. Finish anyway?`)) return;
  stopTimer();
  exam.submitted = true;

  const correct = exam.questions.reduce((sum, q, i) => sum + (exam.answers[i] === q.answer ? 1 : 0), 0);
  const percent = Math.round((correct / exam.questions.length) * 100);
  const passed = percent >= 65;

  const progress = getProgress();
  exam.questions.forEach((q, i) => {
    if (!progress.questionStats[q.id]) progress.questionStats[q.id] = { attempts: 0, correct: 0, sectionId: q.sectionId };
    progress.questionStats[q.id].attempts += 1;
    if (exam.answers[i] === q.answer) progress.questionStats[q.id].correct += 1;
  });
  progress.attempts.unshift({
    date: new Date().toISOString(),
    mode: exam.mode,
    sectionId: exam.sectionId,
    correct,
    total: exam.questions.length,
    percent,
    passed,
  });
  progress.attempts = progress.attempts.slice(0, 25);
  saveProgress(progress);

  renderResults(correct, percent, passed);
  renderSummary();
  showView("results");
}

function renderResults(correct, percent, passed) {
  const modeLabel = exam.mode === "mock" ? "Mock Exam" : exam.mode === "smart" ? "Smart Review" : "Section Practice";
  $("resultsContent").innerHTML = `
    <span class="eyebrow">${modeLabel}</span>
    <h2>${passed ? "Passed" : "Keep practising"}</h2>
    <div class="score-big ${passed ? "pass" : "fail"}">${percent}%</div>
    <p class="muted">${correct} correct out of ${exam.questions.length}. Pass mark used in this app: 65%.</p>
    <table class="result-table">
      <thead><tr><th>Section</th><th>Correct</th><th>Total</th><th>Score</th></tr></thead>
      <tbody>${sectionBreakdownRows()}</tbody>
    </table>
  `;
  $("reviewArea").classList.remove("show");
  $("reviewToggleBtn").textContent = "Show Review";
  $("reviewArea").innerHTML = exam.questions.map((q, i) => {
    const ok = exam.answers[i] === q.answer;
    const section = sections.find(s => s.id === q.sectionId);
    const userAnswer = exam.answers[i] === null ? "Not answered" : q.options[exam.answers[i]];
    return `
      <div class="review-card ${ok ? "ok" : "bad"}">
        <strong>${i + 1}. ${escapeHtml(q.question)}</strong>
        <p><strong>Section:</strong> ${section ? section.title : "ITIL V5"}</p>
        <p><strong>Your answer:</strong> ${escapeHtml(userAnswer)}</p>
        <p><strong>Correct answer:</strong> ${escapeHtml(q.options[q.answer])}</p>
        <p><strong>Explanation:</strong> ${escapeHtml(q.explanation)}</p>
      </div>
    `;
  }).join("");
}

function sectionBreakdownRows() {
  const rows = sections.map(section => {
    const indexes = exam.questions.map((q, i) => q.sectionId === section.id ? i : -1).filter(i => i >= 0);
    if (!indexes.length) return "";
    const correct = indexes.filter(i => exam.answers[i] === exam.questions[i].answer).length;
    const percent = Math.round((correct / indexes.length) * 100);
    return `<tr><td>${section.title}</td><td>${correct}</td><td>${indexes.length}</td><td>${percent}%</td></tr>`;
  }).join("");
  return rows || `<tr><td colspan="4">No section data available.</td></tr>`;
}

function startFlashcards(sectionId = null) {
  let cards = sectionId ? questionBank.filter(q => q.sectionId === sectionId) : questionBank;
  cards = shuffle(cards);
  if (!cards.length) {
    toast("No flashcards available yet.");
    return;
  }
  const section = sectionId ? sections.find(s => s.id === sectionId) : null;
  flash = { cards, current: 0, flipped: false, title: section ? `${section.title} Flashcards` : "All Flashcards" };
  $("flashTitle").textContent = flash.title;
  showView("flashcards");
  renderFlashcard();
}

function renderFlashcard() {
  if (!flash) return;
  const card = flash.cards[flash.current];
  $("flashCounter").textContent = `${flash.current + 1} of ${flash.cards.length}`;
  $("flashCard").innerHTML = flash.flipped
    ? `<strong>Answer</strong><br>${escapeHtml(card.options[card.answer])}<br><br><span class="muted">${escapeHtml(card.explanation)}</span>`
    : `<strong>Question</strong><br>${escapeHtml(card.question)}<br><br><span class="muted">Tap to reveal</span>`;
}

function renderProgress() {
  const progress = getProgress();
  if (!progress.attempts.length) {
    $("progressContent").innerHTML = `<p class="muted">No attempts recorded yet. Complete a practice session to see progress.</p>`;
    return;
  }
  const attempts = progress.attempts.map(a => {
    const section = sections.find(s => s.id === a.sectionId);
    const label = a.mode === "mock" ? "Mock Exam" : a.mode === "smart" ? "Smart Review" : (section ? section.title : "Section Practice");
    return `<tr><td>${new Date(a.date).toLocaleString()}</td><td>${label}</td><td>${a.correct}/${a.total}</td><td>${a.percent}%</td><td>${a.passed ? "Passed" : "Review"}</td></tr>`;
  }).join("");

  const sectionRows = sections.map(section => {
    const stats = Object.values(progress.questionStats).filter(s => s.sectionId === section.id);
    const attemptsTotal = stats.reduce((sum, s) => sum + s.attempts, 0);
    const correctTotal = stats.reduce((sum, s) => sum + s.correct, 0);
    const pct = attemptsTotal ? Math.round((correctTotal / attemptsTotal) * 100) : "-";
    return `<tr><td>${section.title}</td><td>${attemptsTotal}</td><td>${pct}${pct === "-" ? "" : "%"}</td></tr>`;
  }).join("");

  $("progressContent").innerHTML = `
    <h3>Recent attempts</h3>
    <table class="result-table"><thead><tr><th>Date</th><th>Mode</th><th>Score</th><th>%</th><th>Status</th></tr></thead><tbody>${attempts}</tbody></table>
    <h3>Section performance</h3>
    <table class="result-table"><thead><tr><th>Section</th><th>Question attempts</th><th>Score</th></tr></thead><tbody>${sectionRows}</tbody></table>
  `;
}

function resetProgress() {
  if (!confirm("Reset all local progress for this app?")) return;
  localStorage.removeItem(STORAGE_KEY);
  renderSummary();
  renderProgress();
  toast("Progress reset");
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[c]));
}

function initTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved === "dark") document.body.classList.add("dark");
  $("themeToggle").textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
}

function toggleTheme() {
  document.body.classList.toggle("dark");
  const dark = document.body.classList.contains("dark");
  localStorage.setItem(THEME_KEY, dark ? "dark" : "light");
  $("themeToggle").textContent = dark ? "☀️" : "🌙";
}

function bindEvents() {
  $$(".nav-btn").forEach(btn => btn.addEventListener("click", () => showView(btn.dataset.view)));
  document.body.addEventListener("click", (event) => {
    const open = event.target.closest("[data-section-open]");
    if (open) openSection(open.dataset.sectionOpen);
    const practice = event.target.closest("[data-practice-section]");
    if (practice) startExam("section", practice.dataset.practiceSection);
    const target = event.target.closest("[data-view-target]");
    if (target) showView(target.dataset.viewTarget);
    const action = event.target.closest("[data-action]");
    if (action) {
      if (action.dataset.action === "start-mock") startExam("mock");
      if (action.dataset.action === "start-smart") startExam("smart");
      if (action.dataset.action === "start-flash-all") startFlashcards();
    }
  });
  $("themeToggle").addEventListener("click", toggleTheme);
  $("resetBtn").addEventListener("click", resetProgress);
  $("prevQuestionBtn").addEventListener("click", prevQuestion);
  $("nextQuestionBtn").addEventListener("click", nextQuestion);
  $("flagQuestionBtn").addEventListener("click", toggleFlag);
  $("finishExamBtn").addEventListener("click", () => submitExam(false));
  $("reviewToggleBtn").addEventListener("click", () => {
    $("reviewArea").classList.toggle("show");
    $("reviewToggleBtn").textContent = $("reviewArea").classList.contains("show") ? "Hide Review" : "Show Review";
  });
  $("flashCard").addEventListener("click", () => { if (flash) { flash.flipped = !flash.flipped; renderFlashcard(); } });
  $("flashPrevBtn").addEventListener("click", () => { if (flash && flash.current > 0) { flash.current--; flash.flipped = false; renderFlashcard(); } });
  $("flashNextBtn").addEventListener("click", () => { if (flash && flash.current < flash.cards.length - 1) { flash.current++; flash.flipped = false; renderFlashcard(); } });
  document.addEventListener("keydown", (event) => {
    if (!exam || currentView !== "exam" || exam.submitted) return;
    if (["1", "2", "3", "4"].includes(event.key)) selectAnswer(Number(event.key) - 1);
    if (event.key === "ArrowRight") nextQuestion();
    if (event.key === "ArrowLeft") prevQuestion();
    if (event.key.toLowerCase() === "f") toggleFlag();
  });
}

function init() {
  initTheme();
  bindEvents();
  renderSummary();
  renderSectionCards("homeSectionGrid");
  renderSectionCards("sectionGrid");
  renderPracticeList();
}

init();
