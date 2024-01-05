const pokemonName = document.querySelector(".pokemonName");
const pokemonNumber = document.querySelector(".pokemonNumber");
const pokemonImage = document.querySelector(".pokemonImage");
const form = document.querySelector(".form");
const input = document.querySelector(".inputSearch");
const buttonPrev = document.querySelector(".btn-prev");
const buttonNext = document.querySelector(".btn-next");
const buttonStats = document.querySelector(".btn-stats");
const buttonMoves = document.querySelector(".btn-moves");
const buttonEncounter = document.querySelector(".btn-encounter");
const buttonAbility = document.querySelector(".btn-ability");
const rightDisplay1 = document.querySelector(".rightDisplayStatus");
const rightDisplay2 = document.querySelector(".rightDisplayMoves");
const rightDisplay3 = document.querySelector(".rightDisplayEncounter");
const rightDisplay4 = document.querySelector(".rightDisplayAbility");
const hpBar = document.querySelector(".hp");
const atkBar = document.querySelector(".atk");
const defBar = document.querySelector(".def");
const spAtkBar = document.querySelector(".spAtk");
const spDefBar = document.querySelector(".spDef");
const speedBar = document.querySelector(".speed");
const pokemonStatsContainer = document.querySelector(".pokemonStats");
const hpNumber = document.querySelector(".hpNumber");
const atkNumber = document.querySelector(".atkNumber");
const defNumber = document.querySelector(".defNumber");
const spAtkNumber = document.querySelector(".spAtkNumber");
const spDefNumber = document.querySelector(".spDefNumber");
const speedNumber = document.querySelector(".speedNumber");
const totalNumber = document.querySelector(".totalNumber");
const pokemonMoves = document.querySelector(".pokemonMoves");

let serchedPokemon = 1;

// Initialize pokedex with the correct menus
const initializePokedex = function () {
  buttonStats.classList.add("buttonRightActive");
  buttonMoves.classList.remove("buttonRightActive");
  buttonEncounter.classList.remove("buttonRightActive");
  buttonStats.setAttribute("disabled", "");
  buttonMoves.removeAttribute("disabled", "");
  buttonEncounter.removeAttribute("disabled", "");
  rightDisplay1.style.display = "flex";
  rightDisplay2.style.display = "none";
  rightDisplay3.style.display = "none";
  rightDisplay4.style.display = "none";
};

initializePokedex();

// Audio play function
function playAudio(url) {
  new Audio(url).play();
  Audio.volume = 0.2;
}

// Search a pokemon in API
const fetchPokemon = async function (pokemon) {
  const APIResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  );

  if (APIResponse.status == 200) {
    const pokemonData = await APIResponse.json();
    return pokemonData;
  }
};

// Search a move in API
const fetchMove = async function (move) {
  const APIResponse = await fetch(`https://pokeapi.co/api/v2/move/${move}`);

  if (APIResponse.status == 200) {
    const moveData = await APIResponse.json();
    return moveData;
  }
};

// Apply the search changed on screen
const renderPokemon = async function (pokemon) {
  pokemonName.innerHTML = "Loading...";
  pokemonNumber.innerHTML = "";

  const pokemonData = await fetchPokemon(pokemon);

  if (pokemonData) {
    pokemonImage.style.display = "block";
    pokemonStatsContainer.style.display = "block";
    pokemonName.innerHTML = pokemonData.name;

    pokemonNumber.innerHTML = pokemonData.id + "&nbsp-";
    pokemonImage.src =
      pokemonData["sprites"]["versions"]["generation-v"]["black-white"][
        "animated"
      ]["front_default"];
    input.value = "";
    serchedPokemon = pokemonData.id;

    //StatsBar
    hpBar.style["width"] =
      Math.round((pokemonData["stats"]["0"]["base_stat"] * 100) / 255) + "%";
    atkBar.style["width"] =
      Math.round((pokemonData["stats"]["1"]["base_stat"] * 100) / 255) + "%";
    defBar.style["width"] =
      Math.round((pokemonData["stats"]["2"]["base_stat"] * 100) / 255) + "%";
    spAtkBar.style["width"] =
      Math.round((pokemonData["stats"]["3"]["base_stat"] * 100) / 255) + "%";
    spDefBar.style["width"] =
      Math.round((pokemonData["stats"]["4"]["base_stat"] * 100) / 255) + "%";
    speedBar.style["width"] =
      Math.round((pokemonData["stats"]["5"]["base_stat"] * 100) / 255) + "%";
    hpNumber.innerHTML = pokemonData["stats"]["0"]["base_stat"];
    atkNumber.innerHTML = pokemonData["stats"]["1"]["base_stat"];
    defNumber.innerHTML = pokemonData["stats"]["2"]["base_stat"];
    spAtkNumber.innerHTML = pokemonData["stats"]["3"]["base_stat"];
    spDefNumber.innerHTML = pokemonData["stats"]["4"]["base_stat"];
    speedNumber.innerHTML = pokemonData["stats"]["5"]["base_stat"];
    totalNumber.innerHTML =
      pokemonData["stats"]["0"]["base_stat"] +
      pokemonData["stats"]["1"]["base_stat"] +
      pokemonData["stats"]["2"]["base_stat"] +
      pokemonData["stats"]["3"]["base_stat"] +
      pokemonData["stats"]["4"]["base_stat"] +
      pokemonData["stats"]["5"]["base_stat"];

    // Moves
    const moveList = await Promise.all(
      Object.keys(pokemonData["moves"]).map(async (moveNumber) => {
        const moveName = pokemonData["moves"][moveNumber]["move"]["name"];

        const moveData = await fetchMove(moveName);
        const movePower =
          moveData["power"] !== null ? moveData["power"] : "--- ";
        const moveAccuracy =
          moveData["accuracy"] !== null ? moveData["accuracy"] : "--- ";
        const movePriority =
          moveData["priority"] !== null ? moveData["priority"] : "--- ";
        const movePP = moveData["pp"] !== null ? moveData["pp"] : "--- ";
        const moveEffectChance =
          moveData["effect_chance"] !== null
            ? moveData["effect_chance"]
            : "---";
        const moveCategory =
          moveData["damage_class"] !== null
            ? moveData["damage_class"]["name"]
            : "--- ";
        const moveType =
          moveData["type"] !== null ? moveData["type"]["name"] : "--- ";
        const moveEffect =
          moveData["effect_entries"][0] !== null
            ? moveData["effect_entries"][0]["short_effect"].replace(
                "$effect_chance%",
                moveEffectChance + "%"
              )
            : "---";
        const moveArea =
          moveData["target"] !== null ? moveData["target"]["name"] : "--- ";

        return {
          moveName,
          movePower,
          moveAccuracy,
          movePriority,
          movePP,
          moveEffectChance,
          moveCategory,
          moveType,
          moveEffect,
          moveArea,
        };
      })
    );

    // Moves stats
    const moveStatsList = moveList
      .map(
        (move) =>
          ` <strong>Name:</strong> ${move.moveName}
            <strong>Category:</strong> ${move.moveCategory}&nbsp&nbsp&nbsp&nbsp<strong>Type:</strong> ${move.moveType}
            <strong>Power:</strong> ${move.movePower}&nbsp&nbsp&nbsp&nbsp<strong>Accuracy:</strong> ${move.moveAccuracy}
            <strong>PP:</strong> ${move.movePP}&nbsp&nbsp&nbsp&nbsp<strong>Priority:</strong> ${move.movePriority}
            <strong>Area:</strong> ${move.moveArea}
            <strong>Effect Chance:</strong> ${move.moveEffectChance}%
            <strong>Effect:</strong> ${move.moveEffect}\n ___________________________
            `
      )
      .join("\n");

    pokemonMoves.innerHTML = moveStatsList;
  } else {
    pokemonImage.style.display = "none";
    pokemonStatsContainer.style.display = "none";
    pokemonName.innerHTML = "Not Found :(";
    pokemonNumber.innerHTML = "";
  }
};

// Render the searched pokemon
renderPokemon(serchedPokemon);

// Get the search input
const search = function (event) {
  event.preventDefault();
  renderPokemon(input.value.toLowerCase());
  playAudio("./assets/sounds/buttonClickSound.mp3");
};
form.addEventListener("submit", search);

// Get the prev pokemon
const prevPokemon = function () {
  playAudio("./assets/sounds/buttonClickSound.mp3");
  if (serchedPokemon > 1) {
    serchedPokemon -= 1;
  }
  renderPokemon(serchedPokemon);
};
buttonPrev.addEventListener("click", prevPokemon);

// Get the next pokemon
const nextPokemon = function () {
  playAudio("./assets/sounds/buttonClickSound.mp3");
  serchedPokemon += 1;
  renderPokemon(serchedPokemon);
};
buttonNext.addEventListener("click", nextPokemon);

// Change right display function to status
const rightDisplayFunctionStatus = function () {
  playAudio("./assets/sounds/buttonClickSound.mp3");
  buttonStats.classList.add("buttonRightActive");
  buttonMoves.classList.remove("buttonRightActive");
  buttonEncounter.classList.remove("buttonRightActive");
  buttonAbility.classList.remove("buttonRightActive");
  buttonStats.setAttribute("disabled", "");
  buttonMoves.removeAttribute("disabled", "");
  buttonEncounter.removeAttribute("disabled", "");
  buttonAbility.removeAttribute("disabled", "");
  rightDisplay1.style.display = "flex";
  rightDisplay2.style.display = "none";
  rightDisplay3.style.display = "none";
  rightDisplay4.style.display = "none";
};
buttonStats.addEventListener("click", rightDisplayFunctionStatus);

// Change right display function to status
const rightDisplayFunctionAbility = function () {
  playAudio("./assets/sounds/buttonClickSound.mp3");
  buttonStats.classList.remove("buttonRightActive");
  buttonMoves.classList.remove("buttonRightActive");
  buttonEncounter.classList.remove("buttonRightActive");
  buttonAbility.classList.add("buttonRightActive");
  buttonStats.removeAttribute("disabled", "");
  buttonMoves.removeAttribute("disabled", "");
  buttonEncounter.removeAttribute("disabled", "");
  buttonAbility.setAttribute("disabled", "");
  rightDisplay1.style.display = "none";
  rightDisplay2.style.display = "none";
  rightDisplay3.style.display = "none";
  rightDisplay4.style.display = "flex";
};
buttonAbility.addEventListener("click", rightDisplayFunctionAbility);

// Change right display function to moves
const rightDisplayFunctionMoves = function () {
  playAudio("./assets/sounds/buttonClickSound.mp3");
  buttonMoves.classList.add("buttonRightActive");
  buttonStats.classList.remove("buttonRightActive");
  buttonEncounter.classList.remove("buttonRightActive");
  buttonAbility.classList.remove("buttonRightActive");
  buttonStats.removeAttribute("disabled", "");
  buttonMoves.setAttribute("disabled", "");
  buttonEncounter.removeAttribute("disabled", "");
  buttonAbility.removeAttribute("disabled", "");
  rightDisplay1.style.display = "none";
  rightDisplay2.style.display = "flex";
  rightDisplay3.style.display = "none";
  rightDisplay4.style.display = "none";
};
buttonMoves.addEventListener("click", rightDisplayFunctionMoves);

// Change right display function to encounter
const rightDisplayFunctionEncounter = function () {
  playAudio("./assets/sounds/buttonClickSound.mp3");
  buttonEncounter.classList.add("buttonRightActive");
  buttonStats.classList.remove("buttonRightActive");
  buttonMoves.classList.remove("buttonRightActive");
  buttonAbility.classList.remove("buttonRightActive");
  buttonStats.removeAttribute("disabled", "");
  buttonMoves.removeAttribute("disabled", "");
  buttonEncounter.setAttribute("disabled", "");
  buttonAbility.removeAttribute("disabled", "");
  rightDisplay1.style.display = "none";
  rightDisplay2.style.display = "none";
  rightDisplay3.style.display = "flex";
  rightDisplay4.style.display = "none";
};
buttonEncounter.addEventListener("click", rightDisplayFunctionEncounter);
