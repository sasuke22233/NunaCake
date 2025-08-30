// Данные о тортах
const cakeData = {
    chocolate: {
        name: "Шоколадный торт",
        ingredients: [
            "200г муки",
            "200г сахара",
            "50г какао-порошка",
            "3 яйца",
            "100мл молока",
            "100мл растительного масла",
            "1ч.л. разрыхлителя",
            "1ч.л. ванилина"
        ],
        instructions: [
            "Разогрейте духовку до 180°C",
            "Смешайте сухие ингредиенты",
            "Взбейте яйца с сахаром",
            "Добавьте молоко и масло",
            "Соедините с сухими ингредиентами",
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
            "100г сливочного масла",
            "1ч.л. разрыхлителя",
            "2ч.л. ванилина"
        ],
        instructions: [
            "Разогрейте духовку до 175°C",
            "Взбейте масло с сахаром",
            "Добавьте яйца по одному",
            "Добавьте муку и молоко",
            "Выпекайте 30-35 минут"
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
            "2ст.л. какао-порошка",
            "1ст.л. красного красителя",
            "1ч.л. соды"
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
            "50г грецких орехов",
            "1ч.л. корицы",
            "1ч.л. разрыхлителя"
        ],
        instructions: [
            "Разогрейте духовку до 180°C",
            "Взбейте яйца с сахаром",
            "Добавьте масло и морковь",
            "Добавьте муку и специи",
            "Добавьте орехи",
            "Выпекайте 35-40 минут"
        ]
    },
    tiramisu: {
        name: "Тирамису",
        ingredients: [
            "6 яичных желтков",
            "100г сахара",
            "500г маскарпоне",
            "300мл крепкого кофе",
            "200г савоярди (печенье)",
            "50г какао-порошка",
            "2ст.л. ликера (по желанию)"
        ],
        instructions: [
            "Взбейте желтки с сахаром до пышности",
            "Добавьте маскарпоне и взбейте до однородности",
            "Охладите крепкий кофе",
            "Обмакните печенье в кофе",
            "Выложите слой печенья в форму",
            "Покройте слоем крема",
            "Повторите слои",
            "Посыпьте какао и охладите 4 часа"
        ]
    },
    cheesecake: {
        name: "Чизкейк",
        ingredients: [
            "200г песочного печенья",
            "100г сливочного масла",
            "600г творожного сыра",
            "200г сахара",
            "3 яйца",
            "200мл сметаны",
            "1ч.л. ванилина",
            "2ст.л. лимонного сока"
        ],
        instructions: [
            "Измельчите печенье и смешайте с растопленным маслом",
            "Выложите в форму и утрамбуйте",
            "Взбейте сыр с сахаром до однородности",
            "Добавьте яйца по одному",
            "Добавьте сметану, ванилин и лимонный сок",
            "Вылейте на основу",
            "Выпекайте 50-60 минут при 160°C",
            "Охладите в духовке 1 час"
        ]
    },
    "black-forest": {
        name: "Черный лес",
        ingredients: [
            "200г муки",
            "50г какао-порошка",
            "200г сахара",
            "3 яйца",
            "100мл молока",
            "100мл растительного масла",
            "1ч.л. разрыхлителя",
            "400г вишни",
            "500мл сливок",
            "100г темного шоколада"
        ],
        instructions: [
            "Разогрейте духовку до 180°C",
            "Смешайте сухие ингредиенты",
            "Взбейте яйца с сахаром",
            "Добавьте молоко и масло",
            "Выпекайте 25-30 минут",
            "Взбейте сливки с сахаром",
            "Разрежьте корж на 3 части",
            "Промажьте кремом и вишней",
            "Украсьте шоколадной стружкой"
        ]
    },
    opera: {
        name: "Опера",
        ingredients: [
            "150г муки",
            "150г сахара",
            "6 яиц",
            "100г миндальной муки",
            "100г темного шоколада",
            "200мл крепкого кофе",
            "200г сливочного масла",
            "100г сахарной пудры"
        ],
        instructions: [
            "Разогрейте духовку до 200°C",
            "Взбейте яйца с сахаром до пышности",
            "Добавьте муку и миндальную муку",
            "Выпекайте 8-10 минут",
            "Приготовьте кофейный сироп",
            "Растопите шоколад с маслом",
            "Соберите торт слоями",
            "Покройте шоколадной глазурью"
        ]
    }
};

// Данные о коржах и кремах
const layers = [
    { name: "Шоколадный", color: "#8B4513", type: "chocolate" },
    { name: "Ванильный", color: "#F5DEB3", type: "vanilla" },
    { name: "Красный бархат", color: "#DC143C", type: "red-velvet" },
    { name: "Морковный", color: "#FFA500", type: "carrot" },
    { name: "Лимонный", color: "#FFD700", type: "lemon" },
    { name: "Кофейный", color: "#8B4513", type: "coffee" },
    { name: "Миндальный", color: "#DEB887", type: "almond" },
    { name: "Кокосовый", color: "#F5F5DC", type: "coconut" }
];

const creams = [
    { name: "Сливочный", color: "#FFF8DC", type: "cream" },
    { name: "Шоколадный", color: "#DEB887", type: "chocolate" },
    { name: "Клубничный", color: "#FFB6C1", type: "strawberry" },
    { name: "Ванильный", color: "#F0E68C", type: "vanilla" },
    { name: "Карамельный", color: "#D2691E", type: "caramel" },
    { name: "Мятный", color: "#98FB98", type: "mint" },
    { name: "Кофейный", color: "#8B4513", type: "coffee" },
    { name: "Вишневый", color: "#DC143C", type: "cherry" },
    { name: "Лимонный", color: "#FFD700", type: "lemon" },
    { name: "Малиновый", color: "#FF1493", type: "raspberry" }
];

// Глобальные переменные
let currentLayers = 3;
let selectedLayers = [];
let selectedCreams = [];

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    initializeConstructor();
    setupEventListeners();
    setupSmoothScrolling();
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
    // Обработчики для карточек тортов
    document.querySelectorAll('.cake-card').forEach(card => {
        card.addEventListener('click', function() {
            const cakeType = this.dataset.cake;
            showRecipeModal(cakeType);
        });
    });

    // Обработчик для модального окна
    const modal = document.getElementById('recipeModal');
    const closeBtn = document.querySelector('.close');
    
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Мобильное меню
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
}

// Инициализация конструктора
function initializeConstructor() {
    // Инициализируем массивы с правильным количеством слотов
    selectedLayers = new Array(currentLayers).fill(null);
    selectedCreams = new Array(currentLayers - 1).fill(null);
    
    updateLayerOptions();
    updateCreamOptions();
    updateCakePreview();
}

// Изменение количества коржей
function changeLayers(delta) {
    const newLayerCount = Math.max(2, Math.min(6, currentLayers + delta));
    document.getElementById('layerCount').textContent = newLayerCount;
    
    if (newLayerCount > currentLayers) {
        // Добавляем новые слоты
        while (selectedLayers.length < newLayerCount) {
            selectedLayers.push(null);
        }
        while (selectedCreams.length < newLayerCount - 1) {
            selectedCreams.push(null);
        }
    } else {
        // Уменьшаем количество слотов
        selectedLayers = selectedLayers.slice(0, newLayerCount);
        selectedCreams = selectedCreams.slice(0, newLayerCount - 1);
    }
    
    currentLayers = newLayerCount;
    
    updateLayerOptions();
    updateCreamOptions();
    updateCakePreview();
    updateRecipeOutput();
}

// Обновление опций коржей
function updateLayerOptions() {
    const container = document.getElementById('layerOptions');
    container.innerHTML = '';
    
    layers.forEach((layer, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = layer.name;
        btn.dataset.type = layer.type;
        btn.dataset.index = index;
        
        // Подсчитываем количество выбранных коржей данного типа
        const selectedCount = selectedLayers.filter(l => l === layer.type).length;
        if (selectedCount > 0) {
            btn.classList.add('selected');
            btn.textContent = `${layer.name} (${selectedCount})`;
        }
        
        btn.addEventListener('click', function() {
            selectLayer(layer.type, index);
        });
        
        container.appendChild(btn);
    });
}

// Обновление опций кремов
function updateCreamOptions() {
    const container = document.getElementById('creamOptions');
    container.innerHTML = '';
    
    creams.forEach((cream, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = cream.name;
        btn.dataset.type = cream.type;
        btn.dataset.index = index;
        
        // Подсчитываем количество выбранных кремов данного типа
        const selectedCount = selectedCreams.filter(c => c === cream.type).length;
        if (selectedCount > 0) {
            btn.classList.add('selected');
            btn.textContent = `${cream.name} (${selectedCount})`;
        }
        
        btn.addEventListener('click', function() {
            selectCream(cream.type, index);
        });
        
        container.appendChild(btn);
    });
}

// Выбор коржа
function selectLayer(layerType, index) {
    const layer = layers.find(l => l.type === layerType);
    if (!layer) return;
    
    // Добавляем корж в следующий свободный слот
    const nextEmptyIndex = selectedLayers.findIndex(layer => !layer);
    if (nextEmptyIndex !== -1) {
        selectedLayers[nextEmptyIndex] = layerType;
    } else if (selectedLayers.length < currentLayers) {
        selectedLayers.push(layerType);
    }
    
    updateLayerOptions();
    updateCakePreview();
    updateRecipeOutput();
}

// Выбор крема
function selectCream(creamType, index) {
    const cream = creams.find(c => c.type === creamType);
    if (!cream) return;
    
    // Добавляем крем в следующий свободный слот
    const nextEmptyIndex = selectedCreams.findIndex(cream => !cream);
    if (nextEmptyIndex !== -1) {
        selectedCreams[nextEmptyIndex] = creamType;
    } else if (selectedCreams.length < currentLayers - 1) {
        selectedCreams.push(creamType);
    }
    
    updateCreamOptions();
    updateCakePreview();
    updateRecipeOutput();
}

// Обновление визуального предварительного просмотра
function updateCakePreview() {
    const container = document.getElementById('cakePreview');
    container.innerHTML = '';
    
    for (let i = 0; i < currentLayers; i++) {
        // Добавляем корж
        const layer = document.createElement('div');
        layer.className = 'preview-layer';
        
        if (selectedLayers[i]) {
            const layerData = layers.find(l => l.type === selectedLayers[i]);
            layer.style.background = layerData.color;
            layer.title = `${layerData.name} (клик для удаления)`;
        } else {
            layer.style.background = '#F0F0F0';
            layer.title = 'Выберите корж';
        }
        
        layer.addEventListener('click', function() {
            if (selectedLayers[i]) {
                // Удаляем корж
                selectedLayers[i] = null;
                updateLayerOptions();
                updateCakePreview();
                updateRecipeOutput();
            } else {
                showLayerSelector(i);
            }
        });
        
        container.appendChild(layer);
        
        // Добавляем крем между коржами (кроме последнего)
        if (i < currentLayers - 1) {
            const cream = document.createElement('div');
            cream.className = 'preview-cream';
            
            if (selectedCreams[i]) {
                const creamData = creams.find(c => c.type === selectedCreams[i]);
                cream.style.background = creamData.color;
                cream.title = `${creamData.name} (клик для удаления)`;
            } else {
                cream.style.background = '#F8F8F8';
                cream.title = 'Выберите крем';
            }
            
            cream.addEventListener('click', function() {
                if (selectedCreams[i]) {
                    // Удаляем крем
                    selectedCreams[i] = null;
                    updateCreamOptions();
                    updateCakePreview();
                    updateRecipeOutput();
                } else {
                    showCreamSelector(i);
                }
            });
            
            container.appendChild(cream);
        }
    }
}

// Показать селектор коржей
function showLayerSelector(layerIndex) {
    const layerOptions = document.querySelectorAll('#layerOptions .option-btn');
    layerOptions.forEach(btn => {
        btn.addEventListener('click', function() {
            const layerType = this.dataset.type;
            selectedLayers[layerIndex] = layerType;
            updateLayerOptions();
            updateCakePreview();
            updateRecipeOutput();
        });
    });
}

// Показать селектор кремов
function showCreamSelector(creamIndex) {
    const creamOptions = document.querySelectorAll('#creamOptions .option-btn');
    creamOptions.forEach(btn => {
        btn.addEventListener('click', function() {
            const creamType = this.dataset.type;
            selectedCreams[creamIndex] = creamType;
            updateCreamOptions();
            updateCakePreview();
            updateRecipeOutput();
        });
    });
}

// Обновление вывода рецепта
function updateRecipeOutput() {
    const container = document.getElementById('recipeOutput');
    
    // Проверяем, есть ли выбранные коржи
    const hasSelectedLayers = selectedLayers.some(layer => layer !== null);
    
    if (!hasSelectedLayers) {
        container.classList.remove('show');
        return;
    }
    
    const allIngredients = [];
    const allInstructions = [];
    
    // Собираем ингредиенты и инструкции для всех выбранных коржей
    selectedLayers.forEach(layerType => {
        if (layerType) {
            const cake = cakeData[layerType];
            if (cake) {
                allIngredients.push(...cake.ingredients);
                allInstructions.push(...cake.instructions);
            }
        }
    });
    
    // Убираем дубликаты
    const uniqueIngredients = [...new Set(allIngredients)];
    const uniqueInstructions = [...new Set(allInstructions)];
    
    // Формируем HTML
    let html = '<h3>Ваш уникальный торт</h3>';
    html += '<div class="recipe-content">';
    html += '<div class="ingredients"><h4>Ингредиенты:</h4><ul>';
    uniqueIngredients.forEach(ingredient => {
        html += `<li>${ingredient}</li>`;
    });
    html += '</ul></div>';
    html += '<div class="instructions"><h4>Приготовление:</h4><ol>';
    uniqueInstructions.forEach(instruction => {
        html += `<li>${instruction}</li>`;
    });
    html += '</ol></div>';
    html += '</div>';
    
    container.innerHTML = html;
    container.classList.add('show');
}

// Показать модальное окно с рецептом
function showRecipeModal(cakeType) {
    const modal = document.getElementById('recipeModal');
    const cake = cakeData[cakeType];
    
    if (!cake) return;
    
    document.getElementById('modalTitle').textContent = cake.name;
    
    const ingredientsList = document.getElementById('ingredientsList');
    const instructionsList = document.getElementById('instructionsList');
    
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

// Анимации при скролле
function animateOnScroll() {
    const elements = document.querySelectorAll('.cake-card, .section-title, .control-group');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('animate');
        }
    });
}

// Добавляем обработчик скролла для анимаций
window.addEventListener('scroll', animateOnScroll);

// Функции для очистки всех выбранных элементов
function clearAllLayers() {
    selectedLayers.fill(null);
    updateLayerOptions();
    updateCakePreview();
    updateRecipeOutput();
}

function clearAllCreams() {
    selectedCreams.fill(null);
    updateCreamOptions();
    updateCakePreview();
    updateRecipeOutput();
}

// Инициализация анимаций при загрузке
animateOnScroll();
