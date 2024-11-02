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