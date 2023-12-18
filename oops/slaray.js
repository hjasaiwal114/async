class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
        console.log(`Nmae of the employee: ${name}`);
        console.log(`Monthly Slary: ${salary}`);
    }

    calculatedAnnualSalary() {
        return this.salary * 12;
    }
}

class Manager extends Employee {
    constructor(name, slary, department) {
        super (name, salary);
        this,department = department;
    }
    calculateAnnualSalary() {
        const basS
    }
}