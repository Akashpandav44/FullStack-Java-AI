document.getElementById('employeeForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let department = document.getElementById('department').value;

    document.getElementById('result').innerText =
    "Employee Registered: " + name + ", " + email + ", " + department;
});