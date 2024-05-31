const enum Price {
    k7 = 2500016,
    Levorg = 1225015,
    AudiQ5 = 2400000,
    UAZ3151 = 300000,
    OpelCOMBOAircoElctRamenStuurbediening = 1500000,
    NissanEcoT100 = 4887000,
    CobusMercedesBenz = 4887000,
    Setra317ULGT = 279000,
    SuzukiJimny = 1099000,
    KiaK72020 = 2325200,
    KiaSpectra = 300000,
    FordFocusII = 535000,
    Lada2114 = 90000,
    LandRoverDiscovery = 275000,
    RenaultRoverLogan = 2699000,
    VolvoXC60 = 470000,
    ChevroletAveo = 1260000,
}

const enum Country {
    SouthKorea = "Южная Корея",
    Russia = "Россия",
    Germany = "Германия",
    Japan = "Япония",
    Netherlands = "Нидерланды"
}

const enum Manufacturer {
    Kia = "Kia",
    UAZ = "УАЗ",
    Lada = "Lada",
    Chevrolet = "Chevrolet",
    Volvo = "Volvo",
    Renault = "Renault",
    Discovery = "Discovery",
    Ford = "Ford",
    Suzuki = "Suzuki",
    MercedesBenz = "MercedesBenz",
    Subaru = "Subaru",
    Audi = "Audi",
    Nissan = "Nissan",
    Opel = "Opel",
}

const enum Model {
    K7 = "K7",
    Levorg = "Levorq",
    AudiQ5 = "Q5 45 TFSI",
    UAZ3151 = "3151",
    OpelCOMBOAircoElctRamenStuurbediening = "Opel COMBO",
    NissanEcoT100 = "EcoT100",
    CobusMercedesBenz = "Cobus2700s",
    Setra317ULGT = "317ULGT",
    KiaK72020 = "K7",
    SuzukiJimny = "Jimny",
    KiaSpectra = "Spectra I",
    FordFocusII = "Focus II",
    Lada2114 = "Легковой автомобиль",
    LandRoverDiscovery = "Discovery",
    RenaultRoverLogan = "Logan I",
    VolvoXC60 = "XC60",
    ChevroletAveo = "Aveo"
}

const enum TypeCar {
    OffRoad = "Внедорожник",
    passengerCar = "Легковой автомобиль",
    truck = "Грузовик",
    minivan = "Минивэн"
}

const enum Transmission {
    mechanic = "Механическая",
    automatic = "Автомат",
    robot = "Роботизированная",
    variate = "Вариатор"
}

const enum Ad {
    Sell = "Продажа",
    Auction = "Аукцион",
}

class Car {
    country: Country;
    manufacturer: Manufacturer;
    model: Model;
    price: Price;
    type: TypeCar;
    transmission: Transmission;
    year: number | string;
    photo: string;
    ad: Ad;

    constructor(country: Country,
                manufacturer: Manufacturer,
                model: Model,
                price: Price,
                type: TypeCar,
                transmission: Transmission,
                year: number | string,
                photo: string,
                ad: Ad) {
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

const K7: Car = new Car(
    Country.SouthKorea,
    Manufacturer.Kia,
    Model.K7,
    Price.k7,
    TypeCar.passengerCar,
    Transmission.automatic,
    "2020",
    "./photos/K7.jpg",
    Ad.Sell
);

const Levorg: Car = new Car(
    Country.Japan,
    Manufacturer.Subaru,
    Model.Levorg,
    Price.Levorg,
    TypeCar.passengerCar,
    Transmission.variate,
    "2019",
    "./photos/levorg.jpg",
    Ad.Sell
);

const AudiQ5: Car = new Car(
    Country.Germany,
    Manufacturer.Audi,
    Model.AudiQ5,
    Price.AudiQ5,
    TypeCar.OffRoad,
    Transmission.robot,
    "2019",
    "./photos/AudiQ5.jpg",
    Ad.Sell
);

const UAZ3151: Car = new Car(
    Country.Russia,
    Manufacturer.UAZ,
    Model.UAZ3151,
    Price.UAZ3151,
    TypeCar.OffRoad,
    Transmission.mechanic,
    "2002",
    "./photos/UAZ3151.jpg",
    Ad.Sell
);

const OpelCOMBOAircoElctRamenStuurbediening: Car = new Car(
    Country.Netherlands,
    Manufacturer.Opel,
    Model.OpelCOMBOAircoElctRamenStuurbediening,
    Price.OpelCOMBOAircoElctRamenStuurbediening,
    TypeCar.truck,
    Transmission.mechanic,
    "2015",
    "./photos/OpelCOMBO.png",
    Ad.Sell
);

const MercedesBenz250: Car = new Car(
    Country.Netherlands,
    Manufacturer.MercedesBenz,
    Model.CobusMercedesBenz,
    Price.CobusMercedesBenz,
    TypeCar.truck,
    Transmission.automatic,
    "2015",
    "./photos/Mercedes-Benz250.jpg",
    Ad.Sell
);

const NissanEcoT100: Car = new Car(
    Country.Netherlands,
    Manufacturer.Nissan,
    Model.NissanEcoT100,
    Price.NissanEcoT100,
    TypeCar.truck,
    Transmission.mechanic,
    "2015",
    "./photos/NissanEcoT100.png",
    Ad.Sell
);

const CobusMercedesBenz: Car = new Car(
    Country.Netherlands,
    Manufacturer.MercedesBenz,
    Model.CobusMercedesBenz,
    Price.CobusMercedesBenz,
    TypeCar.truck,
    Transmission.mechanic,
    "2015",
    "./photos/CobusMercedesBenz.jpg",
    Ad.Auction
);

const Setra317ULGT: Car = new Car(
    Country.Netherlands,
    Manufacturer.MercedesBenz,
    Model.Setra317ULGT,
    Price.Setra317ULGT,
    TypeCar.truck,
    Transmission.automatic,
    "2015",
    "./photos/Setra317UL-GT.jpg",
    Ad.Auction
);

const KiaK72020: Car = new Car(
    Country.Russia,
    Manufacturer.Kia,
    Model.KiaK72020,
    Price.KiaK72020,
    TypeCar.passengerCar,
    Transmission.automatic,
    "2020",
    "./photos/KiaK7.jpg",
    Ad.Sell
);

const SuzukiJimny: Car = new Car(
    Country.Russia,
    Manufacturer.Suzuki,
    Model.SuzukiJimny,
    Price.SuzukiJimny,
    TypeCar.passengerCar,
    Transmission.automatic,
    "2008",
    "./photos/SuzukiJimnyIII.jpg",
    Ad.Auction
);

const KiaSpectra: Car = new Car(
    Country.Russia,
    Manufacturer.Kia,
    Model.KiaSpectra,
    Price.KiaSpectra,
    TypeCar.passengerCar,
    Transmission.automatic,
    "2008",
    "./photos/KiaSpectra.jpg",
    Ad.Sell
);

const FordFocusII: Car = new Car(
    Country.Russia,
    Manufacturer.Ford,
    Model.FordFocusII,
    Price.FordFocusII,
    TypeCar.passengerCar,
    Transmission.mechanic,
    "2008",
    "./photos/FordFocusII.jpg",
    Ad.Auction
);

const Lada2114: Car = new Car(
    Country.Russia,
    Manufacturer.Lada,
    Model.Lada2114,
    Price.Lada2114,
    TypeCar.passengerCar,
    Transmission.mechanic,
    "2001",
    "./photos/Lada2114.jpg",
    Ad.Sell
);

const Uaz3151: Car = new Car(
    Country.Russia,
    Manufacturer.UAZ,
    Model.UAZ3151,
    Price.UAZ3151,
    TypeCar.OffRoad,
    Transmission.mechanic,
    "1992",
    "./photos/3151.jpg",
    Ad.Sell
);

const LandRoverDiscovery: Car = new Car(
    Country.Russia,
    Manufacturer.Discovery,
    Model.LandRoverDiscovery,
    Price.LandRoverDiscovery,
    TypeCar.OffRoad,
    Transmission.automatic,
    "2014",
    "./photos/LandRover.jpg",
    Ad.Sell
);

const RenaultRoverLogan: Car = new Car(
    Country.Russia,
    Manufacturer.Renault,
    Model.RenaultRoverLogan,
    Price.RenaultRoverLogan,
    TypeCar.passengerCar,
    Transmission.mechanic,
    "2011",
    "./photos/RenaultLogan.jpg",
    Ad.Auction
);

const VolvoXC60: Car = new Car(
    Country.Russia,
    Manufacturer.Volvo,
    Model.VolvoXC60,
    Price.VolvoXC60,
    TypeCar.OffRoad,
    Transmission.automatic,
    "2010",
    "./photos/VolvoXC60.jpg",
    Ad.Sell
);

const ChevroletAveo: Car = new Car(
    Country.Russia,
    Manufacturer.Chevrolet,
    Model.ChevroletAveo,
    Price.ChevroletAveo,
    TypeCar.passengerCar,
    Transmission.mechanic,
    "2008",
    "./photos/ChevroletAveo.jpg",
    Ad.Sell
);

const arrayCars: Array<Car> = [
    ChevroletAveo,
    VolvoXC60,
    RenaultRoverLogan,
    LandRoverDiscovery,
    Uaz3151, Lada2114,
    FordFocusII,
    KiaSpectra,
    SuzukiJimny,
    KiaK72020,
    Setra317ULGT,
    CobusMercedesBenz,
    NissanEcoT100,
    K7,
    Levorg,
    AudiQ5,
    UAZ3151,
    OpelCOMBOAircoElctRamenStuurbediening,
    MercedesBenz250
];

// Пока что, типо тут заканчивается файл с константами

class SourceForFilterOption {
    minPrice(arrayCars: Array<Car>): number {
        let minPrice: Price = arrayCars[0].price;
        for (let index: number = 1; index < arrayCars.length; index++) {
            if (arrayCars[index].price < minPrice) {
                minPrice = arrayCars[index].price
            }
        }
        return minPrice;
    }

    maxPrice(arrayCars: Array<Car>): number {
        let maxPrice: Price = arrayCars[0].price;
        for (let index: number = 1; index < arrayCars.length; index++) {
            if (arrayCars[index].price > maxPrice) {
                maxPrice = arrayCars[index].price
            }
        }
        return maxPrice;
    }

}

class Filter {
    isOpenedPriceFilter(): void {
        let openedPrice: HTMLElement = document.getElementById("priceOpen")

        if (openedPrice.classList.contains("price-hidden")) {
            openedPrice.classList.remove("price-hidden")
            openedPrice.classList.add("price-visible")
        } else {
            openedPrice.classList.remove("price-visible")
            openedPrice.classList.add("price-hidden")
        }
    }

    isOpenedTypeFilter(): void {
        let openedType: HTMLElement = document.getElementById("typeOpen")

        if (openedType.classList.contains("type-hidden")) {
            openedType.classList.remove("type-hidden")
            openedType.classList.add("type-visible")
        } else {
            openedType.classList.remove("type-visible")
            openedType.classList.add("type-hidden")
        }
    }

    isOpenedCountryFilter(): void {
        let openedCountry: HTMLElement = document.getElementById("countryOpen")

        if (openedCountry.classList.contains("country-hidden")) {
            openedCountry.classList.remove("country-hidden")
            openedCountry.classList.add("country-visible")
        } else {
            openedCountry.classList.remove("country-visible")
            openedCountry.classList.add("country-hidden")
        }
    }

    isOpenedTransmissionFilter(): void {
        let openedTransmission: HTMLElement = document.getElementById("transmissionOpen")

        if (openedTransmission.classList.contains("transmission-hidden")) {
            openedTransmission.classList.remove("transmission-hidden")
            openedTransmission.classList.add("transmission-visible")
        } else {
            openedTransmission.classList.remove("transmission-visible")
            openedTransmission.classList.add("transmission-hidden")
        }
    }

    isOpenedAdFilter(): void {
        let openedAd: HTMLElement = document.getElementById("adOpen")

        if (openedAd.classList.contains("ad-hidden")) {
            openedAd.classList.remove("ad-hidden")
            openedAd.classList.add("ad-visible")
        } else {
            openedAd.classList.remove("ad-visible")
            openedAd.classList.add("ad-hidden")
        }
    }

    isOpenManufacturerFilter(): void {
        let openedManufacturer: HTMLElement = document.getElementById("openManufacturer")

        if (openedManufacturer.classList.contains("manufacturer-visible")) {
            openedManufacturer.classList.remove("manufacturer-visible")
            openedManufacturer.classList.add("manufacturer-hidden")
        } else {
            openedManufacturer.classList.remove("manufacturer-hidden")
            openedManufacturer.classList.add("manufacturer-visible")
        }
    }

    // Метод filterLogic используем только при нажатии на кнопку ПРИМЕНИТЬ

    closePrice(): void {
        const minPriceInput: HTMLElement = document.getElementById("minPriceValue")
        const maxPriceInput: HTMLElement = document.getElementById("maxPriceValue")

        if (minPriceInput instanceof  HTMLInputElement && maxPriceInput instanceof HTMLInputElement) {
            if (minPriceInput && maxPriceInput) {
                minPriceInput.value = String(SourceFilterOptions.minPrice(arrayCars))
                maxPriceInput.value = String(SourceFilterOptions.maxPrice(arrayCars))
            }

            const minPriceHeader: HTMLElement | null = document.getElementById("minPriceHeader")
            const maxPriceHeader: HTMLElement | null = document.getElementById("maxPriceHeader")

            if (minPriceHeader && maxPriceHeader) {
                minPriceHeader.textContent = String(SourceFilterOptions.minPrice(arrayCars))
                maxPriceHeader.textContent = String(SourceFilterOptions.maxPrice(arrayCars))
            }
        }
    }

    closeType(): void {
        const typeHeader: HTMLElement = document.getElementById("typeCarHeader")
        typeHeader.textContent = "Любой"

        const typeInput: HTMLElement = document.getElementById("typeInput")
        if (typeInput instanceof HTMLInputElement) {
            typeInput.value = "Любой"
        }
    }

    filterValues(): void {
        const maxPriceInput: HTMLElement = document.getElementById("maxPriceValue");
        const minPriceInput: HTMLElement = document.getElementById("minPriceValue");
        const typeInput: HTMLElement = document.getElementById("typeInput");
        const countryInput: HTMLElement = document.getElementById("countryInput");

        if (maxPriceInput instanceof HTMLInputElement &&
            minPriceInput instanceof HTMLInputElement &&
            typeInput instanceof HTMLInputElement &&
            countryInput instanceof  HTMLInputElement) {
            let maxPriceValue: number = Number(maxPriceInput.value);
            let minPriceValue: number = Number(minPriceInput.value);
            let typeValue: string = String(typeInput.value)
            let countryValue: string = countryInput.value

            const manufactures: Array<string> = Array.from(document.querySelectorAll('input[name="manufacture"]:checked')).map((checkbox: HTMLInputElement) => checkbox.value);
            const transmissions: Array<string> = Array.from(document.querySelectorAll('input[name="transmission"]:checked')).map((checkbox: HTMLInputElement) => checkbox.value);
            const ads: Array<string> = Array.from(document.querySelectorAll('input[name="ad"]:checked')).map((checkbox: HTMLInputElement) => checkbox.value)

            if (!maxPriceValue) {
                maxPriceValue = SourceFilterOptions.maxPrice(arrayCars)
            }

            if (!minPriceValue) {
                minPriceValue = SourceFilterOptions.minPrice(arrayCars)
            }

            if (!typeValue || typeValue === "Любой") {
                typeValue = ""
            }

            if (!countryValue) {
                countryValue = ""
            }

            let filteredCars: Array<Car> = arrayCars.filter((car: Car) => {
                return (
                    ((car.price <= maxPriceValue && car.price >= minPriceValue) || !(maxPriceValue + minPriceValue)) &&
                    (!typeValue || car.type === typeValue) &&
                    (!manufactures.length || manufactures.includes(car.manufacturer)) &&
                    (!countryValue || car.country === countryValue) &&
                    (!transmissions.length || transmissions.includes(car.transmission)) &&
                    (!ads.length || ads.includes(car.ad))
                );
            });

            const minPriceHeader: HTMLElement = document.getElementById("minPriceHeader")
            minPriceHeader.textContent = String(minPriceValue)

            const maxPriceHeader: HTMLElement = document.getElementById("maxPriceHeader")
            maxPriceHeader.textContent = String(maxPriceValue)
            document.getElementById("price").style.display = "inline"

            const typeCarHeader: HTMLElement = document.getElementById("typeCarHeader")
            typeCarHeader.textContent = String(typeValue)
            document.getElementById("type").style.display = "inline"

            SourceCards.render(filteredCars)
        }
    }
}

// А тут заканчивается файл filter

class CardsList {
    renderFilter(arrayNameFilterOption: Array<string>): void {
        let htmListFilter: string = ""

        arrayNameFilterOption.map((nameButton): void => {
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

        let divFilter: HTMLElement = document.getElementById("filterButton")
        divFilter.innerHTML = htmListFilter
    }

    handleClickFilterButton(nameButton: string) {
        let htmlPlaceUnderButton: string = ""

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
                        <option value="${TypeCar.OffRoad}">
                        <option value="${TypeCar.passengerCar}">
                        <option value="${TypeCar.truck}">
                        <option value="${TypeCar.minivan}">
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
                            value="${Manufacturer.Kia}"
                            class="ad-input"
                        >
                        <label class="label-manufacturer" for="kia">Kia-Rio</label>
                    </span>
                    <span>
                        <input
                            name="manufacture"
                            type="checkbox"
                            id="UAZ"
                            value="${Manufacturer.UAZ}"
                            class="ad-input"
                        >
                    <label class="label-manufacturer" for="UAZ">УАЗ</label>
                    </span>
                    <span>
                        <input
                            name="manufacture"
                            type="checkbox"
                            id="Chevrolet"
                            value="${Manufacturer.Chevrolet}"
                            class="ad-input"
                        >
                    <label class="label-manufacturer" for="Chevrolet">Chevrolet</label>
                    </span>
                    <span>
                        <input
                            name="manufacture"
                            type="checkbox"
                            id="Volvo"
                            value="${Manufacturer.Volvo}"
                            class="ad-input"
                        >
                    <label class="label-manufacturer" for="Volvo">Volvo</label>
                    </span>
                    <span>
                        <input
                            name="manufacture"
                            type="checkbox"
                            id="Renault"
                            value="${Manufacturer.Renault}"
                            class="ad-input"
                        >
                    <label class="label-manufacturer" for="Renault">Renault</label>
                    </span>
                    <span>
                        <input
                            name="manufacture"
                            type="checkbox"
                            id="Discovery"
                            value="${Manufacturer.Discovery}"
                            class="ad-input"
                        >
                    <label class="label-manufacturer" for="Discovery">Discovery</label>
                    </span>
                    <span>
                        <input
                            name="manufacture"
                            type="checkbox"
                            id="Lada"
                            value="${Manufacturer.Lada}"
                            class="ad-input"
                        >
                    <label class="label-manufacturer" for="Lada">Lada</label>
                    </span>
                    <span>
                        <input
                            name="manufacture"
                            type="checkbox"
                            id="Ford"
                            value="${Manufacturer.Lada}"
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
                            value="${Manufacturer.MercedesBenz}"
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
                        <option value="${Country.Russia}">
                        <option value="${Country.Japan}">
                        <option value="${Country.SouthKorea}">
                        <option value="${Country.Germany}">
                        <option value="${Country.Netherlands}">
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
                            value="${Transmission.mechanic}"
                            class="transmission-input"
                        />
                        <label for="Mechanic"><span class="label-ad">Механическая</span></label>
                    </span>
                    <span>
                        <input
                            name="transmission"
                            type="checkbox"
                            id="Machine"
                            value="${Transmission.automatic}"
                            class="transmission-input"
                        />
                        <label for="Machine"><span class="label-ad">Автомат</span></label>
                    </span>
                    <span>
                        <input
                            name="transmission"
                            type="checkbox"
                            id="Machine"
                            value="${Transmission.variate}"
                            class="transmission-input"
                        />
                        <label for="Machine"><span class="label-ad">Вариатор</span></label>
                    </span>
                    <span>
                        <input
                            name="transmission"
                            type="checkbox"
                            id="Machine"
                            value="${Transmission.robot}"
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
                    <button onclick="SourceFilter.isOpenedAdFilter()" class="button-close-filter-option" style="margin-left: 80px">
                </span>
            `
        }

        let placeForButton: HTMLElement = document.getElementById(`${nameButton}Open`)
        placeForButton.innerHTML = htmlPlaceUnderButton
    }

    render(arrayCars: Array<Car>): void {
        let htmlListCars: string = ""

        arrayCars.forEach(({country, model, price, type, year, photo}): void => {
            const priceCar: string = price.toLocaleString()

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

        const finishHtml: string = `
    <ul class="cards-container">
        ${htmlListCars}
    </ul>`;

        let divCards: HTMLElement = document.getElementById("listCards")
        divCards.innerHTML = finishHtml
    }
}

// А тут заканчивается файл card_list


const SourceFilter: Filter = new Filter();
const SourceCards: CardsList = new CardsList();
const SourceFilterOptions: SourceForFilterOption = new SourceForFilterOption();

const arrayNameFilterButton: Array<string> = [
    "Цена, ₽",
    "Тип транспорта",
    "Производитель",
    "Страна местонахождения",
    "Коробка передач/Ход",
    "Тип объявления"
];

// Верхние константы тоже в файл constants

let minPrice: number = SourceFilterOptions.minPrice(arrayCars);
let maxPrice: number = SourceFilterOptions.maxPrice(arrayCars);

let minPriceHeader: HTMLElement = document.getElementById("minPriceHeader");
if (minPriceHeader) {
    minPriceHeader.textContent = String(minPrice);
}
let maxPriceHeader: HTMLElement = document.getElementById("maxPriceHeader");
if (maxPriceHeader) {
    maxPriceHeader.textContent = String(maxPrice);
}

let button: HTMLElement = document.getElementById("buttonAccept");
if (button) {
    button.addEventListener("click", SourceFilter.filterValues);
}

let buttonHeaderClearAll: HTMLElement = document.getElementById("closeAll");
if (buttonHeaderClearAll) {
    buttonHeaderClearAll.addEventListener("click", (): void => {
        SourceCards.render(arrayCars);
        SourceCards.renderFilter(arrayNameFilterButton);
    });
}

let buttonClosePrice: HTMLElement = document.getElementById("closePrice");
if (buttonClosePrice) {
    buttonClosePrice.addEventListener("click", (): void => {
        SourceFilter.closePrice();
        SourceFilter.filterValues();
    });
}

SourceCards.renderFilter(arrayNameFilterButton);
SourceCards.render(arrayCars);

let buttonTypeHeader: HTMLElement = document.getElementById("closeType");
if (buttonTypeHeader) {
    buttonTypeHeader.addEventListener("click", (): void => {
        SourceFilter.closeType();
        SourceFilter.filterValues();
    });
}

// А тут заканчивается файл script

// ¯\_(ツ)_/¯
