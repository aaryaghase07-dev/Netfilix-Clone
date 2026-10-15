






const cards = document.querySelectorAll(".card");

const popup = document.getElementById("popup");

const popupImg = document.getElementById("popup-img");

const popupTitle = document.getElementById("popup-title");

const popupDesc = document.getElementById("popup-desc");

const closeBtn = document.getElementById("close-btn");



cards.forEach((card, index) => {

    card.addEventListener("click", () => {

        popup.style.display = "flex";



        const img = card.querySelector("img").src;

        popupImg.src = img;



        if (index === 0) {

            popupTitle.innerText = "Dhurandhar";

            popupDesc.innerText =
                "An undercover operative infiltrates Karachi's underworld.";

        }

        else if (index === 1) {

            popupTitle.innerText = "Youth";

            popupDesc.innerText =
                "A fun coming-of-age drama about friendship and dreams.";

        }

    });

});



closeBtn.addEventListener("click", function() {

    popup.style.display = "none";

});


















const query=document.querySelector(".box1 .letter");
const plus=document.querySelector(".plusimg");
const ans=document.querySelector(".ans");

plus.addEventListener("click",()=>{
    if(ans.style.display==="none"){
        ans.style.display="block";
        
    }
    else{
        ans.style.display="none";
    }
    
});



