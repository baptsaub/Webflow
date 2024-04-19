import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

document.addEventListener('DOMContentLoaded', () => {
  const auth = getAuth();

  // Listen for authentication state changes
  onAuthStateChanged(auth, user => {
    if (user) {
      // User is signed in
      console.log('Auth state changed: logged in as', user.uid);
      user.getIdToken().then(token => {
        console.log('Token:', token);
        // Storing token and userID in localStorage
        localStorage.setItem('userToken', token);
        localStorage.setItem('userID', user.uid);
      });
    } else {
      // User is signed out
      console.log('Auth state changed: logged out');
    }
  });

  // Registration
  const registerForm = document.getElementById('Block-s-enregistrer');
  if (registerForm) {
    registerForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const email = registerForm['email-inscription'].value;
      const password = registerForm['password-inscription'].value;

      createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
          console.log('User registered:', userCredential.user.uid);
          // Redirect to 'Mon programme' page
          window.location.href = '/mon-programme.html';
        })
        .catch(error => {
          console.error(`Registration error ${error.code}: ${error.message}`);
          alert(`Registration error: ${error.message}`);
        });
    });
  }

  // Login
  const loginForm = document.getElementById('Block-se-connecter');
  if (loginForm) {
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const email = loginForm['email-connexion'].value;
      const password = loginForm['password-connexion'].value;

      signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
          console.log('User logged in:', userCredential.user.uid);
          // Redirect to 'Mon programme' page
          window.location.href = '/mon-programme.html';
        })
        .catch(error => {
          console.error(`Login error ${error.code}: ${error.message}`);
          alert(`Login error: ${error.message}`);
        });
    });
  }
});
