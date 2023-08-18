function openForm(formId) {
  var formContainers = document.querySelectorAll('.form-container');

  // Hide all form containers
  formContainers.forEach(function(container) {
    container.style.display = 'none';
  });

  // Show the selected form container
  var selectedContainer = document.getElementById(formId);
  selectedContainer.style.display = 'block';
}
