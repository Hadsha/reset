document.getElementById('resetPasswordForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
  
    const messageElement = document.getElementById('resetMessage');
  
    if (newPassword !== confirmPassword) {
      messageElement.textContent = "Passwords do not match!";
    } else {
      messageElement.style.color = "green";
      messageElement.textContent = "Password reset successfully!";
      // Simulate redirecting to the login page
      setTimeout(() => {
        window.location.href = "login.html";//yaha pe location daal dena bhai jo add krna hai iske baad jo pop up hoga window simple
      }, 2000);
    }
  });
  