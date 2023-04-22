class Person {
    private age: number;
    private name: string;

    constructor(age: number, name: string) {
        this.age = age;
        this.name = name;
    }

    get getAge(): number{ return this.age; }
    get getName(): string{ return this.name; }

    toString(): string {
        return `${this.getName}:${this.getAge}`;
    }
}

class MotorCycle {
    person: Person | null;
    power: number;
    time: number;

    constructor(power: number = 1) {
        this.person = null;
        this.power = power;
        this.time = 0;
    }

    insertPerson(person: Person): boolean {
        if (this.person || person.getAge > 10)
            return false;
        this.person = person;
        return true;
    }

    removePerson(): Person | null {
        if(!this.person)
            return null
        let person: Person = this.person;
        this.person = null;
        return person
    }
    
    buyTime = (time: number): void => {
        this.time+=time
    }
    
    drive = (time: number): void => {
        if (this.person)
            this.time = Math.max(this.time - time, 0);
        else
            console.log('fail: empty motorcycle')
    }

    honk = (): string => (`P${'e'.repeat(this.power)}m`)

    getPerson = (): Person | null => (this.person)
    getPower = (): number => (this.power)
    getTime = (): number => (this.time)

    toString(): string {
        return `power:${this.power}, time:${this.time}, person:(${this.person ? this.person.toString():'empty'})`
    }
}

export { Person, MotorCycle }