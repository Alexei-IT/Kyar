var sw = new Swiper('.sw', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    observer: true,
    observeParents: true,
    loop: true,
    nested: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
});


var swiper2 = new Swiper(".main-swiper", {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    observer: true,
    loop: true,
    slideToClickedSlide: false,
});
var sw2 = new Swiper('.sw2', {

    loop: true,
    nested: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
});

var sw3 = new Swiper('.swiper-p', {
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    thumbs: {
        swiper: {
            el: '.sw-small',
            slidesPerView: 3,
            spaceBetween: 10.6,
        }
    }
});

function myFunction() {
    var copyText = document.getElementById("myInput");
    copyText.hidden = false;
    copyText.select();
    document.execCommand("copy");
    copyText.hidden = true;
}


//форма
function toggleSubmitButton() {
    var nameInput = document.getElementById('nameInput');
    var phoneInput = document.getElementById('phoneInput');
    var submitButton = document.getElementById('submitButton');
    var checkboxInput = document.getElementById('checkboxInput');

    if (nameInput.value.trim() !== '' && phoneInput.value.trim() !== '' && checkboxInput.checked) {
        submitButton.disabled = false;
        submitButton.style.opacity = 1;
    } else {
        submitButton.disabled = true;
        submitButton.style.opacity = 0.5;
    }
}

// Вызываем toggleSubmitButton при загрузке страницы
window.onload = function() {
    toggleSubmitButton();
};

// Добавляем обработчики событий
document.getElementById('nameInput').addEventListener('input', toggleSubmitButton);
document.getElementById('phoneInput').addEventListener('input', toggleSubmitButton);
document.getElementById('checkboxInput').addEventListener('change', toggleSubmitButton);


//модальное окно
function openModal() {
    document.getElementById('callBackModal').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function closeModal() {
    document.getElementById('callBackModal').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

function toggleSubmitButton2() {
    var nameInput2 = document.getElementById('nameInput2');
    var phoneInput2 = document.getElementById('phoneInput2');
    var submitButton2 = document.getElementById('submitButton2');
    var checkboxInput2 = document.getElementById('checkboxInput2');

    if (nameInput2.value.trim() !== '' && phoneInput2.value.trim() !== '' && checkboxInput2.checked) {
        submitButton2.disabled = false;
        submitButton2.style.opacity = 1;
    } else {
        submitButton2.disabled = true;
        submitButton2.style.opacity = 0.5;
    }
}

// Вызываем toggleSubmitButton2 при загрузке страницы
window.onload = function() {
    toggleSubmitButton2();
};

// Добавляем обработчики событий
document.getElementById('nameInput2').addEventListener('input', toggleSubmitButton2);
document.getElementById('phoneInput2').addEventListener('input', toggleSubmitButton2);
document.getElementById('checkboxInput2').addEventListener('change', toggleSubmitButton2);


const menuToggle = document.getElementById('menu-toggle');
const mobUl = document.querySelector('.mob-ul');
const close = document.querySelector('.close');

menuToggle.addEventListener('click', () => {
    mobUl.classList.toggle('active');
});

close.addEventListener('click', () => {
    mobUl.classList.remove('active');
});



document.addEventListener('DOMContentLoaded', function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', './xml/prise.xml', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var xml = xhr.responseXML;
            var prices = xml.getElementsByTagName('price');
            var priceArray = Array.from(prices).map(function(price) {
                return price.textContent;
            });

            // Получаем текущий URL и определяем, какая это страница
            var url = window.location.pathname;
            var pageIndex = -1;
            if (url.includes('cart1.html')) {
                pageIndex = 0;
            } else if (url.includes('cart2.html')) {
                pageIndex = 1;
            } else if (url.includes('cart3.html')) {
                pageIndex = 2;
            }

            // Устанавливаем цену для текущей страницы
            if (pageIndex !== -1 && priceArray[pageIndex]) {
                var priceElement = document.querySelector('.prize');
                priceElement.textContent = priceArray[pageIndex];
            }
        }
    };
    xhr.send();
});