function validateLoginForm(event) {
    event.preventDefault();
    const customerID = document.getElementById('customerId').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.innerHTML = '';

    if (customerID.trim() === '' || isNaN(customerID)) {
        errorMessage.innerHTML = 'Customer ID must be a valid number';
        return false;
    }

    if (password.trim() === '' || password.length < 6) {
        errorMessage.innerHTML = 'Password must be atleast 6 characters long';
        return false;
    }

    alert("Login successful");
    window.location.href = "home.html";
    return true;
}
