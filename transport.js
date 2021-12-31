// let transport = ["самолёт", "теплоход", "катер", "автомобиль", "грузовик"];
// let type;

// for (let i = 0; i < transport.length; i++) {
//     // type = transport[i];
// }

function Tran(name) {
    this.name = name;
    this.about = "Я - " + name;
}

function airTran(name) {
    Tran.apply(this, arguments);
    this.about = "Я - " + name + ". Я лечу";
}

function waterTran(name) {
    Tran.apply(this, arguments);
    this.about = "Я - " + name + ". Я плыву";
}

function groundTran(name) {
    Tran.apply(this, arguments);
    this.about = "Я - " + name + ". Я еду";
}

airTran.prototype = Object.create(Tran.prototype);
airTran.prototype.constructor = Tran;

waterTran.prototype = Object.create(Tran.prototype);
waterTran.prototype.constructor = Tran;

groundTran.prototype = Object.create(Tran.prototype);
groundTran.prototype.constructor = Tran;

// Tran.prototype.go = function () {
//     alert(this.about);
// };

airTran.prototype.go = function () {
    alert(this.about);
};

waterTran.prototype.go = function () {
    alert(this.about);
};

groundTran.prototype.go = function () {
    alert(this.about);
};

let transport = ["ракета", "самолёт", "теплоход", "катер", "автомобиль", "грузовик"];
// let transport1 = [airTran, waterTran, groundTran];

// for (let i = 0; i < transport.length; i++) {

let airtran1 = new airTran(transport[0]);
airtran1.go();

let airtran2 = new airTran(transport[1]);
airtran2.go();

let watertran1 = new waterTran(transport[2]);
watertran1.go();

let watertran2 = new waterTran(transport[3]);
watertran2.go();

let groundtran1 = new groundTran(transport[4]);
groundtran1.go();

let groundtran2 = new groundTran(transport[5]);
groundtran2.go();

// }
