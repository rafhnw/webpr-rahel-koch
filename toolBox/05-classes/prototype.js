/* Prototype
* ist selber ein object
	- hat einen namen, z-B Person (wird oft als type bezeichnet)
    - prototypen haben auch wieder prototypen
* */

/* Q16a */

const inc = x => x + 1;
const double = x => x * 2;

const id = arg => arg;
const second = arg1 => arg2 => arg2;

console.log(id(double));
console.log(second(double)(1));

//Function.prototype.then = x => foo1 => foo2 => foo2(foo1);

Function.prototype.then = function(fun1){
    console.log(fun1); //double
    console.log(this);
    return fun2 = x => fun1(this(x));
};

const test = foo => args => foo(args);

console.log(test(double) (1) === 2)

console.log(inc.then(double) (1));
console.log(inc.then(double).then(double) (1));


class Person {}
class Student {}

const s = new Student();
Object.setPrototypeOf(s, Person.prototype); // hier wird der Referenz auf Student den Prototype von Person zugewiesen (vererbung)
document.writeln(s instanceof Student);

class Person {}
class Student {}

const s = new Student();
Object.setPrototypeOf(s, Student.prototype);
document.writeln(s instanceof Person); // ist instanceof Student