/*
1. Lang
2. Theme
3. Rounded Text
4. Swiper
5. Testimonials Hidden Text
6. Fixed Header
7. Logo Scroll
8. Nav Links Active
9. Nav On Scroll
10. Modal
11. Sign In
12. Profile Active
13. Sign Out
14. Burger
15. Page Reload
16. Sign Up
*/



/* 1. Lang */
const enLangButton = document.querySelector("#enLangButton");
const ruLangButton = document.querySelector("#ruLangButton");

const enLangTexts = document.querySelectorAll("#enLangText");
const ruLangTexts = document.querySelectorAll("#ruLangText");

const name = document.querySelector("#name");
const emailUp = document.querySelector("#emailUp");
const number = document.querySelector("#number");
const passwordUp = document.querySelector("#passwordUp");
const again = document.querySelector("#again");
const emailIn = document.querySelector("#emailIn");
const passwordIn = document.querySelector("#passwordIn");


enLangButton.addEventListener("click", (event) => {
    event.preventDefault();

    document.documentElement.setAttribute("lang", "ru");

    ruLangButton.classList.add("active");
    enLangButton.classList.remove("active");

    for (let i = 0; i < enLangTexts.length; i++) {
        let enLangText = enLangTexts[i];
        let ruLangText = ruLangTexts[i];

        enLangText.classList.remove("active");
        ruLangText.classList.add("active");
    }

    name.placeholder = "Имя";
    emailUp.placeholder = "Электронная почта";
    number.placeholder = "Номер телефона";
    passwordUp.placeholder = "Пароль";
    again.placeholder = "Пароль ещё раз";
    emailIn.placeholder = "Электронная почта";
    passwordIn.placeholder = "Пароль";
});


ruLangButton.addEventListener("click", (event) => {
    event.preventDefault();

    document.documentElement.setAttribute("lang", "en");

    enLangButton.classList.add("active");
    ruLangButton.classList.remove("active");

    for (let i = 0; i < enLangTexts.length; i++) {
        let enLangText = enLangTexts[i];
        let ruLangText = ruLangTexts[i];

        enLangText.classList.add("active");
        ruLangText.classList.remove("active");
    }

    name.placeholder = "Name";
    emailUp.placeholder = "Email";
    number.placeholder = "Phone number";
    passwordUp.placeholder = "Password";
    again.placeholder = "The password again";
    emailIn.placeholder = "Email";
    passwordIn.placeholder = "Password";
});


ruLangButton.click();



/* 2. Theme */
const themeLight = document.querySelector("#themeLight");
const themeDark = document.querySelector("#themeDark");


function setTheme(themeName) {
    localStorage.setItem("theme", themeName);
    document.documentElement.className = themeName;
}


themeLight.addEventListener("click", (event) => {
    event.preventDefault();

    if (!themeLight.classList.contains("active")) {
        themeLight.classList.add("active");
        themeDark.classList.remove("active");
        setTheme("theme-light");
    } else {
        themeDark.classList.add("active");
        themeLight.classList.remove("active");
        setTheme("theme-dark");
    }
});


themeDark.addEventListener("click", (event) => {
    event.preventDefault();

    if (!themeDark.classList.contains("active")) {
        themeDark.classList.add("active");
        themeLight.classList.remove("active");
        setTheme("theme-dark");
    } else {
        themeLight.classList.add("active");
        themeDark.classList.remove("active");
        setTheme("theme-light");
    }
});



/* 3. Rounded Text */
new CircleType(document.querySelector(".home__slogan")).dir(-1).radius(600);



/* 4. Swiper */
new Swiper(".swiper", {
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});



/* 5. Testimonials Hidden Text */
const mainInner = document.querySelector("#mainInner");
const textArray = document.querySelectorAll("#textArray");
const innerArray = document.querySelectorAll("#innerArray");
const openArray = document.querySelectorAll("#openArray");
const closeArray = document.querySelectorAll("#closeArray");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const block = document.querySelector("#block");
const item = document.querySelector("#item");
const fraction = document.querySelector("#fraction");
const innerHeight = [];


innerArray.forEach(element => {
    let height = element.clientHeight;
    innerHeight.push(height);
});


for (let i = 0; i < innerHeight.length; i++) {
    const text = textArray[i];
    const inner = innerHeight[i];
    const open = openArray[i];

    if (inner > document.querySelector(".testimonials__text").clientHeight) {
        text.classList.add("hidden");
        open.classList.add("active");
    } else {
        text.classList.remove("hidden");
        open.classList.remove("active");
    }
}


for (let i = 0; i < openArray.length; i++) {
    const height = innerHeight[i];
    const text = textArray[i];
    const open = openArray[i];
    const close = closeArray[i];

    open.addEventListener("click", event => {
        event.preventDefault();

        open.classList.remove("active");
        text.classList.remove("hidden");
        close.classList.add("active");
    });

    close.addEventListener("click", event => {
        event.preventDefault();

        close.classList.remove("active");
        text.classList.add("hidden");
        open.classList.add("active");
    });

    prev.addEventListener("click", () => {
        if (close.classList.contains("active")) {
            close.classList.remove("active");
            text.classList.add("hidden");
            open.classList.add("active");
        }
    });

    next.addEventListener("click", () => {
        if (close.classList.contains("active")) {
            close.classList.remove("active");
            text.classList.add("hidden");
            open.classList.add("active");
        }
    });
}


if (!block.contains(item)) {
    mainInner.classList.add("no-testimonial");
    block.classList.add("no-testimonial");
    fraction.innerText = "0";
} else {
    mainInner.classList.remove("no-testimonial");
    block.classList.remove("no-testimonial");
}



/* 6. Fixed Header */
const header = document.querySelector("#header");
const profile = document.querySelector("#profile");


window.addEventListener("scroll", () => {
    let scrollPos = window.scrollY;

    if (scrollPos > 0) {
        header.classList.add("fixed");
        profile.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
        profile.classList.remove("fixed");
    }
});



/* 7. Logo Scroll */
const logo = document.querySelector("#logo");

logo.addEventListener("click", event => {
    event.preventDefault();

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});



/* 8. Nav Links Active */
const navLinks = document.querySelectorAll(".nav__link");
const homeLink = document.querySelector("#homeLink");
const aboutLink = document.querySelector("#aboutLink");
const testimonialsLink = document.querySelector("#testimonialsLink");

navLinks.forEach(element => {
    element.addEventListener("click", () => {
        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].classList.remove("active");
        }
    });
});

homeLink.addEventListener("click", (event) => {
    event.preventDefault();

    homeLink.classList.add("active");
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});

aboutLink.addEventListener("click", (event) => {
    event.preventDefault();

    aboutLink.classList.add("active");
    window.scrollTo({
        top: home.clientHeight,
        left: 0,
        behavior: "smooth",
    });
});

testimonialsLink.addEventListener("click", (event) => {
    event.preventDefault();

    testimonialsLink.classList.add("active");
    window.scrollTo({
        top: home.clientHeight + about.clientHeight - 110,
        left: 0,
        behavior: "smooth",
    });
});

document.querySelector("#homeLink").click();



/* 9. Nav On Scroll */
const home = document.querySelector("#home");
const about = document.querySelector("#about");
const testimonials = document.querySelector("#testimonials");


window.addEventListener("scroll", () => {
    let scrollPos = window.scrollY;

    if (scrollPos >= 0 && scrollPos < home.clientHeight) {
        homeLink.classList.add("active");
    } else {
        homeLink.classList.remove("active");
    }

    if (scrollPos >= home.clientHeight && scrollPos < home.clientHeight + about.clientHeight - 110) {
        aboutLink.classList.add("active");
    } else {
        aboutLink.classList.remove("active");
    }

    if (scrollPos >= home.clientHeight + about.clientHeight - 110) {
        testimonialsLink.classList.add("active");
    } else {
        testimonialsLink.classList.remove("active");
    }
});



/* 10. Modal */
const modalCall = $("[data-modal]");
const modalClose = $("[data-close]");

modalCall.on("click", function(event) {
    event.preventDefault();

    let $this = $(this);
    let modalId = $this.data("modal");

    $(modalId).addClass("show");
    $("body").addClass("no-scroll");

    setTimeout(function() {
        $(modalId).find(".modal__dialog").css({
            transform: "scale(1)",
        });
    }, 200);
});

modalClose.on("click", function(event) {
    event.preventDefault();

    let $this = $(this);
    let modalParent = $this.parents(".modal");

    modalParent.find(".modal__dialog").css({
        transform: "scale(0)",
    });

    setTimeout(function() {
        modalParent.removeClass("show");
        $("body").removeClass("no-scroll");
    }, 200);
});

$(".modal").on("click", function(event) {
    event.preventDefault();

    let $this = $(this);

    $this.find(".modal__dialog").css({
        transform: "scale(0)",
    });

    setTimeout(function() {
        $this.removeClass("show");
        $("body").removeClass("no-scroll");
    }, 200);
});

$(".modal__dialog").on("click", function(event) {
    event.stopPropagation();
});



/* 11. Sign In */
const formIn = document.querySelector("#formIn");
const signIn = document.querySelector("#signIn");
const signUpLink = document.querySelector("#signUpLink");
const profileOpen = document.querySelector("#profileOpen");
const signInLink = document.querySelector("#signInLink");
const signOutLink = document.querySelector("#signOutLink");


signIn.addEventListener("click", (event) => {
    event.preventDefault();


    signUpLink.classList.add("no-active");
    signInLink.classList.add("no-active");
    profileOpen.classList.remove("no-active");
    signOutLink.classList.remove("no-active");


    formIn.reset();


    if (document.documentElement.lang === "en") {
        alert("You are logged into your profile!");
    }

    if (document.documentElement.lang === "ru") {
        alert("Вы вошли в свой профиль!");
    }
});



/* 12. Profile Active */
const profileMenu = document.querySelector("#profileMenu");
const profileList = document.querySelector("#profileList");
const profileClose = document.querySelector("#profileClose");


profileOpen.addEventListener("click", event => {
    event.preventDefault();

    if (!profile.classList.contains("active")) {
        profileOpen.classList.add("active");
        profileList.classList.add("visible");
        profileMenu.classList.add("active");
        profile.classList.add("active");
    } else {
        profile.classList.remove("active");
        profileMenu.classList.remove("active");
        profileList.classList.remove("visible");
        profileOpen.classList.remove("active");
    }
});

profileClose.addEventListener("click", () => {
    profile.classList.remove("active");
    profileMenu.classList.remove("active");
    profileList.classList.remove("visible");
    profileOpen.classList.remove("active");
});



/* 13. Sign Out */
const signOut = document.querySelector("#signOut");


signOut.addEventListener("click", () => {
    signUpLink.classList.remove("no-active");
    signInLink.classList.remove("no-active");
    profileOpen.classList.add("no-active");
    signOutLink.classList.add("no-active");

    if (profile.classList.contains("active")) {
        profile.classList.remove("active");
        profileMenu.classList.remove("active");
        profileList.classList.remove("visible");
        profileOpen.classList.remove("active");
    }
});



/* 14. Burger */
const nav = document.querySelector("#nav");
const burger = document.querySelector("#burger");


burger.addEventListener("click", () => {
    if (!nav.classList.contains("active")) {
        nav.classList.add("active");
        burger.classList.add("active");
    } else {
        nav.classList.remove("active");
        burger.classList.remove("active");
    }
});



/* 15. Page Reload */
window.addEventListener("beforeunload", () => {
    window.scrollTo(0, 0);
});



/* 16. Sign Up */
const users = {};
const formUp = document.querySelector("#formUp");


function User(name, emailUp, number, passwordUp) {
    this.name = name;
    this.emailUp = emailUp;
    this.number = number;
    this.passwordUp = passwordUp;
}


function createId(users) {
    return Object.keys(users).length;
}


signUp.addEventListener("click", (event) => {
    event.preventDefault();


    const nameUser = name.value;
    const emailUpUser = emailUp.value;
    const numberUser = number.value;
    const passwordUpUser = passwordUp.value;

    const user = new User(nameUser, emailUpUser, numberUser, passwordUpUser);

    const userId = "User" + createId(users);
    users[userId] = user;

    console.log(users);


    formUp.reset();


    if (document.documentElement.lang === "en") {
        alert(`${nameUser}, you have successfully registered!`);
    }

    if (document.documentElement.lang === "ru") {
        alert(`${nameUser}, вы успешно прошли регистрацию!`);
    }
});
