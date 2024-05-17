class SourceForFilterOption {
    minPrice(arrayCars) {
        let minPrice = arrayCars[0].price;
        for (let index = 1; index < arrayCars.length; index++) {
            if (arrayCars[index].price < minPrice) {
                minPrice = arrayCars[index].price
            }
        }
        return minPrice;
    }

    maxPrice(arrayCars) {
        let maxPrice = arrayCars[0].price;
        for (let index = 1; index < arrayCars.length; index++) {
            if (arrayCars[index].price > maxPrice) {
                maxPrice = arrayCars[index].price
            }
        }
        return maxPrice;
    }

}

class Filter {
    isOpenedPriceFilter() {
        let openedPrice = document.getElementById("priceOpen")

        if (openedPrice.classList.contains("price-hidden")) {
            openedPrice.classList.remove("price-hidden")
            openedPrice.classList.add("price-visible")
        } else {
            openedPrice.classList.remove("price-visible")
            openedPrice.classList.add("price-hidden")
        }
    }

    isOpenedTypeFilter() {
        let openedType = document.getElementById("typeOpen")

        if (openedType.classList.contains("type-hidden")) {
            openedType.classList.remove("type-hidden")
            openedType.classList.add("type-visible")
        } else {
            openedType.classList.remove("type-visible")
            openedType.classList.add("type-hidden")
        }
    }

    isOpenedCountryFilter() {
        let openedCountry = document.getElementById("countryOpen")

        if (openedCountry.classList.contains("country-hidden")) {
            openedCountry.classList.remove("country-hidden")
            openedCountry.classList.add("country-visible")
        } else {
            openedCountry.classList.remove("country-visible")
            openedCountry.classList.add("country-hidden")
        }
    }

    isOpenedTransmissionFilter() {
        let openedTransmission = document.getElementById("transmissionOpen")

        if (openedTransmission.classList.contains("transmission-hidden")) {
            openedTransmission.classList.remove("transmission-hidden")
            openedTransmission.classList.add("transmission-visible")
        } else {
            openedTransmission.classList.remove("transmission-visible")
            openedTransmission.classList.add("transmission-hidden")
        }
    }

    isOpenedAdFilter() {
        let openedAd = document.getElementById("adOpen")

        if (openedAd.classList.contains("ad-hidden")) {
            openedAd.classList.remove("ad-hidden")
            openedAd.classList.add("ad-visible")
        } else {
            openedAd.classList.remove("ad-visible")
            openedAd.classList.add("ad-hidden")
        }
    }

    isOpenManufacturerFilter() {
        let openedManufacturer = document.getElementById("openManufacturer")

        if (openedManufacturer.classList.contains("manufacturer-visible")) {
            openedManufacturer.classList.remove("manufacturer-visible")
            openedManufacturer.classList.add("manufacturer-hidden")
        } else {
            openedManufacturer.classList.remove("manufacturer-hidden")
            openedManufacturer.classList.add("manufacturer-visible")
        }
    }

    // Метод filterLogic используем только при нажатии на кнопку ПРИМЕНИТЬ

    closePrice() {
        const minPriceInput = document.getElementById("minPriceValue")
        const maxPriceInput = document.getElementById("maxPriceValue")

        minPriceInput.value = SourceFilterOptions.minPrice(arrayCars)
        maxPriceInput.value = SourceFilterOptions.maxPrice(arrayCars)

        const minPriceHeader = document.getElementById("minPriceHeader")
        const maxPriceHeader = document.getElementById("maxPriceHeader")

        minPriceHeader.textContent = String(SourceFilterOptions.minPrice(arrayCars))
        maxPriceHeader.textContent = String(SourceFilterOptions.maxPrice(arrayCars))
    }

    closeType() {
        const typeHeader = document.getElementById("typeCarHeader")
        typeHeader.textContent = "Любой"

        const typeInput = document.getElementById("typeInput")
        typeInput.value = "Любой"
    }
    filterValues() {
        const maxPriceInput = document.getElementById("maxPriceValue");
        let maxPriceValue = Number(maxPriceInput.value);
        const minPriceInput = document.getElementById("minPriceValue");
        let minPriceValue = Number(minPriceInput.value);

        const typeInput = document.getElementById("typeInput")
        let typeValue = String(typeInput.value)
        const manufactures = Array.from(document.querySelectorAll('input[name="manufacture"]:checked')).map(checkbox => checkbox.value);
        const countryInput = document.getElementById("countryInput")
        let countryValue = String(countryInput.value)
        const transmissions = Array.from(document.querySelectorAll('input[name="transmission"]:checked')).map(checkbox => checkbox.value);
        const ads = Array.from(document.querySelectorAll('input[name="ad"]:checked')).map(checkbox => checkbox.value)

        if (maxPriceValue === 0) {
            maxPriceValue = SourceFilterOptions.maxPrice(arrayCars)
        }

        if (minPriceValue === 0) {
            minPriceValue = SourceFilterOptions.minPrice(arrayCars)
        }

        if (typeValue == null || typeValue === "Любой") {
            typeValue = ""
        }

        if (countryValue == null) {
            countryValue = ""
        }

        let filteredCars = arrayCars.filter((car) => {
            return (
                ((car.price <= maxPriceValue && car.price >= minPriceValue) || (maxPriceValue + minPriceValue === 0)) &&
                (typeValue === "" || car.type === typeValue) &&
                (manufactures.length === 0 || manufactures.includes(car.manufacturer)) &&
                (countryValue === "" || car.country === countryValue) &&
                (transmissions.length === 0 || transmissions.includes(car.transmission)) &&
                (ads.length === 0 || ads.includes(car.ad))
            );
        });

        const minPriceHeader = document.getElementById("minPriceHeader")
        minPriceHeader.textContent = String(minPriceValue)

        const maxPriceHeader = document.getElementById("maxPriceHeader")
        maxPriceHeader.textContent = String(maxPriceValue)
        document.getElementById("price").style.display = "inline"

        const typeCarHeader = document.getElementById("typeCarHeader")
        typeCarHeader.textContent = String(typeValue)
        document.getElementById("type").style.display = "inline"

        SourceCards.render(filteredCars)
    }
}

class CardsList {
    renderFilter(arrayNameFilterOption) {
        let htmListFilter = ""

        arrayNameFilterOption.forEach((nameButton) => {
            // Поменять плюс в иконке на тернарный оператор!
            htmListFilter += `
                <button 
                    id="open${nameButton}Button" 
                    name="0" 
                    class="button filter" 
                    onclick="SourceCards.handleClickFilterButton('${nameButton}')"
                >
                <img 
                    src="../svgIcon/plusForAutoFilter.svg" 
                    alt="imgPlusFilterButton"
                >
                    ${nameButton}
                </button>   
                <div id="${nameButton}Open" style="width: 289px; background-color: #FFFFFF"></div>
            `
        });

        let divFilter = document.getElementById("filterButton")
        divFilter.innerHTML = htmListFilter
    }

    handleClickFilterButton(nameButton) {
        let htmlPlaceUnderButton = ""

        if (nameButton === arrayNameFilterButton[0]) {
            htmlPlaceUnderButton = `
                <span id="priceOpen" class="price-visible">
                    <span class="filter__text">От&nbsp;
                        <input 
                            type="number"
                            id="minPriceValue"
                            placeholder=""
                            value="${minPrice}"
                            step="1"
                            class="filter__price-input"
                        >
                        <span class="filter__text">&nbsp;До&nbsp;</span>
                        <input 
                        type="number"
                        id="maxPriceValue"
                        value="${maxPrice}"
                        step="1"
                        class="filter__price-input"
                      >
                    </span>
                       <button onclick="SourceFilter.isOpenedPriceFilter()" class="button-close-filter-option"></button>
                    </span>
            `
        }

        if (nameButton === arrayNameFilterButton[1]) {
            // Добавить оставшиеся опции в datalist
            htmlPlaceUnderButton = `
                <span id="typeOpen" class="type-visible">
                    <input 
                        type="text"
                        list="typeCar"
                        id="typeInput"
                        class="type-input"
                    >
                    <datalist id="typeCar">
                        <option value="Внедорожник">
                        <option value="Легковой автомобиль">
                        <option value="Грузовик">
                        <option value="Минивэн">
                    </datalist>
                    <button onclick="SourceFilter.isOpenedTypeFilter()" class="button-close-filter-option">
                </span>
            `
        }

        if (nameButton === arrayNameFilterButton[2]) {
            htmlPlaceUnderButton = `
                <span class="manufacturer-visible" id="openManufacturer">
                    <span>
                        <input
                            name="manufacture"
                            type="checkbox"
                            id="kia"
                            value="Kia"
                            class="ad-input"
                        >
                        <label class="label-manufacturer" for="kia">Kia-Rio</label>
                    </span>
                    <span>
                        <input
                            name="manufacture"
                            type="checkbox"
                            id="UAZ"
                            value="УАЗ"
                            class="ad-input"
                        >
                    <label class="label-manufacturer" for="UAZ">УАЗ</label>
                    </span>
                    <span>
                        <input
                            name="manufacture"
                            type="checkbox"
                            id="Chevrolet"
                            value="Chevrolet"
                            class="ad-input"
                        >
                    <label class="label-manufacturer" for="Chevrolet">Chevrolet</label>
                    </span>
                    <span>
                        <input
                            name="manufacture"
                            type="checkbox"
                            id="Volvo"
                            value="Volvo"
                            class="ad-input"
                        >
                    <label class="label-manufacturer" for="Volvo">Volvo</label>
                    </span>
                    <span>
                        <input
                            name="manufacture"
                            type="checkbox"
                            id="Renault"
                            value="Renault"
                            class="ad-input"
                        >
                    <label class="label-manufacturer" for="Renault">Renault</label>
                    </span>
                    <span>
                        <input
                            name="manufacture"
                            type="checkbox"
                            id="Discovery"
                            value="Discovery"
                            class="ad-input"
                        >
                    <label class="label-manufacturer" for="Discovery">Discovery</label>
                    </span>
                    <span>
                        <input
                            name="manufacture"
                            type="checkbox"
                            id="Lada"
                            value="Lada"
                            class="ad-input"
                        >
                    <label class="label-manufacturer" for="Lada">Lada</label>
                    </span>
                    <span>
                        <input
                            name="manufacture"
                            type="checkbox"
                            id="Ford"
                            value="Ford"
                            class="ad-input"
                        >
                    <label class="label-manufacturer" for="Ford">Ford</label>
                    </span>
                    <span>
                        <input
                            name="manufacture"
                            type="checkbox"
                            id="Suzuki"
                            value="Suzuki"
                            class="ad-input"
                        >
                    <label class="label-manufacturer" for="Suzuki">Suzuki</label>
                    </span>
                    <span>
                        <input
                            name="manufacture"
                            type="checkbox"
                            id="MercedesBenz"
                            value="MercedesBenz"
                            class="ad-input"
                        >
                    <label class="label-manufacturer" for="MercedesBenz">MercedesBenz</label>
                    </span>
                    <button onclick="SourceFilter.isOpenManufacturerFilter()" class="button-close-filter-option" style="margin-left: 80px">
                    </span>
            `
        }

        if (nameButton === arrayNameFilterButton[3]) {
            htmlPlaceUnderButton = `
                <span id="countryOpen" class="type-visible">
                    <input list="countryCar"
                        id="countryInput"
                        class="type-input"
                    >
                    <datalist id="countryCar">
                        <option value="Россия">
                        <option value="Япония">
                        <option value="Китай">
                        <option value="Южная Корея">
                        <option value="Германия">
                        <option value="Нидерланды">
                    </datalist>
                    <button onclick="SourceFilter.isOpenedCountryFilter()" class="button-close-filter-option">
                </span>
            `
        }

        if (nameButton === arrayNameFilterButton[4]) {
            htmlPlaceUnderButton = `
                <span id="transmissionOpen" class="transmission-visible">
                    <span>
                        <input
                            name="transmission"
                            type="checkbox"
                            id="Mechanic"
                            value="Механическая"
                            class="transmission-input"
                        />
                        <label for="Mechanic"><span class="label-ad">Механическая</span></label>
                    </span>
                    <span>
                        <input
                            name="transmission"
                            type="checkbox"
                            id="Machine"
                            value="Автомат"
                            class="transmission-input"
                        />
                        <label for="Machine"><span class="label-ad">Автомат</span></label>
                    </span>
                    <span>
                        <input
                            name="transmission"
                            type="checkbox"
                            id="Machine"
                            value="Вариатор"
                            class="transmission-input"
                        />
                        <label for="Machine"><span class="label-ad">Вариатор</span></label>
                    </span>
                    <span>
                        <input
                            name="transmission"
                            type="checkbox"
                            id="Machine"
                            value="Роботизированная"
                            class="transmission-input"
                        />
                        <label for="Machine"><span class="label-ad">Роботизированная</span></label>
                    </span>
                    <button onclick="SourceFilter.isOpenedTransmissionFilter()" class="button-close-filter-option" style="margin-left: 80px">
                </span>
                
            `
        }

        if (nameButton === arrayNameFilterButton[5]) {
            htmlPlaceUnderButton = `
                <span id="adOpen" class="ad-visible">
                    <span>
                        <input
                            name="ad"
                            type="checkbox"
                            id="sell"
                            value="Продажа"
                            class="ad-input"
                        >
                        <label class="label-ad" for="sell">Продажа</label>
                    </span>
                    <span>
                        <input
                            name="ad"
                            type="checkbox"
                            id="auction"
                            value="Аукцион"
                            class="ad-input"
                        >
                        <label class="label-ad" for="auction">Аукцион</label>
                    </span>
                    <span>
                        <input
                            name="ad"
                            type="checkbox"
                            id="Rental"
                            value="Аренда"
                            class="ad-input"
                        >
                        <label class="label-ad" for="Rental">Аренда</label>
                    </span>
                    <button onclick="SourceFilter.isOpenedAdFilter()" class="button-close-filter-option" style="margin-left: 80px">
                </span>
            `
        }

        let placeForButton = document.getElementById(`${nameButton}Open`)
        placeForButton.innerHTML = htmlPlaceUnderButton
    }

    render(arrayCars) {
        let htmlListCars = ""

        arrayCars.forEach(({country, model, price, type, year, photo}) => {
            const priceCar = price.toLocaleString()

            htmlListCars += `
        <li class="cards-element">
            <img class="cards-element__img" 
            alt="imgCar"
            src="${photo}"
            width="360"
            height="204" 
            />
            <span class="cards-element__type">${type}</span>
            <span class="cards-element__name">${model}</span>
            <div class="cards-element__sub-info">
                <span class="cards-element__yearProd">${year}</span>
            </div>
            <div class="cards-element__details">
                <span class="cards-element__location">${country}</span>
                <span class="cards-element__price">${priceCar} ₽</span>
            </div>
        </li>`;
        })

        const finishHtml = `
    <ul class="cards-container">
        ${htmlListCars}
    </ul>`;

        let divCards = document.getElementById("listCards")
        divCards.innerHTML = finishHtml
    }
}

class Car {
    constructor(country, manufacturer, model, price, type, transmission, year, photo, ad) {
        this.country = country
        this.manufacturer = manufacturer
        this.model = model
        this.price = price
        this.type = type
        this.transmission = transmission
        this.year = year
        this.photo = photo
        this.ad = ad
    }
}

const K7 = new Car(
    "Южная Корея",
    "Kia",
    "K7",
    2500016,
    "Легковой автомобиль",
    "Автомат",
    "2020",
    "./photos/K7.jpg",
    "Продажа"
);

const Levorg = new Car(
    "Япония",
    "Subaru",
    "Levorg",
    1225015,
    "Легковой автомобиль",
    "Вариатор",
    "2019",
    "./photos/levorg.jpg",
    "Продажа"
);

const AudiQ5 = new Car(
    "Германия",
    "Audi",
    "Q5 45 TFSI",
    2400000,
    "Внедорожник",
    "Роботизированная",
    "2019",
    "./photos/AudiQ5.jpg",
    "Продажа"
);

const NissanSerena = new Car(
    "Япония",
    "Nissan",
    "Serena",
    1049658,
    "Минивэн",
    "Вариатор",
    "2009",
    "./photos/NissanSerena.jpg",
    "Аукцион"
);

const UAZ3151 = new Car(
    "Россия",
    "УАЗ",
    "3151",
    300000,
    "Внедорожник",
    "Механическая",
    "2002",
    "./photos/UAZ3151.jpg",
    "Продажа"
);

const OpelCOMBOAircoElctRamenStuurbediening = new Car(
    "Нидерланды",
    "Opel",
    "Opel COMBO",
    1500000,
    "Грузовик",
    "Механическая",
    "2015",
    "./photos/OpelCOMBO.png",
    "Продажа"
);

const MercedesBenz250 = new Car(
    "Нидерланды",
    "Mercedes-Benz",
    "Mercedes-Benz250",
    4887000,
    "Грузовик",
    "Автомат",
    "2015",
    "./photos/Mercedes-Benz250.jpg",
    "Продажа"
);

const NissanEcoT100 = new Car(
    "Нидерланды",
    "Nissan",
    "EcoT100",
    279000,
    "Грузовик",
    "Механическая",
    "2015",
    "./photos/NissanEcoT100.png",
    "Продажа"
);

const CobusMercedesBenz = new Car(
    "Нидерланд",
    "Mercedes Benz",
    "Cobus2700s",
    3946500,
    "Грузовик",
    "Механическая",
    "2015",
    "./photos/CobusMercedesBenz.jpg",
    "Аукцион"
);

const Setra317ULGT = new Car(
    "Нидерланды",
    "MercedesBenz",
    "Cobus2700S",
    2325200,
    "Грузовик",
    "Автомат",
    "2015",
    "./photos/Setra317UL-GT.jpg",
    "Аукцион"
);

const KiaK72020 = new Car(
    "Россия",
    "Kia",
    "K7",
    2837000,
    "Легковой автомобиль",
    "Автомат",
    "2020",
    "./photos/KiaK7.jpg",
    "Продажа"
);

const SuzukiJimny = new Car(
    "Россия",
    "Suzuki",
    "Jimny",
    1099000,
    "Легковой автомобиль",
    "Автомат",
    "2008",
    "./photos/SuzukiJimnyIII.jpg",
    "Аукцион"
);

const KiaSpectra = new Car(
    "Россия",
    "Kia",
    "Spectra I",
    300000,
    "Легковой автомобиль",
    "Автомат",
    "2008",
    "./photos/KiaSpectra.jpg",
    "Продажа"
);

const FordFocusII = new Car(
    "Россия",
    "Ford",
    "Focus II",
    535000,
    "Легковой автомобиль",
    "Механическая",
    "2008",
    "./photos/FordFocusII.jpg",
    "Аукцион"
);

const Lada2114 = new Car(
    "Россия",
    "Lada",
    "2114",
    90000,
    "Легковой автомобиль",
    "Механическая",
    "2001",
    "./photos/Lada2114.jpg",
    "Продажа"
);

const Uaz3151 = new Car(
    "Россия",
    "UAZ",
    "3151",
    275000,
    "Внедорожник",
    "Механическая",
    "1992",
    "./photos/3151.jpg",
    "Продажа"
);

const LandRoverDiscovery = new Car(
    "Россия",
    "Land Rover",
    "Discovery",
    2699000,
    "Внедорожник",
    "Автомат",
    "2014",
    "./photos/LandRover.jpg",
    "Продажа"
);

const RenaultRoverLogan = new Car(
    "Россия",
    "Renault",
    "Logan I",
    470000,
    "Легковой автомобиль",
    "Механическая",
    "2011",
    "./photos/RenaultLogan.jpg",
    "Аукцион"
);

const VolvoXC60 = new Car(
    "Россия",
    "Volvo",
    "XC60",
    1260000,
    "Внедорожник",
    "Автомат",
    "2010",
    "./photos/VolvoXC60.jpg",
    "Продажа"
);

const ChevroletAveo = new Car(
    "Россия",
    "Chevrolet",
    "Aveo",
    350000,
    "Легковой автомобиль",
    "Механическая",
    "2008",
    "./photos/ChevroletAveo.jpg",
    "Продажа"
);

const arrayCars = [ChevroletAveo, VolvoXC60, RenaultRoverLogan, LandRoverDiscovery, Uaz3151, Lada2114, FordFocusII, KiaSpectra, SuzukiJimny, KiaK72020, Setra317ULGT, CobusMercedesBenz, NissanEcoT100, K7, Levorg, AudiQ5, NissanSerena, UAZ3151, OpelCOMBOAircoElctRamenStuurbediening, MercedesBenz250]
