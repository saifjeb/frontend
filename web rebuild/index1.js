 let currentCard = null;
    const createBtn = document.getElementById('createBtn');
    const cardContainer = document.getElementById('cardContainer');

    createBtn.addEventListener('click', () => {
      const count = parseInt(document.getElementById('cardCount').value);
      if (isNaN(count) || count <= 0) {
        alert('Please enter a valid number');
        return;
      }
      cardContainer.innerHTML = '';

      for (let i = 1; i <= count; i++) {
        const card = document.createElement('div');
        card.className = 'card travel';
        card.style.backgroundColor = (i % 2 === 0) ? '#000000' : '#ffffff';
        card.style.color = (i % 2 === 0) ? '#ffffff' : '#000000';

        const content = document.createElement('div');
        content.className = 'card-content';

        const title = document.createElement('h3');
        title.textContent = 'Book Your Trip';

        const desc = document.createElement('p');
        desc.textContent = 'Plan your dream vacation today! Explore new destinations and unforgettable experiences.';

        const actions = document.createElement('div');
        actions.className = 'card-actions mt-2';

        const bookBtn = document.createElement('button');
        bookBtn.className = 'btn btn-success';
        bookBtn.textContent = 'Book Now';

        const editBtn = document.createElement('button');
        editBtn.className = 'btn btn-warning';
        editBtn.textContent = 'Edit';

        const removeBtn = document.createElement('button');
        removeBtn.className = 'btn btn-danger';
        removeBtn.textContent = 'Remove';
        removeBtn.onclick = () => card.remove();

        editBtn.onclick = () => {
          currentCard = card;
          const t = currentCard.querySelector('h3');
          const d = currentCard.querySelector('p');
          const b = currentCard.querySelector('.btn.btn-success');
          document.getElementById('editTitle').value = t.textContent;
          document.getElementById('editDesc').value = d.textContent;
          document.getElementById('editBtnText').value = b.textContent;
          document.getElementById('editColor').value = toHex(getComputedStyle(currentCard).backgroundColor);
          new bootstrap.Modal(document.getElementById('editModal')).show();
        };

        actions.appendChild(bookBtn);
        actions.appendChild(editBtn);
        actions.appendChild(removeBtn);

        content.appendChild(title);
        content.appendChild(desc);
        content.appendChild(actions);

        card.appendChild(content);
        cardContainer.appendChild(card);
      }
    });

    document.getElementById('saveChanges').onclick = () => {
      if (!currentCard) return;

      const titleEl = currentCard.querySelector('h3');
      const descEl = currentCard.querySelector('p');
      const bookBtnEl = currentCard.querySelector('.btn.btn-success');

      titleEl.textContent = document.getElementById('editTitle').value || titleEl.textContent;
      descEl.textContent = document.getElementById('editDesc').value || descEl.textContent;
      bookBtnEl.textContent = document.getElementById('editBtnText').value || bookBtnEl.textContent;

      const newColor = document.getElementById('editColor').value || '#ffffff';
      currentCard.style.backgroundColor = newColor;
      currentCard.style.color = isDark(newColor) ? '#ffffff' : '#000000';

      const modalEl = document.getElementById('editModal');
      bootstrap.Modal.getInstance(modalEl).hide();
      currentCard = null;
    };

    function toHex(rgb) {
      const m = rgb.match(/\d+/g);
      if (!m || m.length < 3) return '#ffffff';
      const [r, g, b] = m.slice(0, 3).map(n => {
        const h = parseInt(n, 10).toString(16);
        return h.length === 1 ? '0' + h : h;
      });
      return '#' + r + g + b;
    }

    function isDark(hex) {
      const h = hex.replace('#','');
      const r = parseInt(h.substring(0,2), 16);
      const g = parseInt(h.substring(2,4), 16);
      const b = parseInt(h.substring(4,6), 16);
      const brightness = (r*299 + g*587 + b*114)/1000;
      return brightness < 128;
    }

var themeButton = document.getElementById("themeButton");
function changeTheme(){
  var body = document.body
  if (body.style.color == 'white'){
      body.style.color = 'black'
      body.style.backgroundColor = 'white'
      localStorage.setItem("theme","light")
  }
  else {
      body.style.color = 'white'
      body.style.backgroundColor = 'black'
      localStorage.setItem("theme","dark")
  }
}

function loadTheme(){
  var theme = localStorage.getItem("theme")
  var body = document.body
  if (theme == "light"){
      body.style.color = 'black'
      body.style.backgroundColor = 'white'
  } else {
      body.style.color = 'white'
      body.style.backgroundColor = 'black'
  }
}
loadTheme()