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
const movesContainer = document.getElementById("movesContainer");
const encountersContainer = document.getElementById("encounterContainer");

const types = {
  normal: { name: "Normal", bg: "#A8A878", border: "#6D6D4E", resist: {}, immune: {}, weakness: { fighting: 2 } },
  fire: { name: "Fire", bg: "#F08030", border: "#9C531F", resist: { fire: 0.5, ice: 0.5, bug: 2, grass: 2, steel: 2, fairy: 2 }, immune: {}, weakness: { water: 2, rock: 2, ground: 2 } },
  fighting: { name: "Fighting", bg: "#C03028", border: "#7D1F1A", resist: { bug: 0.5, dark: 0.5, rock: 0.5 }, immune: { ghost: 0 }, weakness: { flying: 2, psychic: 2, fairy: 2 } },
  water: { name: "Water", bg: "#6890F0", border: "#445E9C", resist: { fire: 0.5, ice: 0.5, steel: 0.5, electric: 0.5 }, immune: {}, weakness: { grass: 2, electric: 2, rock: 2, ground: 2 } },
  flying: { name: "Flying", bg: "#A890F0", border: "#6D5E9C", resist: { fighting: 0.5, bug: 0.5, grass: 0.5 }, immune: { ground: 0 }, weakness: { rock: 2, electric: 2, ice: 2 } },
  grass: { name: "Grass", bg: "#78C850", border: "#4E8234", resist: { water: 0.5, electric: 0.5, ground: 0.5 }, immune: {}, weakness: { fire: 2, ice: 2, poison: 2, flying: 2 } },
  poison: { name: "Poison", bg: "#A040A0", border: "#682A68", resist: { fighting: 0.5, poison: 0.5, bug: 0.5, fairy: 0.5, grass: 2 }, immune: {}, weakness: { ground: 2, psychic: 2 } },
  electric: { name: "Electric", bg: "#F8D030", border: "#A1871F", resist: { electric: 0.5, ground: 2 }, immune: {}, weakness: { ground: 0.5 } },
  ground: { name: "Ground", bg: "#E0C068", border: "#927D44", resist: { poison: 0.5, rock: 0.5, electric: 0.5 }, immune: { electric: 0 }, weakness: { ice: 2, grass: 2, water: 2 } },
  psychic: { name: "Psychic", bg: "#F85888", border: "#A13959", resist: { fighting: 2, psychic: 0.5, dark: 0.5 }, immune: {}, weakness: { bug: 2, ghost: 2 } },
  rock: { name: "Rock", bg: "#B8A038", border: "#786824", resist: { normal: 0.5, fire: 0.5, poison: 0.5, flying: 0.5 }, immune: {}, weakness: { fighting: 2, grass: 2, ground: 2, steel: 2, water: 2 } },
  ice: { name: "Ice", bg: "#98D8D8", border: "#638D8D", resist: { ice: 0.5 }, immune: {}, weakness: { fighting: 2, fire: 2, rock: 2, steel: 2 } },
  bug: { name: "Bug", bg: "#A8B820", border: "#6D7815", resist: { fighting: 0.5, ground: 0.5, grass: 0.5 }, immune: {}, weakness: { fire: 2, flying: 2, rock: 2 } },
  dragon: { name: "Dragon", bg: "#7038F8", border: "#4924A1", resist: { electric: 0.5, fire: 0.5, grass: 0.5, water: 0.5 }, immune: {}, weakness: { dragon: 2, fairy: 2, ice: 2 }},
  ghost: { name: "Ghost", bg: "#705898", border: "#493963", resist: { bug: 0.5, poison: 0.5 }, immune: { normal: 0, fighting: 0 }, weakness: { dark: 2, ghost: 2 } },
  dark: { name: "Dark", bg: "#705848", border: "#49392F", resist: { dark: 0.5, ghost: 0.5 }, immune: { psychic: 0 }, weakness: { bug: 2, fairy: 2, fighting: 2 } },
  steel: { name: "Steel", bg: "#B8B8D0", border: "#787887", resist: { bug: 0.5, dragon: 0.5, fairy: 0.5, flying: 0.5, grass: 0.5, ice: 0.5, normal: 0.5, psychic: 0.5, rock: 0.5, steel: 0.5 }, immune: { poison: 0 }, weakness: { fighting: 2, fire: 2, ground: 2 } },
  fairy: { name: "Fairy", bg: "#EE99AC", border: "#9B6470", resist: { bug: 0.5, dark: 0.5, fighting: 0.5 }, immune: { dragon: 0 }, weakness: { poison: 2, steel: 2 } },
  stellar: { name: "Stellar", bg: "#7CC7B2", border: "#518174", resist: { resist: {}, immune: {}, weakness: {} },
  "???": { name: "???", bg: "#68A090", border: "#44685E", resist: {}, immune: {}, weakness: {} },
  null: { name: "???", bg: "#68A090", border: "#44685E", resist: {}, immune: {}, weakness: {} },
  undefined: { name: "???", bg: "#68A090", border: "#44685E", resist: {}, immune: {}, weakness: {} },
};

const categories = {
  physical: { name: "Physical", bg: "#C92112", fontColor: "#F67A1A" },
  special: { name: "Special", bg: "#4F5870", fontColor: "#fff" },
  status: { name: "Status", bg: "#8C888C", fontColor: "#fff" },
};

const games = {
  red: { name: "Red", bg: "#FF1111", border: "#FF1111", fontColor: "#000" },
  blue: { name: "Blue", bg: "#1111FF", border: "#1111FF", fontColor: "#fff" },
  bluejapan: {
    name: "Blue (Japan)",
    bg: "#1111FF",
    border: "#1111FF",
    fontColor: "#fff",
  },
  yellow: {
    name: "Yellow",
    bg: "#FFD733",
    border: "#FFD733",
    fontColor: "#000",
  },
  gold: { name: "Gold", bg: "#fff", border: "#DAA520", fontColor: "#DAA520" },
  silver: {
    name: "Silver",
    bg: "#fff",
    border: "#C0C0C0",
    fontColor: "#C0C0C0",
  },
  crystal: {
    name: "Crystal",
    bg: "#fff",
    border: "#4FD9FF",
    fontColor: "#338DA6",
  },
  ruby: { name: "Ruby", bg: "#fff", border: "#A00000", fontColor: "#A00000" },
  sapphire: {
    name: "Sapphire",
    bg: "#fff",
    border: "#0000A0",
    fontColor: "#0000A0",
  },
  emerald: {
    name: "Emerald",
    bg: "#fff",
    border: "#00A000",
    fontColor: "#00A000",
  },
  firered: {
    name: "FireRed",
    bg: "#FF7327",
    border: "#FF7327",
    fontColor: "#000",
  },
  leafgreen: {
    name: "LeafGreen",
    bg: "#00DD00",
    border: "#00DD00",
    fontColor: "#000",
  },
  colosseum: {
    name: "Colosseum",
    bg: "#fff",
    border: "#B6CAE4",
    fontColor: "#768394",
  },
  xd: { name: "XD", bg: "#fff", border: "#604E82", fontColor: "#3E3355" },
  diamond: {
    name: "Diamond",
    bg: "#fff",
    border: "#AAAAFF",
    fontColor: "#6F6FA6",
  },
  pearl: {
    name: "Pearl",
    bg: "#fff",
    border: "#FFAAAA",
    fontColor: "#A66F6F",
  },
  platinum: {
    name: "Platinum",
    bg: "#fff",
    border: "#999999",
    fontColor: "#646464",
  },
  heartgold: {
    name: "HeartGold",
    bg: "#B69E00",
    border: "#B69E00",
    fontColor: "#000",
  },
  soulsilver: {
    name: "SoulSilver",
    bg: "#C0C0E1",
    border: "#C0C0E1",
    fontColor: "#000",
  },
  palpark: {
    name: "Pal Park",
    bg: "#A2E0A3",
    border: "#A2E0A3",
    fontColor: "#000",
  },
  black: { name: "Black", bg: "#fff", border: "#444444", fontColor: "#2C2C2C" },
  white: { name: "White", bg: "#fff", border: "#E1E1E1", fontColor: "#929292" },
  black2: {
    name: "Black 2",
    bg: "#fff",
    border: "#444444",
    fontColor: "#2C2C2C",
  },
  white2: {
    name: "White 2",
    bg: "#fff",
    border: "#E1E1E1",
    fontColor: "#929292",
  },
  dreamworld: {
    name: "Dream World",
    bg: "#EF52B2",
    border: "#EF52B2",
    fontColor: "#fff",
  },
  x: { name: "X", bg: "#025DA6", border: "#025DA6", fontColor: "#fff" },
  y: { name: "Y", bg: "#EA1A3E", border: "#EA1A3E", fontColor: "#000" },
  omegaRuby: {
    name: "Omega Ruby",
    bg: "#fff",
    border: "#AB2813",
    fontColor: "#6F1A0C",
  },
  alphasapphire: {
    name: "Alpha Sapphire",
    bg: "#fff",
    border: "#26649C",
    fontColor: "#194166",
  },
  sun: {
    name: "Sun",
    bg: "#fff",
    border: "#F1912B",
    fontColor: "#9D5E1C",
  },
  moon: {
    name: "Moon",
    bg: "#fff",
    border: "#5599CA",
    fontColor: "#376483",
  },
  ultrasun: {
    name: "Ultra Sun",
    bg: "#E95B2B",
    border: "#E95B2B",
    fontColor: "#000",
  },
  ultramoon: {
    name: "Ultra Moon",
    bg: "#226DB5",
    border: "#226DB5",
    fontColor: "#000",
  },
  letsgopikachu: {
    name: "Let's Go Pikachu",
    bg: "#F5DA26",
    border: "#F5DA26",
    fontColor: "#000",
  },
  letsgoeevee: {
    name: "Let's Go Eevee",
    bg: "#D4924B",
    border: "#D4924B",
    fontColor: "#000",
  },
  sword: {
    name: "Sword",
    bg: "#fff",
    border: "#00A1E9",
    fontColor: "#006998",
  },
  shield: {
    name: "Shield",
    bg: "#fff",
    border: "#BF004F",
    fontColor: "#7C0033",
  },
  brilliantdiamond: {
    name: "Brilliant Diamond",
    bg: "#44BAE5",
    border: "#44BAE5",
    fontColor: "#000",
  },
  shiningpearl: {
    name: "Shining Pearl",
    bg: "#DA7D99",
    border: "#DA7D99",
    fontColor: "#000",
  },
  legendsarceus: {
    name: "Legends: Arceus",
    bg: "#fff",
    border: "#36597B",
    fontColor: "#233A50",
  },
  scarlet: {
    name: "Scarlet",
    bg: "#fff",
    border: "#F34134",
    fontColor: "#9E2A22",
  },
  scarlet: {
    name: "Violet",
    bg: "#fff",
    border: "#8334B7",
    fontColor: "#552277",
  },
  thehiddentreasureofareazero: {
    name: "The Hidden Treasure of Area Zero ",
    bg: "#7CC7B2",
    border: "#7CC7B2",
    fontColor: "#215E7E",
  },
};

// Initialize pokedex with the correct menus

let serchedPokemon = 1;
let rightDisplayFunction = "status";

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

// Format text function
function formatText(text) {
  const words = text.split("-");
  const formattedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  );
  const formattedText = formattedWords.join(" ");

  return formattedText;
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
const fetchMove = async function (pokemon) {
  const APIResponse = await fetch(`https://pokeapi.co/api/v2/move/${pokemon}`);

  if (APIResponse.status == 200) {
    const moveData = await APIResponse.json();
    return moveData;
  }
};


// Apply the search changed on screen
const renderPokemon = async function (pokemon) {
  pokemonName.innerHTML = "Loading...";
  encountersContainer.innerHTML = "Loading...";
  movesContainer.innerHTML = "Loading...";
  pokemonNumber.innerHTML = "";
  encountersContainer.innerHTML = "";
  movesContainer.innerHTML = "";

  const pokemonData = await fetchPokemon(pokemon);
  const pokemonEncounter = await fetchPokemon(`${pokemon}/encounters`);

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
    if (rightDisplayFunction === "status") {
    
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
       console.log("Stats Loaded");
    }
    // MOVES
    if (rightDisplayFunction === "moves") {
      // Moves API Call
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
        nameCell.innerHTML =
          move.moveName.charAt(0).toUpperCase() + move.moveName.slice(1);

        // Type Row
        const typeRow = moveTable.insertRow();
        const typeCellLabel = typeRow.insertCell(0);
        const typeCellData = typeRow.insertCell(1);

        typeCellLabel.innerHTML = "Type";
        typeCellData.innerHTML =
          move.moveType.charAt(0).toUpperCase() + move.moveType.slice(1);

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
          move.moveCategory.charAt(0).toUpperCase() +
          move.moveCategory.slice(1);

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
        const powerCellLabel = powerRow.insertCell(0);
        const powerCellData = powerRow.insertCell(1);
        powerCellLabel.innerHTML = "Power";
        powerCellData.innerHTML = move.movePower;

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
          move.moveArea.charAt(0).toUpperCase() + move.moveArea.slice(1);

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
       console.log("Moves Loaded");
    }

    // ENCOUNTER
    if(rightDisplayFunction === "encounter"){
      const versionTables = {};
      // Enconter Table Render
      if (pokemonEncounter.length > 0){
      pokemonEncounter.forEach((encounter) => {
        encounter.version_details.forEach((versionDetail) => {
          const versionName = versionDetail.version.name.toLowerCase();

          // Verifica se a versão está na lista games
          if (games[versionName]) {
            // Verifica se a versão já foi processada
            if (!versionTables[versionName]) {
              // Cria uma nova tabela se a versão ainda não foi processada
              const encounterTable = document.createElement("table");
              encounterTable.classList.add("encounter-table");

              // Adiciona a tabela ao objeto versionTables
              versionTables[versionName] = encounterTable;

              // Adiciona a versão à tabela
              const versionRow = encounterTable.insertRow();
              const versionCell = versionRow.insertCell(0);
              versionCell.colSpan = 2;
              versionCell.classList.add("encounter-version");
              versionCell.innerHTML = versionName.toUpperCase();
              versionCell.style.textAlign = "center"

              const versionStyle = games[versionName];

              if (versionStyle) {
                versionCell.style.backgroundColor = versionStyle.bg;
                versionCell.style.color = versionStyle.fontColor;
                versionCell.style.borderColor = versionStyle.border;
              }

              versionCell.style.borderRadius = "10px";
            }

            // Adiciona a location_area à tabela correspondente
            const encounterTable = versionTables[versionName];

            const locationRow = encounterTable.insertRow();
            const locationCell = locationRow.insertCell(0);
            locationCell.colSpan = 2;
            locationCell.classList.add("encounter-location");
            
            locationCell.innerHTML = formatText(encounter.location_area.name);
            locationCell.style.borderTop = "5px solid rgb(83 83 83)";
            locationCell.style.borderRight = "0px";
            locationCell.style.borderLeft = "0px";

            // Method Row
            const methodRow = encounterTable.insertRow();
            const methodCellLabel = methodRow.insertCell(0);
            const methodCellData = methodRow.insertCell(1);

            methodCellLabel.innerHTML = "Method";
            methodCellData.innerHTML =formatText(
              versionDetail.encounter_details[0].method.name);
          }
        });
      });
      // Adiciona as tabelas ao container
      Object.values(versionTables).forEach((table) => {
        encountersContainer.appendChild(table);
      });
    }else{
        encountersContainer.innerHTML = "Trade or Evolve";
        encountersContainer.style.textAlign = "center";

    }
      console.log("Encounters Loaded");
    }
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
  renderPokemon(serchedPokemon);
  rightDisplayFunction = "status";
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
  renderPokemon(serchedPokemon);
  rightDisplayFunction = "ability"
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
  renderPokemon(serchedPokemon);
  rightDisplayFunction = "moves";
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
  renderPokemon(serchedPokemon);
  rightDisplayFunction = "encounter";
};
buttonEncounter.addEventListener("click", rightDisplayFunctionEncounter);
