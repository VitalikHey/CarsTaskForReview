var Car = /** @class */ (function () {
  function Car(
    country,
    manufacturer,
    model,
    price,
    type,
    transmission,
    year,
    photo,
    ad,
  ) {
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
})();
var K7 = new Car(
  "\u042E\u0436\u043D\u0430\u044F \u041A\u043E\u0440\u0435\u044F" /* Country.SouthKorea */,
  "Kia" /* Manufacturer.Kia */,
  "K7" /* Model.K7 */,
  2500016 /* Price.k7 */,
  "\u041B\u0435\u0433\u043A\u043E\u0432\u043E\u0439 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C" /* TypeCar.passengerCar */,
  "\u0410\u0432\u0442\u043E\u043C\u0430\u0442" /* Transmission.automatic */,
  "2020",
  "./photos/K7.jpg",
  "\u041F\u0440\u043E\u0434\u0430\u0436\u0430" /* Ad.Sell */,
);
var Levorg = new Car(
  "\u042F\u043F\u043E\u043D\u0438\u044F" /* Country.Japan */,
  "Subaru" /* Manufacturer.Subaru */,
  "Levorq" /* Model.Levorg */,
  1225015 /* Price.Levorg */,
  "\u041B\u0435\u0433\u043A\u043E\u0432\u043E\u0439 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C" /* TypeCar.passengerCar */,
  "\u0412\u0430\u0440\u0438\u0430\u0442\u043E\u0440" /* Transmission.variate */,
  "2019",
  "./photos/levorg.jpg",
  "\u041F\u0440\u043E\u0434\u0430\u0436\u0430" /* Ad.Sell */,
);
var AudiQ5 = new Car(
  "\u0413\u0435\u0440\u043C\u0430\u043D\u0438\u044F" /* Country.Germany */,
  "Audi" /* Manufacturer.Audi */,
  "Q5 45 TFSI" /* Model.AudiQ5 */,
  2400000 /* Price.AudiQ5 */,
  "\u0412\u043D\u0435\u0434\u043E\u0440\u043E\u0436\u043D\u0438\u043A" /* TypeCar.OffRoad */,
  "\u0420\u043E\u0431\u043E\u0442\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F" /* Transmission.robot */,
  "2019",
  "./photos/AudiQ5.jpg",
  "\u041F\u0440\u043E\u0434\u0430\u0436\u0430" /* Ad.Sell */,
);
var UAZ3151 = new Car(
  "\u0420\u043E\u0441\u0441\u0438\u044F" /* Country.Russia */,
  "\u0423\u0410\u0417" /* Manufacturer.UAZ */,
  "3151" /* Model.UAZ3151 */,
  300000 /* Price.UAZ3151 */,
  "\u0412\u043D\u0435\u0434\u043E\u0440\u043E\u0436\u043D\u0438\u043A" /* TypeCar.OffRoad */,
  "\u041C\u0435\u0445\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u0430\u044F" /* Transmission.mechanic */,
  "2002",
  "./photos/UAZ3151.jpg",
  "\u041F\u0440\u043E\u0434\u0430\u0436\u0430" /* Ad.Sell */,
);
var OpelCOMBOAircoElctRamenStuurbediening = new Car(
  "\u041D\u0438\u0434\u0435\u0440\u043B\u0430\u043D\u0434\u044B" /* Country.Netherlands */,
  "Opel" /* Manufacturer.Opel */,
  "Opel COMBO" /* Model.OpelCOMBOAircoElctRamenStuurbediening */,
  1500000 /* Price.OpelCOMBOAircoElctRamenStuurbediening */,
  "\u0413\u0440\u0443\u0437\u043E\u0432\u0438\u043A" /* TypeCar.truck */,
  "\u041C\u0435\u0445\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u0430\u044F" /* Transmission.mechanic */,
  "2015",
  "./photos/OpelCOMBO.png",
  "\u041F\u0440\u043E\u0434\u0430\u0436\u0430" /* Ad.Sell */,
);
var MercedesBenz250 = new Car(
  "\u041D\u0438\u0434\u0435\u0440\u043B\u0430\u043D\u0434\u044B" /* Country.Netherlands */,
  "MercedesBenz" /* Manufacturer.MercedesBenz */,
  "Cobus2700s" /* Model.CobusMercedesBenz */,
  4887000 /* Price.CobusMercedesBenz */,
  "\u0413\u0440\u0443\u0437\u043E\u0432\u0438\u043A" /* TypeCar.truck */,
  "\u0410\u0432\u0442\u043E\u043C\u0430\u0442" /* Transmission.automatic */,
  "2015",
  "./photos/Mercedes-Benz250.jpg",
  "\u041F\u0440\u043E\u0434\u0430\u0436\u0430" /* Ad.Sell */,
);
var NissanEcoT100 = new Car(
  "\u041D\u0438\u0434\u0435\u0440\u043B\u0430\u043D\u0434\u044B" /* Country.Netherlands */,
  "Nissan" /* Manufacturer.Nissan */,
  "EcoT100" /* Model.NissanEcoT100 */,
  4887000 /* Price.NissanEcoT100 */,
  "\u0413\u0440\u0443\u0437\u043E\u0432\u0438\u043A" /* TypeCar.truck */,
  "\u041C\u0435\u0445\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u0430\u044F" /* Transmission.mechanic */,
  "2015",
  "./photos/NissanEcoT100.png",
  "\u041F\u0440\u043E\u0434\u0430\u0436\u0430" /* Ad.Sell */,
);
var CobusMercedesBenz = new Car(
  "\u041D\u0438\u0434\u0435\u0440\u043B\u0430\u043D\u0434\u044B" /* Country.Netherlands */,
  "MercedesBenz" /* Manufacturer.MercedesBenz */,
  "Cobus2700s" /* Model.CobusMercedesBenz */,
  4887000 /* Price.CobusMercedesBenz */,
  "\u0413\u0440\u0443\u0437\u043E\u0432\u0438\u043A" /* TypeCar.truck */,
  "\u041C\u0435\u0445\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u0430\u044F" /* Transmission.mechanic */,
  "2015",
  "./photos/CobusMercedesBenz.jpg",
  "\u0410\u0443\u043A\u0446\u0438\u043E\u043D" /* Ad.Auction */,
);
var Setra317ULGT = new Car(
  "\u041D\u0438\u0434\u0435\u0440\u043B\u0430\u043D\u0434\u044B" /* Country.Netherlands */,
  "MercedesBenz" /* Manufacturer.MercedesBenz */,
  "317ULGT" /* Model.Setra317ULGT */,
  279000 /* Price.Setra317ULGT */,
  "\u0413\u0440\u0443\u0437\u043E\u0432\u0438\u043A" /* TypeCar.truck */,
  "\u0410\u0432\u0442\u043E\u043C\u0430\u0442" /* Transmission.automatic */,
  "2015",
  "./photos/Setra317UL-GT.jpg",
  "\u0410\u0443\u043A\u0446\u0438\u043E\u043D" /* Ad.Auction */,
);
var KiaK72020 = new Car(
  "\u0420\u043E\u0441\u0441\u0438\u044F" /* Country.Russia */,
  "Kia" /* Manufacturer.Kia */,
  "K7" /* Model.KiaK72020 */,
  2325200 /* Price.KiaK72020 */,
  "\u041B\u0435\u0433\u043A\u043E\u0432\u043E\u0439 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C" /* TypeCar.passengerCar */,
  "\u0410\u0432\u0442\u043E\u043C\u0430\u0442" /* Transmission.automatic */,
  "2020",
  "./photos/KiaK7.jpg",
  "\u041F\u0440\u043E\u0434\u0430\u0436\u0430" /* Ad.Sell */,
);
var SuzukiJimny = new Car(
  "\u0420\u043E\u0441\u0441\u0438\u044F" /* Country.Russia */,
  "Suzuki" /* Manufacturer.Suzuki */,
  "Jimny" /* Model.SuzukiJimny */,
  1099000 /* Price.SuzukiJimny */,
  "\u041B\u0435\u0433\u043A\u043E\u0432\u043E\u0439 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C" /* TypeCar.passengerCar */,
  "\u0410\u0432\u0442\u043E\u043C\u0430\u0442" /* Transmission.automatic */,
  "2008",
  "./photos/SuzukiJimnyIII.jpg",
  "\u0410\u0443\u043A\u0446\u0438\u043E\u043D" /* Ad.Auction */,
);
var KiaSpectra = new Car(
  "\u0420\u043E\u0441\u0441\u0438\u044F" /* Country.Russia */,
  "Kia" /* Manufacturer.Kia */,
  "Spectra I" /* Model.KiaSpectra */,
  300000 /* Price.KiaSpectra */,
  "\u041B\u0435\u0433\u043A\u043E\u0432\u043E\u0439 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C" /* TypeCar.passengerCar */,
  "\u0410\u0432\u0442\u043E\u043C\u0430\u0442" /* Transmission.automatic */,
  "2008",
  "./photos/KiaSpectra.jpg",
  "\u041F\u0440\u043E\u0434\u0430\u0436\u0430" /* Ad.Sell */,
);
var FordFocusII = new Car(
  "\u0420\u043E\u0441\u0441\u0438\u044F" /* Country.Russia */,
  "Ford" /* Manufacturer.Ford */,
  "Focus II" /* Model.FordFocusII */,
  535000 /* Price.FordFocusII */,
  "\u041B\u0435\u0433\u043A\u043E\u0432\u043E\u0439 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C" /* TypeCar.passengerCar */,
  "\u041C\u0435\u0445\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u0430\u044F" /* Transmission.mechanic */,
  "2008",
  "./photos/FordFocusII.jpg",
  "\u0410\u0443\u043A\u0446\u0438\u043E\u043D" /* Ad.Auction */,
);
var Lada2114 = new Car(
  "\u0420\u043E\u0441\u0441\u0438\u044F" /* Country.Russia */,
  "Lada" /* Manufacturer.Lada */,
  "\u041B\u0435\u0433\u043A\u043E\u0432\u043E\u0439 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C" /* Model.Lada2114 */,
  90000 /* Price.Lada2114 */,
  "\u041B\u0435\u0433\u043A\u043E\u0432\u043E\u0439 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C" /* TypeCar.passengerCar */,
  "\u041C\u0435\u0445\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u0430\u044F" /* Transmission.mechanic */,
  "2001",
  "./photos/Lada2114.jpg",
  "\u041F\u0440\u043E\u0434\u0430\u0436\u0430" /* Ad.Sell */,
);
var Uaz3151 = new Car(
  "\u0420\u043E\u0441\u0441\u0438\u044F" /* Country.Russia */,
  "\u0423\u0410\u0417" /* Manufacturer.UAZ */,
  "3151" /* Model.UAZ3151 */,
  300000 /* Price.UAZ3151 */,
  "\u0412\u043D\u0435\u0434\u043E\u0440\u043E\u0436\u043D\u0438\u043A" /* TypeCar.OffRoad */,
  "\u041C\u0435\u0445\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u0430\u044F" /* Transmission.mechanic */,
  "1992",
  "./photos/3151.jpg",
  "\u041F\u0440\u043E\u0434\u0430\u0436\u0430" /* Ad.Sell */,
);
var LandRoverDiscovery = new Car(
  "\u0420\u043E\u0441\u0441\u0438\u044F" /* Country.Russia */,
  "Discovery" /* Manufacturer.Discovery */,
  "Discovery" /* Model.LandRoverDiscovery */,
  275000 /* Price.LandRoverDiscovery */,
  "\u0412\u043D\u0435\u0434\u043E\u0440\u043E\u0436\u043D\u0438\u043A" /* TypeCar.OffRoad */,
  "\u0410\u0432\u0442\u043E\u043C\u0430\u0442" /* Transmission.automatic */,
  "2014",
  "./photos/LandRover.jpg",
  "\u041F\u0440\u043E\u0434\u0430\u0436\u0430" /* Ad.Sell */,
);
var RenaultRoverLogan = new Car(
  "\u0420\u043E\u0441\u0441\u0438\u044F" /* Country.Russia */,
  "Renault" /* Manufacturer.Renault */,
  "Logan I" /* Model.RenaultRoverLogan */,
  2699000 /* Price.RenaultRoverLogan */,
  "\u041B\u0435\u0433\u043A\u043E\u0432\u043E\u0439 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C" /* TypeCar.passengerCar */,
  "\u041C\u0435\u0445\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u0430\u044F" /* Transmission.mechanic */,
  "2011",
  "./photos/RenaultLogan.jpg",
  "\u0410\u0443\u043A\u0446\u0438\u043E\u043D" /* Ad.Auction */,
);
var VolvoXC60 = new Car(
  "\u0420\u043E\u0441\u0441\u0438\u044F" /* Country.Russia */,
  "Volvo" /* Manufacturer.Volvo */,
  "XC60" /* Model.VolvoXC60 */,
  470000 /* Price.VolvoXC60 */,
  "\u0412\u043D\u0435\u0434\u043E\u0440\u043E\u0436\u043D\u0438\u043A" /* TypeCar.OffRoad */,
  "\u0410\u0432\u0442\u043E\u043C\u0430\u0442" /* Transmission.automatic */,
  "2010",
  "./photos/VolvoXC60.jpg",
  "\u041F\u0440\u043E\u0434\u0430\u0436\u0430" /* Ad.Sell */,
);
var ChevroletAveo = new Car(
  "\u0420\u043E\u0441\u0441\u0438\u044F" /* Country.Russia */,
  "Chevrolet" /* Manufacturer.Chevrolet */,
  "Aveo" /* Model.ChevroletAveo */,
  1260000 /* Price.ChevroletAveo */,
  "\u041B\u0435\u0433\u043A\u043E\u0432\u043E\u0439 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C" /* TypeCar.passengerCar */,
  "\u041C\u0435\u0445\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u0430\u044F" /* Transmission.mechanic */,
  "2008",
  "./photos/ChevroletAveo.jpg",
  "\u041F\u0440\u043E\u0434\u0430\u0436\u0430" /* Ad.Sell */,
);
var arrayCars = [
  ChevroletAveo,
  VolvoXC60,
  RenaultRoverLogan,
  LandRoverDiscovery,
  Uaz3151,
  Lada2114,
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
  MercedesBenz250,
];
// Пока что, типо тут заканчивается файл с константами
var SourceForFilterOption = /** @class */ (function () {
  function SourceForFilterOption() {}
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
})();
var Filter = /** @class */ (function () {
  function Filter() {}
  Filter.prototype.isOpenedPriceFilter = function () {
    var openedPrice = document.getElementById("priceOpen");
    if (openedPrice.classList.contains("price-hidden")) {
      openedPrice.classList.remove("price-hidden");
      openedPrice.classList.add("price-visible");
    } else {
      openedPrice.classList.remove("price-visible");
      openedPrice.classList.add("price-hidden");
    }
  };
  Filter.prototype.isOpenedTypeFilter = function () {
    var openedType = document.getElementById("typeOpen");
    if (openedType.classList.contains("type-hidden")) {
      openedType.classList.remove("type-hidden");
      openedType.classList.add("type-visible");
    } else {
      openedType.classList.remove("type-visible");
      openedType.classList.add("type-hidden");
    }
  };
  Filter.prototype.isOpenedCountryFilter = function () {
    var openedCountry = document.getElementById("countryOpen");
    if (openedCountry.classList.contains("country-hidden")) {
      openedCountry.classList.remove("country-hidden");
      openedCountry.classList.add("country-visible");
    } else {
      openedCountry.classList.remove("country-visible");
      openedCountry.classList.add("country-hidden");
    }
  };
  Filter.prototype.isOpenedTransmissionFilter = function () {
    var openedTransmission = document.getElementById("transmissionOpen");
    if (openedTransmission.classList.contains("transmission-hidden")) {
      openedTransmission.classList.remove("transmission-hidden");
      openedTransmission.classList.add("transmission-visible");
    } else {
      openedTransmission.classList.remove("transmission-visible");
      openedTransmission.classList.add("transmission-hidden");
    }
  };
  Filter.prototype.isOpenedAdFilter = function () {
    var openedAd = document.getElementById("adOpen");
    if (openedAd.classList.contains("ad-hidden")) {
      openedAd.classList.remove("ad-hidden");
      openedAd.classList.add("ad-visible");
    } else {
      openedAd.classList.remove("ad-visible");
      openedAd.classList.add("ad-hidden");
    }
  };
  Filter.prototype.isOpenManufacturerFilter = function () {
    var openedManufacturer = document.getElementById("openManufacturer");
    if (openedManufacturer.classList.contains("manufacturer-visible")) {
      openedManufacturer.classList.remove("manufacturer-visible");
      openedManufacturer.classList.add("manufacturer-hidden");
    } else {
      openedManufacturer.classList.remove("manufacturer-hidden");
      openedManufacturer.classList.add("manufacturer-visible");
    }
  };
  // Метод filterLogic используем только при нажатии на кнопку ПРИМЕНИТЬ
  Filter.prototype.closePrice = function () {
    var minPriceInput = document.getElementById("minPriceValue");
    var maxPriceInput = document.getElementById("maxPriceValue");
    if (
      minPriceInput instanceof HTMLInputElement &&
      maxPriceInput instanceof HTMLInputElement
    ) {
      if (minPriceInput && maxPriceInput) {
        minPriceInput.value = String(SourceFilterOptions.minPrice(arrayCars));
        maxPriceInput.value = String(SourceFilterOptions.maxPrice(arrayCars));
      }
      var minPriceHeader_1 = document.getElementById("minPriceHeader");
      var maxPriceHeader_1 = document.getElementById("maxPriceHeader");
      if (minPriceHeader_1 && maxPriceHeader_1) {
        minPriceHeader_1.textContent = String(
          SourceFilterOptions.minPrice(arrayCars),
        );
        maxPriceHeader_1.textContent = String(
          SourceFilterOptions.maxPrice(arrayCars),
        );
      }
    }
  };
  Filter.prototype.closeType = function () {
    var typeHeader = document.getElementById("typeCarHeader");
    typeHeader.textContent = "Любой";
    var typeInput = document.getElementById("typeInput");
    if (typeInput instanceof HTMLInputElement) {
      typeInput.value = "Любой";
    }
  };
  Filter.prototype.filterValues = function () {
    var maxPriceInput = document.getElementById("maxPriceValue");
    var minPriceInput = document.getElementById("minPriceValue");
    var typeInput = document.getElementById("typeInput");
    var countryInput = document.getElementById("countryInput");
    if (
      maxPriceInput instanceof HTMLInputElement &&
      minPriceInput instanceof HTMLInputElement &&
      typeInput instanceof HTMLInputElement &&
      countryInput instanceof HTMLInputElement
    ) {
      var maxPriceValue_1 = Number(maxPriceInput.value);
      var minPriceValue_1 = Number(minPriceInput.value);
      var typeValue_1 = String(typeInput.value);
      var countryValue_1 = countryInput.value;
      var manufactures_1 = Array.from(
        document.querySelectorAll('input[name="manufacture"]:checked'),
      ).map(function (checkbox) {
        return checkbox.value;
      });
      var transmissions_1 = Array.from(
        document.querySelectorAll('input[name="transmission"]:checked'),
      ).map(function (checkbox) {
        return checkbox.value;
      });
      var ads_1 = Array.from(
        document.querySelectorAll('input[name="ad"]:checked'),
      ).map(function (checkbox) {
        return checkbox.value;
      });
      if (!maxPriceValue_1) {
        maxPriceValue_1 = SourceFilterOptions.maxPrice(arrayCars);
      }
      if (!minPriceValue_1) {
        minPriceValue_1 = SourceFilterOptions.minPrice(arrayCars);
      }
      if (!typeValue_1 || typeValue_1 === "Любой") {
        typeValue_1 = "";
      }
      if (!countryValue_1) {
        countryValue_1 = "";
      }
      var filteredCars = arrayCars.filter(function (car) {
        return (
          ((car.price <= maxPriceValue_1 && car.price >= minPriceValue_1) ||
            !(maxPriceValue_1 + minPriceValue_1)) &&
          (!typeValue_1 || car.type === typeValue_1) &&
          (!manufactures_1.length ||
            manufactures_1.includes(car.manufacturer)) &&
          (!countryValue_1 || car.country === countryValue_1) &&
          (!transmissions_1.length ||
            transmissions_1.includes(car.transmission)) &&
          (!ads_1.length || ads_1.includes(car.ad))
        );
      });
      var minPriceHeader_2 = document.getElementById("minPriceHeader");
      minPriceHeader_2.textContent = String(minPriceValue_1);
      var maxPriceHeader_2 = document.getElementById("maxPriceHeader");
      maxPriceHeader_2.textContent = String(maxPriceValue_1);
      document.getElementById("price").style.display = "inline";
      var typeCarHeader = document.getElementById("typeCarHeader");
      typeCarHeader.textContent = String(typeValue_1);
      document.getElementById("type").style.display = "inline";
      SourceCards.render(filteredCars);
    }
  };
  return Filter;
})();
// А тут заканчивается файл filter
var CardsList = /** @class */ (function () {
  function CardsList() {}
  CardsList.prototype.renderFilter = function (arrayNameFilterOption) {
    var htmListFilter = "";
    arrayNameFilterOption.map(function (nameButton) {
      // Поменять плюс в иконке на тернарный оператор!
      htmListFilter +=
        '\n                <button \n                    id="open'
          .concat(
            nameButton,
            'Button" \n                    name="0" \n                    class="button filter" \n                    onclick="SourceCards.handleClickFilterButton(\'',
          )
          .concat(
            nameButton,
            '\')"\n                >\n                <img \n                    src="../svgIcon/plusForAutoFilter.svg" \n                    alt="imgPlusFilterButton"\n                >\n                    ',
          )
          .concat(
            nameButton,
            '\n                </button>   \n                <div id="',
          )
          .concat(
            nameButton,
            'Open" style="width: 289px; background-color: #FFFFFF"></div>\n            ',
          );
    });
    var divFilter = document.getElementById("filterButton");
    divFilter.innerHTML = htmListFilter;
  };
  CardsList.prototype.handleClickFilterButton = function (nameButton) {
    var htmlPlaceUnderButton = "";
    if (nameButton === arrayNameFilterButton[0]) {
      htmlPlaceUnderButton =
        '\n                <span id="priceOpen" class="price-visible">\n                    <span class="filter__text">\u041E\u0442&nbsp;\n                        <input \n                            type="number"\n                            id="minPriceValue"\n                            placeholder=""\n                            value="'
          .concat(
            minPrice,
            '"\n                            step="1"\n                            class="filter__price-input"\n                        >\n                        <span class="filter__text">&nbsp;\u0414\u043E&nbsp;</span>\n                        <input \n                        type="number"\n                        id="maxPriceValue"\n                        value="',
          )
          .concat(
            maxPrice,
            '"\n                        step="1"\n                        class="filter__price-input"\n                      >\n                    </span>\n                       <button onclick="SourceFilter.isOpenedPriceFilter()" class="button-close-filter-option"></button>\n                    </span>\n            ',
          );
    }
    if (nameButton === arrayNameFilterButton[1]) {
      // Добавить оставшиеся опции в datalist
      htmlPlaceUnderButton =
        '\n                <span id="typeOpen" class="type-visible">\n                    <input \n                        type="text"\n                        list="typeCar"\n                        id="typeInput"\n                        class="type-input"\n                    >\n                    <datalist id="typeCar">\n                        <option value="'
          .concat(
            "\u0412\u043D\u0435\u0434\u043E\u0440\u043E\u0436\u043D\u0438\u043A" /* TypeCar.OffRoad */,
            '">\n                        <option value="',
          )
          .concat(
            "\u041B\u0435\u0433\u043A\u043E\u0432\u043E\u0439 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C" /* TypeCar.passengerCar */,
            '">\n                        <option value="',
          )
          .concat(
            "\u0413\u0440\u0443\u0437\u043E\u0432\u0438\u043A" /* TypeCar.truck */,
            '">\n                        <option value="',
          )
          .concat(
            "\u041C\u0438\u043D\u0438\u0432\u044D\u043D" /* TypeCar.minivan */,
            '">\n                    </datalist>\n                    <button onclick="SourceFilter.isOpenedTypeFilter()" class="button-close-filter-option">\n                </span>\n            ',
          );
    }
    if (nameButton === arrayNameFilterButton[2]) {
      htmlPlaceUnderButton =
        '\n                <span class="manufacturer-visible" id="openManufacturer">\n                    <span>\n                        <input\n                            name="manufacture"\n                            type="checkbox"\n                            id="kia"\n                            value="'
          .concat(
            "Kia" /* Manufacturer.Kia */,
            '"\n                            class="ad-input"\n                        >\n                        <label class="label-manufacturer" for="kia">Kia-Rio</label>\n                    </span>\n                    <span>\n                        <input\n                            name="manufacture"\n                            type="checkbox"\n                            id="UAZ"\n                            value="',
          )
          .concat(
            "\u0423\u0410\u0417" /* Manufacturer.UAZ */,
            '"\n                            class="ad-input"\n                        >\n                    <label class="label-manufacturer" for="UAZ">\u0423\u0410\u0417</label>\n                    </span>\n                    <span>\n                        <input\n                            name="manufacture"\n                            type="checkbox"\n                            id="Chevrolet"\n                            value="',
          )
          .concat(
            "Chevrolet" /* Manufacturer.Chevrolet */,
            '"\n                            class="ad-input"\n                        >\n                    <label class="label-manufacturer" for="Chevrolet">Chevrolet</label>\n                    </span>\n                    <span>\n                        <input\n                            name="manufacture"\n                            type="checkbox"\n                            id="Volvo"\n                            value="',
          )
          .concat(
            "Volvo" /* Manufacturer.Volvo */,
            '"\n                            class="ad-input"\n                        >\n                    <label class="label-manufacturer" for="Volvo">Volvo</label>\n                    </span>\n                    <span>\n                        <input\n                            name="manufacture"\n                            type="checkbox"\n                            id="Renault"\n                            value="',
          )
          .concat(
            "Renault" /* Manufacturer.Renault */,
            '"\n                            class="ad-input"\n                        >\n                    <label class="label-manufacturer" for="Renault">Renault</label>\n                    </span>\n                    <span>\n                        <input\n                            name="manufacture"\n                            type="checkbox"\n                            id="Discovery"\n                            value="',
          )
          .concat(
            "Discovery" /* Manufacturer.Discovery */,
            '"\n                            class="ad-input"\n                        >\n                    <label class="label-manufacturer" for="Discovery">Discovery</label>\n                    </span>\n                    <span>\n                        <input\n                            name="manufacture"\n                            type="checkbox"\n                            id="Lada"\n                            value="',
          )
          .concat(
            "Lada" /* Manufacturer.Lada */,
            '"\n                            class="ad-input"\n                        >\n                    <label class="label-manufacturer" for="Lada">Lada</label>\n                    </span>\n                    <span>\n                        <input\n                            name="manufacture"\n                            type="checkbox"\n                            id="Ford"\n                            value="',
          )
          .concat(
            "Lada" /* Manufacturer.Lada */,
            '"\n                            class="ad-input"\n                        >\n                    <label class="label-manufacturer" for="Ford">Ford</label>\n                    </span>\n                    <span>\n                        <input\n                            name="manufacture"\n                            type="checkbox"\n                            id="Suzuki"\n                            value="Suzuki"\n                            class="ad-input"\n                        >\n                    <label class="label-manufacturer" for="Suzuki">Suzuki</label>\n                    </span>\n                    <span>\n                        <input\n                            name="manufacture"\n                            type="checkbox"\n                            id="MercedesBenz"\n                            value="',
          )
          .concat(
            "MercedesBenz" /* Manufacturer.MercedesBenz */,
            '"\n                            class="ad-input"\n                        >\n                    <label class="label-manufacturer" for="MercedesBenz">MercedesBenz</label>\n                    </span>\n                    <button onclick="SourceFilter.isOpenManufacturerFilter()" class="button-close-filter-option" style="margin-left: 80px">\n                    </span>\n            ',
          );
    }
    if (nameButton === arrayNameFilterButton[3]) {
      htmlPlaceUnderButton =
        '\n                <span id="countryOpen" class="type-visible">\n                    <input list="countryCar"\n                        id="countryInput"\n                        class="type-input"\n                    >\n                    <datalist id="countryCar">\n                        <option value="'
          .concat(
            "\u0420\u043E\u0441\u0441\u0438\u044F" /* Country.Russia */,
            '">\n                        <option value="',
          )
          .concat(
            "\u042F\u043F\u043E\u043D\u0438\u044F" /* Country.Japan */,
            '">\n                        <option value="',
          )
          .concat(
            "\u042E\u0436\u043D\u0430\u044F \u041A\u043E\u0440\u0435\u044F" /* Country.SouthKorea */,
            '">\n                        <option value="',
          )
          .concat(
            "\u0413\u0435\u0440\u043C\u0430\u043D\u0438\u044F" /* Country.Germany */,
            '">\n                        <option value="',
          )
          .concat(
            "\u041D\u0438\u0434\u0435\u0440\u043B\u0430\u043D\u0434\u044B" /* Country.Netherlands */,
            '">\n                    </datalist>\n                    <button onclick="SourceFilter.isOpenedCountryFilter()" class="button-close-filter-option">\n                </span>\n            ',
          );
    }
    if (nameButton === arrayNameFilterButton[4]) {
      htmlPlaceUnderButton =
        '\n                <span id="transmissionOpen" class="transmission-visible">\n                    <span>\n                        <input\n                            name="transmission"\n                            type="checkbox"\n                            id="Mechanic"\n                            value="'
          .concat(
            "\u041C\u0435\u0445\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u0430\u044F" /* Transmission.mechanic */,
            '"\n                            class="transmission-input"\n                        />\n                        <label for="Mechanic"><span class="label-ad">\u041C\u0435\u0445\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u0430\u044F</span></label>\n                    </span>\n                    <span>\n                        <input\n                            name="transmission"\n                            type="checkbox"\n                            id="Machine"\n                            value="',
          )
          .concat(
            "\u0410\u0432\u0442\u043E\u043C\u0430\u0442" /* Transmission.automatic */,
            '"\n                            class="transmission-input"\n                        />\n                        <label for="Machine"><span class="label-ad">\u0410\u0432\u0442\u043E\u043C\u0430\u0442</span></label>\n                    </span>\n                    <span>\n                        <input\n                            name="transmission"\n                            type="checkbox"\n                            id="Machine"\n                            value="',
          )
          .concat(
            "\u0412\u0430\u0440\u0438\u0430\u0442\u043E\u0440" /* Transmission.variate */,
            '"\n                            class="transmission-input"\n                        />\n                        <label for="Machine"><span class="label-ad">\u0412\u0430\u0440\u0438\u0430\u0442\u043E\u0440</span></label>\n                    </span>\n                    <span>\n                        <input\n                            name="transmission"\n                            type="checkbox"\n                            id="Machine"\n                            value="',
          )
          .concat(
            "\u0420\u043E\u0431\u043E\u0442\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F" /* Transmission.robot */,
            '"\n                            class="transmission-input"\n                        />\n                        <label for="Machine"><span class="label-ad">\u0420\u043E\u0431\u043E\u0442\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F</span></label>\n                    </span>\n                    <button onclick="SourceFilter.isOpenedTransmissionFilter()" class="button-close-filter-option" style="margin-left: 80px">\n                </span>\n                \n            ',
          );
    }
    if (nameButton === arrayNameFilterButton[5]) {
      htmlPlaceUnderButton =
        '\n                <span id="adOpen" class="ad-visible">\n                    <span>\n                        <input\n                            name="ad"\n                            type="checkbox"\n                            id="sell"\n                            value="\u041F\u0440\u043E\u0434\u0430\u0436\u0430"\n                            class="ad-input"\n                        >\n                        <label class="label-ad" for="sell">\u041F\u0440\u043E\u0434\u0430\u0436\u0430</label>\n                    </span>\n                    <span>\n                        <input\n                            name="ad"\n                            type="checkbox"\n                            id="auction"\n                            value="\u0410\u0443\u043A\u0446\u0438\u043E\u043D"\n                            class="ad-input"\n                        >\n                        <label class="label-ad" for="auction">\u0410\u0443\u043A\u0446\u0438\u043E\u043D</label>\n                    </span>\n                    <button onclick="SourceFilter.isOpenedAdFilter()" class="button-close-filter-option" style="margin-left: 80px">\n                </span>\n            ';
    }
    var placeForButton = document.getElementById("".concat(nameButton, "Open"));
    placeForButton.innerHTML = htmlPlaceUnderButton;
  };
  CardsList.prototype.render = function (arrayCars) {
    var htmlListCars = "";
    arrayCars.forEach(function (_a) {
      var country = _a.country,
        model = _a.model,
        price = _a.price,
        type = _a.type,
        year = _a.year,
        photo = _a.photo;
      var priceCar = price.toLocaleString();
      htmlListCars +=
        '\n        <li class="cards-element">\n            <img class="cards-element__img" \n            alt="imgCar"\n            src="'
          .concat(
            photo,
            '"\n            width="360"\n            height="204" \n            />\n            <span class="cards-element__type">',
          )
          .concat(
            type,
            '</span>\n            <span class="cards-element__name">',
          )
          .concat(
            model,
            '</span>\n            <div class="cards-element__sub-info">\n                <span class="cards-element__yearProd">',
          )
          .concat(
            year,
            '</span>\n            </div>\n            <div class="cards-element__details">\n                <span class="cards-element__location">',
          )
          .concat(
            country,
            '</span>\n                <span class="cards-element__price">',
          )
          .concat(
            priceCar,
            " \u20BD</span>\n            </div>\n        </li>",
          );
    });
    var finishHtml = '\n    <ul class="cards-container">\n        '.concat(
      htmlListCars,
      "\n    </ul>",
    );
    var divCards = document.getElementById("listCards");
    divCards.innerHTML = finishHtml;
  };
  return CardsList;
})();
// А тут заканчивается файл card_list
var SourceFilter = new Filter();
var SourceCards = new CardsList();
var SourceFilterOptions = new SourceForFilterOption();
var arrayNameFilterButton = [
  "Цена, ₽",
  "Тип транспорта",
  "Производитель",
  "Страна местонахождения",
  "Коробка передач/Ход",
  "Тип объявления",
];
// Верхние константы тоже в файл constants
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
// А тут заканчивается файл script
// ¯\_(ツ)_/¯
