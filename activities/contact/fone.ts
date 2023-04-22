class Fone {

    private id: string;
    private number: string;

    constructor(id: string, number: string) {
        this.id = id;
        this.number = number;
    }

    static validate(number: string): boolean {
        let regex = new RegExp(/[^0-9()]/g);
        return !regex.test(number);
    }

    isValid(): boolean {
        return Fone.validate(this.number);
    }

    toString(): string {
        return `${this.id}:${this.number}`;
    }

    get getId(): string { return this.id; }
    get getNumber(): string { return this.number; }
    set setId(id: string) { this.id = id; }
    set setNumber(number: string) { this.number = number; }
}