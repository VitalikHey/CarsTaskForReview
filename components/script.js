const SourceFilter = new Filter()
const SourceCards = new CardsList()
const SourceFilterOptions = new SourceForFilterOption()

const arrayNameFilterButton = [
    "Цена, ₽",
    "Тип транспорта",
    "Производитель",
    "Страна местонахождения",
    "Коробка передач/Ход",
    "Тип объявления"
]
const arrayNameLogicButton = [
    "Price",
    "Type",
    "Manufacturer",
    "Country",
    "Transmission",
    "Ad"
]

let minPrice = SourceFilterOptions.minPrice(arrayCars)
let maxPrice = SourceFilterOptions.maxPrice(arrayCars)

let minPriceHeader = document.getElementById("minPriceHeader")
minPriceHeader.textContent = String(minPrice)
let maxPriceHeader = document.getElementById("maxPriceHeader")
maxPriceHeader.textContent = String(maxPrice)

let button = document.getElementById("buttonAccept")
button.addEventListener("click", SourceFilter.filterValues)

let buttonHeaderClearAll = document.getElementById("closeAll")
buttonHeaderClearAll.addEventListener("click", () => {
    SourceCards.render(arrayCars)
    SourceCards.renderFilter(arrayNameFilterButton)
    let minPriceHeader = document.getElementById("minPriceHeader")
    minPriceHeader.textContent = String(minPrice)
    let maxPriceHeader = document.getElementById("maxPriceHeader")
    maxPriceHeader.textContent = String(maxPrice)

    let typeHeader = document.getElementById("typeCarHeader")
    typeHeader.textContent = "Любой"
})

let buttonClosePrice = document.getElementById("closePrice")
buttonClosePrice.addEventListener("click", () => {
    SourceFilter.closePrice()
    SourceFilter.filterValues()
})

SourceCards.renderFilter(arrayNameFilterButton, arrayNameLogicButton)
SourceCards.render(arrayCars)

let buttonTypeHeader = document.getElementById("closeType")
buttonTypeHeader.addEventListener("click", () => {
    SourceFilter.closeType()
    SourceFilter.filterValues()
})

// Всё что выше полностью исправно - убрать в класс





