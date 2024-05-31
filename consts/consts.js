"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayCars = exports.ChevroletAveo = exports.VolvoXC60 = exports.RenaultRoverLogan = exports.LandRoverDiscovery = exports.Uaz3151 = exports.Lada2114 = exports.FordFocusII = exports.KiaSpectra = exports.SuzukiJimny = exports.KiaK72020 = exports.Setra317ULGT = exports.CobusMercedesBenz = exports.NissanEcoT100 = exports.MercedesBenz250 = exports.OpelCOMBOAircoElctRamenStuurbediening = exports.UAZ3151 = exports.NissanSerena = exports.AudiQ5 = exports.Levorg = exports.K7 = exports.Car = void 0;
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
exports.Car = Car;
exports.K7 = new Car("\u042E\u0436\u043D\u0430\u044F \u041A\u043E\u0440\u0435\u044F" /* Country.SouthKorea */, "Kia", "K7", 2500016, "Легковой автомобиль", "Автомат", "2020", "./photos/K7.jpg", "Продажа");
exports.Levorg = new Car("\u042F\u043F\u043E\u043D\u0438\u044F" /* Country.Japan */, "Subaru", "Levorg", 1225015, "Легковой автомобиль", "Вариатор", "2019", "./photos/levorg.jpg", "Продажа");
exports.AudiQ5 = new Car("\u0413\u0435\u0440\u043C\u0430\u043D\u0438\u044F" /* Country.Germany */, "Audi", "Q5 45 TFSI", 2400000, "Внедорожник", "Роботизированная", "2019", "./photos/AudiQ5.jpg", "Продажа");
exports.NissanSerena = new Car("\u042F\u043F\u043E\u043D\u0438\u044F" /* Country.Japan */, "Nissan", "Serena", 1049658, "Минивэн", "Вариатор", "2009", "./photos/NissanSerena.jpg", "Аукцион");
exports.UAZ3151 = new Car("\u0420\u043E\u0441\u0441\u0438\u044F" /* Country.Russia */, "УАЗ", "3151", 300000, "Внедорожник", "Механическая", "2002", "./photos/UAZ3151.jpg", "Продажа");
exports.OpelCOMBOAircoElctRamenStuurbediening = new Car("\u041D\u0438\u0434\u0435\u0440\u043B\u0430\u043D\u0434\u044B" /* Country.Netherlands */, "Opel", "Opel COMBO", 1500000, "Грузовик", "Механическая", "2015", "./photos/OpelCOMBO.png", "Продажа");
exports.MercedesBenz250 = new Car("\u041D\u0438\u0434\u0435\u0440\u043B\u0430\u043D\u0434\u044B" /* Country.Netherlands */, "Mercedes-Benz", "Mercedes-Benz250", 4887000, "Грузовик", "Автомат", "2015", "./photos/Mercedes-Benz250.jpg", "Продажа");
exports.NissanEcoT100 = new Car("\u041D\u0438\u0434\u0435\u0440\u043B\u0430\u043D\u0434\u044B" /* Country.Netherlands */, "Nissan", "EcoT100", 279000, "Грузовик", "Механическая", "2015", "./photos/NissanEcoT100.png", "Продажа");
exports.CobusMercedesBenz = new Car("\u041D\u0438\u0434\u0435\u0440\u043B\u0430\u043D\u0434\u044B" /* Country.Netherlands */, "Mercedes Benz", "Cobus2700s", 3946500, "Грузовик", "Механическая", "2015", "./photos/CobusMercedesBenz.jpg", "Аукцион");
exports.Setra317ULGT = new Car("\u041D\u0438\u0434\u0435\u0440\u043B\u0430\u043D\u0434\u044B" /* Country.Netherlands */, "MercedesBenz", "Cobus2700S", 2325200, "Грузовик", "Автомат", "2015", "./photos/Setra317UL-GT.jpg", "Аукцион");
exports.KiaK72020 = new Car("\u0420\u043E\u0441\u0441\u0438\u044F" /* Country.Russia */, "Kia", "K7", 2837000, "Легковой автомобиль", "Автомат", "2020", "./photos/KiaK7.jpg", "Продажа");
exports.SuzukiJimny = new Car("\u0420\u043E\u0441\u0441\u0438\u044F" /* Country.Russia */, "Suzuki", "Jimny", 1099000, "Легковой автомобиль", "Автомат", "2008", "./photos/SuzukiJimnyIII.jpg", "Аукцион");
exports.KiaSpectra = new Car("\u0420\u043E\u0441\u0441\u0438\u044F" /* Country.Russia */, "Kia", "Spectra I", 300000, "Легковой автомобиль", "Автомат", "2008", "./photos/KiaSpectra.jpg", "Продажа");
exports.FordFocusII = new Car("\u0420\u043E\u0441\u0441\u0438\u044F" /* Country.Russia */, "Ford", "Focus II", 535000, "Легковой автомобиль", "Механическая", "2008", "./photos/FordFocusII.jpg", "Аукцион");
exports.Lada2114 = new Car("\u0420\u043E\u0441\u0441\u0438\u044F" /* Country.Russia */, "Lada", "2114", 90000, "Легковой автомобиль", "Механическая", "2001", "./photos/Lada2114.jpg", "Продажа");
exports.Uaz3151 = new Car("\u0420\u043E\u0441\u0441\u0438\u044F" /* Country.Russia */, "UAZ", "3151", 275000, "Внедорожник", "Механическая", "1992", "./photos/3151.jpg", "Продажа");
exports.LandRoverDiscovery = new Car("\u0420\u043E\u0441\u0441\u0438\u044F" /* Country.Russia */, "Land Rover", "Discovery", 2699000, "Внедорожник", "Автомат", "2014", "./photos/LandRover.jpg", "Продажа");
exports.RenaultRoverLogan = new Car("\u0420\u043E\u0441\u0441\u0438\u044F" /* Country.Russia */, "Renault", "Logan I", 470000, "Легковой автомобиль", "Механическая", "2011", "./photos/RenaultLogan.jpg", "Аукцион");
exports.VolvoXC60 = new Car("\u0420\u043E\u0441\u0441\u0438\u044F" /* Country.Russia */, "Volvo", "XC60", 1260000, "Внедорожник", "Автомат", "2010", "./photos/VolvoXC60.jpg", "Продажа");
exports.ChevroletAveo = new Car("\u0420\u043E\u0441\u0441\u0438\u044F" /* Country.Russia */, "Chevrolet", "Aveo", 350000, "Легковой автомобиль", "Механическая", "2008", "./photos/ChevroletAveo.jpg", "Продажа");
exports.arrayCars = [exports.ChevroletAveo, exports.VolvoXC60, exports.RenaultRoverLogan, exports.LandRoverDiscovery, exports.Uaz3151, exports.Lada2114, exports.FordFocusII, exports.KiaSpectra, exports.SuzukiJimny, exports.KiaK72020, exports.Setra317ULGT, exports.CobusMercedesBenz, exports.NissanEcoT100, exports.K7, exports.Levorg, exports.AudiQ5, exports.NissanSerena, exports.UAZ3151, exports.OpelCOMBOAircoElctRamenStuurbediening, exports.MercedesBenz250];
