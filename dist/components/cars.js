class Car {
  constructor(
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
}
const K7 = new Car(
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
const Levorg = new Car(
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
const AudiQ5 = new Car(
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
const UAZ3151 = new Car(
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
const OpelCOMBOAircoElctRamenStuurbediening = new Car(
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
const MercedesBenz250 = new Car(
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
const NissanEcoT100 = new Car(
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
const CobusMercedesBenz = new Car(
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
const Setra317ULGT = new Car(
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
const KiaK72020 = new Car(
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
const SuzukiJimny = new Car(
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
const KiaSpectra = new Car(
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
const FordFocusII = new Car(
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
const Lada2114 = new Car(
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
const Uaz3151 = new Car(
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
const LandRoverDiscovery = new Car(
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
const RenaultRoverLogan = new Car(
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
const VolvoXC60 = new Car(
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
const ChevroletAveo = new Car(
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
const arrayCars = [
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
class SourceForFilterOption {
  minPrice(arrayCars) {
    let minPrice = arrayCars[0].price;
    for (let index = 1; index < arrayCars.length; index++) {
      if (arrayCars[index].price < minPrice) {
        minPrice = arrayCars[index].price;
      }
    }
    return minPrice;
  }
  maxPrice(arrayCars) {
    let maxPrice = arrayCars[0].price;
    for (let index = 1; index < arrayCars.length; index++) {
      if (arrayCars[index].price > maxPrice) {
        maxPrice = arrayCars[index].price;
      }
    }
    return maxPrice;
  }
}
class Filter {
  isOpenedPriceFilter() {
    let openedPrice = document.getElementById("priceOpen");
    if (openedPrice.classList.contains("price-hidden")) {
      openedPrice.classList.remove("price-hidden");
      openedPrice.classList.add("price-visible");
    } else {
      openedPrice.classList.remove("price-visible");
      openedPrice.classList.add("price-hidden");
    }
  }
  isOpenedTypeFilter() {
    let openedType = document.getElementById("typeOpen");
    if (openedType.classList.contains("type-hidden")) {
      openedType.classList.remove("type-hidden");
      openedType.classList.add("type-visible");
    } else {
      openedType.classList.remove("type-visible");
      openedType.classList.add("type-hidden");
    }
  }
  isOpenedCountryFilter() {
    let openedCountry = document.getElementById("countryOpen");
    if (openedCountry.classList.contains("country-hidden")) {
      openedCountry.classList.remove("country-hidden");
      openedCountry.classList.add("country-visible");
    } else {
      openedCountry.classList.remove("country-visible");
      openedCountry.classList.add("country-hidden");
    }
  }
  isOpenedTransmissionFilter() {
    let openedTransmission = document.getElementById("transmissionOpen");
    if (openedTransmission.classList.contains("transmission-hidden")) {
      openedTransmission.classList.remove("transmission-hidden");
      openedTransmission.classList.add("transmission-visible");
    } else {
      openedTransmission.classList.remove("transmission-visible");
      openedTransmission.classList.add("transmission-hidden");
    }
  }
  isOpenedAdFilter() {
    let openedAd = document.getElementById("adOpen");
    if (openedAd.classList.contains("ad-hidden")) {
      openedAd.classList.remove("ad-hidden");
      openedAd.classList.add("ad-visible");
    } else {
      openedAd.classList.remove("ad-visible");
      openedAd.classList.add("ad-hidden");
    }
  }
  isOpenManufacturerFilter() {
    let openedManufacturer = document.getElementById("openManufacturer");
    if (openedManufacturer.classList.contains("manufacturer-visible")) {
      openedManufacturer.classList.remove("manufacturer-visible");
      openedManufacturer.classList.add("manufacturer-hidden");
    } else {
      openedManufacturer.classList.remove("manufacturer-hidden");
      openedManufacturer.classList.add("manufacturer-visible");
    }
  }
  // Метод filterLogic используем только при нажатии на кнопку ПРИМЕНИТЬ
  closePrice() {
    const minPriceInput = document.getElementById("minPriceValue");
    const maxPriceInput = document.getElementById("maxPriceValue");
    if (
      minPriceInput instanceof HTMLInputElement &&
      maxPriceInput instanceof HTMLInputElement
    ) {
      if (minPriceInput && maxPriceInput) {
        minPriceInput.value = String(SourceFilterOptions.minPrice(arrayCars));
        maxPriceInput.value = String(SourceFilterOptions.maxPrice(arrayCars));
      }
      const minPriceHeader = document.getElementById("minPriceHeader");
      const maxPriceHeader = document.getElementById("maxPriceHeader");
      if (minPriceHeader && maxPriceHeader) {
        minPriceHeader.textContent = String(
          SourceFilterOptions.minPrice(arrayCars),
        );
        maxPriceHeader.textContent = String(
          SourceFilterOptions.maxPrice(arrayCars),
        );
      }
    }
  }
  closeType() {
    const typeHeader = document.getElementById("typeCarHeader");
    typeHeader.textContent = "Любой";
    const typeInput = document.getElementById("typeInput");
    if (typeInput instanceof HTMLInputElement) {
      typeInput.value = "Любой";
    }
  }
  filterValues() {
    const maxPriceInput = document.getElementById("maxPriceValue");
    const minPriceInput = document.getElementById("minPriceValue");
    const typeInput = document.getElementById("typeInput");
    const countryInput = document.getElementById("countryInput");
    if (
      maxPriceInput instanceof HTMLInputElement &&
      minPriceInput instanceof HTMLInputElement &&
      typeInput instanceof HTMLInputElement &&
      countryInput instanceof HTMLInputElement
    ) {
      let maxPriceValue = Number(maxPriceInput.value);
      let minPriceValue = Number(minPriceInput.value);
      let typeValue = String(typeInput.value);
      let countryValue = countryInput.value;
      const manufactures = Array.from(
        document.querySelectorAll('input[name="manufacture"]:checked'),
      ).map((checkbox) => checkbox.value);
      const transmissions = Array.from(
        document.querySelectorAll('input[name="transmission"]:checked'),
      ).map((checkbox) => checkbox.value);
      const ads = Array.from(
        document.querySelectorAll('input[name="ad"]:checked'),
      ).map((checkbox) => checkbox.value);
      if (!maxPriceValue) {
        maxPriceValue = SourceFilterOptions.maxPrice(arrayCars);
      }
      if (!minPriceValue) {
        minPriceValue = SourceFilterOptions.minPrice(arrayCars);
      }
      if (!typeValue || typeValue === "Любой") {
        typeValue = "";
      }
      if (!countryValue) {
        countryValue = "";
      }
      let filteredCars = arrayCars.filter((car) => {
        return (
          ((car.price <= maxPriceValue && car.price >= minPriceValue) ||
            !(maxPriceValue + minPriceValue)) &&
          (!typeValue || car.type === typeValue) &&
          (!manufactures.length || manufactures.includes(car.manufacturer)) &&
          (!countryValue || car.country === countryValue) &&
          (!transmissions.length || transmissions.includes(car.transmission)) &&
          (!ads.length || ads.includes(car.ad))
        );
      });
      const minPriceHeader = document.getElementById("minPriceHeader");
      minPriceHeader.textContent = String(minPriceValue);
      const maxPriceHeader = document.getElementById("maxPriceHeader");
      maxPriceHeader.textContent = String(maxPriceValue);
      document.getElementById("price").style.display = "inline";
      const typeCarHeader = document.getElementById("typeCarHeader");
      typeCarHeader.textContent = String(typeValue);
      document.getElementById("type").style.display = "inline";
      SourceCards.render(filteredCars);
    }
  }
}
// А тут заканчивается файл filter
class CardsList {
  renderFilter(arrayNameFilterOption) {
    let htmListFilter = "";
    arrayNameFilterOption.map((nameButton) => {
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
            `;
    });
    let divFilter = document.getElementById("filterButton");
    divFilter.innerHTML = htmListFilter;
  }
  handleClickFilterButton(nameButton) {
    let htmlPlaceUnderButton = "";
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
            `;
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
                        <option value="${"\u0412\u043D\u0435\u0434\u043E\u0440\u043E\u0436\u043D\u0438\u043A" /* TypeCar.OffRoad */}">
                        <option value="${"\u041B\u0435\u0433\u043A\u043E\u0432\u043E\u0439 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C" /* TypeCar.passengerCar */}">
                        <option value="${"\u0413\u0440\u0443\u0437\u043E\u0432\u0438\u043A" /* TypeCar.truck */}">
                        <option value="${"\u041C\u0438\u043D\u0438\u0432\u044D\u043D" /* TypeCar.minivan */}">
                    </datalist>
                    <button onclick="SourceFilter.isOpenedTypeFilter()" class="button-close-filter-option">
                </span>
            `;
    }
    if (nameButton === arrayNameFilterButton[2]) {
      htmlPlaceUnderButton = `
                <span class="manufacturer-visible" id="openManufacturer">
                    <span>
                        <input
                            name="manufacture"
                            type="checkbox"
                            id="kia"
                            value="${"Kia" /* Manufacturer.Kia */}"
                            class="ad-input"
                        >
                        <label class="label-manufacturer" for="kia">Kia-Rio</label>
                    </span>
                    <span>
                        <input
                            name="manufacture"
                            type="checkbox"
                            id="UAZ"
                            value="${"\u0423\u0410\u0417" /* Manufacturer.UAZ */}"
                            class="ad-input"
                        >
                    <label class="label-manufacturer" for="UAZ">УАЗ</label>
                    </span>
                    <span>
                        <input
                            name="manufacture"
                            type="checkbox"
                            id="Chevrolet"
                            value="${"Chevrolet" /* Manufacturer.Chevrolet */}"
                            class="ad-input"
                        >
                    <label class="label-manufacturer" for="Chevrolet">Chevrolet</label>
                    </span>
                    <span>
                        <input
                            name="manufacture"
                            type="checkbox"
                            id="Volvo"
                            value="${"Volvo" /* Manufacturer.Volvo */}"
                            class="ad-input"
                        >
                    <label class="label-manufacturer" for="Volvo">Volvo</label>
                    </span>
                    <span>
                        <input
                            name="manufacture"
                            type="checkbox"
                            id="Renault"
                            value="${"Renault" /* Manufacturer.Renault */}"
                            class="ad-input"
                        >
                    <label class="label-manufacturer" for="Renault">Renault</label>
                    </span>
                    <span>
                        <input
                            name="manufacture"
                            type="checkbox"
                            id="Discovery"
                            value="${"Discovery" /* Manufacturer.Discovery */}"
                            class="ad-input"
                        >
                    <label class="label-manufacturer" for="Discovery">Discovery</label>
                    </span>
                    <span>
                        <input
                            name="manufacture"
                            type="checkbox"
                            id="Lada"
                            value="${"Lada" /* Manufacturer.Lada */}"
                            class="ad-input"
                        >
                    <label class="label-manufacturer" for="Lada">Lada</label>
                    </span>
                    <span>
                        <input
                            name="manufacture"
                            type="checkbox"
                            id="Ford"
                            value="${"Lada" /* Manufacturer.Lada */}"
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
                            value="${"MercedesBenz" /* Manufacturer.MercedesBenz */}"
                            class="ad-input"
                        >
                    <label class="label-manufacturer" for="MercedesBenz">MercedesBenz</label>
                    </span>
                    <button onclick="SourceFilter.isOpenManufacturerFilter()" class="button-close-filter-option" style="margin-left: 80px">
                    </span>
            `;
    }
    if (nameButton === arrayNameFilterButton[3]) {
      htmlPlaceUnderButton = `
                <span id="countryOpen" class="type-visible">
                    <input list="countryCar"
                        id="countryInput"
                        class="type-input"
                    >
                    <datalist id="countryCar">
                        <option value="${"\u0420\u043E\u0441\u0441\u0438\u044F" /* Country.Russia */}">
                        <option value="${"\u042F\u043F\u043E\u043D\u0438\u044F" /* Country.Japan */}">
                        <option value="${"\u042E\u0436\u043D\u0430\u044F \u041A\u043E\u0440\u0435\u044F" /* Country.SouthKorea */}">
                        <option value="${"\u0413\u0435\u0440\u043C\u0430\u043D\u0438\u044F" /* Country.Germany */}">
                        <option value="${"\u041D\u0438\u0434\u0435\u0440\u043B\u0430\u043D\u0434\u044B" /* Country.Netherlands */}">
                    </datalist>
                    <button onclick="SourceFilter.isOpenedCountryFilter()" class="button-close-filter-option">
                </span>
            `;
    }
    if (nameButton === arrayNameFilterButton[4]) {
      htmlPlaceUnderButton = `
                <span id="transmissionOpen" class="transmission-visible">
                    <span>
                        <input
                            name="transmission"
                            type="checkbox"
                            id="Mechanic"
                            value="${"\u041C\u0435\u0445\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u0430\u044F" /* Transmission.mechanic */}"
                            class="transmission-input"
                        />
                        <label for="Mechanic"><span class="label-ad">Механическая</span></label>
                    </span>
                    <span>
                        <input
                            name="transmission"
                            type="checkbox"
                            id="Machine"
                            value="${"\u0410\u0432\u0442\u043E\u043C\u0430\u0442" /* Transmission.automatic */}"
                            class="transmission-input"
                        />
                        <label for="Machine"><span class="label-ad">Автомат</span></label>
                    </span>
                    <span>
                        <input
                            name="transmission"
                            type="checkbox"
                            id="Machine"
                            value="${"\u0412\u0430\u0440\u0438\u0430\u0442\u043E\u0440" /* Transmission.variate */}"
                            class="transmission-input"
                        />
                        <label for="Machine"><span class="label-ad">Вариатор</span></label>
                    </span>
                    <span>
                        <input
                            name="transmission"
                            type="checkbox"
                            id="Machine"
                            value="${"\u0420\u043E\u0431\u043E\u0442\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F" /* Transmission.robot */}"
                            class="transmission-input"
                        />
                        <label for="Machine"><span class="label-ad">Роботизированная</span></label>
                    </span>
                    <button onclick="SourceFilter.isOpenedTransmissionFilter()" class="button-close-filter-option" style="margin-left: 80px">
                </span>
                
            `;
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
            `;
    }
    let placeForButton = document.getElementById(`${nameButton}Open`);
    placeForButton.innerHTML = htmlPlaceUnderButton;
  }
  render(arrayCars) {
    let htmlListCars = "";
    arrayCars.forEach(({ country, model, price, type, year, photo }) => {
      const priceCar = price.toLocaleString();
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
    });
    const finishHtml = `
    <ul class="cards-container">
        ${htmlListCars}
    </ul>`;
    let divCards = document.getElementById("listCards");
    divCards.innerHTML = finishHtml;
  }
}
// А тут заканчивается файл card_list
const SourceFilter = new Filter();
const SourceCards = new CardsList();
const SourceFilterOptions = new SourceForFilterOption();
const arrayNameFilterButton = [
  "Цена, ₽",
  "Тип транспорта",
  "Производитель",
  "Страна местонахождения",
  "Коробка передач/Ход",
  "Тип объявления",
];
// Верхние константы тоже в файл constants
let minPrice = SourceFilterOptions.minPrice(arrayCars);
let maxPrice = SourceFilterOptions.maxPrice(arrayCars);
let minPriceHeader = document.getElementById("minPriceHeader");
if (minPriceHeader) {
  minPriceHeader.textContent = String(minPrice);
}
let maxPriceHeader = document.getElementById("maxPriceHeader");
if (maxPriceHeader) {
  maxPriceHeader.textContent = String(maxPrice);
}
let button = document.getElementById("buttonAccept");
if (button) {
  button.addEventListener("click", SourceFilter.filterValues);
}
let buttonHeaderClearAll = document.getElementById("closeAll");
if (buttonHeaderClearAll) {
  buttonHeaderClearAll.addEventListener("click", () => {
    SourceCards.render(arrayCars);
    SourceCards.renderFilter(arrayNameFilterButton);
  });
}
let buttonClosePrice = document.getElementById("closePrice");
if (buttonClosePrice) {
  buttonClosePrice.addEventListener("click", () => {
    SourceFilter.closePrice();
    SourceFilter.filterValues();
  });
}
SourceCards.renderFilter(arrayNameFilterButton);
SourceCards.render(arrayCars);
let buttonTypeHeader = document.getElementById("closeType");
if (buttonTypeHeader) {
  buttonTypeHeader.addEventListener("click", () => {
    SourceFilter.closeType();
    SourceFilter.filterValues();
  });
}
// А тут заканчивается файл script
// ¯\_(ツ)_/¯
