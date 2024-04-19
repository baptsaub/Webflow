document.addEventListener('DOMContentLoaded', function() {
  // Handling new chapter submissions
  const forms = document.querySelectorAll('form[id^="wf-form-Champe-de-saisie-du-nouveau-chapitre"]');
  forms.forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      let userInputField = form.querySelector('input[type="text"]');
      let userInput = userInputField.value.trim();
      if (userInput === '') {
        alert("Please enter some text.");
        return;
      }

      let chapitreBlock = form.closest('.block-programme-par-mati-re-1').querySelector('.block-list-des-chapitres-faire');
      let clone = chapitreBlock.cloneNode(true);

      let textDiv = clone.querySelector('.text-du-chapitre-faire');
      if (textDiv) textDiv.textContent = userInput;

      let deleteButton = clone.querySelector('.lien-croix-de-supression');
      deleteButton.onclick = () => clone.remove();

      clone.style.display = 'flex';
      chapitreBlock.parentNode.insertBefore(clone, chapitreBlock.nextSibling);

      userInputField.value = '';
    });
  });
});
