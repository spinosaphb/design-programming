class InvalidHardnessError extends Error {
    constructor(hardness: string, hardnessOptions: string[]) {
        super(`Invalid hardness, provided: |${hardness}| not in ${hardnessOptions}`);
    }
}

class Lead {
    private thickness: number;
    private hardness: string;
    private hardnessUsagePerSheet: number;
    static hardnessOptions: string[] = ["HB", "2B", "4B", "6B"]; 
    private size: number;

    constructor(thickness: number, hardness: string, size: number) {
        this.thickness = thickness;
        if (!Lead.hardnessOptions.includes(hardness))
            throw new InvalidHardnessError(hardness, Lead.hardnessOptions);
        this.hardness = hardness;
        this.hardnessUsagePerSheet = this.calcHardnessUsagePerSheet();
        this.size = size;
    }

    private calcHardnessUsagePerSheet() : number {
        switch (this.hardness) {
            case "HB":
                return 1;
            case "2B":
                return 2;
            case "4B":
                return 4;
            case "6B":
                return 6;
            default:
                throw new InvalidHardnessError(this.hardness, Lead.hardnessOptions);
        }
    }

    public usagePerSheet() : number {
        return this.hardnessUsagePerSheet;
    }

    public getThickness() : number {
        return this.thickness;
    }

    public getHardness() : string {
        return this.hardness;
    }

    public getSize() : number {
        return this.size;
    }

    public setSize(size: number) : void {
        this.size = size;
    }

    public toString() : string {
        return `[${this.thickness}:${this.hardness}:${this.size}]`;
    }
}

class Pencil {
    private thickness: number;
    private tip: Lead | null;

    constructor(thickness: number) {
        this.thickness = thickness;
        this.tip = null;
    }

    public hasGraphite() : boolean {
        return this.tip != null;
    }

    public insert(lead: Lead) : boolean {
        if (this.tip != null) {
            console.log("Miss: The pencil already has graphite")
            return false
        }
            
        if (lead.getThickness() != this.thickness){
            console.log("Fail: The lead thickness is not compatible with the pencil")
            return false
        }

        this.tip = lead;
        return true;
    }

    public remove() : Lead | null {
        let tip = this.tip;
        this.tip = null;

        return tip;
    }

    public writePage() : void {
        if (this.tip === null){
            console.log("Fail: Not have lead on pencil");
            return
        }

        if (this.tip.usagePerSheet() > this.tip.getSize()) {
            console.log("Fail: Not enough graphite to write a full page");
            return
        }

        let leadRemaining: number = this.tip.getSize() - this.tip.usagePerSheet();
        this.tip.setSize(leadRemaining);
    }

    public toString() : string {
        return `thickness: ${this.thickness}, lead: ${this.tip}`
    }
}

export {Lead, Pencil}