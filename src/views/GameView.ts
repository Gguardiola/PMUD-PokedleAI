import { GameManager } from '../controllers/GameManager.js';
import { Pokemon } from '../models/Pokemon.js';
/// <reference types="jquery" />

export class GameView {
  render(pokemon: Pokemon): void {
    const container = $('#game-container');
    $("#img-col").empty();
    $("#buttons-col").empty();
    $("#input-col").empty();
    $("#text-col").empty();
    $("#feedback-col").empty();

    $("#img-col").append($('<img>').attr('src', pokemon.imgPath).addClass('shadow mb-5 bg-body-tertiary rounded-3 mx-auto d-block w-50'));
    $("#text-col").append($('<h1>').text(pokemon.name).addClass("mb-4 pokeName"));
    $("#buttons-col").append($('<button>').text('Hint').addClass("btn btn-outline-danger showHint"));
    $("#buttons-col").append($('<button>').text('Reroll').addClass("btn btn-outline-warning nextPokemon"));
    $("#input-col").append($('<input>').attr("type","text").attr("aria-describedby","inputGroup-sizing-lg").attr("aria-label", "Sizing example input").attr("placeholder","Guess the pokemon!").addClass("m-3 p-3 inputPokemon form-control"));
    $("#input-col").append($('<button>').text("Guess!").addClass("ps-5 pe-5 btn btn-primary btn-lg guessPokemon"));

  }

}