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


// slider start

// slider end

// Aqardion Start
function aqardion(id) {
    const aqardion = document.getElementById(id);
    const a = document.getElementById(`a-${id}`);
    aqardion.classList.toggle('aqardion');
    a.classList.toggle('aqardion');
}
// Aqardion End

// Faq Start
function toggleAnswer(id) {
    const answer = document.getElementById(id);
    const p = document.getElementById(`p-${id}`);
    answer.classList.toggle('faqAct');
    p.classList.toggle('faqActP');
}
// Faq End