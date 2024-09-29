// Open popup
function openServicePopup(serviceId) {
    const popupModal = document.getElementById("servicePopup");
    // console.log('Opening Service Popup...');
    
    // Set the modal to be active
    popupModal.style.display = "flex"; // Make modal visible
    setTimeout(function() {
        popupModal.classList.add('active'); // Add 'active' class after a slight delay
    }, 10);

    // Load the content
    let serviceDetails = getServiceDetails(serviceId);
    document.getElementById("popupTitle").innerText = serviceDetails.title;
    document.getElementById("popupDetails").innerHTML = serviceDetails.details;

    // Re-attach the click event to close the popup
    window.onclick = function(event) {
        // console.log('Window Clicked! Event Target:', event.target);
        if (event.target === popupModal) {
            // console.log('Clicked outside the modal content, closing the popup...');
            closeServicePopup();
        }
    };
}


// Close popup
function closeServicePopup() {
    const popupModal = document.getElementById("servicePopup");
    // console.log('Closing Service Popup...');

    popupModal.classList.add('closing');

    setTimeout(function() {
        popupModal.style.display = "none";
        popupModal.classList.remove('active', 'closing'); // Reset classes
    }, 300); // Match the transition duration
}

// Close popup if clicking outside of content
window.onclick = function(event) {
    // console.log('Window Clicked! Event Target:', event.target); // Log every click event
    const popupModal = document.getElementById("servicePopup");
    // console.log('Popup Modal:', popupModal);
    // console.log('Is event target the popup?', event.target === popupModal);

    if (event.target === popupModal) {
        // console.log('Clicked outside, closing modal');
        closeServicePopup();
    } else {
        // console.log('Clicked inside, not closing modal');
    }
};



// Function to get service details
// Function to get service details
function getServiceDetails(serviceId) {
const services = {
1: {
    title: 'WEB Дизайн',
    details: `
        <h3>Описание</h3>
        <p>Наши специалисты по веб-дизайну создают уникальные и адаптивные сайты, которые соответствуют вашим бизнес-целям.</p>
        <h3>Преимущества</h3>
        <ul>
            <li>Индивидуальный подход к дизайну</li>
            <li>Мобильная адаптивность</li>
            <li>Современные технологии и тренды</li>
            <li>Привлечение и удержание пользователей</li>
        </ul>
        <h3>Что мы предлагаем</h3>
        <p>Мы разрабатываем пользовательский интерфейс и опыт, которые привлекают внимание и повышают вовлеченность ваших пользователей.</p>
    `,
    image: 'img/service-1.jpg' // Image for WEB Дизайн
},
2: {
    title: 'Разработка Приложений',
    details: `
        <h3>Описание</h3>
        <p>Мы предлагаем полный цикл разработки приложений: от проектирования до внедрения.</p>
        <h3>Преимущества</h3>
        <ul>
            <li>Разработка как веб-, так и мобильных приложений</li>
            <li>Интуитивно понятный интерфейс</li>
            <li>Высокая производительность</li>
            <li>Интеграция с другими системами</li>
        </ul>
        <h3>Что мы предлагаем</h3>
        <p>Наша команда разрабатывает как веб-, так и мобильные приложения, которые адаптированы под потребности вашего бизнеса.</p>
    `,
    image: 'img/service-2.jpg' // Image for Разработка Приложений
},
3: {
    title: 'SEO оптимизация',
    details: `
        <h3>Описание</h3>
        <p>SEO оптимизация — это важный инструмент для повышения видимости вашего сайта в поисковых системах.</p>
        <h3>Преимущества</h3>
        <ul>
            <li>Увеличение органического трафика</li>
            <li>Повышение позиций в поисковой выдаче</li>
            <li>Анализ ключевых слов и структуры сайта</li>
            <li>Аудит SEO стратегий</li>
        </ul>
        <h3>Что мы предлагаем</h3>
        <p>Наша команда анализирует структуру вашего сайта и ключевые слова, чтобы улучшить ранжирование в поисковиках.</p>
    `,
    image: 'img/service-3.jpg' // Image for SEO оптимизация
},
4: {
    title: 'Социальный Маркетинг',
    details: `
        <h3>Описание</h3>
        <p>Социальные сети играют важную роль в продвижении бизнеса.</p>
        <h3>Преимущества</h3>
        <ul>
            <li>Увеличение вовлеченности аудитории</li>
            <li>Разработка контента для социальных сетей</li>
            <li>Управление рекламными кампаниями</li>
            <li>Анализ и корректировка стратегий</li>
        </ul>
        <h3>Что мы предлагаем</h3>
        <p>Мы разрабатываем комплексные стратегии по управлению вашими социальными аккаунтами и увеличению вовлеченности аудитории.</p>
    `,
    image: 'img/service-4.jpg' // Image for Социальный Маркетинг
},
5: {
    title: 'E-Mail Маркетинг',
    details: `
        <h3>Описание</h3>
        <p>E-Mail маркетинг — это эффективный способ взаимодействия с вашей аудиторией и увеличения продаж.</p>
        <h3>Преимущества</h3>
        <ul>
            <li>Персонализированные email-кампании</li>
            <li>Автоматизация рассылок</li>
            <li>Сегментация аудитории</li>
            <li>Анализ эффективности кампаний</li>
        </ul>
        <h3>Что мы предлагаем</h3>
        <p>Мы создаем персонализированные email-кампании, которые помогают удерживать клиентов, а также привлекать новых.</p>
    `,
    image: 'img/service-5.jpg' // Image for E-Mail Маркетинг
},
6: {
    title: 'Консалтинг и бизнес стратегии',
    details: `
        <h3>Описание</h3>
        <p>Мы предлагаем консалтинговые услуги для компаний, которые стремятся к оптимизации своих бизнес-процессов и разработке долгосрочных стратегий.</p>
        <h3>Преимущества</h3>
        <ul>
            <li>Анализ текущих бизнес-процессов</li>
            <li>Выявление возможностей для роста</li>
            <li>Разработка эффективных стратегий</li>
            <li>Сопровождение на всех этапах внедрения</li>
        </ul>
        <h3>Что мы предлагаем</h3>
        <p>Наша команда экспертов помогает вам анализировать текущую деятельность и предлагать решения для повышения эффективности.</p>
    `,
    image: 'img/service-6.jpg' // Image for Консалтинг и бизнес стратегии
},
7: {
    title: 'Рекрутинг',
    details: `
        <h3>Описание</h3>
        <p>Мы предоставляем полный цикл рекрутинговых услуг для поиска и найма квалифицированных кандидатов.</p>
        <h3>Что мы предлагаем</h3>
        <ul>
            <li>Поиск кандидатов</li>
            <li>Просмотр релевантных резюме</li>
            <li>Проведение первичного интервью и тестирования</li>
            <li>Коммуникация с кандидатами</li>
            <li>Анализ рынка труда</li>
        </ul>
    `,
    image: 'img/service-7.jpg' // First new image
},
8: {
    title: 'Руководитель отдела продаж',
    details: `
        <h3>Описание</h3>
        <p>Управление отделом продаж с упором на достижение высоких показателей эффективности.</p>
        <h3>Что мы предлагаем</h3>
        <ul>
            <li>Обучение сотрудников</li>
            <li>План продаж</li>
            <li>Разработка стратегий продаж</li>
            <li>Контроль работы менеджеров</li>
        </ul>
    `,
    image: 'img/service-8.jpg' // Second new image
},
9: {
    title: 'Анализ отдела продаж',
    details: `
        <h3>Описание</h3>
        <p>Анализ и оценка эффективности работы отдела продаж для улучшения результатов.</p>
        <h3>Что мы предлагаем</h3>
        <ul>
            <li>Целевая аудитория</li>
            <li>Средний чек</li>
            <li>Каналы привлечения клиента</li>
            <li>Анализ качества лидов</li>
        </ul>
    `,
    image: 'img/service-9.jpg' // Third new image
},
10: {
    title: 'Услуги бизнес-тренера',
    details: `
        <h3>Описание</h3>
        <p>Предоставление бизнес-тренингов и тренингов для повышения квалификации сотрудников.</p>
        <h3>Что мы предлагаем</h3>
        <ul>
            <li>Разработка тренингов, вебинаров</li>
            <li>Навыки коммуникации</li>
            <li>Командообразование и лидерство</li>
            <li>Бизнес-игры и тимбилдинг</li>
        </ul>
    `,
    image: 'img/service-10.jpg' // Fourth new image
}
};
return services[serviceId];
}