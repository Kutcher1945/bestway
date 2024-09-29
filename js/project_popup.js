// Open project popup
function openProjectPopup(projectId) {
    const popupModal = document.getElementById("projectPopup");
    
    // Set the modal to be active and apply the 'suck out' effect
    popupModal.style.display = "flex"; // Make modal visible
    setTimeout(function() {
        popupModal.classList.add('active'); // Add 'active' class after a slight delay to trigger animation
    }, 10); // Slight delay to ensure display change is registered
    
    // Dynamically load content based on the clicked project
    let projectDetails = getProjectDetails(projectId);
    document.getElementById("popupProjectTitle").innerText = projectDetails.title;  // Set title
    document.getElementById("popupProjectDetails").innerHTML = projectDetails.details;  // Set details
    document.getElementById("popupProjectImage").src = projectDetails.image;  // Set image dynamically
}

// Close project popup
function closeProjectPopup() {
    const popupModal = document.getElementById("projectPopup");
    
    // Add the closing class to trigger the 'suck in' effect
    popupModal.classList.add('closing');
    
    // After the animation finishes (300ms), hide the popup
    setTimeout(function() {
        popupModal.style.display = "none"; // Hide modal
        popupModal.classList.remove('active', 'closing'); // Remove animation classes
    }, 300); // Duration matches the CSS animation for closing
}

// Close popup if user clicks outside the content area
window.onclick = function(event) {
    const popupModal = document.getElementById("projectPopup");
    if (event.target === popupModal) {
        closeProjectPopup();
    }
};

// Project details
function getProjectDetails(projectId) {
    const projects = {
        1: {
            title: 'Atmosfar Aluminium',
            details: `
                <h3>Описание проекта</h3>
                <p>Разработка современного и функционального корпоративного веб-сайта для производителя алюминиевой продукции.</p>
                <h3>Ключевые особенности</h3>
                <ul>
                    <li>Индивидуальный дизайн</li>
                    <li>Мобильная адаптация</li>
                    <li>SEO оптимизация для повышения видимости в поисковых системах</li>
                </ul>
            `,
            image: 'img/project-1.jpg'
        },
        2: {
            title: 'Ivy Wallet: Менеджер финансов',
            details: `
                <h3>Описание проекта</h3>
                <p>Разработка мобильного приложения для управления личными финансами с интуитивно понятным интерфейсом.</p>
                <h3>Ключевые особенности</h3>
                <ul>
                    <li>Функциональность отслеживания расходов и доходов</li>
                    <li>Интеграция с банковскими счетами</li>
                    <li>Генерация финансовых отчетов</li>
                </ul>
            `,
            image: 'img/project-2.jpg'
        },
        3: {
            title: 'Шестимесячный план по SEO для TechShop.kz',
            details: `
                <h3>Описание проекта</h3>
                <p>SEO стратегия для улучшения видимости интернет-магазина электроники в поисковых системах.</p>
                <h3>Ключевые особенности</h3>
                <ul>
                    <li>Анализ ключевых слов</li>
                    <li>Оптимизация структуры сайта</li>
                    <li>Увеличение органического трафика</li>
                </ul>
            `,
            image: 'img/project-3.jpg'
        },
        4: {
            title: 'SMM для Foodie: Доставка еды',
            details: `
                <h3>Описание проекта</h3>
                <p>Управление социальными сетями и создание контент-стратегии для компании по доставке еды.</p>
                <h3>Ключевые особенности</h3>
                <ul>
                    <li>Целевой контент для социальных сетей</li>
                    <li>Рекламные кампании в Instagram и Facebook</li>
                    <li>Аналитика вовлеченности аудитории</li>
                </ul>
            `,
            image: 'img/project-4.jpg'
        },
        5: {
            title: 'Разработка стратегии для GruzDogruz Logistics',
            details: `
                <h3>Описание проекта</h3>
                <p>Консалтинг и разработка бизнес-стратегии для логистической компании.</p>
                <h3>Ключевые особенности</h3>
                <ul>
                    <li>Анализ рынка и конкурентов</li>
                    <li>Оптимизация логистических процессов</li>
                    <li>Разработка плана по расширению бизнеса</li>
                </ul>
            `,
            image: 'img/project-5.jpg'
        },
        6: {
            title: 'Кампания по удержанию клиентов для QuickBuy',
            details: `
                <h3>Описание проекта</h3>
                <p>E-Mail маркетинговая кампания для удержания клиентов и повышения повторных продаж в интернет-магазине.</p>
                <h3>Ключевые особенности</h3>
                <ul>
                    <li>Персонализированные email-рассылки</li>
                    <li>Сегментация клиентов для целевых кампаний</li>
                    <li>Анализ эффективности кампаний</li>
                </ul>
            `,
            image: 'img/project-6.jpg'
        }
    };
    return projects[projectId];
}