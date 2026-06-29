document.addEventListener("DOMContentLoaded", () => {
  loadProgress();

  const topicCheckbox = document.getElementById("topicFourDimensions");

  if (topicCheckbox) {
    topicCheckbox.addEventListener("change", () => {
      saveProgress();
      updateDashboard();
    });
  }

  updateDashboard();

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("service-worker.js")
      .catch((error) => {
        console.log("Service worker registration failed:", error);
      });
  }
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

function saveProgress() {
  const topicCheckbox = document.getElementById("topicFourDimensions");

  const progress = {
    fourDimensions: topicCheckbox ? topicCheckbox.checked : false
  };

  localStorage.setItem("itilLearningProgress", JSON.stringify(progress));
}

function loadProgress() {
  const savedProgress = localStorage.getItem("itilLearningProgress");

  if (!savedProgress) {
    return;
  }

  const progress = JSON.parse(savedProgress);
  const topicCheckbox = document.getElementById("topicFourDimensions");

  if (topicCheckbox) {
    topicCheckbox.checked = progress.fourDimensions === true;
  }
}

function updateDashboard() {
  const topicCheckbox = document.getElementById("topicFourDimensions");
  const completedCount = document.getElementById("completedCount");
  const remainingCount = document.getElementById("remainingCount");

  const totalTopics = 1;
  const completedTopics = topicCheckbox && topicCheckbox.checked ? 1 : 0;
  const remainingTopics = totalTopics - completedTopics;

  if (completedCount) {
    completedCount.textContent = completedTopics;
  }

  if (remainingCount) {
    remainingCount.textContent = remainingTopics;
  }
}
