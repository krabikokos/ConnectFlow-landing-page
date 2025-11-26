// --- ИНИЦИАЛИЗАЦИЯ SCROLL REVEAL (АНИМАЦИЯ ПРИ СКРОЛЛЕ) ---

// Проверяем, что библиотека загрузилась
if (typeof ScrollReveal !== 'undefined') {
    
    // Настраиваем общие параметры анимации (для футуристического стиля)
    const sr = ScrollReveal({
        origin: 'bottom',       // Элементы всплывают снизу
        distance: '50px',       // Поднимаются на 50 пикселей
        duration: 1000,         // Продолжительность 1.0 секунда
        delay: 0,               // Без начальной задержки
        easing: 'ease-in-out',  // Плавное начало и конец
        reset: false            // Анимация срабатывает только один раз
    });

    // 1. Анимируем ЗАГОЛОВКИ СЕКЦИЙ (чтобы они появлялись первыми)
    sr.reveal('h2, .section-description', { 
        delay: 100,
        interval: 100 
    });

    // 2. Анимируем КАРТОЧКИ (features-card), давая им небольшой интервал для каскадного эффекта
    sr.reveal('.features-grid .features-card', {
        interval: 150, // Каждая карточка появляется чуть позже предыдущей
        scale: 0.95    // Немного увеличиваем при появлении для более динамичного эффекта
    });

    // 3. Анимируем СЕКЦИЮ 'О НАС'
    sr.reveal('#about p', { 
        origin: 'left',
        distance: '30px',
        delay: 200
    });

    // 4. Анимируем ФОРМУ КОНТАКТОВ
    sr.reveal('.contact-form', { 
        delay: 300
    });

} 
// --- КОНЕЦ SCROLL REVEAL ---

// --- КОД ДЛЯ ГАМБУРГЕР-МЕНЮ ---

const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('.nav-list a');


// Обработчик клика для гамбургер-меню
menuToggle.addEventListener('click', () => {
    // Этот класс 'active' запускает анимацию max-height в CSS
    mainNav.classList.toggle('active');
});

// Закрытие меню при клике на ссылку (на мобильных)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (mainNav.classList.contains('active')) {
             mainNav.classList.remove('active');
        }
    });
});


// --- КОД ДЛЯ ВАЛИДАЦИИ ФОРМЫ ---

// Важно: в твоем HTML ID формы был 'contactFrom', исправлено на 'contactForm'
const contactForm = document.getElementById('contactFrom'); 

if (contactForm) { // Проверяем, существует ли форма
    const formMessage = document.createElement('p'); // Создаем элемент для сообщения
    formMessage.className = 'form-message';
    contactForm.appendChild(formMessage);

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const emailInput = document.getElementById('email');
        const email = emailInput ? emailInput.value.trim() : '';

        // Простая валидация: проверяем, что поле заполнено
        if (email === '') {
            formMessage.textContent = 'Please enter a valid email address.';
            formMessage.style.color = '#ff6347'; // Красный для ошибки
            return; 
        }
        
        // Имитация успешной отправки
        formMessage.textContent = 'Success! You are signed up for early access.';
        formMessage.style.color = '#0D00A4'; // Акцентный цвет для успеха
        
        // Очистка формы
        contactForm.reset();
    });
}