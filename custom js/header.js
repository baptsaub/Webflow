import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

document.addEventListener('DOMContentLoaded', function() {
  // Initialize Firebase authentication
  const auth = getAuth();

  // Select the logo link by its element ID
  const logoLink = document.getElementById('Lien-page-d-accueil-header');

  // Prevent any action when the logo is clicked
  logoLink.addEventListener('click', (event) => {
    event.preventDefault(); // This stops the default navigation
    console.log('Logo link clicked - no action taken.');
  });

  // Handle the logout process when the logout link is clicked
  const logoutLink = document.getElementById('Lien-me-d-connecter-dropdown-header');
  logoutLink.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default action
    signOut(auth).then(() => {
      console.log('User signed out successfully.');
      window.location.href = '/'; // Redirect to the homepage after logging out
    }).catch((error) => {
      console.error('Sign out error:', error);
    });
  });
});
