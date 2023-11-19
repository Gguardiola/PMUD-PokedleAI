import { Pokemon } from '../models/Pokemon.js';
import { GameView } from '../views/GameView.js';
import * as env from "../lib/constants.js";
const MAX_ATTEMPS = env.MAX_ATTEMPS;
const MAX_HINTS = env.MAX_HINTS;
export class GameManager {
    constructor() {
        this.pokemons = [
            new Pokemon({ name: 'Meowth', type: ["NORMAL"], imgPath: "https://i.imgur.com/B0JXocb.jpg", gen: "I" }),
            new Pokemon({ name: 'Sharkpedo', type: ["WATER", "DARK"], imgPath: "https://i.imgur.com/qs7AlwH.jpg", gen: "III" }),
            new Pokemon({ name: 'Snorlax', type: ["NORMAL"], imgPath: "https://i.imgur.com/j7RRFvO.png", gen: "I" }),
            new Pokemon({ name: 'Druddigon', type: ["DRAGON"], imgPath: "https://i.imgur.com/5UI1ouV.jpg", gen: "V" }),
            new Pokemon({ name: 'Ukown', type: ["PSYCHIC"], imgPath: "https://i.imgur.com/bNOLUsQ.jpg", gen: "II" }),
            new Pokemon({ name: 'Rowlet', type: ["GRASS", "FLYING"], imgPath: "https://i.imgur.com/Zxi7dCH.jpg", gen: "VII" }),
            new Pokemon({ name: 'Reshiram', type: ["DRAGON", "FIRE"], imgPath: "https://i.imgur.com/nXalWAf.jpg", gen: "V" }),
            new Pokemon({ name: 'Dialga', type: ["STEEL", "DRAGON"], imgPath: "https://i.imgur.com/Kv5jfU4.jpg", gen: "IV" }),
            new Pokemon({ name: 'Palkia', type: ["WATER", "DRAGON"], imgPath: "https://i.imgur.com/KprMDet.jpg", gen: "IV" }),
            new Pokemon({ name: 'Haunter', type: ["GHOST", "POISON"], imgPath: "https://i.imgur.com/op2tlGv.jpg", gen: "I" }),
            new Pokemon({ name: 'Zangoose', type: ["NORMAL"], imgPath: "https://i.imgur.com/2YmGQal.jpg", gen: "III" }),
            new Pokemon({ name: 'Gardevoir', type: ["FAIRY", "PSYCHIC"], imgPath: "https://i.imgur.com/MQKhWsi.jpg", gen: "IV" }),
            new Pokemon({ name: 'Horsea', type: ["WATER"], imgPath: "https://i.imgur.com/qrkjjfd.jpg", gen: "I" }),
            new Pokemon({ name: 'Dratini', type: ["DRAGON"], imgPath: "https://i.imgur.com/ZQBwbY9.jpg", gen: "I" }),
            new Pokemon({ name: 'Infernape', type: ["FIRE", "FIGHTING"], imgPath: "https://i.imgur.com/4VA4DDG.jpg", gen: "IV" }),
            new Pokemon({ name: 'Luxray', type: ["ELECTRIC"], imgPath: "https://i.imgur.com/moYFEI8.jpg", gen: "IV" }),
            new Pokemon({ name: 'Raticate', type: ["NORMAL"], imgPath: "https://i.imgur.com/F57sQ9s.jpg", gen: "I" }, undefined, ["FIGHTING"]),
            new Pokemon({ name: 'Treecko', type: ["GRASS"], imgPath: "https://i.imgur.com/S3QePBj.jpg", gen: "III" }),
            new Pokemon({ name: 'Ekans', type: ["POISON"], imgPath: "https://i.imgur.com/hwaUWcy.jpg", gen: "I" }),
            new Pokemon({ name: 'Combusken', type: ["FIRE", "FIGHTING"], imgPath: "https://i.imgur.com/OYu52ZU.jpg", gen: "III" }),
        ];
        this.currentPokemon = this.pokemons[0];
        this.gameView = new GameView();
        this.attempts = MAX_ATTEMPS;
        this.hintCounter = 0;
    }
    init() {
        this.eventListeners();
        this.nextRound();
        this.gameView.render(this.currentPokemon);
    }
    eventListeners() {
        $(document).on('click', ".showHint", () => { this.showHint(); });
        $(document).on('click', ".nextPokemon", () => { this.nextRound(true); });
        $(document).on('click', ".guessPokemon", () => { this.guessTry($(".inputPokemon").val()); });
    }
    nextRound(isClicked) {
        this.getRandomPokemon(isClicked);
        this.attempts = MAX_ATTEMPS;
        this.hintCounter = 0;
        this.gameView.render(this.currentPokemon);
        this.gameView.rerollGame();
    }
    getRandomPokemon(isClicked) {
        const isAlreadyInit = localStorage.getItem("isInit") !== null;
        if (!isAlreadyInit || isClicked) {
            const randomIndex = Math.floor(Math.random() * this.pokemons.length);
            localStorage["currentPokemon"] = JSON.stringify({
                name: this.pokemons[randomIndex].name,
                type: this.pokemons[randomIndex].type,
                imgPath: this.pokemons[randomIndex].imgPath,
                gen: this.pokemons[randomIndex].gen,
                resists: this.pokemons[randomIndex].resists,
                weakTo: this.pokemons[randomIndex].weakTo
            });
            localStorage["isInit"] = "yes";
            this.currentPokemon = this.pokemons[randomIndex];
        }
        else {
            const lastPokemon = JSON.parse(localStorage["currentPokemon"]);
            for (let poke of this.pokemons) {
                if (poke.name == lastPokemon.name) {
                    this.currentPokemon = poke;
                }
            }
        }
    }
    guessTry(tryInput) {
        console.log(tryInput);
        if (tryInput.toString().length == 0)
            alert("Escribe un pokemon!");
        else if (this.currentPokemon.name.toLowerCase() == tryInput.toString().toLowerCase()) {
            this.gameView.triggerWin(this.currentPokemon);
            setTimeout(() => {
                this.nextRound(true);
            }, 3700);
        }
        else {
            this.attempts -= 1;
            this.gameView.failedAttempt(this.attempts);
            this.checkEndgame();
        }
    }
    showHint() {
        if (this.hintCounter != MAX_HINTS) {
            this.attempts -= 1;
            this.gameView.failedAttempt(this.attempts);
            this.hintCounter += 1;
            switch (this.hintCounter) {
                case 1:
                    alert(`Hint: Pokémon's type(s): "${this.currentPokemon.type}".`);
                    break;
                case 2:
                    alert(`Hint: Pokémon's generation is: "${this.currentPokemon.gen}".`);
                    break;
                case 3:
                    this.gameView.disableHints();
                    alert(`Hint: The Pokémon's name starts with the letter "${this.currentPokemon.name.charAt(0)}".`);
                    break;
                default:
                    break;
            }
            this.checkEndgame();
        }
    }
    checkEndgame() {
        if (this.attempts == 0) {
            this.gameView.triggerGameOver(this.currentPokemon);
            setTimeout(() => {
                this.nextRound(true);
            }, 2000);
        }
    }
}
//# sourceMappingURL=GameManager.js.map