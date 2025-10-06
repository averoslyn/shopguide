const AppMenuSections = {
  favorite: {
    name: "Избранное",
    description: "Добавляйте акции в избранное и следите за лучшими предложениями.",
    url: "images/phone-favorite.jpg",
  },

  actions: {
    name: "Профиль акции",
    description: "Вы всегда получите полную информацию об акции: подробное описание, бренд, магазины и торговые центры где походит акция. Также доступна возможность сразу перейти на сайт товара и купить в рамках действующей акции.",
    url: "images/phone-actions.jpg",
  },

  subscriptions: {
    name: "Подписки",
    description: "Подписывайтесь на бренды и не пропускайте скидки.",
    url: "images/phone-subsсribtions.jpg",
  },

  map: {
    name: "Карта",
    description: "Отображение акций на карте — удобно и наглядно.",
    url: "images/phone-map.jpg",
  },

  feed: {
    name: "Моя лента",
    description: "Персональная лента акций по вашим интересам.",
    url: "images/phone-feed.jpg",
  },
}

const phoneScreen = document.querySelector('.app-menu__screen');
const description = document.querySelector('.app-menu__description');
const appMenuList = document.querySelector('.app-menu__list');
const appMenuItems = appMenuList.querySelectorAll('.app-menu__list-item');
const appMenuButtons = document.querySelectorAll('.app-menu__button');

const updateSection = (key, currentLi) => {
  appMenuItems.forEach(item => item.classList.remove('app-menu__list-item--current'));

  currentLi.classList.add('app-menu__list-item--current');

  const section = AppMenuSections[key];
  if(!section) return;

  description.classList.add('fade');
  phoneScreen.classList.add('fade');

  setTimeout(() => {
    description.textContent = section.description;
    phoneScreen.src = section.url;

    description.classList.remove('fade');
    phoneScreen.classList.remove('fade');
  }, 300);
}

appMenuList.addEventListener('click', evt => {
  const button = evt.target.closest('.app-menu__button');
  if (!button) return;

  const key = evt.target.dataset.section;
  const currentLi = evt.target.closest('li');

  updateSection(key, currentLi);
})
