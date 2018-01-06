function Employee(name, dept) {
	this.name = name || "null";
	this.dept = dept || "general";
}

function WorkerBee(name, dept, projs) {
	this.base = Employee;
	this.base(name, dept);
	this.projects = projs || [];
}
WorkerBee.prototype = new Employee;

function Engineer(name, dept, projs, machine) {
	this.base = WorkerBee;
	this.base(name, dept, projs);
	this.machine = machine;
}
Engineer.prototype = new WorkerBee;

var jim = new Employee("Jones, Jim", "marketing");
console.log('Employee:  ');
console.log(jim.name);
console.log(jim.dept);

console.log('\nWorkBee: ');
var mark = new WorkerBee("Smith, Mark", "training", ["javascript"])
console.log(mark.name);
console.log(mark.dept);
console.log(mark.projects);

console.log('\nEngineer');
var jane = new Engineer("Doe, Jane", "Engineering", ["json"], "mackbook");
console.log(jane.name);
console.log(jane.dept);
console.log(jane.projects);
console.log(jane.machine);


// function parImpar(numero) {
// 	if (numero % 2 === 0) {
// 		return "par";
// 	} else {
// 		return "impar";
// 	}
// }
// console.log(parImpar(10));
// console.log(parImpar(9));

// console.log(120%50);
// console.log(2%3);
// console.log(30%20);
