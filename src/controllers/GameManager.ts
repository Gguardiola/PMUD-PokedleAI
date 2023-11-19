import { Pokemon } from '../models/Pokemon.js';
import { GameView } from '../views/GameView.js';

const MAX_HINTS : number = 3;
const MAX_ATTEMPS : number = 5;

export class GameManager {
  private pokemons: Pokemon[] = [
    new Pokemon({name: 'Charmander', type: ["FIRE"], imgPath: "../../images/test.jpeg", gen: "I"}),
    new Pokemon({name: 'Squirtle', type: ["WATER"], imgPath: "../../images/test.jpeg", gen: "II"}),
    new Pokemon({name: 'Pikachu', type: ["ELECTRIC"], imgPath: "../../images/test.jpeg", gen: "III"}),
    new Pokemon({name: 'Jigglypuff', type: ["NORMAL"], imgPath: "../../images/test.jpeg", gen: "IV"}),
    new Pokemon({name: 'Meowth', type: ["NORMAL"], imgPath: "../../images/test.jpeg", gen: "V"}),
    new Pokemon({name: 'Psyduck', type: ["WATER"], imgPath: "../../images/test.jpeg", gen: "VI"}),
    new Pokemon({name: 'Geodude', type: ["ROCK", "GROUND"], imgPath: "../../images/test.jpeg", gen: "VII"}),
    new Pokemon({name: 'Machop', type: ["FIGHTING"], imgPath: "../../images/test.jpeg", gen: "VIII"}),
    new Pokemon({name: 'Gastly', type: ["GHOST", "POISON"], imgPath: "../../images/test.jpeg", gen: "IX"}),
    new Pokemon({name: 'Eevee', type: ["NORMAL"], imgPath: "../../images/test.jpeg", gen: "I"}),
    new Pokemon({name: 'Snorlax', type: ["NORMAL"], imgPath: "../../images/test.jpeg", gen: "II"}),
    new Pokemon({name: 'Vulpix', type: ["FIRE"], imgPath: "../../images/test.jpeg", gen: "III"}),
    new Pokemon({name: 'Kabuto', type: ["ROCK", "WATER"], imgPath: "../../images/test.jpeg", gen: "IV"}),
    new Pokemon({name: 'Dratini', type: ["DRAGON"], imgPath: "../../images/test.jpeg", gen: "V"}),
    new Pokemon({name: 'Mareep', type: ["ELECTRIC"], imgPath: "../../images/test.jpeg", gen: "VI"}),
    new Pokemon({name: 'Houndour', type: ["DARK", "FIRE"], imgPath: "../../images/test.jpeg", gen: "VII"}),
    new Pokemon({name: 'Smoochum', type: ["ICE", "PSYCHIC"], imgPath: "../../images/test.jpeg", gen: "VIII"}),
    new Pokemon({name: 'Treecko', type: ["GRASS"], imgPath: "../../images/test.jpeg", gen: "IX"}),
    new Pokemon({name: 'Mudkip', type: ["WATER"], imgPath: "../../images/test.jpeg", gen: "I"}),
    new Pokemon({name: 'Torchic', type: ["FIRE"], imgPath: "../../images/test.jpeg", gen: "II"},["BUG","DRAGON"],["DARK","FIGHTING"]),
  ];

  private currentPokemon : Pokemon = this.pokemons[0];
  private gameView: GameView = new GameView();
  private attempts: number = MAX_ATTEMPS;
  private hintCounter : number = 0;

  init(): void {
    this.eventListeners();
    this.nextRound();
    this.gameView.render(this.currentPokemon);
  }

  private eventListeners(): void {
    $(document).on('click', ".showHint", () => {this.showHint();});
    $(document).on('click', ".nextPokemon", () => {this.nextRound(true);});
    $(document).on('click', ".guessPokemon", () => {this.guessTry($(".inputPokemon").val());});
  }

  private nextRound(isClicked? : boolean): void {
    this.getRandomPokemon(isClicked);
    this.attempts = MAX_ATTEMPS;
    this.hintCounter = 0;
    this.gameView.render(this.currentPokemon);
  }

  private getRandomPokemon(isClicked? : boolean): void {
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
        })       
        localStorage["isInit"] = "yes";
        this.currentPokemon = this.pokemons[randomIndex];
    }
    else{
        const lastPokemon = JSON.parse(localStorage["currentPokemon"]);
        for(let poke of this.pokemons){
            if(poke.name == lastPokemon.name) {
                this.currentPokemon = poke;
            }
        }
    }
  }

  private guessTry(tryInput : any): void { 
    console.log(tryInput);
    console.log(this.currentPokemon.resists)
    if(this.currentPokemon.name.toLowerCase() == tryInput.toString().toLowerCase()) {

        alert("GANASTE!");
    } 
    else{
        alert("MAAAL");
    
    }
  }

  private showHint(): void {
    if(this.hintCounter != MAX_HINTS){
        this.attempts -= 1;
        this.hintCounter += 1;
        switch (this.hintCounter){
        case 1:
            alert(`Hint: Pokémon's type(s): "${this.currentPokemon.type}".`);
            break;
        case 2:
            alert(`Hint: Pokémon's generation is: "${this.currentPokemon.gen}".`);
            break;
        case 3:
            alert(`Hint: The Pokémon's name starts with the letter "${this.currentPokemon.name.charAt(0)}".`);
            break;
        default:
            break;
        }
    }
  }
}
