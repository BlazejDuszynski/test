const offerFadeInItems = document.querySelectorAll(".offer__item");
 
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("offer__item--transitioned", entry.isIntersecting)
        if (entry.isIntersecting) observer.unobserve(entry.target)
    })
}, {
    threshold: 0.5
})

offerFadeInItems.forEach(offerFadeInItem => {
    observer.observe(offerFadeInItem);
});

const contactWindow = document.querySelector(".contactWindow");
const main = document.querySelector(".main");
const closeButton = document.querySelector(".contactWindow__closeButton");

const contactWindowAppear = () => {
    contactWindow.style.display = "block";
    main.style.display = "none";
}

window.addEventListener("load", () => {
    setTimeout(
        function open(){
            contactWindow.style.display = "block";
        },
        10000  
    )
});

closeButton.onclick = function() {
    contactWindow.style.display = "none";
    main.style.display = "inherit";
}