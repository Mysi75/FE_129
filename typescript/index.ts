let num: number= 46;

type TestType = {
    name: string,
    age: number,
}

type MYType = number | null| undefined| TestType;



let arr: (string | number)[]= ['wre', 'rewr', 'hgfg', 5256];
let arr_2: Array<MYType | Array<string>> = [1, 2, 3, 4, null, ['']];

 interface User {
     name: string,
     age: number,
    course?: number,
    checkUser(): string,
 }
    // const user: User = {
    //     name: 'Alex',
    //     age: 28,
    //     course: '23'
    // }

    //tsc -w

     class Student implements User{
        name: string;
         age: number;
         readonly group: string;
         course: number;

         constructor(name, age, group, course){
             this.name = name;
             this.age = age;
             this.group = group;
             this.course = course;
         }

         checkUser(): string {
             return `${this.name}, ${this.age}`;
         }
         
    }

