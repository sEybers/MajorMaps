document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form field values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const newUser = new User(email, password);

    console.log('New User Created:', newUser);

    alert(newUser.displayInfo());
});