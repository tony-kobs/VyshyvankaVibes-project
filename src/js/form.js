const form = document.querySelector('.order-form');
const status = document.querySelector('.order-form-status');

if (form) {
  form.addEventListener('submit', event => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    form.reset();

    if (status) {
      status.hidden = false;
      status.textContent =
        'Thank you! We have received your request and will contact you soon.';
    }
  });
}
