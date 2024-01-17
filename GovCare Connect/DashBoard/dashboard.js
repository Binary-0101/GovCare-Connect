const arrowbtn = document.querySelector(".arrow-btn");
const search = document.querySelector(".search");

arrowbtn.addEventListener("click",() => {
    document.body.classList.toggle("shrink");
    arrowbtn.classList.add("hovered");

    setTimeout(() => {
            arrowbtn.classList.remove("hovered");
        }, 500);
});

search.addEventListener("click",() => {
    document.body.classList.remove("shrink");
    search.lastElementChild.focus();
});