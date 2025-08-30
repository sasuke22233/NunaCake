// Основной скрипт для конструктора тортов
// Данные импортируются из data.js

// Глобальные переменные
let layerCount = 3;
let selectedLayers = [];
let selectedCreams = [];
let selectedFillings = []; // Массив начинок для каждого слоя
let currentModalType = '';
let currentModalIndex = 0;
let currentSlideIndex = 0;
let currentIngredients = [];

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    setupSmoothScrolling();
    setupEventListeners();
    
    // Инициализируем конструктор только если он есть на странице
    if (document.querySelector('.cake-constructor')) {
        initializeConstructor();
    }
    
    setupMobileMenu();
});

// Настройка плавной прокрутки
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Настройка мобильного меню
function setupMobileMenu() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }
}

// Настройка обработчиков событий
function setupEventListeners() {
    // Обработчики для карточек популярных тортов
    document.querySelectorAll('.cake-card').forEach(card => {
        card.addEventListener('click', function(e) {
            // Проверяем, что клик не по кнопке
            if (!e.target.classList.contains('btn')) {
                const cakeType = this.getAttribute('data-cake');
                showRecipeModal(cakeType);
            }
        });
        
        // Обработчик для кнопки рецепта
        const recipeBtn = card.querySelector('.btn');
        if (recipeBtn) {
            recipeBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                const cakeType = card.getAttribute('data-cake');
                showRecipeModal(cakeType);
            });
        }
    });

    // Обработчик для закрытия модального окна с рецептом
    const recipeModalClose = document.querySelector('#recipeModal .close');
    if (recipeModalClose) {
        recipeModalClose.addEventListener('click', function() {
            document.getElementById('recipeModal').style.display = 'none';
        });
    }

    // Обработчик для закрытия модального окна с рецептом при клике вне его
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('recipeModal');
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Обработчики для модальных окон конструктора (только если конструктор есть на странице)
    if (document.querySelector('.cake-constructor')) {
        // Обработчик для закрытия модального окна выбора ингредиентов
        window.addEventListener('click', function(event) {
            const modal = document.getElementById('ingredientModal');
            if (event.target === modal) {
                closeIngredientModal();
            }
        });
    
        // Обработчик для закрытия модального окна с ингредиентами
        window.addEventListener('click', function(event) {
            const modal = document.getElementById('ingredientsModal');
            if (event.target === modal) {
                closeIngredientsModal();
            }
        });
    }

    // Обработчики для навигации
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// Инициализация конструктора
function initializeConstructor() {
    selectedLayers = new Array(layerCount).fill(null);
    selectedCreams = new Array(layerCount - 1).fill(null);
    selectedFillings = new Array(layerCount).fill(null);
    updateLayerCountDisplay();
}

// Изменение количества коржей
function changeLayers(delta) {
    const newCount = layerCount + delta;
    if (newCount >= 2 && newCount <= 6) {
        layerCount = newCount;
        selectedLayers = new Array(layerCount).fill(null);
        selectedCreams = new Array(layerCount - 1).fill(null);
        selectedFillings = new Array(layerCount).fill(null);
        updateLayerCountDisplay();
        
        // Скрываем кнопку рецепта и нижнюю секцию при изменении количества слоев
        const recipeButtonContainer = document.getElementById('recipeButtonContainer');
        const bottomSection = document.getElementById('bottomSection');
        if (recipeButtonContainer) recipeButtonContainer.style.display = 'none';
        if (bottomSection) bottomSection.style.display = 'none';
        
        // Обновляем эскиз если конструктор уже запущен
        if (document.getElementById('constructorMain').style.display !== 'none') {
            updateCakeSketch();
            updateCompositionPanel();
        }
    }
}

// Обновление отображения количества коржей
function updateLayerCountDisplay() {
    const layerCountElement = document.getElementById('layerCount');
    if (layerCountElement) {
        layerCountElement.textContent = layerCount;
    }
}

// Запуск конструктора
function startConstructor() {
    const settings = document.getElementById('cakeSettings');
    const main = document.getElementById('constructorMain');
    
    if (settings && main) {
        settings.style.display = 'none';
        main.style.display = 'block';
        
        // Скрываем кнопку рецепта и нижнюю секцию при запуске
        const recipeButtonContainer = document.getElementById('recipeButtonContainer');
        const bottomSection = document.getElementById('bottomSection');
        if (recipeButtonContainer) recipeButtonContainer.style.display = 'none';
        if (bottomSection) bottomSection.style.display = 'none';
        
        updateCakeSketch();
        updateCompositionPanel();
        
        // Плавно прокручиваем к конструктору
        setTimeout(() => {
            main.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }, 100);
    }
}

// Обновление эскиза торта
function updateCakeSketch() {
    const sketch = document.getElementById('cakeSketch');
    if (!sketch) return;
    
    sketch.innerHTML = '';
    
    for (let i = 0; i < layerCount; i++) {
        // Добавляем корж
        const layerSlot = document.createElement('div');
        layerSlot.className = 'cake-layer-slot';
        layerSlot.onclick = () => showIngredientModal('layer', i);
        
        if (selectedLayers[i]) {
            const layer = layers.find(l => l.id === selectedLayers[i]);
            if (layer) {
                const img = document.createElement('img');
                img.src = layer.image;
                img.alt = layer.name;
                layerSlot.appendChild(img);
                layerSlot.classList.add('selected');
            }
        } else {
            layerSlot.innerHTML = '<div class="placeholder"></div>';
        }
        
        sketch.appendChild(layerSlot);
        
        // Добавляем начинку и крем (кроме последнего коржа)
        if (i < layerCount - 1) {
            // Добавляем начинку
            const fillingSlot = document.createElement('div');
            fillingSlot.className = 'filling-slot';
            fillingSlot.onclick = () => showIngredientModal('filling', i);
            
            if (selectedFillings[i]) {
                const filling = fillings.find(f => f.id === selectedFillings[i]);
                if (filling) {
                    const img = document.createElement('img');
                    img.src = filling.image;
                    img.alt = filling.name;
                    fillingSlot.appendChild(img);
                    fillingSlot.classList.add('selected');
                }
            } else {
                fillingSlot.innerHTML = '<div class="placeholder"></div>';
            }
            
            sketch.appendChild(fillingSlot);
            
            // Добавляем крем
            const creamSlot = document.createElement('div');
            creamSlot.className = 'cream-slot';
            creamSlot.onclick = () => showIngredientModal('cream', i);
            
            if (selectedCreams[i]) {
                const cream = creams.find(c => c.id === selectedCreams[i]);
                if (cream) {
                    const img = document.createElement('img');
                    img.src = cream.image;
                    img.alt = cream.name;
                    creamSlot.appendChild(img);
                    creamSlot.classList.add('selected');
                }
            } else {
                creamSlot.innerHTML = '<div class="placeholder"></div>';
            }
            
            sketch.appendChild(creamSlot);
        }
    }
}

// Показать модальное окно выбора ингредиентов
function showIngredientModal(type, index) {
    currentModalType = type;
    currentModalIndex = index;
    currentSlideIndex = 0;
    
    const modal = document.getElementById('ingredientModal');
    const title = document.getElementById('modalTitle');
    const sliderContainer = document.getElementById('sliderContainer');
    const sliderDots = document.getElementById('sliderDots');
    
    if (!modal || !title || !sliderContainer || !sliderDots) return;
    
    // Устанавливаем заголовок в зависимости от типа
    if (type === 'layer') {
        title.textContent = 'Выберите корж';
    } else if (type === 'cream') {
        title.textContent = 'Выберите крем';
    } else if (type === 'filling') {
        title.textContent = 'Выберите начинку';
    }
    
    // Получаем список ингредиентов
    if (type === 'layer') {
        currentIngredients = layers;
    } else if (type === 'cream') {
        currentIngredients = creams;
    } else if (type === 'filling') {
        currentIngredients = fillings;
    }
    
    // Отладочная информация
    console.log(`Открыт слайдер для ${type}, количество элементов: ${currentIngredients.length}`);
    
    // Проверяем данные
    if (!currentIngredients || currentIngredients.length === 0) {
        console.error('Нет данных для слайдера:', type);
        return;
    }
    
    // Очищаем слайдер
    sliderContainer.innerHTML = '';
    sliderDots.innerHTML = '';
    
    // Создаем слайды с оптимизированной загрузкой
    const fragment = document.createDocumentFragment();
    const dotsFragment = document.createDocumentFragment();
    
    currentIngredients.forEach((ingredient, i) => {
        const slide = document.createElement('div');
        slide.className = 'slider-item';
        
        slide.innerHTML = `
            <img src="${ingredient.image}" alt="${ingredient.name}" loading="lazy">
            <div class="item-name">${ingredient.name}</div>
            <div class="item-description">${ingredient.description}</div>
            <button class="ingredients-btn" onclick="showIngredientsModal('${type}', '${ingredient.name}')">
                <i class="fas fa-list"></i> Ингредиенты
            </button>
            <button class="select-btn">Выбрать ${type === 'layer' ? 'корж' : type === 'cream' ? 'крем' : 'начинку'}</button>
        `;
        
        // Добавляем обработчик клика для кнопки выбора
        const selectBtn = slide.querySelector('.select-btn');
        selectBtn.onclick = (e) => {
            e.stopPropagation();
            selectIngredient(ingredient);
        };
        
        fragment.appendChild(slide);
        
        // Создаем точку навигации
        const dot = document.createElement('div');
        dot.className = 'slider-dot';
        if (i === 0) dot.classList.add('active');
        dot.onclick = () => goToSlide(i);
        dotsFragment.appendChild(dot);
    });
    
    sliderContainer.appendChild(fragment);
    sliderDots.appendChild(dotsFragment);
    
    // Проверяем созданные элементы
    const createdSlides = sliderContainer.querySelectorAll('.slider-item');
    const createdDots = sliderDots.querySelectorAll('.slider-dot');
    console.log(`Создано слайдов: ${createdSlides.length}, точек: ${createdDots.length}`);
    
    // Проверяем видимость слайдов
    createdSlides.forEach((slide, index) => {
        const rect = slide.getBoundingClientRect();
        console.log(`Слайд ${index}: ширина=${slide.offsetWidth}, высота=${slide.offsetHeight}, видим=${rect.width > 0 && rect.height > 0}`);
    });
    
    // Обновляем навигацию
    updateSliderNavigation();
    
    // Добавляем поддержку свайпов для мобильных устройств
    addSwipeSupport();
    
    // Добавляем поддержку drag для горизонтальной прокрутки
    addDragSupport();
    
    // Добавляем индикатор текущего слайда
    addSliderCounter();
    
    // Принудительно обновляем отображение
    setTimeout(() => {
        // Дополнительная проверка
        const slides = sliderContainer.querySelectorAll('.slider-item');
        const dots = sliderDots.querySelectorAll('.slider-dot');
        console.log(`Финальная проверка: ${slides.length} слайдов, ${dots.length} точек`);
        console.log('Первый слайд видим:', slides[0] ? slides[0].offsetWidth > 0 : false);
        
        // Принудительно обновляем после загрузки изображений
        const images = sliderContainer.querySelectorAll('img');
        let loadedImages = 0;
        images.forEach(img => {
            if (img.complete) {
                loadedImages++;
            } else {
                img.onload = () => {
                    loadedImages++;
                    if (loadedImages === images.length) {
                        console.log('Все изображения загружены');
                    }
                };
            }
        });
        if (loadedImages === images.length) {
            console.log('Все изображения уже загружены');
        }
        
        // Показываем информацию о слайдере
        console.log('Слайдер готов к использованию');
        console.log('Используйте горизонтальную прокрутку для навигации');
    }, 100);
    
    modal.style.display = 'block';
}

// Выбор ингредиента
function selectIngredient(ingredient) {
    if (currentModalType === 'layer') {
        selectedLayers[currentModalIndex] = ingredient.id;
    } else if (currentModalType === 'cream') {
        selectedCreams[currentModalIndex] = ingredient.id;
    } else if (currentModalType === 'filling') {
        selectedFillings[currentModalIndex] = ingredient.id; // Сохраняем выбранную начинку
    }
    
    closeIngredientModal();
    updateCakeSketch();
    updateCompositionPanel();
    
    // Проверяем, заполнен ли весь торт
    checkCakeCompletion();
}

// Закрыть модальное окно выбора ингредиентов
function closeIngredientModal() {
    const modal = document.getElementById('ingredientModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Обновление панели состава торта
function updateCompositionPanel() {
    const list = document.getElementById('compositionList');
    if (!list) return;
    
    list.innerHTML = '';
    
    let itemIndex = 1;
    
    // Добавляем выбранные коржи
    selectedLayers.forEach((layerId, index) => {
        if (layerId) {
            const layer = layers.find(l => l.id === layerId);
            if (layer) {
                const item = createCompositionItem(layer, `Корж ${index + 1}`, itemIndex);
                list.appendChild(item);
                itemIndex++;
            }
        }
    });
    
    // Добавляем выбранные начинки и кремы
    for (let i = 0; i < selectedCreams.length; i++) {
        // Добавляем начинку
        if (selectedFillings[i]) {
            const filling = fillings.find(f => f.id === selectedFillings[i]);
            if (filling) {
                const item = createCompositionItem(filling, `Начинка ${i + 1}`, itemIndex);
                list.appendChild(item);
                itemIndex++;
            }
        }
        
        // Добавляем крем
        if (selectedCreams[i]) {
            const cream = creams.find(c => c.id === selectedCreams[i]);
            if (cream) {
                const item = createCompositionItem(cream, `Крем ${i + 1}`, itemIndex);
                list.appendChild(item);
                itemIndex++;
            }
        }
    }
}

// Создание элемента состава торта
function createCompositionItem(ingredient, type, number) {
    const item = document.createElement('div');
    item.className = 'composition-item selected';
    
    item.innerHTML = `
        <div class="composition-number">${number}</div>
        <div class="composition-info">
            <div class="composition-name">${ingredient.name}</div>
            <div class="composition-type">${type}</div>
        </div>
    `;
    
    return item;
}

// Проверка завершения торта
function checkCakeCompletion() {
    const allLayersSelected = selectedLayers.every(layer => layer !== null);
    const allCreamsSelected = selectedCreams.every(cream => cream !== null);
    const allFillingsSelected = selectedFillings.slice(0, selectedCreams.length).every(filling => filling !== null);
    
    if (allLayersSelected && allCreamsSelected && allFillingsSelected) {
        // Показываем только кнопку рецепта
        const recipeButtonContainer = document.getElementById('recipeButtonContainer');
        if (recipeButtonContainer) {
            recipeButtonContainer.style.display = 'block';
        }
    }
}

// Обновление панели ингредиентов
function updateIngredientsPanel() {
    const list = document.getElementById('ingredientsList');
    if (!list) return;
    
    list.innerHTML = '';
    
    // Добавляем точные количества ингредиентов
    const diameter = parseInt(document.getElementById('diameterSelect').value) || 18;
    const multiplier = ingredientCalculator.sizeMultipliers[diameter] || 1;
    
    const ingredients = [
        { name: 'Мука пшеничная высшего сорта', amount: `${Math.round(200 * multiplier)}г` },
        { name: 'Сахар-песок', amount: `${Math.round(150 * multiplier)}г` },
        { name: 'Яйца категории А', amount: `${Math.round(3 * multiplier)} шт` },
        { name: 'Сливочное масло 82.5%', amount: `${Math.round(100 * multiplier)}г` },
        { name: 'Молоко 3.2%', amount: `${Math.round(200 * multiplier)}мл` },
        { name: 'Разрыхлитель теста', amount: `${Math.round(1 * multiplier)} ч.л.` },
        { name: 'Ванильный экстракт', amount: `${Math.round(1 * multiplier)} ч.л.` },
        { name: 'Соль', amount: `${Math.round(0.5 * multiplier)} ч.л.` },
        { name: 'Сахарная пудра (для крема)', amount: `${Math.round(100 * multiplier)}г` },
        { name: 'Сливки 33-35%', amount: `${Math.round(300 * multiplier)}мл` }
    ];
    
    ingredients.forEach(ingredient => {
        const item = createIngredientItem(ingredient, '');
        list.appendChild(item);
    });
}

// Создание элемента ингредиента
function createIngredientItem(ingredient, type) {
    const item = document.createElement('div');
    item.className = 'ingredient-item';
    
    item.innerHTML = `
        <div class="ingredient-info">
            <div class="ingredient-name">${ingredient.name}</div>
            <div class="ingredient-type">${ingredient.amount}</div>
        </div>
    `;
    
    return item;
}

// Обновление панели рецепта
function updateRecipePanel() {
    const content = document.getElementById('recipeContent');
    if (!content) return;
    
    if (!selectedLayers.some(l => l) && !selectedCreams.some(c => c) && !selectedFillings.some(f => f)) { // Проверяем все слои
        content.innerHTML = '<p>Выберите коржи, кремы и начинку для получения рецепта</p>';
        return;
    }
    
    // Показываем сообщение о необходимости нажать кнопку рецепта
    content.innerHTML = '<p>Нажмите кнопку "Показать рецепт" для получения подробных инструкций</p>';
}

// Генерация рецепта
function generateRecipe() {
    let recipe = '<h4>Приготовление коржей:</h4><ol>';
    
    // Рецепт для коржей
    recipe += `
        <li>Разогрейте духовку до 180°C, смажьте формы маслом</li>
        <li>Смешайте муку, сахар и разрыхлитель в большой миске</li>
        <li>Взбейте яйца с сахаром до пышности (около 5 минут)</li>
        <li>Добавьте молоко и растопленное масло, продолжая взбивать</li>
        <li>Соедините сухие и жидкие ингредиенты, аккуратно перемешивая</li>
        <li>Разделите тесто на ${layerCount} равных частей</li>
        <li>Выпекайте каждый корж 25-30 минут до готовности</li>
        <li>Остудите коржи на решетке</li>
    `;
    
    recipe += '</ol><h4>Приготовление кремов:</h4><ol>';
    
    // Рецепт для кремов
    recipe += `
        <li>Взбейте сливочное масло с сахарной пудрой до пышности</li>
        <li>Добавьте ароматизаторы и красители по вкусу</li>
        <li>Взбивайте до получения однородной массы</li>
        <li>При необходимости добавьте немного молока для нужной консистенции</li>
    `;
    
    // Рецепт для начинки
    if (selectedFillings[0]) { // Используем selectedFillings[0] для первого слоя
        const filling = fillings.find(f => f.id === selectedFillings[0]);
        if (filling) {
            recipe += '</ol><h4>Приготовление начинки:</h4><ol>';
            recipe += `
                <li>Подготовьте выбранное конфи или мармелад</li>
                <li>При необходимости разогрейте для лучшей консистенции</li>
                <li>Остудите до комнатной температуры перед использованием</li>
            `;
        }
    }
    
    recipe += '</ol><h4>Сборка торта:</h4><ol>';
    
    // Инструкции по сборке
    recipe += `
        <li>Убедитесь, что коржи полностью остыли</li>
        <li>Промажьте каждый корж кремом равномерным слоем</li>
        ${selectedFillings[0] ? '<li>Добавьте слой начинки между первым коржем и кремом</li>' : ''}
        <li>Сложите коржи друг на друга в правильном порядке</li>
        <li>Покройте боковые стороны и верх торта кремом</li>
        <li>Украсьте торт по желанию (фрукты, шоколад, орехи)</li>
        <li>Охладите в холодильнике 2-3 часа перед подачей</li>
    `;
    
    recipe += '</ol>';
    
    return recipe;
}

// Показать рецепт для созданного торта
function showRecipe() {
    const content = document.getElementById('recipeContent');
    const bottomSection = document.getElementById('bottomSection');
    if (!content || !bottomSection) return;
    
    // Показываем нижнюю секцию с ингредиентами и рецептом
    bottomSection.style.display = 'block';
    
    // Обновляем панели ингредиентов и рецепта
    updateIngredientsPanel();
    
    const recipe = generateRecipe();
    content.innerHTML = recipe;
    
    // Прокручиваем к рецепту
    content.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    // Добавляем анимацию появления
    content.style.opacity = '0';
    content.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        content.style.transition = 'all 0.5s ease';
        content.style.opacity = '1';
        content.style.transform = 'translateY(0)';
    }, 100);
}

// Показать модальное окно с рецептом популярного торта
function showRecipeModal(cakeType) {
    const cake = cakeData[cakeType];
    if (!cake) return;
    
    const modal = document.getElementById('recipeModal');
    const title = document.getElementById('modalTitle');
    const ingredientsList = document.getElementById('ingredientsList');
    const instructionsList = document.getElementById('instructionsList');
    
    if (!modal || !title || !ingredientsList || !instructionsList) return;
    
    title.textContent = cake.name;
    
    ingredientsList.innerHTML = '';
    cake.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
    });
    
    instructionsList.innerHTML = '';
    cake.instructions.forEach(instruction => {
        const li = document.createElement('li');
        li.textContent = instruction;
        instructionsList.appendChild(li);
    });
    
    modal.style.display = 'block';
}

// Анимация при прокрутке
function animateOnScroll() {
    const elements = document.querySelectorAll('.cake-card, .section-title');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('animate');
        }
    });
}

// Обработчик прокрутки для анимаций
window.addEventListener('scroll', animateOnScroll);

// Функции для слайдера
function changeSlide(direction) {
    const newIndex = currentSlideIndex + direction;
    
    // Зацикливание слайдера
    if (newIndex < 0) {
        goToSlide(currentIngredients.length - 1);
    } else if (newIndex >= currentIngredients.length) {
        goToSlide(0);
    } else {
        goToSlide(newIndex);
    }
}

function goToSlide(index) {
    if (index < 0 || index >= currentIngredients.length) return;
    
    currentSlideIndex = index;
    const container = document.getElementById('sliderContainer');
    const dots = document.querySelectorAll('.slider-dot');
    
    if (!container) return;
    
    // Перемещаем слайдер (каждый слайд занимает 100% ширины)
    const translateX = -index * 100;
    container.style.transform = `translateX(${translateX}%)`;
    
    // Обновляем активную точку
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
    
    // Обновляем навигацию
    updateSliderNavigation();
    
    // Обновляем счетчик слайдера
    updateSliderCounter();
}

function updateSliderNavigation() {
    const prevBtn = document.querySelector('.slider-nav.prev');
    const nextBtn = document.querySelector('.slider-nav.next');
    
    // Убираем disabled состояние для зацикленного слайдера
    if (prevBtn) prevBtn.disabled = false;
    if (nextBtn) nextBtn.disabled = false;
}

// Добавление поддержки свайпов для мобильных устройств
function addSwipeSupport() {
    const slider = document.querySelector('.ingredient-slider');
    if (!slider) return;
    
    let startX = 0;
    let endX = 0;
    
    slider.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });
    
    slider.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].clientX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = startX - endX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Свайп влево - следующий слайд
                changeSlide(1);
            } else {
                // Свайп вправо - предыдущий слайд
                changeSlide(-1);
            }
        }
    }
}

// Добавление индикатора текущего слайда
function addSliderCounter() {
    const slider = document.querySelector('.ingredient-slider');
    if (!slider) return;
    
    // Удаляем существующий счетчик, если есть
    const existingCounter = slider.querySelector('.slider-counter');
    if (existingCounter) {
        existingCounter.remove();
    }
    
    // Создаем новый счетчик
    const counter = document.createElement('div');
    counter.className = 'slider-counter';
    counter.textContent = `${currentSlideIndex + 1} из ${currentIngredients.length}`;
    
    slider.appendChild(counter);
}

// Добавление поддержки drag для горизонтальной прокрутки
function addDragSupport() {
    const sliderContainer = document.getElementById('sliderContainer');
    if (!sliderContainer) return;
    
    let isDragging = false;
    let startX = 0;
    let scrollLeft = 0;
    
    sliderContainer.addEventListener('mousedown', (e) => {
        isDragging = true;
        sliderContainer.classList.add('dragging');
        startX = e.pageX - sliderContainer.offsetLeft;
        scrollLeft = sliderContainer.scrollLeft;
    });
    
    sliderContainer.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - sliderContainer.offsetLeft;
        const walk = (x - startX) * 2; // Скорость прокрутки
        sliderContainer.scrollLeft = scrollLeft - walk;
    });
    
    sliderContainer.addEventListener('mouseup', () => {
        isDragging = false;
        sliderContainer.classList.remove('dragging');
    });
    
    sliderContainer.addEventListener('mouseleave', () => {
        isDragging = false;
        sliderContainer.classList.remove('dragging');
    });
}

// Обновление счетчика слайдера
function updateSliderCounter() {
    const counter = document.querySelector('.slider-counter');
    if (counter) {
        counter.textContent = `${currentSlideIndex + 1} из ${currentIngredients.length}`;
    }
}

// Показать модальное окно с ингредиентами
function showIngredientsModal(type, itemName) {
    const modal = document.getElementById('ingredientsModal');
    const title = document.getElementById('ingredientsModalTitle');
    const ingredientsList = document.getElementById('ingredientsModalList');
    
    if (!modal || !title || !ingredientsList) return;
    
    title.textContent = `Ингредиенты для ${itemName}`;
    
    // Очищаем список
    ingredientsList.innerHTML = '';
    
    // Получаем данные об ингредиентах в зависимости от типа
    let ingredientsData = [];
    if (type === 'layer') {
        ingredientsData = [
            { name: 'Мука пшеничная высшего сорта', amount: '200г' },
            { name: 'Сахар-песок', amount: '150г' },
            { name: 'Яйца куриные категории А', amount: '3 шт' },
            { name: 'Сливочное масло 82.5%', amount: '100г' },
            { name: 'Молоко 3.2%', amount: '200мл' },
            { name: 'Разрыхлитель теста', amount: '1 ч.л.' },
            { name: 'Соль', amount: '0.5 ч.л.' },
            { name: 'Ванильный экстракт', amount: '1 ч.л.' },
            { name: 'Экстракт миндаля', amount: '0.5 ч.л.' },
            { name: 'Корица молотая', amount: '0.25 ч.л.' },
            { name: 'Мускатный орех', amount: 'щепотка' },
            { name: 'Кардамон молотый', amount: '0.25 ч.л.' },
            { name: 'Имбирь молотый', amount: '0.25 ч.л.' },
            { name: 'Цедра лимона', amount: '1 ч.л.' },
            { name: 'Цедра апельсина', amount: '1 ч.л.' }
        ];
    } else if (type === 'cream') {
        ingredientsData = [
            { name: 'Сливочное масло 82.5%', amount: '200г' },
            { name: 'Сахарная пудра', amount: '150г' },
            { name: 'Сливки 33-35%', amount: '100мл' },
            { name: 'Молоко цельное', amount: '50мл' },
            { name: 'Ванильный экстракт', amount: '1 ч.л.' },
            { name: 'Соль', amount: 'щепотка' },
            { name: 'Лимонный сок', amount: '1 ч.л.' },
            { name: 'Экстракт розы', amount: '0.5 ч.л.' },
            { name: 'Экстракт лаванды', amount: '0.25 ч.л.' },
            { name: 'Экстракт мяты', amount: '0.25 ч.л.' },
            { name: 'Экстракт апельсина', amount: '0.5 ч.л.' },
            { name: 'Экстракт кокоса', amount: '0.5 ч.л.' },
            { name: 'Экстракт миндаля', amount: '0.5 ч.л.' },
            { name: 'Экстракт фундука', amount: '0.5 ч.л.' },
            { name: 'Экстракт грецкого ореха', amount: '0.5 ч.л.' }
        ];
    } else if (type === 'filling') {
        ingredientsData = [
            { name: 'Клубничное конфи', amount: '100г' },
            { name: 'Вишневое конфи', amount: '100г' },
            { name: 'Малиновое конфи', amount: '100г' },
            { name: 'Абрикосовое конфи', amount: '100г' },
            { name: 'Апельсиновый мармелад', amount: '100г' }
        ];
    }
    
    // Добавляем ингредиенты
    ingredientsData.forEach(ingredient => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="ingredient-name">${ingredient.name}</span>
            <span class="ingredient-amount">${ingredient.amount}</span>
        `;
        ingredientsList.appendChild(li);
    });
    
    modal.style.display = 'block';
}

// Закрыть модальное окно с ингредиентами
function closeIngredientsModal() {
    const modal = document.getElementById('ingredientsModal');
    if (modal) {
        modal.style.display = 'none';
    }
}