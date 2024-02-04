

  // Selecciona los elementos del formulario
  const emailInput = document.querySelector('input[name="email"]');
  const messageTextarea = document.querySelector('textarea[name="message"]');

  // Función para guardar el estado del formulario en el almacenamiento local
  function saveFormState() {
    const formState = {
      email: emailInput.value,
      message: messageTextarea.value
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formState));
  }

  // Agrega un event listener a cada elemento para detectar cambios
  emailInput.addEventListener('input', saveFormState);
  messageTextarea.addEventListener('input', saveFormState);

  const savedFormState = JSON.parse(localStorage.getItem('feedback-form-state'));
if (savedFormState) {
  emailInput.value = savedFormState.email;
  messageTextarea.value = savedFormState.message;
}