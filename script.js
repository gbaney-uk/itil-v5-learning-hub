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

function openMindmap(imagePath, title) {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const modalTitle = document.getElementById("modalTitle");

  if (!modal || !modalImage || !modalTitle) {
    return;
  }

  modalImage.src = imagePath;
  modalImage.alt = title;
  modalTitle.textContent = title;
  modal.classList.remove("hidden");

  document.body.style.overflow = "hidden";
}

function closeMindmap() {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");

  if (!modal || !modalImage) {
    return;
  }

  modal.classList.add("hidden");
  modalImage.src = "";

  document.body.style.overflow = "";
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMindmap();
  }
});

document.addEventListener("click", (event) => {
  const modal = document.getElementById("imageModal");

  if (!modal || modal.classList.contains("hidden")) {
    return;
  }

  if (event.target === modal) {
    closeMindmap();
  }
});

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
    document.getElementById("productsAndService"),
    document.getElementById("organisationsAndPeople"),
    document.getElementById("informationAndTechnology"),
    document.getElementById("partnersAndSuppliers"),
    document.getElementById("valueStreamsProcesses"),
    document.getElementById("externalFactors")
  ].filter(Boolean);
}

function saveProgress() {
  const progress = {
    productsAndService: getCheckedValue("productsAndService"),
    organisationsAndPeople: getCheckedValue("organisationsAndPeople"),
    informationAndTechnology: getCheckedValue("informationAndTechnology"),
    partnersAndSuppliers: getCheckedValue("partnersAndSuppliers"),
    valueStreamsProcesses: getCheckedValue("valueStreamsProcesses"),
    externalFactors: getCheckedValue("externalFactors")
  };

  localStorage.setItem("itilV5FourDimensionsProgress", JSON.stringify(progress));
}

function loadProgress() {
  const savedProgress = localStorage.getItem("itilV5FourDimensionsProgress");

  if (!savedProgress) {
    return;
  }

  try {
    const progress = JSON.parse(savedProgress);

    setCheckedValue("productsAndService", progress.productsAndService);
    setCheckedValue("organisationsAndPeople", progress.organisationsAndPeople);
    setCheckedValue("informationAndTechnology", progress.informationAndTechnology);
    setCheckedValue("partnersAndSuppliers", progress.partnersAndSuppliers);
    setCheckedValue("valueStreamsProcesses", progress.valueStreamsProcesses);
    setCheckedValue("externalFactors", progress.externalFactors);
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
