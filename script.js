document.addEventListener("DOMContentLoaded", () => {
  loadProgress();
  attachProgressListeners();
  updateDashboard();
  registerServiceWorker();
});

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);

  if (!section) {
    return;
  }

  section.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

function toggleAnswer(answerId) {
  const answer = document.getElementById(answerId);

  if (!answer) {
    return;
  }

  answer.classList.toggle("hidden");
}

function attachProgressListeners() {
  const checkboxes = getTopicCheckboxes();

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      saveProgress();
      updateDashboard();
    });
  });
}

function getTopicCheckboxes() {
  return [
    document.getElementById("topicOverview"),
    document.getElementById("topicOrganisations"),
    document.getElementById("topicInformation"),
    document.getElementById("topicPartners"),
    document.getElementById("topicValueStreams"),
    document.getElementById("topicExternal")
  ].filter(Boolean);
}

function saveProgress() {
  const progress = {
    topicOverview: getCheckedValue("topicOverview"),
    topicOrganisations: getCheckedValue("topicOrganisations"),
    topicInformation: getCheckedValue("topicInformation"),
    topicPartners: getCheckedValue("topicPartners"),
    topicValueStreams: getCheckedValue("topicValueStreams"),
    topicExternal: getCheckedValue("topicExternal")
  };

  localStorage.setItem("itilV5FourDimensionsHtmlProgress", JSON.stringify(progress));
}

function loadProgress() {
  const savedProgress = localStorage.getItem("itilV5FourDimensionsHtmlProgress");

  if (!savedProgress) {
    return;
  }

  try {
    const progress = JSON.parse(savedProgress);

    setCheckedValue("topicOverview", progress.topicOverview);
    setCheckedValue("topicOrganisations", progress.topicOrganisations);
    setCheckedValue("topicInformation", progress.topicInformation);
    setCheckedValue("topicPartners", progress.topicPartners);
    setCheckedValue("topicValueStreams", progress.topicValueStreams);
    setCheckedValue("topicExternal", progress.topicExternal);
  } catch (error) {
    console.log("Could not load progress:", error);
  }
}

function getCheckedValue(id) {
  const checkbox = document.getElementById(id);
  return checkbox ? checkbox.checked : false;
}

function setCheckedValue(id, value) {
  const checkbox = document.getElementById(id);

  if (checkbox) {
    checkbox.checked = value === true;
  }
}

function updateDashboard() {
  const checkboxes = getTopicCheckboxes();

  const totalTopics = checkboxes.length;
  const completedTopics = checkboxes.filter((checkbox) => checkbox.checked).length;
  const remainingTopics = totalTopics - completedTopics;
  const progressPercent = totalTopics === 0
    ? 0
    : Math.round((completedTopics / totalTopics) * 100);

  updateText("completedCount", completedTopics);
  updateText("remainingCount", remainingTopics);
  updateText("progressPercent", `${progressPercent}%`);
}

function updateText(id, value) {
  const element = document.getElementById(id);

  if (element) {
    element.textContent = value;
  }
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) {
    return;
  }

  navigator.serviceWorker
    .register("service-worker.js")
    .catch((error) => {
      console.log("Service worker registration failed:", error);
    });
}
