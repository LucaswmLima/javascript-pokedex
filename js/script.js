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

const types = {
  normal: { name: "Normal", bg: "#A8A878", border: "#6D6D4E" },
  fire: { name: "Fire", bg: "#F08030", border: "#9C531F" },
  fighting: { name: "Fighting", bg: "#C03028", border: "#7D1F1A" },
  water: { name: "Water", bg: "#6890F0", border: "#445E9C" },
  flying: { name: "Flying", bg: "#A890F0", border: "#6D5E9C" },
  grass: { name: "Grass", bg: "#78C850", border: "#4E8234" },
  poison: { name: "Poison", bg: "#A040A0", border: "#682A68" },
  eletric: { name: "Normal", bg: "#F8D030", border: "#A1871F" },
  ground: { name: "Ground", bg: "#E0C068", border: "#927D44" },
  psychic: { name: "Psychic", bg: "#F85888", border: "#A13959" },
  normal: { name: "Normal", bg: "#A8A878", border: "#6D6D4E" },
  normal: { name: "Normal", bg: "#A8A878", border: "#6D6D4E" },
};

const categories = {
  physical: { name: "Physical", bg: "#C92112", fontColor: "#F67A1A"},
  special: { name: "Special", bg: "#4F5870", fontColor: "#fff"}
};

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
        const moveEffectEntries = moveData["effect_entries"];
        const moveEffect =
          moveEffectEntries && moveEffectEntries[0]
            ? moveEffectEntries[0]["short_effect"].replace(
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

    const movesContainer = document.getElementById("movesContainer");

    movesContainer.innerHTML = ""; // Limpa o conteúdo anterior

    // Move Table Render
    moveList.forEach((move) => {
      const moveTable = document.createElement("table");
      moveTable.classList.add("move-table");

      // Move Name Row
      const nameRow = moveTable.insertRow();
      const nameCell = nameRow.insertCell(0);
      nameCell.colSpan = 2;
      nameCell.classList.add("move-name");
      nameCell.style.borderTopRightRadius = "10px";
      nameCell.style.borderBottomRightRadius = "10px";
      nameCell.style.borderTopLeftRadius = "10px";
      nameCell.style.borderBottomLeftRadius = "10px";
      nameCell.innerHTML = move.moveName.charAt(0).toUpperCase() + move.moveName.slice(1);

      // Type Row
      const typeRow = moveTable.insertRow();
      const typeCellLabel = typeRow.insertCell(0);
      const typeCellData = typeRow.insertCell(1);

      typeCellLabel.innerHTML = "Type";
      typeCellData.innerHTML =
        move.moveType.charAt(0).toUpperCase() + move.moveType.slice(1);;

      const typeStyle = types[move.moveType];
      if (typeStyle) {
        typeCellData.style.backgroundColor = typeStyle.bg;
        typeCellData.style.borderColor = "#fff";
        typeCellData.style.color = "#FFF";
        typeCellLabel.style.backgroundColor = typeStyle.bg;
        typeCellLabel.style.color = "#FFF";
        typeCellLabel.style.borderColor = "#fff";
        
      }

      typeCellData.style.borderTopRightRadius = "10px";
      typeCellData.style.borderBottomRightRadius = "10px";
      typeCellLabel.style.borderTopLeftRadius = "10px";
      typeCellLabel.style.borderBottomLeftRadius = "10px";

      // Category Row
      const categoryRow = moveTable.insertRow();
      const categoryCellLabel = categoryRow.insertCell(0);
      const categoryCellData = categoryRow.insertCell(1);

      categoryCellLabel.innerHTML = "Category";
      categoryCellData.innerHTML =
        move.moveCategory.charAt(0).toUpperCase() + move.moveCategory.slice(1);;

      const categoryStyle = categories[move.moveCategory];
      if (categoryStyle) {
        categoryCellData.style.backgroundColor = categoryStyle.bg;
        categoryCellData.style.color = categoryStyle.fontColor;
        categoryCellData.style.borderColor = "#fff";
        categoryCellLabel.style.backgroundColor = categoryStyle.bg;
        categoryCellLabel.style.color = "#FFF";
        categoryCellLabel.style.borderColor = "#fff";
  
      }

      categoryCellData.style.borderTopRightRadius = "10px";
      categoryCellData.style.borderBottomRightRadius = "10px";
      categoryCellLabel.style.borderTopLeftRadius = "10px";
      categoryCellLabel.style.borderBottomLeftRadius = "10px";


      // Power Row
      const powerRow = moveTable.insertRow();
      const powerCellLabel = powerRow.insertCell(0)
      const powerCellData = powerRow.insertCell(1);
      powerCellLabel.innerHTML = "Power"
      powerCellData.innerHTML = move.movePower

      powerCellData.style.borderTopRightRadius = "10px";
      powerCellLabel.style.borderTopLeftRadius = "10px";


      // PP Row
      const PPRow = moveTable.insertRow();
      PPRow.insertCell(0).innerHTML = "PP";
      PPRow.insertCell(1).innerHTML = move.movePP;

      // Accuracy Row
      const accuracyRow = moveTable.insertRow();
      accuracyRow.insertCell(0).innerHTML = "Accuracy:";
      accuracyRow.insertCell(1).innerHTML = `${move.moveAccuracy}%`;

      // Area Row
      const areaRow = moveTable.insertRow();
      areaRow.insertCell(0).innerHTML = "Target";
      areaRow.insertCell(1).innerHTML =
        move.moveArea.charAt(0).toUpperCase() + move.moveArea.slice(1);;

      // Effect Row
      const effectRow = moveTable.insertRow();
      const effectCellLabel = effectRow.insertCell(0);
      const effectCellData = effectRow.insertCell(1);
      effectCellLabel.innerHTML = "Effect";
      effectCellData.innerHTML = move.moveEffect;

      effectCellData.style.borderBottomRightRadius = "10px";
      effectCellLabel.style.borderBottomLeftRadius = "10px";
      

      // Append the table to the container
      movesContainer.appendChild(moveTable);
    });
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
