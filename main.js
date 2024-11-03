/*=============== Email JS ===============*/
const contactFrom = document.getElementById("contact-form"),
    contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_4ancr7p', 'template_5imsmml', contactFrom, 'oJKTFwtqTW8lt-Hwy')
        .then(() => {
            contactMessage.innerHTML = "Message sent successfully!";
            setTimeout(() => {
                contactMessage.innerHTML = "";
            }, 5000);
            contactFrom.reset();
        })
        .catch((error) => {
            contactMessage.innerHTML = "Message failed to send!";
            console.error('EmailJS error:', error);
        });

}

contactFrom.addEventListener("submit", sendEmail);
/*=============== Scroll Up ===============*/

const scrollUp = () => {
    const scrollUp = document.getElementById("scroll-up")
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')


}

window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__list a[href*=' + sectionId + ']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 600,
    reset: true,


});

sr.reveal(`.person`)
sr.reveal(`.info`, {origin: "left", delay: 1200})
sr.reveal(`.skills`, {origin: "left", delay: 1400})
sr.reveal(`.about`, {origin: "right", delay: 1600})
sr.reveal(`.projects-card, .services-card, .education-card`, { interval: 100 });

sr.reveal(`#contact-name`, {origin: "left", delay: 400})
sr.reveal(`#contact-email`, {origin: "right", delay: 600})
sr.reveal(`.contact-area`, {origin: "bottom", delay: 800})
sr.reveal(`.contact-button`, {origin: "top", delay: 200})

sr.reveal(`.footer-content`, {origin: "left", delay: 600})
sr.reveal(`.footer-social`, {origin: "right", delay: 600})

sr.reveal(`.footer-copy`, {origin: "bottom", delay: 800})

/*========== Color Choicer ==========*/
document.addEventListener("DOMContentLoaded", () => {
    const colorChoicer = document.getElementById("color-choicer");
    const themePopup = document.getElementById("theme-popup");
    const colorButtons = document.querySelectorAll(".color-btn");

    // Toggle theme pop-up visibility
    colorChoicer.addEventListener("click", (event) => {
        event.preventDefault();
        themePopup.style.display =
            themePopup.style.display === "flex" ? "none" : "flex";
    });

    // Change the theme color
    colorButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const hueValue = button.getAttribute("data-hue");
            document.documentElement.style.setProperty("--hue", hueValue);
        });
    });
});
