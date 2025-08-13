import greet, { add, multiply } from "./mathUtils.js";
import { createProfileCard } from "./profileCard.js";

// Test math utils
console.log("Add:", add(5, 3));        // 8
console.log("Multiply:", multiply(4, 2)); // 8
greet("Keerthi");

// DOM elements
const addProfileBtn = document.getElementById("addProfileBtn");
const createCardBtn = document.getElementById("createCardBtn");
const cardContainer = document.getElementById("cardContainer");

// Activity 1: Create generic styled card
createCardBtn.addEventListener("click", () => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.textContent = "This is a dynamically created card.";
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("deleteBtn");
  deleteBtn.addEventListener("click", () => card.remove());
  card.appendChild(deleteBtn);
  cardContainer.appendChild(card);
});

// Activity 2: Add profile card with prompt
addProfileBtn.addEventListener("click", () => {
  const name = prompt("Enter Name:");
  const role = prompt("Enter Role:");

  if (name && role) {
    const card = createProfileCard(name, role);
    cardContainer.appendChild(card);
  }
});
