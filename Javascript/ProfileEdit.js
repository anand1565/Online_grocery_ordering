
let userData = JSON.parse(localStorage.getItem('user')) || {
    id: 123456,
    name: "Anand Kumar",
    email: "anandkumar@tcs.com",
    password: "password",
    address: "Gitanjali park",
    contact: "9564824869",
};

// Pre-fill form fields with user data
document.getElementById("customerId").value = userData.id;
document.getElementById("customerName").value = userData.email;
document.getElementById("email").value = userData.email;
document.getElementById("password").value = userData.password;
document.getElementById("address").value = userData.address;
document.getElementById("contact").value = userData.contact;

// Handle form submission
document.getElementById("editButton").addEventListener("click", function (event) {
    event.preventDefault();

    // Get updated values from form fields
    let newId = customerID = document.getElementById('customerId').value;
    let newName = customerName = document.getElementById('customerName').value;
    let newEmail = email = document.getElementById('email').value;
    let newPassword = password = document.getElementById('password').value;
    let newAddress = address = document.getElementById('address').value;
    let newContact = contact = document.getElementById('contact').value;

    let NewUserData = {
        id: newId,
        name: newName,
        email: newEmail,
        password: newPassword,
        address: newAddress,
        contact: newContact,
    };
    localStorage.setItem("user", JSON.stringify(NewUserData));

    setTimeout(() => {
        alert("Details updated successful");
        window.location.href = "Profile.html";
    }, 1000);
});

