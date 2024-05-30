var SourceForFilterOption = /** @class */ (function () {
    function SourceForFilterOption() {
    }
    SourceForFilterOption.prototype.minPrice = function (arrayCars) {
        var minPrice = arrayCars[0].price;
        for (var index = 1; index < arrayCars.length; index++) {
            if (arrayCars[index].price < minPrice) {
                minPrice = arrayCars[index].price;
            }
        }
        return minPrice;
    };
    SourceForFilterOption.prototype.maxPrice = function (arrayCars) {
        var maxPrice = arrayCars[0].price;
        for (var index = 1; index < arrayCars.length; index++) {
            if (arrayCars[index].price > maxPrice) {
                maxPrice = arrayCars[index].price;
            }
        }
        return maxPrice;
    };
    return SourceForFilterOption;
}());
var Filter = /** @class */ (function () {
    function Filter() {
    }
    Filter.prototype.isOpenedPriceFilter = function () {
        var openedPrice = document.getElementById("priceOpen");
        if (openedPrice.classList.contains("price-hidden")) {
            openedPrice.classList.remove("price-hidden");
            openedPrice.classList.add("price-visible");
        }
        else {
            openedPrice.classList.remove("price-visible");
            openedPrice.classList.add("price-hidden");
        }
    };
    Filter.prototype.isOpenedTypeFilter = function () {
        var openedType = document.getElementById("typeOpen");
        if (openedType.classList.contains("type-hidden")) {
            openedType.classList.remove("type-hidden");
            openedType.classList.add("type-visible");
        }
        else {
            openedType.classList.remove("type-visible");
            openedType.classList.add("type-hidden");
        }
    };
    Filter.prototype.isOpenedCountryFilter = function () {
        var openedCountry = document.getElementById("countryOpen");
        if (openedCountry.classList.contains("country-hidden")) {
            openedCountry.classList.remove("country-hidden");
            openedCountry.classList.add("country-visible");
        }
        else {
            openedCountry.classList.remove("country-visible");
            openedCountry.classList.add("country-hidden");
        }
    };
    Filter.prototype.isOpenedTransmissionFilter = function () {
        var openedTransmission = document.getElementById("transmissionOpen");
        if (openedTransmission.classList.contains("transmission-hidden")) {
            openedTransmission.classList.remove("transmission-hidden");
            openedTransmission.classList.add("transmission-visible");
        }
        else {
            openedTransmission.classList.remove("transmission-visible");
            openedTransmission.classList.add("transmission-hidden");
        }
    };
    Filter.prototype.isOpenedAdFilter = function () {
        var openedAd = document.getElementById("adOpen");
        if (openedAd.classList.contains("ad-hidden")) {
            openedAd.classList.remove("ad-hidden");
            openedAd.classList.add("ad-visible");
        }
        else {
            openedAd.classList.remove("ad-visible");
            openedAd.classList.add("ad-hidden");
        }
    };
    Filter.prototype.isOpenManufacturerFilter = function () {
        var openedManufacturer = document.getElementById("openManufacturer");
        if (openedManufacturer.classList.contains("manufacturer-visible")) {
            openedManufacturer.classList.remove("manufacturer-visible");
            openedManufacturer.classList.add("manufacturer-hidden");
        }
        else {
            openedManufacturer.classList.remove("manufacturer-hidden");
            openedManufacturer.classList.add("manufacturer-visible");
        }
    };
    // Метод filterLogic используем только при нажатии на кнопку ПРИМЕНИТЬ
    Filter.prototype.closePrice = function () {
        var minPriceInput = document.getElementById("minPriceValue");
        var maxPriceInput = document.getElementById("maxPriceValue");
        if (minPriceInput && maxPriceInput) {
            minPriceInput.value = String(SourceFilterOptions.minPrice(arrayCars));
            maxPriceInput.value = String(SourceFilterOptions.maxPrice(arrayCars));
        }
        var minPriceHeader = document.getElementById("minPriceHeader");
        var maxPriceHeader = document.getElementById("maxPriceHeader");
        if (minPriceHeader && maxPriceHeader) {
            minPriceHeader.textContent = String(SourceFilterOptions.minPrice(arrayCars));
            maxPriceHeader.textContent = String(SourceFilterOptions.maxPrice(arrayCars));
        }
    };
    Filter.prototype.closeType = function () {
        var typeHeader = document.getElementById("typeCarHeader");
        typeHeader.textContent = "Любой";
        var typeInput = document.getElementById("typeInput");
        typeInput.value = "Любой";
    };
    Filter.prototype.filterValues = function () {
        var maxPriceInput = document.getElementById("maxPriceValue");
        var maxPriceValue = Number(maxPriceInput.value);
        var minPriceInput = document.getElementById("minPriceValue");
        var minPriceValue = Number(minPriceInput.value);
        var typeInput = document.getElementById("typeInput");
        var typeValue = String(typeInput.value);
        var manufactures = Array.from(document.querySelectorAll('input[name="manufacture"]:checked')).map(function (checkbox) { return checkbox.value; });
        var countryInput = document.getElementById("countryInput");
        var countryValue = String(countryInput.value);
        var transmissions = Array.from(document.querySelectorAll('input[name="transmission"]:checked')).map(function (checkbox) { return checkbox.value; });
        var ads = Array.from(document.querySelectorAll('input[name="ad"]:checked')).map(function (checkbox) { return checkbox.value; });
        if (maxPriceValue === 0) {
            maxPriceValue = SourceFilterOptions.maxPrice(arrayCars);
        }
        if (minPriceValue === 0) {
            minPriceValue = SourceFilterOptions.minPrice(arrayCars);
        }
        if (typeValue == null || typeValue === "Любой") {
            typeValue = "";
        }
        if (countryValue == null) {
            countryValue = "";
        }
        var filteredCars = arrayCars.filter(function (car) {
            return (((car.price <= maxPriceValue && car.price >= minPriceValue) || (maxPriceValue + minPriceValue === 0)) &&
                (typeValue === "" || car.type === typeValue) &&
                (manufactures.length === 0 || manufactures.includes(car.manufacturer)) &&
                (countryValue === "" || car.country === countryValue) &&
                (transmissions.length === 0 || transmissions.includes(car.transmission)) &&
                (ads.length === 0 || ads.includes(car.ad)));
        });
        var minPriceHeader = document.getElementById("minPriceHeader");
        minPriceHeader.textContent = String(minPriceValue);
        var maxPriceHeader = document.getElementById("maxPriceHeader");
        maxPriceHeader.textContent = String(maxPriceValue);
        document.getElementById("price").style.display = "inline";
        var typeCarHeader = document.getElementById("typeCarHeader");
        typeCarHeader.textContent = String(typeValue);
        document.getElementById("type").style.display = "inline";
        SourceCards.render(filteredCars);
    };
    return Filter;
}());
var CardsList = /** @class */ (function () {
    function CardsList() {
    }
    CardsList.prototype.renderFilter = function (arrayNameFilterOption) {
        var htmListFilter = "";
        arrayNameFilterOption.forEach(function (nameButton) {
            // Поменять плюс в иконке на тернарный оператор!
            htmListFilter += "\n                <button \n                    id=\"open".concat(nameButton, "Button\" \n                    name=\"0\" \n                    class=\"button filter\" \n                    onclick=\"SourceCards.handleClickFilterButton('").concat(nameButton, "')\"\n                >\n                <img \n                    src=\"../svgIcon/plusForAutoFilter.svg\" \n                    alt=\"imgPlusFilterButton\"\n                >\n                    ").concat(nameButton, "\n                </button>   \n                <div id=\"").concat(nameButton, "Open\" style=\"width: 289px; background-color: #FFFFFF\"></div>\n            ");
        });
        var divFilter = document.getElementById("filterButton");
        divFilter.innerHTML = htmListFilter;
    };
    CardsList.prototype.handleClickFilterButton = function (nameButton) {
        var htmlPlaceUnderButton = "";
        if (nameButton === arrayNameFilterButton[0]) {
            htmlPlaceUnderButton = "\n                <span id=\"priceOpen\" class=\"price-visible\">\n                    <span class=\"filter__text\">\u041E\u0442&nbsp;\n                        <input \n                            type=\"number\"\n                            id=\"minPriceValue\"\n                            placeholder=\"\"\n                            value=\"".concat(minPrice, "\"\n                            step=\"1\"\n                            class=\"filter__price-input\"\n                        >\n                        <span class=\"filter__text\">&nbsp;\u0414\u043E&nbsp;</span>\n                        <input \n                        type=\"number\"\n                        id=\"maxPriceValue\"\n                        value=\"").concat(maxPrice, "\"\n                        step=\"1\"\n                        class=\"filter__price-input\"\n                      >\n                    </span>\n                       <button onclick=\"SourceFilter.isOpenedPriceFilter()\" class=\"button-close-filter-option\"></button>\n                    </span>\n            ");
        }
        if (nameButton === arrayNameFilterButton[1]) {
            // Добавить оставшиеся опции в datalist
            htmlPlaceUnderButton = "\n                <span id=\"typeOpen\" class=\"type-visible\">\n                    <input \n                        type=\"text\"\n                        list=\"typeCar\"\n                        id=\"typeInput\"\n                        class=\"type-input\"\n                    >\n                    <datalist id=\"typeCar\">\n                        <option value=\"\u0412\u043D\u0435\u0434\u043E\u0440\u043E\u0436\u043D\u0438\u043A\">\n                        <option value=\"\u041B\u0435\u0433\u043A\u043E\u0432\u043E\u0439 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\">\n                        <option value=\"\u0413\u0440\u0443\u0437\u043E\u0432\u0438\u043A\">\n                        <option value=\"\u041C\u0438\u043D\u0438\u0432\u044D\u043D\">\n                    </datalist>\n                    <button onclick=\"SourceFilter.isOpenedTypeFilter()\" class=\"button-close-filter-option\">\n                </span>\n            ";
        }
        if (nameButton === arrayNameFilterButton[2]) {
            htmlPlaceUnderButton = "\n                <span class=\"manufacturer-visible\" id=\"openManufacturer\">\n                    <span>\n                        <input\n                            name=\"manufacture\"\n                            type=\"checkbox\"\n                            id=\"kia\"\n                            value=\"Kia\"\n                            class=\"ad-input\"\n                        >\n                        <label class=\"label-manufacturer\" for=\"kia\">Kia-Rio</label>\n                    </span>\n                    <span>\n                        <input\n                            name=\"manufacture\"\n                            type=\"checkbox\"\n                            id=\"UAZ\"\n                            value=\"\u0423\u0410\u0417\"\n                            class=\"ad-input\"\n                        >\n                    <label class=\"label-manufacturer\" for=\"UAZ\">\u0423\u0410\u0417</label>\n                    </span>\n                    <span>\n                        <input\n                            name=\"manufacture\"\n                            type=\"checkbox\"\n                            id=\"Chevrolet\"\n                            value=\"Chevrolet\"\n                            class=\"ad-input\"\n                        >\n                    <label class=\"label-manufacturer\" for=\"Chevrolet\">Chevrolet</label>\n                    </span>\n                    <span>\n                        <input\n                            name=\"manufacture\"\n                            type=\"checkbox\"\n                            id=\"Volvo\"\n                            value=\"Volvo\"\n                            class=\"ad-input\"\n                        >\n                    <label class=\"label-manufacturer\" for=\"Volvo\">Volvo</label>\n                    </span>\n                    <span>\n                        <input\n                            name=\"manufacture\"\n                            type=\"checkbox\"\n                            id=\"Renault\"\n                            value=\"Renault\"\n                            class=\"ad-input\"\n                        >\n                    <label class=\"label-manufacturer\" for=\"Renault\">Renault</label>\n                    </span>\n                    <span>\n                        <input\n                            name=\"manufacture\"\n                            type=\"checkbox\"\n                            id=\"Discovery\"\n                            value=\"Discovery\"\n                            class=\"ad-input\"\n                        >\n                    <label class=\"label-manufacturer\" for=\"Discovery\">Discovery</label>\n                    </span>\n                    <span>\n                        <input\n                            name=\"manufacture\"\n                            type=\"checkbox\"\n                            id=\"Lada\"\n                            value=\"Lada\"\n                            class=\"ad-input\"\n                        >\n                    <label class=\"label-manufacturer\" for=\"Lada\">Lada</label>\n                    </span>\n                    <span>\n                        <input\n                            name=\"manufacture\"\n                            type=\"checkbox\"\n                            id=\"Ford\"\n                            value=\"Ford\"\n                            class=\"ad-input\"\n                        >\n                    <label class=\"label-manufacturer\" for=\"Ford\">Ford</label>\n                    </span>\n                    <span>\n                        <input\n                            name=\"manufacture\"\n                            type=\"checkbox\"\n                            id=\"Suzuki\"\n                            value=\"Suzuki\"\n                            class=\"ad-input\"\n                        >\n                    <label class=\"label-manufacturer\" for=\"Suzuki\">Suzuki</label>\n                    </span>\n                    <span>\n                        <input\n                            name=\"manufacture\"\n                            type=\"checkbox\"\n                            id=\"MercedesBenz\"\n                            value=\"MercedesBenz\"\n                            class=\"ad-input\"\n                        >\n                    <label class=\"label-manufacturer\" for=\"MercedesBenz\">MercedesBenz</label>\n                    </span>\n                    <button onclick=\"SourceFilter.isOpenManufacturerFilter()\" class=\"button-close-filter-option\" style=\"margin-left: 80px\">\n                    </span>\n            ";
        }
        if (nameButton === arrayNameFilterButton[3]) {
            htmlPlaceUnderButton = "\n                <span id=\"countryOpen\" class=\"type-visible\">\n                    <input list=\"countryCar\"\n                        id=\"countryInput\"\n                        class=\"type-input\"\n                    >\n                    <datalist id=\"countryCar\">\n                        <option value=\"\u0420\u043E\u0441\u0441\u0438\u044F\">\n                        <option value=\"\u042F\u043F\u043E\u043D\u0438\u044F\">\n                        <option value=\"\u041A\u0438\u0442\u0430\u0439\">\n                        <option value=\"\u042E\u0436\u043D\u0430\u044F \u041A\u043E\u0440\u0435\u044F\">\n                        <option value=\"\u0413\u0435\u0440\u043C\u0430\u043D\u0438\u044F\">\n                        <option value=\"\u041D\u0438\u0434\u0435\u0440\u043B\u0430\u043D\u0434\u044B\">\n                    </datalist>\n                    <button onclick=\"SourceFilter.isOpenedCountryFilter()\" class=\"button-close-filter-option\">\n                </span>\n            ";
        }
        if (nameButton === arrayNameFilterButton[4]) {
            htmlPlaceUnderButton = "\n                <span id=\"transmissionOpen\" class=\"transmission-visible\">\n                    <span>\n                        <input\n                            name=\"transmission\"\n                            type=\"checkbox\"\n                            id=\"Mechanic\"\n                            value=\"\u041C\u0435\u0445\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u0430\u044F\"\n                            class=\"transmission-input\"\n                        />\n                        <label for=\"Mechanic\"><span class=\"label-ad\">\u041C\u0435\u0445\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u0430\u044F</span></label>\n                    </span>\n                    <span>\n                        <input\n                            name=\"transmission\"\n                            type=\"checkbox\"\n                            id=\"Machine\"\n                            value=\"\u0410\u0432\u0442\u043E\u043C\u0430\u0442\"\n                            class=\"transmission-input\"\n                        />\n                        <label for=\"Machine\"><span class=\"label-ad\">\u0410\u0432\u0442\u043E\u043C\u0430\u0442</span></label>\n                    </span>\n                    <span>\n                        <input\n                            name=\"transmission\"\n                            type=\"checkbox\"\n                            id=\"Machine\"\n                            value=\"\u0412\u0430\u0440\u0438\u0430\u0442\u043E\u0440\"\n                            class=\"transmission-input\"\n                        />\n                        <label for=\"Machine\"><span class=\"label-ad\">\u0412\u0430\u0440\u0438\u0430\u0442\u043E\u0440</span></label>\n                    </span>\n                    <span>\n                        <input\n                            name=\"transmission\"\n                            type=\"checkbox\"\n                            id=\"Machine\"\n                            value=\"\u0420\u043E\u0431\u043E\u0442\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F\"\n                            class=\"transmission-input\"\n                        />\n                        <label for=\"Machine\"><span class=\"label-ad\">\u0420\u043E\u0431\u043E\u0442\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F</span></label>\n                    </span>\n                    <button onclick=\"SourceFilter.isOpenedTransmissionFilter()\" class=\"button-close-filter-option\" style=\"margin-left: 80px\">\n                </span>\n                \n            ";
        }
        if (nameButton === arrayNameFilterButton[5]) {
            htmlPlaceUnderButton = "\n                <span id=\"adOpen\" class=\"ad-visible\">\n                    <span>\n                        <input\n                            name=\"ad\"\n                            type=\"checkbox\"\n                            id=\"sell\"\n                            value=\"\u041F\u0440\u043E\u0434\u0430\u0436\u0430\"\n                            class=\"ad-input\"\n                        >\n                        <label class=\"label-ad\" for=\"sell\">\u041F\u0440\u043E\u0434\u0430\u0436\u0430</label>\n                    </span>\n                    <span>\n                        <input\n                            name=\"ad\"\n                            type=\"checkbox\"\n                            id=\"auction\"\n                            value=\"\u0410\u0443\u043A\u0446\u0438\u043E\u043D\"\n                            class=\"ad-input\"\n                        >\n                        <label class=\"label-ad\" for=\"auction\">\u0410\u0443\u043A\u0446\u0438\u043E\u043D</label>\n                    </span>\n                    <span>\n                        <input\n                            name=\"ad\"\n                            type=\"checkbox\"\n                            id=\"Rental\"\n                            value=\"\u0410\u0440\u0435\u043D\u0434\u0430\"\n                            class=\"ad-input\"\n                        >\n                        <label class=\"label-ad\" for=\"Rental\">\u0410\u0440\u0435\u043D\u0434\u0430</label>\n                    </span>\n                    <button onclick=\"SourceFilter.isOpenedAdFilter()\" class=\"button-close-filter-option\" style=\"margin-left: 80px\">\n                </span>\n            ";
        }
        var placeForButton = document.getElementById("".concat(nameButton, "Open"));
        placeForButton.innerHTML = htmlPlaceUnderButton;
    };
    CardsList.prototype.render = function (arrayCars) {
        var htmlListCars = "";
        arrayCars.forEach(function (_a) {
            var country = _a.country, model = _a.model, price = _a.price, type = _a.type, year = _a.year, photo = _a.photo;
            var priceCar = price.toLocaleString();
            htmlListCars += "\n        <li class=\"cards-element\">\n            <img class=\"cards-element__img\" \n            alt=\"imgCar\"\n            src=\"".concat(photo, "\"\n            width=\"360\"\n            height=\"204\" \n            />\n            <span class=\"cards-element__type\">").concat(type, "</span>\n            <span class=\"cards-element__name\">").concat(model, "</span>\n            <div class=\"cards-element__sub-info\">\n                <span class=\"cards-element__yearProd\">").concat(year, "</span>\n            </div>\n            <div class=\"cards-element__details\">\n                <span class=\"cards-element__location\">").concat(country, "</span>\n                <span class=\"cards-element__price\">").concat(priceCar, " \u20BD</span>\n            </div>\n        </li>");
        });
        var finishHtml = "\n    <ul class=\"cards-container\">\n        ".concat(htmlListCars, "\n    </ul>");
        var divCards = document.getElementById("listCards");
        divCards.innerHTML = finishHtml;
    };
    return CardsList;
}());
var Car = /** @class */ (function () {
    function Car(country, manufacturer, model, price, type, transmission, year, photo, ad) {
        this.country = country;
        this.manufacturer = manufacturer;
        this.model = model;
        this.price = price;
        this.type = type;
        this.transmission = transmission;
        this.year = year;
        this.photo = photo;
        this.ad = ad;
    }
    return Car;
}());
var K7 = new Car("Южная Корея", "Kia", "K7", 2500016, "Легковой автомобиль", "Автомат", "2020", "./photos/K7.jpg", "Продажа");
var Levorg = new Car("Япония", "Subaru", "Levorg", 1225015, "Легковой автомобиль", "Вариатор", "2019", "./photos/levorg.jpg", "Продажа");
var AudiQ5 = new Car("Германия", "Audi", "Q5 45 TFSI", 2400000, "Внедорожник", "Роботизированная", "2019", "./photos/AudiQ5.jpg", "Продажа");
var NissanSerena = new Car("Япония", "Nissan", "Serena", 1049658, "Минивэн", "Вариатор", "2009", "./photos/NissanSerena.jpg", "Аукцион");
var UAZ3151 = new Car("Россия", "УАЗ", "3151", 300000, "Внедорожник", "Механическая", "2002", "./photos/UAZ3151.jpg", "Продажа");
var OpelCOMBOAircoElctRamenStuurbediening = new Car("Нидерланды", "Opel", "Opel COMBO", 1500000, "Грузовик", "Механическая", "2015", "./photos/OpelCOMBO.png", "Продажа");
var MercedesBenz250 = new Car("Нидерланды", "Mercedes-Benz", "Mercedes-Benz250", 4887000, "Грузовик", "Автомат", "2015", "./photos/Mercedes-Benz250.jpg", "Продажа");
var NissanEcoT100 = new Car("Нидерланды", "Nissan", "EcoT100", 279000, "Грузовик", "Механическая", "2015", "./photos/NissanEcoT100.png", "Продажа");
var CobusMercedesBenz = new Car("Нидерланд", "Mercedes Benz", "Cobus2700s", 3946500, "Грузовик", "Механическая", "2015", "./photos/CobusMercedesBenz.jpg", "Аукцион");
var Setra317ULGT = new Car("Нидерланды", "MercedesBenz", "Cobus2700S", 2325200, "Грузовик", "Автомат", "2015", "./photos/Setra317UL-GT.jpg", "Аукцион");
var KiaK72020 = new Car("Россия", "Kia", "K7", 2837000, "Легковой автомобиль", "Автомат", "2020", "./photos/KiaK7.jpg", "Продажа");
var SuzukiJimny = new Car("Россия", "Suzuki", "Jimny", 1099000, "Легковой автомобиль", "Автомат", "2008", "./photos/SuzukiJimnyIII.jpg", "Аукцион");
var KiaSpectra = new Car("Россия", "Kia", "Spectra I", 300000, "Легковой автомобиль", "Автомат", "2008", "./photos/KiaSpectra.jpg", "Продажа");
var FordFocusII = new Car("Россия", "Ford", "Focus II", 535000, "Легковой автомобиль", "Механическая", "2008", "./photos/FordFocusII.jpg", "Аукцион");
var Lada2114 = new Car("Россия", "Lada", "2114", 90000, "Легковой автомобиль", "Механическая", "2001", "./photos/Lada2114.jpg", "Продажа");
var Uaz3151 = new Car("Россия", "UAZ", "3151", 275000, "Внедорожник", "Механическая", "1992", "./photos/3151.jpg", "Продажа");
var LandRoverDiscovery = new Car("Россия", "Land Rover", "Discovery", 2699000, "Внедорожник", "Автомат", "2014", "./photos/LandRover.jpg", "Продажа");
var RenaultRoverLogan = new Car("Россия", "Renault", "Logan I", 470000, "Легковой автомобиль", "Механическая", "2011", "./photos/RenaultLogan.jpg", "Аукцион");
var VolvoXC60 = new Car("Россия", "Volvo", "XC60", 1260000, "Внедорожник", "Автомат", "2010", "./photos/VolvoXC60.jpg", "Продажа");
var ChevroletAveo = new Car("Россия", "Chevrolet", "Aveo", 350000, "Легковой автомобиль", "Механическая", "2008", "./photos/ChevroletAveo.jpg", "Продажа");
var arrayCars = [ChevroletAveo, VolvoXC60, RenaultRoverLogan, LandRoverDiscovery, Uaz3151, Lada2114, FordFocusII, KiaSpectra, SuzukiJimny, KiaK72020, Setra317ULGT, CobusMercedesBenz, NissanEcoT100, K7, Levorg, AudiQ5, NissanSerena, UAZ3151, OpelCOMBOAircoElctRamenStuurbediening, MercedesBenz250];
var SourceFilter = new Filter();
var SourceCards = new CardsList();
var SourceFilterOptions = new SourceForFilterOption();
var arrayNameFilterButton = [
    "Цена, ₽",
    "Тип транспорта",
    "Производитель",
    "Страна местонахождения",
    "Коробка передач/Ход",
    "Тип объявления"
];
var arrayNameLogicButton = [
    "Price",
    "Type",
    "Manufacturer",
    "Country",
    "Transmission",
    "Ad"
];
var minPrice = SourceFilterOptions.minPrice(arrayCars);
var maxPrice = SourceFilterOptions.maxPrice(arrayCars);
var minPriceHeader = document.getElementById("minPriceHeader");
if (minPriceHeader) {
    minPriceHeader.textContent = String(minPrice);
}
var maxPriceHeader = document.getElementById("maxPriceHeader");
if (maxPriceHeader) {
    maxPriceHeader.textContent = String(maxPrice);
}
var button = document.getElementById("buttonAccept");
if (button) {
    button.addEventListener("click", SourceFilter.filterValues);
}
var buttonHeaderClearAll = document.getElementById("closeAll");
if (buttonHeaderClearAll) {
    buttonHeaderClearAll.addEventListener("click", function () {
        SourceCards.render(arrayCars);
        SourceCards.renderFilter(arrayNameFilterButton);
    });
}
var buttonClosePrice = document.getElementById("closePrice");
if (buttonClosePrice) {
    buttonClosePrice.addEventListener("click", function () {
        SourceFilter.closePrice();
        SourceFilter.filterValues();
    });
}
SourceCards.renderFilter(arrayNameFilterButton);
SourceCards.render(arrayCars);
var buttonTypeHeader = document.getElementById("closeType");
if (buttonTypeHeader) {
    buttonTypeHeader.addEventListener("click", function () {
        SourceFilter.closeType();
        SourceFilter.filterValues();
    });
}
