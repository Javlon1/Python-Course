// Scroll Up Start
document.addEventListener('DOMContentLoaded', function () {
    const scrollUpButton = document.getElementById('scrollUp');

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const threshold = 100;
        if (scrollY > threshold) {
            scrollUpButton.classList.add('visible');
        } else {
            scrollUpButton.classList.remove('visible');
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    window.addEventListener('scroll', handleScroll);
    scrollUpButton.addEventListener('click', scrollToTop);
});
// Scroll Up End


// Aqardion Start
function aqardion(id) {
    const aqardion = document.getElementById(id);
    const a = document.getElementById(`a-${id}`);
    aqardion.classList.toggle('aqardion');
    a.classList.toggle('aqardion');
}
// Aqardion End


// Mentors modal start
function mentorsModal(id) {
    const ibrohim = document.querySelector(".Ibrohim")
    const abdurahmon = document.querySelector(".Abdurahmon")
    const ibrohimModal = document.querySelector(".ibrohimModal")
    const abdurahmonModal = document.querySelector(".abdurahmonModal")
    if (id === "modal-1") {
        ibrohim.classList.remove("opact")
        abdurahmon.classList.add("opact")

        ibrohimModal.classList.remove("modalAct")
        abdurahmonModal.classList.add("modalAct")
    } else if (id === "modal-2") {
        ibrohim.classList.add("opact")
        abdurahmon.classList.remove("opact")

        ibrohimModal.classList.add("modalAct")
        abdurahmonModal.classList.remove("modalAct")
    }
}
// Mentors modal end


// slider start


function playPause(videoId) {
    var video = document.getElementById(videoId);
    if (video) {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    } else {
        console.error("Элемент с id '" + videoId + "' не найден");
    }
}
// slider end


// Faq Start
function toggleAnswer(id) {
    const answer = document.getElementById(id);
    const p = document.getElementById(`p-${id}`);
    answer.classList.toggle('faqAct');
    p.classList.toggle('faqActP');
}
// Faq End