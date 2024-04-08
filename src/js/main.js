const menu_burger = document.querySelector(".nav-burger");
const menu = document.querySelector(".nav-bar");

menu_burger.addEventListener("click", mobileMenu);

function mobileMenu() {
    menu_burger.classList.toggle("open");
    menu.classList.toggle("open");

    const content = document.querySelector(".content")
    content.classList.toggle("hide")

}


const nav_link = document.querySelectorAll(".item-link");

nav_link.forEach(function (item) {
    item.addEventListener("click", function () {
        let clicked = item;

        if (!clicked.classList.contains("active")) {
            nav_link.forEach(function (item) {
                item.classList.remove("active")
            })

            clicked.classList.add("active")
        }
    })
})

const link = document.querySelectorAll(".pagination-link");

link.forEach(function (item) {
    item.addEventListener("click", function () {

        let current = item;

        if (!current.classList.contains("active_page")) {
            link.forEach(function (item) {
                item.classList.remove("active_page");
            })
        }

        current.classList.add("active_page")
    })
})