class ActionNotAllowedError extends Error {
    constructor(message: string = "Action not allowed") {
        super(message);
        this.name = "ActionNotAllowedError";
    }
}

class Tamagotchi {
    private deadMessage = "The pet died of";
    static readonly notEnoughEnergyMessage = "Not enough energy";

    private alive: boolean;

    private clean: number;
    private cleanMax: number;
    private energy: number;
    private energyMax: number;
    private hungry: number;
    private hungryMax: number;
    
    private age: number;
    private diamonds: number;
    
    constructor(energyMax: number, hungryMax: number, cleanMax: number) {
        this.energy = energyMax;
        this.energyMax = energyMax;
        this.hungry = hungryMax;
        this.hungryMax = hungryMax;
        this.clean = cleanMax;
        this.cleanMax = cleanMax;
        
        this.age = 0;
        this.diamonds = 0;
        this.alive = true;
    }

    testAlive() : boolean {
        if (! this.alive)
            console.log("The pet is dead :(")
        return this.alive
    }

    toString() : string {
        return `E:${this.energy}/${this.energyMax}` + ','
            + ` S:${this.hungry}/${this.hungryMax}` + ','
            + ` L:${this.clean}/${this.cleanMax}` + ','
            + ` D:${this.diamonds}` + ','
            + ` I:${this.age}`
    }

    public getAge = () : number => this.age;
    public getDiamonds = () : number => this.diamonds;
    public getEnergy = () : number => this.energy;
    public getHungry = () : number => this.hungry;
    public getClean = () : number => this.clean;
    public getEnergyMax = () : number => this.energyMax;
    public getHungryMax = () : number => this.hungryMax;
    public getCleanMax = () : number => this.cleanMax;


    private handlePetValue = (value: number, floor: number, ceil: number) : number => {
        if (value < floor)
            this.alive = false
        return Math.max(Math.min(value, ceil), floor);
    }

    public setClean = (value: number) : void => { 
        this.clean = this.handlePetValue(value, 0, this.cleanMax) 
        if (! this.testAlive())
            this.deadMessage += " dirty";
    }
    public setEnergy = (value: number) : void => {
        this.energy = this.handlePetValue(value, 0, this.energyMax)
        if (! this.testAlive())
            this.deadMessage += " tired";
    }
    public setHungry = (value: number) : void => {
        this.hungry = this.handlePetValue(value, 0, this.hungryMax)
        if (! this.testAlive())
            this.deadMessage += " hungry";
    }

    public eat() : void {
        if (! this.testAlive())
            throw new ActionNotAllowedError(this.deadMessage);
        this.setEnergy(this.energy - 1);
        this.setHungry(this.hungry + 4);
        this.setClean(this.clean - 2);
        this.age++;
    }

    public play() : void {
        if (! this.testAlive())
            throw new ActionNotAllowedError(this.deadMessage);
        this.setEnergy(this.getEnergy() - 2);
        this.setHungry(this.getHungry() - 1);
        this.setClean(this.getClean() - 3);
        this.diamonds++;
        this.age++;
    }

    public sleep() : void {
        if (! this.testAlive())
            throw new ActionNotAllowedError(this.deadMessage);
        if (this.getEnergy() < 5)
            throw new ActionNotAllowedError(Tamagotchi.notEnoughEnergyMessage);
        let energy: number = this.getEnergy();
        this.setEnergy(this.getEnergyMax());
        this.age += this.energy - energy;
    }

    public shower() : void {
        if (! this.testAlive())
            throw new ActionNotAllowedError(this.deadMessage);
        this.setEnergy(this.getEnergy() - 3);
        this.setHungry(this.getHungry() - 1);
        this.setClean(this.getCleanMax());
        this.age += 2;
    }
}

export { Tamagotchi, ActionNotAllowedError};

