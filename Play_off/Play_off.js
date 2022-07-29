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
        console.log(`GRUPO A: ${this.teams[2].name}, ${this.teams[3].name}`)
        console.log(`GRUPO A: ${this.teams[4].name}, ${this.teams[5].name}`)
        console.log(`GRUPO A: ${this.teams[6].name}, ${this.teams[7].name}`)
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
            this.teams[0].goalsFor = this.generateGoals()
            this.teams[3].goalsFor = this.generateGoals()
        }
        if (this.teams[0].goalsFor>this.teams[3].goalsFor) {
            this.semiFinals.push(this.teams[0])
            console.log(`${this.teams[0].name} ${this.teams[0].goalsFor} - ${this.teams[3].name} ${this.teams[3].goalsFor} => ${this.teams[0].name}       (C1: Camp A - Subc B)`)
        }else {
            this.semiFinals.push(this.teams[3])
            console.log(`${this.teams[0].name} ${this.teams[0].goalsFor} - ${this.teams[3].name} ${this.teams[3].goalsFor} => ${this.teams[3].name}       (C1: Camp A - Subc B)`)
        }
        while (this.teams[2].goalsFor === this.teams[1].goalsFor){
            this.teams[2].goalsFor = this.generateGoals()
            this.teams[1].goalsFor = this.generateGoals()
        }
        if (this.teams[2].goalsFor>this.teams[1].goalsFor) {
            this.semiFinals.push(this.teams[2])
            console.log(`${this.teams[2].name} ${this.teams[2].goalsFor} - ${this.teams[1].name} ${this.teams[1].goalsFor} => ${this.teams[2].name}       (C1: Camp B - Subc A)`)
        }else {
            this.semiFinals.push(this.teams[1])
            console.log(`${this.teams[2].name} ${this.teams[2].goalsFor} - ${this.teams[1].name} ${this.teams[1].goalsFor} => ${this.teams[1].name}       (C1: Camp B - Subc A)`)
        }
        while (this.teams[4].goalsFor === this.teams[7].goalsFor){
            this.teams[4].goalsFor = this.generateGoals()
            this.teams[7].goalsFor = this.generateGoals()
        }
        if (this.teams[4].goalsFor>this.teams[7].goalsFor) {
            this.semiFinals.push(this.teams[4])
            console.log(`${this.teams[4].name} ${this.teams[4].goalsFor} - ${this.teams[7].name} ${this.teams[7].goalsFor} => ${this.teams[4].name}       (C1: Camp C - Subc D)`)
        }else {
            this.semiFinals.push(this.teams[7])
            console.log(`${this.teams[4].name} ${this.teams[4].goalsFor} - ${this.teams[7].name} ${this.teams[7].goalsFor} => ${this.teams[7].name}       (C1: Camp C - Subc D)`)
        }
        while (this.teams[6].goalsFor === this.teams[5].goalsFor){
            this.teams[6].goalsFor = this.generateGoals()
            this.teams[5].goalsFor = this.generateGoals()
        }
        if (this.teams[6].goalsFor>this.teams[5].goalsFor) {
            this.semiFinals.push(this.teams[6])
            console.log(`${this.teams[6].name} ${this.teams[6].goalsFor} - ${this.teams[5].name} ${this.teams[5].goalsFor} => ${this.teams[6].name}       (C1: Camp C - Subc D)`)
        }else {
            this.semiFinals.push(this.teams[5])
            console.log(`${this.teams[6].name} ${this.teams[6].goalsFor} - ${this.teams[5].name} ${this.teams[5].goalsFor} => ${this.teams[5].name}       (C1: Camp C - Subc D)`)
        }
    }

}