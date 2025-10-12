document.getElementById("createBtn").addEventListener("click", () => {
  const container = document.getElementById("cardContainer");
  container.innerHTML = "";
  const count = parseInt(document.getElementById("cardCount").value);

  for (let i = 1; i <= count; i++) {
    const card = document.createElement("div");
    card.className = "card";
    card.style.backgroundColor = i % 2 === 0 ? "#000000ff" : "#ffffffff";

    const content = document.createElement("div");
    content.classList.add("card-content");

    const title = document.createElement("h3");
    title.textContent = "Book Your Trip";

    const desc = document.createElement("p");
    desc.textContent =
      "Plan your dream vacation today! Explore new destinations and unforgettable experiences.";

    const btn = document.createElement("button");
    btn.textContent = "Book Now";

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "X";

    
    removeBtn.onclick = function() {
     card.remove();
};


    content.appendChild(title);
    content.appendChild(desc);
    content.appendChild(btn);
    content.appendChild(removeBtn);

    card.appendChild(content);

    container.appendChild(card);
  }
});

