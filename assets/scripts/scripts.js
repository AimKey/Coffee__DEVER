
let hamburger = document.querySelector(".hamburger");
let navbarHTML = document.querySelector(".navbar__mobile");
let userEmail = document.querySelector(".subscribe__input");
let getUserEmailBtn = document.querySelector(".subscribe__btn");


console.log(userEmail);
console.log(getUserEmailBtn);

hamburger.addEventListener("click", () => {
    console.log('Da duoc click !');
    navbarHTML.classList.toggle('hide');
});

getUserEmailBtn.addEventListener("click", () => {
    let email = userEmail.value;
    alert(email);
})