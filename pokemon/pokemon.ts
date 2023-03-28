

class Pokemon {
    name: string
    level: number
    type: string
    health: number
    stamina: number

    private static MAX_HEATH = 100
    private static MAX_STAMINA = 100

    static rules: object = {
        electric: "water",
        fire: "plant",
        water: "fire",
        rock: "electric",
        plant: "rock"
    }

    constructor(
        name: string, level: number, type: string, 
        health: number = Pokemon.MAX_HEATH, stamina: number = Pokemon.MAX_STAMINA) {
        this.name = name
        this.level = level
        this.type = type
    }

    private typeCheck(p1: Pokemon, p2: Pokemon): number {
        if (Pokemon.rules[p1.type] == p2.type)
            return 3
        if (Pokemon.rules[p2.type] == p1.type)
            return -1
        return 1
    }


    fight(oponent: Pokemon): void {
        let result = this.typeCheck(this, oponent)
        if (result < 0)
            console.log("Perdeu meu fi")
        else {
            console.log("Ganhou meu fi")
            this.level++
        }
        this.stamina-=10
        this.health+=result
    }

    sleep(): void {
        console.log("Durma meu fi, DURMA!")
        this.health=Math.max(this.health + 3, Pokemon.MAX_HEATH)
        this.stamina=Math.max(this.stamina + 5, Pokemon.MAX_STAMINA)
    }


}