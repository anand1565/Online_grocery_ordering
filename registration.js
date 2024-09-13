function validateForm(event) {
    event.preventDefault();
    const customerID = document.getElementById('customerId').value;
    const customerName = document.getElementById('customerName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const address = document.getElementById('address').value;
    const contact = document.getElementById('contact').value;
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.innerHTML = '';

    if (customerID.trim() === '' || isNaN(customerID)) {
        errorMessage.innerHTML = 'Customer ID must be a valid number';
        return false;
    }

    const nameRegex = /^[A-Za-z\s]+$/
    if (customerName.trim() === '' || !nameRegex.test(customerName)) {
        errorMessage.innerHTML = 'Customer name must contain only letters and spaces';
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (email.trim() === '' || !emailRegex.test(email)) {
        errorMessage.innerHTML = 'Invalid email format';
        return false;
    }

    if (password.trim() === '' || password.length < 6) {
        errorMessage.innerHTML = 'Password must be atleast 6 characters long';
        return false;
    }

    if (address.trim() === '') {
        errorMessage.innerHTML = 'Password cannot be empty';
        return false;
    }

    const contactRegex = /^[0-9]{10}$/
    if (!contactRegex.test(contact)) {
        errorMessage.innerHTML = 'Contact number must be 10 digits';
        return false;
    }

    const userData = {
        id: customerID,
        name: customerName,
        email: email,
        password: password,
        address: address,
        contact: contact,
    };

    localStorage.setItem('user', JSON.stringify(userData));

    setTimeout(() => {
        alert("Registration successful");
        window.location.href = "home.html";
    }, 2000);
    return true;

}
