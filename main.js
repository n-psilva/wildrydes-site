var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ!@#$%^&*()+?><:{}[]";
var passwordLength = 16;
var password = "";

for (var i = 0; i < passwordLength; i++) 
{
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
}

const data = {id: "1", senha: password};

async function getPassword() {
    await fetch('https://hesiu8106m.execute-api.us-east-1.amazonaws.com', {
        method: 'PUT', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        document.getElementById('password').value = data;
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}