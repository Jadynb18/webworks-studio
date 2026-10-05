"use strict";

const difficultyToggle = document.querySelector("#difficulty-toggle");
const difficultyPanel = document.querySelector("#difficulty-panel");

difficultyToggle.addEventListener("click", () => {
  const isExpanded = difficultyToggle.getAttribute("aria-expanded") === "true";

  difficultyToggle.setAttribute("aria-expanded", String(!isExpanded));
  difficultyPanel.hidden = isExpanded;
});


const planformToggle = document.querySelector("#hike-form");
const feedback = document.querySelector("#form-feedback");

planformToggle.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!planformToggle.checkValidity()) {
    feedback.textContent = "";
    planformToggle.reportValidity();
    return;
  }

  const trail = document.querySelector("#trail").value;
  const experience = document.querySelector("#experience").value;
  const hours = document.querySelector("#hours").value;

  feedback.textContent =
    `Plan ready: ${trail} for ${experience.toLowerCase()} hiker with ${hours} hours available. Check official trailhead signage for any last-minute changes to trail conditions.`;
});