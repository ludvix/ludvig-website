const form = document.getElementById('contact-form');
const thankYou = document.getElementById('thankyou-message');

form.addEventListener('submit', async (e) => {
  e.preventDefault(); 

  const data = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      form.reset();
      thankYou.style.display = 'block';
    } else {
      alert('There was a problem submitting your message.');
    }
  } catch (error) {
    alert('Something went wrong.');
  }
});