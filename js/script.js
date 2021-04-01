let input = document.querySelector("#inp_1")
let srchBtn = document.querySelector("#srchBtn")
let from = document.getElementById("price-from");
let to = document.getElementById("price-to");
let result = document.getElementById("sortAll")
let openModalBasket = false
var modalAll = document.getElementById("my_modal");
var btn = document.getElementById("btn_modal_window");
var span = document.getElementsByClassName("close_modal_window")[0];

const myArr = [
  { name: 'Subaru', model: 'Impreza STI', id: 1, price: 9500, mileage: 110, image: 'images/subaru.jpg' },
  { name: 'Audi', model: 'A5', id: 2, price: 27000, mileage: 190, image: 'images/audi.jpg' },
  { name: 'Mercedes', model: 'E63', id: 3, price: 30000, mileage: 547, image: 'images/mercedes.jpg' },
  { name: 'Nissan', model: 'Skyline R34', id: 4, price: 34000, mileage: 560, image: 'images/nissan.jpg' },
  { name: 'Mazda', model: 'Furai', id: 5, price: 9000, mileage: 342, image: 'images/mazda.jpg' },
  { name: 'Toyota', model: 'GT86', id: 6, price: 25000, mileage: 179, image: 'images/toyota.jpg' },
  { name: 'Dodge', model: 'Charger 1970', id: 7, price: 35000, mileage: 97, image: 'images/dodge.jpg' },
  { name: 'Buick', model: 'Riviera', id: 8, price: 75000, mileage: 230, image: 'images/buick.jpg' },
  { name: 'Honda', model: 'Civic 4D', id: 9, price: 8000, mileage: 941, image: 'images/honda.jpg' },
  { name: 'Porsche', model: '911 (964)', id: 10, price: 80000, mileage: 578, image: 'images/porsche.png' },
  { name: 'Pontiac', model: 'Firebird 1969', id: 11, price: 40000, mileage: 130, image: 'images/pontiac.jpg' },
  { name: 'Audi', model: 'S5', id: 12, price: 29000, mileage: 910, image: 'images/audi.jpg' },
  { name: 'Subaru', model: 'Impreza STI', id: 13, price: 500, mileage: 120, image: 'images/subaru.jpg' },
];

let filteredItems = null

function renderItems() {
  for (let item of filteredItems) {
    const items = document.getElementById('items')
    const div = document.createElement('div')
    const img = document.createElement('img')
    const price = document.createElement('div')
    const name = document.createElement('div')
    const mileage = document.createElement('div')
    const model = document.createElement('div')
    const nominal = document.createElement('div')
    const btnRun = document.createElement('button')
    const shopping = document.createElement('img')
    const priceAll = document.createElement('div')
    const shoppingBtn = document.createElement('div')

    div.setAttribute('id', 'cars')
    img.setAttribute('src', item.image)
    shopping.setAttribute('src', 'images/shopping-cart.png');

    div.className = 'allItems'
    btnRun.className = 'btnRun'
    nominal.className = 'nominal'
    mileage.className = 'mileage'
    model.className = 'model'
    name.className = 'name'
    price.className = 'price'
    img.className = 'image'
    shopping.className = 'shopping'
    priceAll.className = 'priceAll'
    shoppingBtn.className = 'shoppingBtn'

    items.appendChild(div);
    div.appendChild(img)
    div.appendChild(nominal)
    div.appendChild(priceAll)
    nominal.appendChild(name)
    nominal.appendChild(model)
    priceAll.appendChild(price)
    priceAll.appendChild(shoppingBtn)
    shoppingBtn.appendChild(shopping)
    div.appendChild(mileage)
    div.appendChild(btnRun)

    name.innerHTML = item.name
    model.innerHTML = item.model
    price.innerHTML = `$ ${item.price}`
    mileage.innerHTML = `Пробег: ${item.mileage} тис.км`
    btnRun.innerHTML = 'Перейти'
  }
}
function removeItems() {
  for (let item of filteredItems) {
    document.getElementById('cars').remove()
  }
  filteredItems = []
}
function search() {
  if (input.value === '') {
    removeItems()
    filteredItems = myArr
    renderItems()
  } else {
    let isFiltered = myArr.filter(item => item.name === input.value)
    removeItems()
    filteredItems = isFiltered
    renderItems()
  }
}
function sortPrice() {
  let sort = document.getElementById('sort')
  if (sort.className === 'DESC') {
    let sortItems = filteredItems.sort((a, b) => a.price - b.price)
    removeItems()
    filteredItems = sortItems
    renderItems()
    sort.classList.remove('DESC')
    sort.className = 'ASC'
  } else if (sort.className === 'ASC') {
    let sortItems = filteredItems.sort((a, b) => b.price - a.price)
    removeItems()
    filteredItems = sortItems
    renderItems()
    sort.classList.remove('ASC')
    sort.className = 'DESC'
  }
}
function sortMilage() {
  let sort = document.getElementById('sortMilage')
  if (sort.className === 'DESC') {
    let sortItems = filteredItems.sort((a, b) => a.mileage - b.mileage)
    removeItems()
    filteredItems = sortItems
    renderItems()
    sort.classList.remove('DESC')
    sort.className = 'ASC'
  } else if (sort.className === 'ASC') {
    let sortItems = filteredItems.sort((a, b) => b.mileage - a.mileage)
    removeItems()
    filteredItems = sortItems
    renderItems()
    sort.classList.remove('ASC')
    sort.className = 'DESC'
  }
}

function sortName() {
  let sort = document.getElementById('sortName')
  if (sort.className === 'DESC') {
    let sortItems = filteredItems.sort((a, b) => +(a.name > b.name) || -(a.name < b.name))
    removeItems()
    filteredItems = sortItems
    renderItems()
    sort.classList.remove('DESC')
    sort.className = 'ASC'
  } else if (sort.className === 'ASC') {
    let sortItems = filteredItems.sort((a, b) => +(b.name > a.name) || -(b.name < a.name))
    removeItems()
    filteredItems = sortItems
    renderItems()
    sort.classList.remove('ASC')
    sort.className = 'DESC'
  }
}

function searchClear() {
  input.value = ''
  removeItems()
  filteredItems = myArr
  renderItems()
}

filteredItems = myArr
renderItems()
// сортировка от и до
function sortAll() {
  let filterFromTo = myArr.filter(item => item.price >= from.value && item.price <= to.value);
  let sortItems = filteredItems.sort((a, b) => a.price - b.price);
  removeItems();
  filteredItems = filterFromTo;
  renderItems();
  if (to.value > from.value) {
    alert('Некоректное значение');
  } else {
    let filterFromTo = myArr.filter(item => item.price >= from.value && item.price <= to.value);
    removeItems();
    filteredItems = filterFromTo;
  }
}
// рендер корзини
function renderItemsCart() {
  const modal = document.querySelector('.popup #products')
  modal.innerHTML = '';
  for (let item of basket) {
    const div = document.createElement('div')
    const img = document.createElement('img')
    const price = document.createElement('div')
    const name = document.createElement('div')
    const mileage = document.createElement('div')
    const model = document.createElement('div')
    const nominal = document.createElement('div')
    const btnRun = document.createElement('button')
    const cross = document.createElement('img')
    const priceAll = document.createElement('div')
    const shoppingBtn = document.createElement('div')

    div.setAttribute('id', 'cars')
    img.setAttribute('src', item.image)
    cross.setAttribute('src', 'images/close.png');

    div.className = 'allItems'
    btnRun.className = 'btnRun'
    nominal.className = 'nominal'
    mileage.className = 'mileage'
    model.className = 'model'
    name.className = 'name'
    price.className = 'price'
    img.className = 'image'
    cross.className = 'crossDelete'
    priceAll.className = 'priceAll'
    shoppingBtn.className = 'shoppingBtn'

    modal.appendChild(div);
    div.appendChild(img)
    div.appendChild(nominal)
    div.appendChild(priceAll)
    nominal.appendChild(name)
    nominal.appendChild(model)
    priceAll.appendChild(price)
    priceAll.appendChild(shoppingBtn)
    shoppingBtn.appendChild(cross)
    div.appendChild(mileage)
    div.appendChild(btnRun)

    name.innerHTML = item.name
    model.innerHTML = item.model
    price.innerHTML = `$ ${item.price}`
    mileage.innerHTML = `Пробег: ${item.mileage} тис.км`
    btnRun.innerHTML = 'Перейти'
  }
}
// открытие модалки
function openModal() {
  btn.onclick = function () {
    modalAll.style.display = "block";
  }
}
// закрытие модалки
function closeModal() {
  span.onclick = function () {
    modalAll.style.display = "none";
  }
}

// сумированние корзины
function totalCart() {
  let sum = basket.reduce((b, a) => a.price + b, 0);
  let total = document.querySelector('#total').innerHTML = 'Total: $ ' + sum;
};
// добавление в корзину
let basket = [];
let cart = document.querySelectorAll('.shopping')
const modal = document.querySelector('.popup')

for (let i = 0; i < cart.length; i++) {
  cart[i].addEventListener('click', function () {
    if (!openModalBasket) {
      basket.push(filteredItems[i])
      renderItemsCart()
      let count = document.getElementById('count').innerHTML = basket.length;
      totalCart()
      shoppingBtn = document.querySelectorAll('.shoppingBtn')
      openModal()
      openModalBasket = true
    } else {
      openModalBasket = false
      closeModal()
    }
  })
};

