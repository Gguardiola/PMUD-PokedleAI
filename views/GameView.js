import * as env from "../lib/constants.js";
const MAX_ATTEMPS = env.MAX_ATTEMPS;
const MAX_HINTS = env.MAX_HINTS;
const ATTEMPTS_IMG = env.ATTEMPTS_IMG;
export class GameView {
    render(pokemon) {
        $("#img-col").empty();
        $("#buttons-col").empty();
        $("#input-col").empty();
        $("#attempts-container").empty();
        $("#feedback-col").empty();
        for (let i = 0; i < MAX_ATTEMPS; i++) {
            $("#attempts-container").append($("<img>").height(80).width(80).attr("src", ATTEMPTS_IMG).addClass(`attempt-${i + 1}`));
        }
        $("#img-col").append($('<img>').attr('src', pokemon.imgPath).addClass('pokeImg shadow mb-5 bg-body-tertiary rounded-3 mx-auto d-block w-50'));
        $("#buttons-col").append($('<button>').attr("data-bs-toggle", "modal").attr("data-bs-target", "#hintModal").text('Hint').addClass("btn btn-outline-danger showHint "));
        $("#buttons-col").append($('<button>').text('Reroll').addClass("btn btn-outline-warning nextPokemon"));
        $("#input-col").append($('<input>').attr("type", "text").attr("aria-describedby", "inputGroup-sizing-lg").attr("aria-label", "Sizing example input").attr("placeholder", "Guess the pokemon!").addClass("mb-3 mt-3 p-3 inputPokemon form-control"));
        $("#input-col").append($('<button>').text("Guess!").addClass("ps-5 pe-5 btn btn-primary btn-lg guessPokemon"));
    }
    failedAttempt(attempts) {
        $(`.attempt-${MAX_ATTEMPS - attempts}`).addClass("opacity-25 waveText");
    }
    disableHints() {
        $(".showHint").attr("disabled", "");
    }
    rerollGame() {
        $("#text-col").empty();
        $("#text-col").append($('<h1>').text("?????").addClass("mb-4"));
    }
    updateModal(pokemon, hintCounter) {
        $("#hint-text-modal").empty();
        switch (hintCounter) {
            case 1:
                $("#hint-text-modal").text(`Hint: Pokémon's type(s): "${pokemon.type}".`);
                break;
            case 2:
                $("#hint-text-modal").text(`Hint: Pokémon's generation is: "${pokemon.gen}".`);
                break;
            case 3:
                $("#hint-text-modal").text(`Hint: The Pokémon's name starts with the letter "${pokemon.name.charAt(0)}".`);
                break;
            default:
                break;
        }
    }
    triggerWin(pokemon) {
        $(".confetti").removeClass("visually-hidden");
        $("#text-col").empty();
        $("#text-col").append($('<h1>').text(pokemon.name).addClass("mb-4 pokeName pulsing"));
        $(".pokeImg").addClass("pulsing");
        $(".showHint").attr("disabled", "");
        $(".nextPokemon").attr("disabled", "");
        $(".input").attr("disabled", "");
        $(".guessPokemon").attr("disabled", "").attr("readonly", "");
        setTimeout(() => {
            $(".confetti").addClass("visually-hidden");
        }, 3700);
    }
    triggerGameOver(pokemon) {
        $("#text-col").empty();
        $("#text-col").append($('<h1>').text(pokemon.name).addClass("mb-4 pokeName pulsing pulse-gameover"));
        $(".pokeImg").addClass("pulsing pulse-gameover-img");
        $(".showHint").attr("disabled", "");
        $(".nextPokemon").attr("disabled", "");
        $(".input").attr("disabled", "");
        $(".guessPokemon").attr("disabled", "").attr("readonly", "");
    }
}
//# sourceMappingURL=GameView.js.map