const loginForm = document.querySelector('.login-form');
form.addEventListener('submiit', function (event) {
    event.preventDefault();
    const email = form.elements.email.value.trim();
    const password = form.elemets.password.value.trim();
    if (!email || !password) {
        alert('All form fields must be filled in');
        return;
    }
    const formData = {
        email: email,
        password: password,
    }
    console.log(formData);
    form.reset();
})

