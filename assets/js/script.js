class Person {
    function() {
        this.firstName = firstName;
        this.lastName =lastName;
        this.Age = Age;
        this.Location = Location;
    }

    compareAge(otherPerson) {
        if (this.Age > otherPerson.Age) {
            return '${this.firstName} ${this.lastName} è più grande di ${otherPerson.firstName} ${otherPerson.lastName}';
        } else if (this.Age < otherPerson.Age) {
            return '${this.firstName} ${this.lastName} è più piccolo di ${otherPerson.firstName} ${otherPerson.lastName}';
        } else if (this.Age === otherPerson.Age) {
            return '${this.firstName} ${this.lastName} è grande come ${otherPerson.firstName} ${otherPerson.lastName}';
        }
    }
}

const Person1 = new Person('Biagio', 'Antonacci', 61, 'Roma');
const Person2 = new Person('Laura', 'Pausini', 50, 'Faenza');
const Person3 = new Person('Vasco', 'Rossi', 72, 'Zocca');
const Person4 = new Person('Eros', 'Ramazzotti', 61, 'Roma');

console.log(Person1.compareAge(Person2));
console.log(Person1.compareAge(Person3));
console.log(Person1.compareAge(Person4));

