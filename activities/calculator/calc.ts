class NotEnoughBatteryError extends Error {
    constructor() {
        super("Not enough battery");
    }
}

class ZeroDivisionError extends Error {
    constructor() {
        super("Zero division");
    }
}

class Calculator {

    private static OPERATION_FAIL_MESSAGE: string = (
        "It was not possible to carry out the operation"
    );
    public battery: number;
    public batteryMax: number;
    public display: number;

    constructor(batteryMax : number = 100) {
        this.batteryMax = batteryMax;
        this.battery = 0;
        this.display = 0;
    }

    public chargeBattery(value : number) : void {
        this.battery = Math.min(this.battery + value, this.batteryMax);
    }

    public sum(n1: number, n2: number) : void {
        try {
            this.useBattery();
            this.display = n1 + n2;
        } catch (error: NotEnoughBatteryError | any) {
            if (error instanceof NotEnoughBatteryError){
                Calculator.showError(error);
            } else
                throw error;
        }
    }

    public division(n1: number, n2: number) : void {
        try {
            this.useBattery();
            if (n2 == 0)
                throw new ZeroDivisionError();
            this.display = n1 / n2;
        } catch (error: NotEnoughBatteryError | ZeroDivisionError | any) {
            if (error instanceof NotEnoughBatteryError || error instanceof ZeroDivisionError){
                Calculator.showError(error);
            } else
                throw error;
        }
    }

    public useBattery() : boolean {
        if ((this.battery - 1 < 0))
            throw new NotEnoughBatteryError();
        this.battery--;
        return true
    }

    public toString() : string {
        return `display = ${this.display.toFixed(2)}, battery = ${this.battery}`
    }

    private static showError(error: Error) : void {
        console.log(`${Calculator.OPERATION_FAIL_MESSAGE}, ${error.message}`)
    }

}

export { Calculator, NotEnoughBatteryError, ZeroDivisionError }