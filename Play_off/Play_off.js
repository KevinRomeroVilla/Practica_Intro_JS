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

}