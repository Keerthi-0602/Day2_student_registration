document.getElementById("clickMeBtn").addEventListener("click", function() {
    let itemList = document.getElementById("itemList");
    let newItem = document.createElement("li");
    newItem.textContent = "Item " + (itemList.children.length + 1);
    itemList.appendChild(newItem);
});

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("formMessage");

    if (name && email) {
        message.textContent = "Thank you, " + name + "! We will contact you at " + email;
        message.style.color = "green";
        this.reset();
    } else {
        message.textContent = "Please fill out all fields.";
        message.style.color = "red";
    }
});
