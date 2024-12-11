


document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form field values
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const tel = document.getElementById('tel').value;
    const dob = document.getElementById('dob').value;

    const newUser = new User(fname, lname, email, password, tel, dob);

    console.log('New User Created:', newUser);

    alert(newUser.displayInfo());
});