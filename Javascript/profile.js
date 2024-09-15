let userData = JSON.parse(localStorage.getItem('user')) || {
    id: "123456",
    name: "Anand Kumar",
    email: "anandkumar@tcs.com",
    password: "password",
    address: "Gitanjali park",
    contact: "9564824869",
};

document.getElementById("customerId").innerHTML = userData.id;
document.getElementById("customerName").innerHTML = userData.name;
document.getElementById("email").innerHTML = userData.email;
document.getElementById("password").innerHTML = userData.password;
document.getElementById("address").innerHTML = userData.address;
document.getElementById("contact").innerHTML = userData.contact;

document.getElementById('updateProfileBtn').addEventListener('click', function () {
    window.location.href = 'ProfileEdit.html';
});
