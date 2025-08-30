// Данные о популярных тортах
const cakeData = {
    chocolate: {
        name: "Шоколадный торт",
        ingredients: [
            "200г муки",
            "200г сахара",
            "100г какао-порошка",
            "4 яйца",
            "200мл молока",
            "100мл растительного масла",
            "1 ч.л. разрыхлителя",
            "1 ч.л. ванилина"
        ],
        instructions: [
            "Разогрейте духовку до 180°C",
            "Смешайте сухие ингредиенты",
            "Взбейте яйца с сахаром",
            "Добавьте молоко и масло",
            "Соедините все ингредиенты",
            "Выпекайте 25-30 минут"
        ]
    },
    vanilla: {
        name: "Ванильный торт",
        ingredients: [
            "250г муки",
            "200г сахара",
            "3 яйца",
            "150мл молока",
            "100мл растительного масла",
            "1 ч.л. разрыхлителя",
            "2 ч.л. ванилина"
        ],
        instructions: [
            "Разогрейте духовку до 175°C",
            "Смешайте муку и разрыхлитель",
            "Взбейте яйца с сахаром",
            "Добавьте молоко и масло",
            "Соедините все ингредиенты",
            "Выпекайте 20-25 минут"
        ]
    },
    "red-velvet": {
        name: "Красный бархат",
        ingredients: [
            "250г муки",
            "200г сахара",
            "2 яйца",
            "150мл пахты",
            "100мл растительного масла",
            "2 ст.л. какао-порошка",
            "1 ч.л. разрыхлителя",
            "Красный пищевой краситель"
        ],
        instructions: [
            "Разогрейте духовку до 180°C",
            "Смешайте сухие ингредиенты",
            "Взбейте яйца с сахаром",
            "Добавьте пахту и масло",
            "Добавьте краситель",
            "Выпекайте 25-30 минут"
        ]
    },
    carrot: {
        name: "Морковный торт",
        ingredients: [
            "200г муки",
            "200г сахара",
            "3 яйца",
            "200г тертой моркови",
            "100мл растительного масла",
            "1 ч.л. разрыхлителя",
            "1 ч.л. корицы",
            "50г грецких орехов"
        ],
        instructions: [
            "Разогрейте духовку до 175°C",
            "Смешайте сухие ингредиенты",
            "Взбейте яйца с сахаром",
            "Добавьте масло и морковь",
            "Добавьте орехи",
            "Выпекайте 30-35 минут"
        ]
    },
    tiramisu: {
        name: "Тирамису",
        ingredients: [
            "6 яичных желтков",
            "100г сахара",
            "500г маскарпоне",
            "300мл крепкого кофе",
            "200г савоярди",
            "Какао-порошок для посыпки"
        ],
        instructions: [
            "Взбейте желтки с сахаром",
            "Добавьте маскарпоне",
            "Охладите кофе",
            "Обмакните савоярди в кофе",
            "Выложите слоями",
            "Посыпьте какао"
        ]
    },
    cheesecake: {
        name: "Чизкейк",
        ingredients: [
            "200г песочного печенья",
            "100г сливочного масла",
            "500г творожного сыра",
            "200г сахара",
            "3 яйца",
            "200мл сметаны",
            "1 ч.л. ванилина"
        ],
        instructions: [
            "Измельчите печенье",
            "Смешайте с растопленным маслом",
            "Взбейте сыр с сахаром",
            "Добавьте яйца и сметану",
            "Выпекайте 45-50 минут",
            "Охладите в духовке"
        ]
    },
    "black-forest": {
        name: "Черный лес",
        ingredients: [
            "200г муки",
            "200г сахара",
            "100г какао-порошка",
            "4 яйца",
            "200мл молока",
            "100мл растительного масла",
            "400г вишни",
            "500г взбитых сливок"
        ],
        instructions: [
            "Приготовьте шоколадный бисквит",
            "Взбейте сливки с сахаром",
            "Подготовьте вишни",
            "Соберите торт слоями",
            "Украсьте вишнями",
            "Посыпьте шоколадной стружкой"
        ]
    },
    opera: {
        name: "Опера",
        ingredients: [
            "150г миндальной муки",
            "150г сахара",
            "6 яиц",
            "100г темного шоколада",
            "200г сливочного масла",
            "100мл крепкого кофе",
            "50г какао-порошка"
        ],
        instructions: [
            "Приготовьте миндальный бисквит",
            "Сделайте кофейный сироп",
            "Приготовьте шоколадный ганаш",
            "Соберите слои",
            "Покройте шоколадной глазурью",
            "Охладите перед подачей"
        ]
    }
};

// Данные о коржах и кремах
const layers = [
    { id: 'chocolate', name: 'Шоколадный', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=80&h=60&fit=crop', description: 'Классический шоколадный корж' },
    { id: 'vanilla', name: 'Ванильный', image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=80&h=60&fit=crop', description: 'Нежный ванильный корж' },
    { id: 'red-velvet', name: 'Красный бархат', image: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=80&h=60&fit=crop', description: 'Элегантный красный корж' },
    { id: 'carrot', name: 'Морковный', image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=80&h=60&fit=crop', description: 'Полезный морковный корж' },
    { id: 'almond', name: 'Миндальный', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=80&h=60&fit=crop', description: 'Ароматный миндальный корж' },
    { id: 'coconut', name: 'Кокосовый', image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=80&h=60&fit=crop', description: 'Экзотический кокосовый корж' }
];

const creams = [
    { id: 'chocolate', name: 'Шоколадный', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=80&h=60&fit=crop', description: 'Богатый шоколадный крем' },
    { id: 'vanilla', name: 'Ванильный', image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=80&h=60&fit=crop', description: 'Нежный ванильный крем' },
    { id: 'strawberry', name: 'Клубничный', image: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=80&h=60&fit=crop', description: 'Свежий клубничный крем' },
    { id: 'coffee', name: 'Кофейный', image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=80&h=60&fit=crop', description: 'Ароматный кофейный крем' },
    { id: 'cherry', name: 'Вишневый', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=80&h=60&fit=crop', description: 'Яркий вишневый крем' },
    { id: 'lemon', name: 'Лимонный', image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=80&h=60&fit=crop', description: 'Освежающий лимонный крем' },
    { id: 'raspberry', name: 'Малиновый', image: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=80&h=60&fit=crop', description: 'Нежный малиновый крем' }
];

// Глобальные переменные
let layerCount = 3;
let selectedLayers = [];
let selectedCreams = [];
let currentModalType = '';
let currentModalIndex = 0;
let currentSlideIndex = 0;
let currentIngredients = [];

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    setupSmoothScrolling();
    setupEventListeners();
    initializeConstructor();
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

// Настройка обработчиков событий
function setupEventListeners() {
    // Обработчики для карточек популярных тортов
    document.querySelectorAll('.cake-card').forEach(card => {
        card.addEventListener('click', function() {
            const cakeType = this.getAttribute('data-cake');
            showRecipeModal(cakeType);
        });
    });

    // Обработчик для закрытия модального окна с рецептом
    document.querySelector('.modal .close').addEventListener('click', function() {
        document.getElementById('recipeModal').style.display = 'none';
    });

    // Обработчик для закрытия модального окна с рецептом при клике вне его
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('recipeModal');
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

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

// Инициализация конструктора
function initializeConstructor() {
    selectedLayers = new Array(layerCount).fill(null);
    selectedCreams = new Array(layerCount - 1).fill(null);
    updateLayerCountDisplay();
}

// Изменение количества коржей
function changeLayers(delta) {
    const newCount = layerCount + delta;
    if (newCount >= 2 && newCount <= 6) {
        layerCount = newCount;
        selectedLayers = new Array(layerCount).fill(null);
        selectedCreams = new Array(layerCount - 1).fill(null);
        updateLayerCountDisplay();
    }
}

// Обновление отображения количества коржей
function updateLayerCountDisplay() {
    document.getElementById('layerCount').textContent = layerCount;
}

// Запуск конструктора
function startConstructor() {
    const settings = document.getElementById('cakeSettings');
    const main = document.getElementById('constructorMain');
    
    settings.style.display = 'none';
    main.style.display = 'block';
    
    updateCakeSketch();
    updateCompositionPanel();
}

// Обновление эскиза торта
function updateCakeSketch() {
    const sketch = document.getElementById('cakeSketch');
    sketch.innerHTML = '';
    
    for (let i = 0; i < layerCount; i++) {
        // Добавляем корж
        const layerSlot = document.createElement('div');
        layerSlot.className = 'cake-layer-slot';
        layerSlot.onclick = () => showIngredientModal('layer', i);
        
        if (selectedLayers[i]) {
            const layer = layers.find(l => l.id === selectedLayers[i]);
            const img = document.createElement('img');
            img.src = layer.image;
            img.alt = layer.name;
            layerSlot.appendChild(img);
            layerSlot.classList.add('selected');
        }
        
        sketch.appendChild(layerSlot);
        
        // Добавляем крем (кроме последнего коржа)
        if (i < layerCount - 1) {
            const creamSlot = document.createElement('div');
            creamSlot.className = 'cream-slot';
            creamSlot.onclick = () => showIngredientModal('cream', i);
            
            if (selectedCreams[i]) {
                const cream = creams.find(c => c.id === selectedCreams[i]);
                const img = document.createElement('img');
                img.src = cream.image;
                img.alt = cream.name;
                creamSlot.appendChild(img);
                creamSlot.classList.add('selected');
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
    
    title.textContent = type === 'layer' ? 'Выберите корж' : 'Выберите крем';
    
    // Получаем список ингредиентов
    currentIngredients = type === 'layer' ? layers : creams;
    
    // Очищаем слайдер
    sliderContainer.innerHTML = '';
    sliderDots.innerHTML = '';
    
    // Создаем слайды с расширенным составом
    currentIngredients.forEach((ingredient, i) => {
        const slide = document.createElement('div');
        slide.className = 'slider-item';
        

        
        slide.innerHTML = `
            <img src="${ingredient.image}" alt="${ingredient.name}">
            <div class="item-name">${ingredient.name}</div>
            <div class="item-description">${ingredient.description}</div>
            <button class="ingredients-btn" onclick="showIngredientsModal('${type}', '${ingredient.name}')">
                <i class="fas fa-list"></i> Ингредиенты
            </button>
            <button class="select-btn">Выбрать ${type === 'layer' ? 'корж' : 'крем'}</button>
        `;
        
        // Добавляем обработчик клика для кнопки выбора
        const selectBtn = slide.querySelector('.select-btn');
        selectBtn.onclick = (e) => {
            e.stopPropagation();
            selectIngredient(ingredient);
        };
        
        sliderContainer.appendChild(slide);
        
        // Создаем точку навигации
        const dot = document.createElement('div');
        dot.className = 'slider-dot';
        if (i === 0) dot.classList.add('active');
        dot.onclick = () => goToSlide(i);
        sliderDots.appendChild(dot);
    });
    
    // Обновляем навигацию
    updateSliderNavigation();
    
    // Добавляем поддержку свайпов для мобильных устройств
    addSwipeSupport();
    
    // Добавляем индикатор текущего слайда
    addSliderCounter();
    
    modal.style.display = 'block';
}

// Выбор ингредиента
function selectIngredient(ingredient) {
    if (currentModalType === 'layer') {
        selectedLayers[currentModalIndex] = ingredient.id;
    } else {
        selectedCreams[currentModalIndex] = ingredient.id;
    }
    
    closeIngredientModal();
    updateCakeSketch();
    updateCompositionPanel();
    
    // Проверяем, заполнен ли весь торт
    checkCakeCompletion();
}

// Закрыть модальное окно выбора ингредиентов
function closeIngredientModal() {
    document.getElementById('ingredientModal').style.display = 'none';
}

// Обновление панели состава торта
function updateCompositionPanel() {
    const list = document.getElementById('compositionList');
    list.innerHTML = '';
    
    let itemIndex = 1;
    
    // Добавляем выбранные коржи
    selectedLayers.forEach((layerId, index) => {
        if (layerId) {
            const layer = layers.find(l => l.id === layerId);
            const item = createCompositionItem(layer, `Корж ${index + 1}`, itemIndex);
            list.appendChild(item);
            itemIndex++;
        }
    });
    
    // Добавляем выбранные кремы
    selectedCreams.forEach((creamId, index) => {
        if (creamId) {
            const cream = creams.find(c => c.id === creamId);
            const item = createCompositionItem(cream, `Крем ${index + 1}`, itemIndex);
            list.appendChild(item);
            itemIndex++;
        }
    });
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
    
    if (allLayersSelected && allCreamsSelected) {
        // Показываем нижнюю секцию
        const bottomSection = document.getElementById('bottomSection');
        bottomSection.style.display = 'block';
        
        // Обновляем панели
        updateIngredientsPanel();
        updateRecipePanel();
        
        // Плавно прокручиваем к нижней секции
        setTimeout(() => {
            bottomSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }, 500);
    }
}

// Обновление панели ингредиентов
function updateIngredientsPanel() {
    const list = document.getElementById('ingredientsList');
    list.innerHTML = '';
    
    // Добавляем точные количества ингредиентов
    const diameter = parseInt(document.getElementById('diameterSelect').value);
    const multiplier = diameter / 18; // Базовый размер 18см
    
    const ingredients = [
        { name: 'Мука пшеничная', amount: `${Math.round(200 * multiplier)}г` },
        { name: 'Сахар', amount: `${Math.round(150 * multiplier)}г` },
        { name: 'Яйца', amount: `${Math.round(3 * multiplier)} шт` },
        { name: 'Масло сливочное', amount: `${Math.round(100 * multiplier)}г` },
        { name: 'Молоко', amount: `${Math.round(200 * multiplier)}мл` },
        { name: 'Разрыхлитель', amount: `${Math.round(1 * multiplier)} ч.л.` },
        { name: 'Ванилин', amount: `${Math.round(1 * multiplier)} ч.л.` },
        { name: 'Сахарная пудра (для крема)', amount: `${Math.round(100 * multiplier)}г` },
        { name: 'Сливки 33%', amount: `${Math.round(300 * multiplier)}мл` }
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
    
    if (!selectedLayers.some(l => l) && !selectedCreams.some(c => c)) {
        content.innerHTML = '<p>Выберите коржи и кремы для получения рецепта</p>';
        return;
    }
    
    const recipe = generateRecipe();
    content.innerHTML = recipe;
}

// Генерация рецепта
function generateRecipe() {
    let recipe = '<h4>Приготовление коржей:</h4><ol>';
    
    // Рецепт для коржей
    recipe += `
        <li>Разогрейте духовку до 180°C</li>
        <li>Смешайте муку, сахар и разрыхлитель в большой миске</li>
        <li>Взбейте яйца с сахаром до пышности (около 5 минут)</li>
        <li>Добавьте молоко и растопленное масло, продолжая взбивать</li>
        <li>Соедините сухие и жидкие ингредиенты, аккуратно перемешивая</li>
        <li>Разделите тесто на ${layerCount} равных частей</li>
        <li>Выпекайте каждый корж 25-30 минут до готовности</li>
        <li>Охладите коржи на решетке</li>
    `;
    
    recipe += '</ol><h4>Приготовление кремов:</h4><ol>';
    
    // Рецепт для кремов
    recipe += `
        <li>Взбейте сливочное масло с сахарной пудрой до пышности</li>
        <li>Добавьте ароматизаторы и красители по вкусу</li>
        <li>Взбивайте до получения однородной массы</li>
        <li>При необходимости добавьте немного молока для нужной консистенции</li>
    `;
    
    recipe += '</ol><h4>Сборка торта:</h4><ol>';
    
    // Инструкции по сборке
    recipe += `
        <li>Убедитесь, что коржи полностью остыли</li>
        <li>Промажьте каждый корж кремом равномерным слоем</li>
        <li>Сложите коржи друг на друга в правильном порядке</li>
        <li>Покройте боковые стороны и верх торта кремом</li>
        <li>Украсьте торт по желанию (фрукты, шоколад, орехи)</li>
        <li>Охладите в холодильнике 2-3 часа перед подачей</li>
    `;
    
    recipe += '</ol>';
    
    return recipe;
}

// Показать модальное окно с рецептом популярного торта
function showRecipeModal(cakeType) {
    const cake = cakeData[cakeType];
    if (!cake) return;
    
    const modal = document.getElementById('recipeModal');
    const title = document.getElementById('modalTitle');
    const ingredientsList = document.getElementById('ingredientsList');
    const instructionsList = document.getElementById('instructionsList');
    
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
    
    // Перемещаем слайдер (каждый слайд занимает 100% ширины)
    container.style.transform = `translateX(-${index * 100}%)`;
    
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
    
    title.textContent = `Ингредиенты для ${itemName}`;
    
    // Очищаем список
    ingredientsList.innerHTML = '';
    
    // Получаем данные об ингредиентах в зависимости от типа
    let ingredientsData = [];
    if (type === 'layer') {
        ingredientsData = [
            { name: 'Мука пшеничная высшего сорта', amount: '200г' },
            { name: 'Сахар-песок', amount: '150г' },
            { name: 'Яйца куриные', amount: '3 шт' },
            { name: 'Масло сливочное 82.5%', amount: '100г' },
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
    } else {
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
    document.getElementById('ingredientsModal').style.display = 'none';
}
