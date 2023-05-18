var num = 46;
var arr = ['wre', 'rewr', 'hgfg', 5256];
var arr_2 = [1, 2, 3, 4, null, ['']];
var user = {
    name: 'Alex',
    age: 28,
    course: '23'
};
//tsc -w
var User = /** @class */ (function () {
    function User(name, age, group, course) {
        this.name = name;
        this.age = age;
        this.group = group;
        this.course = course;
    }
    return User;
}());
