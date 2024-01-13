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
document.addEventListener('DOMContentLoaded', function () {
    var swiperInstance = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            400: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            860: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1150: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1350: {
                slidesPerView: 5,
                spaceBetween: 20,
            },
            1400: {
                slidesPerView: 7,
                spaceBetween: 20,
            },
        }
    });
});

function playPause(videoId) {
    const video = document.getElementById(videoId);

    if (video) {
        var allVideos = document.getElementsByTagName('video');
        for (var i = 0; i < allVideos.length; i++) {
            if (allVideos[i] !== video && !allVideos[i].paused) {
                allVideos[i].pause();
                const playButton = document.getElementById('play' + allVideos[i].id.substring(5));
                if (playButton) {
                    playButton.style.display = "inline"; // Показать кнопку play
                }
                const pauseButton = document.getElementById('pause' + allVideos[i].id.substring(5));
                if (pauseButton) {
                    pauseButton.style.display = "none"; // Скрыть кнопку pause
                }
            }
        }

        const playButton = document.getElementById('play' + videoId.substring(5));
        const pauseButton = document.getElementById('pause' + videoId.substring(5));

        if (video.paused) {
            video.play();
            if (playButton && pauseButton) {
                playButton.style.display = "none"; // Скрыть кнопку play
                pauseButton.style.display = "inline"; // Показать кнопку pause
            }
        } else {
            video.pause();
            if (playButton && pauseButton) {
                playButton.style.display = "inline"; // Показать кнопку play
                pauseButton.style.display = "none"; // Скрыть кнопку pause
            }
        }
    } else {
        console.error("Элемент с id '" + videoId + "' не найден");
    }
}




// slider end

// switch start
let checked = true;
const silverAct = document.querySelector(".silver")
const goldAct = document.querySelector(".gold")

function handleToggle() {
    checked = !checked;
    updateDisplay();
}

function updateDisplay() {
    const silverSpan = document.getElementById('silverSpan');
    const goldSpan = document.getElementById('goldSpan');
    const checkbox = document.querySelector('.switch__items__left__checkbox');

    checkbox.checked = checked;
    silverSpan.classList.toggle(checked);
    goldSpan.classList.toggle(!checked);

    if (!checked) {
        silverAct.classList.add("switchAct");
        goldAct.classList.remove("switchAct");
    } else {
        silverAct.classList.remove("switchAct");
        goldAct.classList.add("switchAct");
    }
}
// switch end

// Faq Start
function toggleAnswer(id) {
    const answer = document.getElementById(id);
    const p = document.getElementById(`p-${id}`);
    answer.classList.toggle('faqAct');
    p.classList.toggle('faqActP');
}
// Faq End