import Play_off from "./Play_off/Play_off.js"





const teams = ["Austria", "England", "Germany", "Spain", "Sweden", "Russia", "France", "Iceland"]
const finals = new Play_off ("finals", teams)


console.log("=================================================")
console.log("== COMIENZA LAS FASES ELIMINATORIAS DEL TORNEO ==")
console.log("=================================================")

console.log("Equipos que participan en el playoff:")

finals.showTeam()

console.log("======== CUARTOS DE FINAL ======")

finals.quarterFinals()

console.log("===== SEMIFINALES =====")

finals.semi()

