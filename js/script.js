const header = document.querySelector("header");

const first_skill = document.querySelector(".skill:first-child");
const sk_counter = document.querySelectorAll(".counter span");
const progress_bar = document.querySelectorAll(".skills svg circle");

const ml_section = document.querySelector(".milestones");
const ml_counters = document.querySelectorAll(".number span");


const toggle_btn = document.querySelector(".toggle_btn");

const hamburger = document.querySelector(".hamburger");

window.addEventListener("scroll", () => {
    if(!skillsPlayed) skillsCounter();
    if(!mlPlayed) mlCounter();
});

function updateCount(num, maxNum){
    let currentNum = +num.innerText;

    if(currentNum < maxNum){
        num.innerText = currentNum + 1;
        setTimeout(() => {
            updateCount(num, maxNum)
        }, 25);
    }
}

/*----------------------- Sticky Navbar -----------------------*/

function stickyNavbar(){
    header.classList.toggle("scrolled", window.pageYOffset > 0);
}

stickyNavbar();
window.addEventListener("scroll", stickyNavbar)

/*----------------------- Reveal Animation -----------------------*/

let sr = ScrollReveal({
    duration: 2500, 
    distance: "100px",
});

sr.reveal(".anmd", { delay : 10 });
sr.reveal(".anmt", { origin : "top", delay : 10 });
sr.reveal(".anms", { origin : "top", delay :10 });
sr.reveal(".anml", { origin : "left", delay : 10 });
sr.reveal(".anmr", { origin : "right", delay : 10 });

/*----------------------- Skills Progress Bar Animation -----------------------*/

function hasReached(el){
    let topPosition = el.getBoundingClientRect().top;
    
    if(window.innerHeight >= topPosition + el.offsetHeight) return true;
    return false;
}

function updateCount(num, maxNum){
    let currentNum = +num.innerText;

    if(currentNum < maxNum){
        num.innerText = currentNum + 1;
        setTimeout(() => {
            updateCount(num, maxNum)
        }, 25);
    }
}

let skillsPlayed = false;

function skillsCounter(){
    if(!hasReached(first_skill)) return;

    skillsPlayed = true;

    sk_counter.forEach((counter, i) => {
        let target = +counter.dataset.target;
        let strokeValue = 427 - 427 * (target / 100);

        progress_bar[i].style.setProperty("--target", strokeValue);

        setTimeout(() => {
            updateCount(counter, target);
        }, 400);
    });

    progress_bar.forEach((p) => (p.style.animation = "progress 3s ease-in-out forwards"));
}

/*----------------------- Services Counter Animation -----------------------*/

let mlPlayed = false;

function mlCounter(){
    if(!hasReached(ml_section)) return;
    mlPlayed = true;
    
    ml_counters.forEach(ctr => {
        let target = +ctr.dataset.target;

        setTimeout(() => {
            updateCount(ctr, target);
        }, 2000);
    });
}

/*-------------------------------- Open & Close Navbar Menu -------------------------------*/

hamburger.addEventListener("click", () => {
    document.body.classList.toggle("open");
    document.body.classList.toggle("stopscrolling");
});

links.forEach((link) =>
    link.addEventListener("click", () => {
        document.body.classList.remove("open");
        document.body.classList.remove("stopscrolling");
    })
);



function myFunction() {
    var element1, element2, element2;
    element1 = document.querySelector('.chat-box');
    element1.classList.toggle("chat-box-active");

    element2 = document.querySelector('.chatbtn');
    element2.classList.toggle("chatbtn-active");
}