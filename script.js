// Welcome alert when page loads
window.onload = () => {
    alert("Welcome to my enhanced project!");
};

// ===== Functions & Arrays =====
function changeSectionContent() {
    const section = document.querySelector('.info-section p');
    const colors = ['#ff7675', '#74b9ff', '#55efc4', '#ffeaa7'];
    const texts = [
        "You clicked the button!",
        "Hello from JavaScript!",
        "This section just changed!",
        "Dynamic update complete!"
    ];

    // Pick random color and text
    const randomIndex = Math.floor(Math.random() * colors.length);
    section.textContent = texts[randomIndex];
    section.style.backgroundColor = colors[randomIndex];
}

// ===== Event Listener for Click Me Button =====
document.getElementById("clickMeBtn").addEventListener("click", changeSectionContent);

// ===== DOM Manipulation: Create List Dynamically =====
const items = ["Learn CSS Animations", "Add Hover Effects", "Use Flexbox", "Write Better JS"];
const list = document.getElementById("itemList");

items.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
});

// ===== Form Validation =====
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (!name || !email) {
        alert("Please fill out all fields!");
        return;
    }
    alert(`Thanks for contacting us, ${name}!`);
});
