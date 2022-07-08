let person;

person = 'Rory';

const buildPerson = (person:string)=>{
    return `your person is ${person}`;
};

console.log(buildPerson(person));


//****************************************************//

const myName = "your name";

const hello = (userName: string): string => `hello, ${userName}`;

console.log(hello);