// JavaScript to dynamically generate car details input fields
document.getElementById('cars').addEventListener('input', function() {
    const numCars = parseInt(this.value);
    const carDetailsDiv = document.getElementById('carDetails');
    carDetailsDiv.innerHTML = '';

    for (let i = 1; i <= numCars; i++) {
        const carNumber = 'Car ' + i;
        const carNameInput = document.createElement('input');
        carNameInput.type = 'text';
        carNameInput.id = 'carName' + i;
        carNameInput.name = 'carName' + i;
        carNameInput.placeholder = carNumber + ' Name';

        const carNumberInput = document.createElement('input');
        carNumberInput.type = 'text';
        carNumberInput.id = 'carNumber' + i;
        carNumberInput.name = 'carNumber' + i;
        carNumberInput.placeholder = carNumber + ' Number';

        carDetailsDiv.appendChild(carNameInput);
        carDetailsDiv.appendChild(carNumberInput);
        carDetailsDiv.appendChild(document.createElement('br'));
        carDetailsDiv.appendChild(document.createElement('br'));
    }
});

document.getElementById('submit').addEventListener('click', function() {
    console.log("came in submit button");
    const numCars = parseInt(document.getElementById('cars').value);
    const carData = [];

    for (let i = 1; i <= numCars; i++) {
        const carName = document.getElementById('carName' + i).value;
        const carNumber = document.getElementById('carNumber' + i).value;
        carData.push({
            name: carName,
            number: carNumber
        });
    }

    register(); // Call the register function to create a user

    const userId = registerEmail.value.replace(/[^a-zA-Z0-9]/g, ''); // Use a unique identifier
    const userData = {
        firstname: firstname.value,
        lastname: lastname.value,
        phone: phone.value,
        aadhar: aadhar.value,
        cars: carData, // Store the array of cars
        email: registerEmail.value,
        password: registerPassword.value
    };
    // Push the userData object to the database
    push(driverSignupDetailsRef, userData)
    .then((ref) => {
        console.log("Data pushed successfully with key: " + ref.key);
        // You can perform any further actions here after a successful push
    })
    .catch((error) => {
        console.error("Error pushing data: " + error);
    });
});

