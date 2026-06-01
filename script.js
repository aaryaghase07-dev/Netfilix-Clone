
// sign in button action
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





const cards = document.querySelectorAll(".card");

const popup = document.getElementById("popup");

const popupImg = document.getElementById("popup-img");

const popupTitle = document.getElementById("popup-title");

const popupDesc = document.getElementById("popup-desc");

const closeBtn = document.getElementById("close-btn");



cards.forEach((card, index)=>{

    card.addEventListener("click", ()=>{

        popup.style.display = "flex";



        const img = card.querySelector("img").src;

        popupImg.src = img;



        if(index === 0){

            popupTitle.innerText = "Dhurandhar";

            popupDesc.innerText =
            "An undercover operative infiltrates Karachi's underworld.";

        }

        else if(index === 1){

            popupTitle.innerText = "Youth";

            popupDesc.innerText =
            "A fun coming-of-age drama about friendship and dreams.";

        }

    });

});



closeBtn.addEventListener("click", ()=>{

    popup.style.display = "none";

});



