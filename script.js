const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('error-message');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Replace this with your actual authentication logic
  if (username === 'your_username' && password === 'your_password') {
    // Successful login, redirect to dashboard or other page
    window.location.href = 'dashboard.html';
  } else {
    errorMessage.textContent = 'Invalid username or password';
  }
});