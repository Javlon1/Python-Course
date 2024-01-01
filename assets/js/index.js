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



function toggleAnswer(id) {
    const answer = document.getElementById(id);
    if (answer.style.display === 'block') {
        answer.style.display = 'none';
    } else {
        answer.style.display = 'block';
    }
}

//

const carousel = document.querySelector('.carousel');
let currentIndex = 0;
let startX = 0;

function showSlide(index) {
    const translateValue = -index * 25 + '%'; // Изменено значение на 25%
    carousel.style.transform = 'translateX(' + translateValue + ')';
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % (carousel.children.length - 3); // Изменено значение
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + carousel.children.length - 3) % (carousel.children.length - 3); // Изменено значение
    showSlide(currentIndex);
}

function startSwipe(event) {
    startX = event.clientX || event.touches[0].clientX;
    document.addEventListener('mousemove', handleSwipe);
    document.addEventListener('touchmove', handleSwipe);
    document.addEventListener('mouseup', endSwipe);
    document.addEventListener('touchend', endSwipe);
}

function handleSwipe(event) {
    const currentX = event.clientX || event.touches[0].clientX;
    const difference = startX - currentX;

    if (difference > 50) {
        nextSlide();
        startX = currentX;
    } else if (difference < -50) {
        prevSlide();
        startX = currentX;
    }
}

function endSwipe() {
    document.removeEventListener('mousemove', handleSwipe);
    document.removeEventListener('touchmove', handleSwipe);
    document.removeEventListener('mouseup', endSwipe);
    document.removeEventListener('touchend', endSwipe);
}