const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

const yearSpan = $('#year');
if (yearSpan) {
yearSpan.textContent = new Date().getFullYear();
}

(function showSpecialPopup() {
const trigger = $('#specialTrigger');
if (!trigger) return;
setTimeout(() => trigger.click(), 1500);
})();

(function menuFilter() {
const buttons = $$('.filter-btn');
const items = $$('.menu-item');
if (!buttons.length || !items.length) return;

buttons.forEach(button => {
button.addEventListener('click', () => {
buttons.forEach(b => b.classList.remove('active'));
button.classList.add('active');
const category = button.dataset.filter;
items.forEach(item => {
const shouldShow = category === 'all' || item.dataset.category === category;
item.classList.toggle('d-none', !shouldShow);
});
});
});
})();

(function handleReservationForm() {
const form = $('#reserveForm');
if (!form) return;

const toastEl = $('#reserveToast');
const toast = toastEl ? new bootstrap.Toast(toastEl) : null;

form.addEventListener('submit', event => {
event.preventDefault();
if (!form.checkValidity()) {
event.stopPropagation();
} else {
form.reset();
toast && toast.show();
}
form.classList.add('was-validated');
});
})();
