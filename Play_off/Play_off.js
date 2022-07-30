export default class Play_off {
    constructor(name, teams) {
        this.name = name
        this.setupTeams(teams)
    }
    setupTeams(teams) {
        this.teams = []
        for (let team of teams) {
            let teamObj = this.customizeTeam(team)
            this.teams.push(teamObj)
        }
    }

    customizeTeam(team) {
        return {
            name: team,
            goalsFor: 0
        }
    }

    generateGoals(max = 10) {
        return Math.floor(Math.random() * max);
    }

    showTeam() {
        console.log(`GRUPO A: ${this.teams[0].name}, ${this.teams[1].name}`)
        console.log(`GRUPO B: ${this.teams[2].name}, ${this.teams[3].name}`)
        console.log(`GRUPO C: ${this.teams[4].name}, ${this.teams[5].name}`)
        console.log(`GRUPO D: ${this.teams[6].name}, ${this.teams[7].name}`)
    }

    quarterFinals() {
        this.semiFinals = []
        this.teams[0].goalsFor = this.generateGoals()
        this.teams[1].goalsFor = this.generateGoals()
        this.teams[2].goalsFor = this.generateGoals()
        this.teams[3].goalsFor = this.generateGoals()
        this.teams[4].goalsFor = this.generateGoals()
        this.teams[5].goalsFor = this.generateGoals()
        this.teams[6].goalsFor = this.generateGoals()
        this.teams[7].goalsFor = this.generateGoals()
        while (this.teams[0].goalsFor === this.teams[3].goalsFor){
            this.teams[0].goalsFor += this.generateGoals()
            this.teams[3].goalsFor += this.generateGoals()
        }
        if (this.teams[0].goalsFor>this.teams[3].goalsFor) {
            this.semiFinals.push(this.teams[0])
            console.log(`${this.teams[0].name} ${this.teams[0].goalsFor} - ${this.teams[3].name} ${this.teams[3].goalsFor} => ${this.teams[0].name}       (C1: Camp A - Subc B)`)
        }else {
            this.semiFinals.push(this.teams[3])
            console.log(`${this.teams[0].name} ${this.teams[0].goalsFor} - ${this.teams[3].name} ${this.teams[3].goalsFor} => ${this.teams[3].name}       (C1: Camp A - Subc B)`)
        }
        while (this.teams[2].goalsFor === this.teams[1].goalsFor){
            this.teams[2].goalsFor += this.generateGoals()
            this.teams[1].goalsFor += this.generateGoals()
        }
        if (this.teams[2].goalsFor>this.teams[1].goalsFor) {
            this.semiFinals.push(this.teams[2])
            console.log(`${this.teams[2].name} ${this.teams[2].goalsFor} - ${this.teams[1].name} ${this.teams[1].goalsFor} => ${this.teams[2].name}       (C2: Camp B - Subc A)`)
        }else {
            this.semiFinals.push(this.teams[1])
            console.log(`${this.teams[2].name} ${this.teams[2].goalsFor} - ${this.teams[1].name} ${this.teams[1].goalsFor} => ${this.teams[1].name}       (C2: Camp B - Subc A)`)
        }
        while (this.teams[4].goalsFor === this.teams[7].goalsFor){
            this.teams[4].goalsFor += this.generateGoals()
            this.teams[7].goalsFor += this.generateGoals()
        }
        if (this.teams[4].goalsFor>this.teams[7].goalsFor) {
            this.semiFinals.push(this.teams[4])
            console.log(`${this.teams[4].name} ${this.teams[4].goalsFor} - ${this.teams[7].name} ${this.teams[7].goalsFor} => ${this.teams[4].name}       (C3: Camp C - Subc D)`)
        }else {
            this.semiFinals.push(this.teams[7])
            console.log(`${this.teams[4].name} ${this.teams[4].goalsFor} - ${this.teams[7].name} ${this.teams[7].goalsFor} => ${this.teams[7].name}       (C3: Camp C - Subc D)`)
        }
        while (this.teams[6].goalsFor === this.teams[5].goalsFor){
            this.teams[6].goalsFor += this.generateGoals()
            this.teams[5].goalsFor += this.generateGoals()
        }
        if (this.teams[6].goalsFor>this.teams[5].goalsFor) {
            this.semiFinals.push(this.teams[6])
            console.log(`${this.teams[6].name} ${this.teams[6].goalsFor} - ${this.teams[5].name} ${this.teams[5].goalsFor} => ${this.teams[6].name}       (C4: Camp C - Subc D)`)
        }else {
            this.semiFinals.push(this.teams[5])
            console.log(`${this.teams[6].name} ${this.teams[6].goalsFor} - ${this.teams[5].name} ${this.teams[5].goalsFor} => ${this.teams[5].name}       (C4: Camp C - Subc D)`)
        }
    }

    semi() {
        this.final = []
        this.third = []
        this.semiFinals[0].goalsFor = this.generateGoals()
        this.semiFinals[1].goalsFor = this.generateGoals()
        this.semiFinals[2].goalsFor = this.generateGoals()
        this.semiFinals[3].goalsFor = this.generateGoals()
        while (this.semiFinals[0].goalsFor === this.semiFinals[2].goalsFor){
            this.semiFinals[0].goalsFor += this.generateGoals()
            this.semiFinals[2].goalsFor += this.generateGoals()
        }
        if (this.semiFinals[0].goalsFor>this.semiFinals[2].goalsFor) {
            this.final.push(this.semiFinals[0])
            this.third.push(this.semiFinals[2])
            console.log(`${this.semiFinals[0].name} ${this.semiFinals[0].goalsFor} - ${this.semiFinals[2].name} ${this.semiFinals[2].goalsFor} => ${this.semiFinals[0].name}       (S1: Ganador C1 - Ganador C3)`)
        }else {
            this.final.push(this.semiFinals[2])
            this.third.push(this.semiFinals[0])
            console.log(`${this.semiFinals[0].name} ${this.semiFinals[0].goalsFor} - ${this.semiFinals[2].name} ${this.semiFinals[2].goalsFor} => ${this.semiFinals[2].name}       (S1: Ganador C1 - Ganador C3)`)
        }
        while (this.semiFinals[1].goalsFor === this.semiFinals[3].goalsFor){
            this.semiFinals[1].goalsFor += this.generateGoals()
            this.semiFinals[3].goalsFor += this.generateGoals()
        }
        if (this.semiFinals[1].goalsFor>this.semiFinals[3].goalsFor) {
            this.final.push(this.semiFinals[1])
            this.third.push(this.semiFinals[3])
            console.log(`${this.semiFinals[1].name} ${this.semiFinals[1].goalsFor} - ${this.semiFinals[3].name} ${this.semiFinals[3].goalsFor} => ${this.semiFinals[1].name}       (S2: Ganador C2 - Ganador C4)`)
        }else {
            this.final.push(this.semiFinals[3])
            this.third.push(this.semiFinals[1])
            console.log(`${this.semiFinals[1].name} ${this.semiFinals[1].goalsFor} - ${this.semiFinals[3].name} ${this.semiFinals[3].goalsFor} => ${this.semiFinals[3].name}       (S2: Ganador C2 - Ganador C4)`)
        }
    }
    
    thirdAndFourth() {
        this.third[0].goalsFor = this.generateGoals()
        this.third[1].goalsFor = this.generateGoals()
        while (this.third[0].goalsFor === this.third[1].goalsFor){
            this.third[0].goalsFor += this.generateGoals()
            this.third[1].goalsFor += this.generateGoals()
        }
        if (this.third[0].goalsFor>this.third[1].goalsFor) {
            console.log(`${this.third[0].name} ${this.third[0].goalsFor} - ${this.third[1].name} ${this.third[1].goalsFor} => ${this.third[0].name}       (3y4: Perdedor S1 - Perdedor S2)`)
        }else {
            console.log(`${this.third[0].name} ${this.third[0].goalsFor} - ${this.third[1].name} ${this.third[1].goalsFor} => ${this.third[1].name}       (3y4: Perdedor S1 - Perdedor S2)`)
        }
    }

    last() {
        this.winer = []
        this.final[0].goalsFor = this.generateGoals()
        this.final[1].goalsFor = this.generateGoals()
        while (this.final[0].goalsFor === this.final[1].goalsFor){
            this.final[0].goalsFor += this.generateGoals()
            this.final[1].goalsFor += this.generateGoals()
        }
        if (this.final[0].goalsFor>this.final[1].goalsFor) {
            this.winer.push(this.final[0])
            console.log(`${this.final[0].name} ${this.final[0].goalsFor} - ${this.final[1].name} ${this.final[1].goalsFor} => ${this.final[0].name}       (Final: Ganador S1 - Ganador S2)`)
        }else {
            this.winer.push(this.final[1])
            console.log(`${this.final[0].name} ${this.final[0].goalsFor} - ${this.final[1].name} ${this.final[1].goalsFor} => ${this.final[1].name}       (Final: Ganador S1 - Ganador S2)`)
        }

    }
    winnerWinnerChickenDinner(){
        console.log(`¡${this.winer[0].name} Campeona de la EURO WOMEN'S CUP!`)
    }
}