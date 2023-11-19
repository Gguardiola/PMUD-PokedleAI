import { GameManager } from '../controllers/GameManager.js';
import { Pokemon } from '../models/Pokemon.js';
import * as env from "../lib/constants.js";

/// <reference types="jquery" />

const MAX_ATTEMPS : number = env.MAX_ATTEMPS;
const MAX_HINTS : number = env.MAX_HINTS;
const ATTEMPTS_IMG : string = env.ATTEMPTS_IMG;

export class GameView {
  render(pokemon: Pokemon): void {

    $("#img-col").empty();
    $("#buttons-col").empty();
    $("#input-col").empty();
    $("#attempts-container").empty();

    $("#feedback-col").empty();
    for (let i = 0; i < MAX_ATTEMPS; i++) {
      $("#attempts-container").append($("<img>").height(80).width(80).attr("src", ATTEMPTS_IMG).addClass(`attempt-${i+1}`));
    }
    $("#img-col").append($('<img>').attr('src', pokemon.imgPath).addClass('pokeImg shadow mb-5 bg-body-tertiary rounded-3 mx-auto d-block w-50'));
    $("#buttons-col").append($('<button>').text('Hint').addClass("btn btn-outline-danger showHint"));
    $("#buttons-col").append($('<button>').text('Reroll').addClass("btn btn-outline-warning nextPokemon"));
    $("#input-col").append($('<input>').attr("type","text").attr("aria-describedby","inputGroup-sizing-lg").attr("aria-label", "Sizing example input").attr("placeholder","Guess the pokemon!").addClass("m-3 p-3 inputPokemon form-control"));
    $("#input-col").append($('<button>').text("Guess!").addClass("ps-5 pe-5 btn btn-primary btn-lg guessPokemon"));

  }

  failedAttempt(attempts : number): void{
    $(`.attempt-${MAX_ATTEMPS-attempts}`).addClass("opacity-25 waveText");
  }

  rerollGame(): void{
    $("#text-col").empty();
    $("#text-col").append($('<h1>').text("?????").addClass("mb-4"));
  }

  triggerWin(pokemon : Pokemon): void{
    $(".confetti").removeClass("visually-hidden");
    $("#text-col").empty();
    $("#text-col").append($('<h1>').text(pokemon.name).addClass("mb-4 pokeName pulsing"));
    $(".pokeImg").addClass("pulsing");
    $(".showHint").attr("disabled","");
    $(".input").attr("disabled","");
    $(".guessPokemon").attr("disabled","").attr("readonly","");
    setTimeout(() => {
      $(".confetti").addClass("visually-hidden");
  }, 3700);
  }

}