const form = document.getElementById('contact-form');
const message = document.getElementById('form-message');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // 

  message.textContent = "Merci pour ton message ! (Simulation : ici tu pourrais envoyer les données à un serveur)";
  message.style.color = "green";

  form.reset();
});
