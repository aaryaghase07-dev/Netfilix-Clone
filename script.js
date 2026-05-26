const signinBtn = document.querySelector(".signin-btn");

const emailInput = document.querySelector('input[type="email"]');

const passwordInput = document.querySelector('input[type="password"]');

signinBtn.addEventListener("click", () => {

    const email = emailInput.value;

    const password = passwordInput.value;

    if(email === "" || password === ""){

        alert("Please fill all fields");

    }

    else{

        alert("Login Successful");

    }

});