document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && email && message) {
    alert(`Thank you, ${name}! Your message has been sent.`);
    // You can replace the alert with a real email-sending process or API call.
    this.reset();
  } else {
    alert('Please fill in all fields.');
  }
});
