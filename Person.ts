class Person {
    firstName:string;
    lastName:string;
    age:number;

    calculateAge = (otherPerson:Person) =>{
        return this.age - otherPerson.age;
    }
}
