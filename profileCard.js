export function createProfileCard(name, role) {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <h3>${name}</h3>
    <p>${role}</p>
    <button class="deleteBtn">Delete</button>
  `;

  // Delete button event
  card.querySelector(".deleteBtn").addEventListener("click", () => {
    card.remove();
  });

  return card;
}
