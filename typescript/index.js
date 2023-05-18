var num = 46;
var arr = ['wre', 'rewr', 'hgfg', 5256];
var arr_2 = [1, 2, 3, 4, null, ['']];
// const user: User = {
//     name: 'Alex',
//     age: 28,
//     course: '23'
// }
//tsc -w
var Student = /** @class */ (function () {
    function Student(name, age, group, course) {
        this._name = name;
        this.age = age;
        this.group = group;
        this.course = course;
    }
    Student.prototype.checkUser = function () {
        return "".concat(this.name, ", ").concat(this.age);
    };
    Object.defineProperty(Student.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}());
function f1(a, b) {
    return a + +b;
}
console.log(f1(34, 675));
var text = document.querySelector('.text');
var color = document.querySelector('#color');
function changeColor(elem) {
    var c = color === null || color === void 0 ? void 0 : color.value;
    elem.style.color = c;
}
color.addEventListener('change', function () { return changeColor(text); });
//  enum Seanson {
//     Winter,
//     Spring,
//     Summer,
//     Autum
//  }
//  let current = Seanson.Spring;//получаем индекс
// let current = Season[2] //получаем сезон
// console.log(current);
var Season;
(function (Season) {
    Season["Winter"] = "\u0417\u0438\u043C\u0430";
    Season["Spring"] = "\u0412\u0435\u0441\u043D\u0430";
    Season["Summer"] = "\u041B\u0435\u0442\u043E";
    Season["Autum"] = "\u041E\u0441\u0435\u043D\u044C";
})(Season || (Season = {}));
// let season = {
//     winter: 'Зима'
// }
var current = Season.Summer;
console.log(current);
