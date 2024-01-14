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
const infoContainer = document.getElementById("infoContainer");

// Pokemons types style
const types = {
  normal: {
    name: "Normal",
    bg: "#A8A878",
    border: "#6D6D4E"
  },
  fire: {
    name: "Fire",
    bg: "#F08030",
    border: "#9C531F"
  },
  fighting: {
    name: "Fighting",
    bg: "#C03028",
    border: "#7D1F1A"
  },
  water: {
    name: "Water",
    bg: "#6890F0",
    border: "#445E9C"
  },
  flying: {
    name: "Flying",
    bg: "#A890F0",
    border: "#6D5E9C"
  },
  grass: {
    name: "Grass",
    bg: "#78C850",
    border: "#4E8234"
  },
  poison: {
    name: "Poison",
    bg: "#A040A0",
    border: "#682A68"
  },
  electric: {
    name: "Electric",
    bg: "#F8D030",
    border: "#A1871F"
  },
  ground: {
    name: "Ground",
    bg: "#E0C068",
    border: "#927D44"
  },
  psychic: {
    name: "Psychic",
    bg: "#F85888",
    border: "#A13959"
  },
  rock: {
    name: "Rock",
    bg: "#B8A038",
    border: "#786824"
  },
  ice: {
    name: "Ice",
    bg: "#98D8D8",
    border: "#638D8D"
  },
  bug: {
    name: "Bug",
    bg: "#A8B820",
    border: "#6D7815"
  },
  dragon: {
    name: "Dragon",
    bg: "#7038F8",
    border: "#4924A1"
  },
  ghost: {
    name: "Ghost",
    bg: "#705898",
    border: "#493963"
  },
  dark: {
    name: "Dark",
    bg: "#705848",
    border: "#49392F"
  },
  steel: {
    name: "Steel",
    bg: "#B8B8D0",
    border: "#787887"
  },
  fairy: {
    name: "Fairy",
    bg: "#EE99AC",
    border: "#9B6470"
  },
  stellar: {
    name: "Stellar",
    bg: "#7CC7B2",
    border: "#518174"
  },
  "???": {
    name: "???",
    bg: "#7CC7B2",
    border: "#518174"
  },
  undefined: {
    name: "???",
    bg: "#7CC7B2",
    border: "#518174"
  },
  null: {
    name: "???",
    bg: "#7CC7B2",
    border: "#518174"
  },
};

// Moves categories style
const categories = {
  physical: { name: "Physical", bg: "#C92112", fontColor: "#F67A1A" },
  special: { name: "Special", bg: "#4F5870", fontColor: "#fff" },
  status: { name: "Status", bg: "#8C888C", fontColor: "#fff" },
};

// Games style
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
let rightDisplayFunction = "info";
const initializePokedex = function () {
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
initializePokedex();

// Audio play function
const playAudio = (url) => {
  new Audio(url).play();
  Audio.volume = 0.2;
}

// Format text function and change " - " for space
const formatText = (text) => {
  const words = text.split("-");
  const formattedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  );
  const formattedText = formattedWords.join(" ");

  return formattedText;
}

// Search a pokemon in API and return the pokemon data
const fetchPokemon = async function (pokemon) {
  const APIResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  );

  if (APIResponse.status == 200) {
    const pokemonData = await APIResponse.json();
    return pokemonData;
  }
};

// Search a move in API and return the move data
const fetchMove = async function (pokemon) {
  const APIResponse = await fetch(`https://pokeapi.co/api/v2/move/${pokemon}`);

  if (APIResponse.status == 200) {
    const moveData = await APIResponse.json();
    return moveData;
  }
};

// Search a type in API ans return dmg relations
const fetchType = async function (type) {
  const APIResponse = await fetch(`https://pokeapi.co/api/v2/type/${type}`);

  if (APIResponse.status == 200) {
    const typeData = await APIResponse.json();
    return typeData.damage_relations;
  }
};

  // Search a ability in API ans return the ability data
  const fetchAbility = async function (ability) {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/ability/${ability}`);

    if (APIResponse.status == 200) {
      const abilityData = await APIResponse.json();
      return abilityData;
    }
  };

// Create and style the type cell
const createTypeCell = (infoTable, pokemonTypes) => {
  const typeRow = infoTable.insertRow();

  const typeCellLabel = typeRow.insertCell(0);
  typeCellLabel.style.width = "30%"; // Ajustar a largura conforme necessário
  typeCellLabel.innerHTML = "Type";

  const typeCellData = typeRow.insertCell(1);
  typeCellData.style.width = "70%"; // Ajustar a largura conforme necessário
  typeCellData.style.borderBottomRightRadius = "10px";
  typeCellLabel.style.borderBottomLeftRadius = "10px";
  typeCellData.style.borderTopRightRadius = "10px";
  typeCellLabel.style.borderTopLeftRadius = "10px";

  // Cria uma div para cada tipo e a adiciona à célula
  for (const type of pokemonTypes) {
    const typeBadge = document.createElement("div");
    typeBadge.innerHTML = type;

    const typeStyle = types[type];
    if (typeStyle) {
      typeBadge.style.background = typeStyle.bg;
      typeBadge.style.color = "#FFF";
      typeBadge.style.padding = "3px 6px"; // Ajuste o espaçamento aqui
      typeBadge.style.marginRight = "3px"; // Adiciona um pequeno espaço entre as plaquinhas
      typeBadge.style.marginbottom = "3px"; // Adiciona um pequeno espaço entre as plaquinhas
      typeBadge.style.borderRadius = "10px";
      typeBadge.style.display = "inline-block";

      typeCellData.appendChild(typeBadge);
    }
  }

  // Adiciona um estilo adicional para o background da célula
  typeRow.style.background = types[pokemonTypes[0]].bg; // Use a cor do primeiro tipo para o background
  typeRow.style.borderRadius = "10px";
};

// Create and style a type cell for damage relationships
const createDamageRelationCell = (infoTable, title, damageRelationTypes) => {
  const row = infoTable.insertRow();

  const labelCell = row.insertCell(0);
  labelCell.style.width = "30%"; // Ajustar a largura conforme necessário
  labelCell.innerHTML = title;
  labelCell.style.borderTopRightRadius = "0px";
  labelCell.style.borderBottomRightRadius = "0px";
  labelCell.style.borderTopLeftRadius = "10px";
  labelCell.style.borderBottomLeftRadius = "10px";

  const dataCell = row.insertCell(1);
  dataCell.style.width = "70%"; // Ajustar a largura conforme necessário
  dataCell.style.borderTopRightRadius = "10px";
  dataCell.style.borderBottomRightRadius = "10px";
  dataCell.style.borderTopLeftRadius = "0px";
  dataCell.style.borderBottomLeftRadius = "0px";

  // Cria uma div para cada tipo e a adiciona à célula
  for (const type of damageRelationTypes) {
    const typeName = type.name;

    if (typeName) {
      const typeBadge = document.createElement("div");
      let multiplierText;

      // Tratamento especial para "Immune To"
      if (title === "Immune To:") {
        multiplierText = "0x";
      } else if (title === "Resistant To:") {
        multiplierText = type.multiplier === 2 ? "½x" : "¼x";
      } else {
        multiplierText = type.multiplier === 2 ? "2x" : type.multiplier === 4 ? "4x" : `${type.multiplier}x`;
      }

      const typeNameCapitalized =
        type.name.charAt(0).toUpperCase() + type.name.slice(1);
      typeBadge.innerHTML = typeNameCapitalized + ` (${multiplierText})`;

      // Lógica para obter o estilo do tipo
      const typeStyle = types[typeName]; // Certifique-se de que "types" está definido
      if (typeStyle) {
        typeBadge.style.background = typeStyle.bg;
        typeBadge.style.color = "#FFF";
        typeBadge.style.padding = "3px 6px"; // Ajuste o espaçamento aqui
        typeBadge.style.marginRight = "5px"; // Adiciona um pequeno espaço entre as plaquinhas
        typeBadge.style.marginBottom = "5px"; // Adiciona um pequeno espaço entre as plaquinhas
        typeBadge.style.borderRadius = "10px";
        typeBadge.style.display = "inline-block";

        dataCell.appendChild(typeBadge);
      }
    }
  }

  // Adiciona um estilo adicional para o background da célula
  row.style.background = types[damageRelationTypes[0]?.name]?.bg; // Use a cor do primeiro tipo para o background
  row.style.borderRadius = "10px";
}

const addAbilityRowsToTable = (
  infoTable,
  abilitiesDetails,
  hiddenAbilities
) => {
  // Verifica se o elemento com o ID "info-table" existe
  if (infoTable) {
    abilitiesDetails.forEach((ability) => {
      const abilityRow = infoTable.insertRow();

      // Adiciona célula com o nome da habilidade
      const abilityNameCell = abilityRow.insertCell(0);
      abilityNameCell.style.borderTopRightRadius = "0px";
      abilityNameCell.style.borderBottomRightRadius = "0px";
      abilityNameCell.style.borderTopLeftRadius = "10px";
      abilityNameCell.style.borderBottomLeftRadius = "10px";

      // Verifica se a habilidade está na lista de hiddenAbilities
      const hiddenAbility = hiddenAbilities.find(
        (hidden) => hidden.ability.name === ability.name && hidden.is_hidden
      );

      if (hiddenAbility) {
        // Se a habilidade estiver marcada como "hidden", adiciona "(hidden)" ao nome
        abilityNameCell.innerHTML = `${
          ability.name.charAt(0).toUpperCase() + ability.name.slice(1)
        } (hidden)`;
      } else {
        // Se não, usa o nome normal
        abilityNameCell.innerHTML =
          ability.name.charAt(0).toUpperCase() + ability.name.slice(1);
      }

      // Adiciona célula com o short effect da habilidade
      const abilityShortEffectCell = abilityRow.insertCell(1);
      abilityShortEffectCell.style.borderTopRightRadius = "10px";
      abilityShortEffectCell.style.borderBottomRightRadius = "10px";
      abilityShortEffectCell.style.borderTopLeftRadius = "0px";
      abilityShortEffectCell.style.borderBottomLeftRadius = "0px";

      // Verifica se há uma entrada em inglês (language 'en')
      const englishEntry = ability.effect_entries.find(
        (entry) => entry.language.name === "en"
      );

      // Usa a entrada em inglês se disponível, caso contrário, usa "N/A"
      abilityShortEffectCell.innerHTML = englishEntry?.short_effect || "N/A";

      // Estiliza a célula de acordo com suas preferências
      abilityRow.style.background = "#e0e0e0"; // Adapte a cor conforme necessário
      abilityRow.style.borderRadius = "10px"; // Adapte o raio conforme necessário
    });
  } else {
    console.error("Element with ID 'info-table' not found.");
  }
};

// Reset Screen Data
const resetScreenData = () => {
  pokemonName.innerHTML = "Loading...";
  encountersContainer.innerHTML = "Loading...";
  movesContainer.innerHTML = "Loading...";
  infoContainer.innerHTML = "Loading...";
  pokemonNumber.innerHTML = "";
  encountersContainer.innerHTML = "";
  movesContainer.innerHTML = "";
  infoContainer.innerHTML = "";

}

// Apply the search changed on screen
const renderPokemon = async function (pokemon) {
  // Reset Screen Data every search
  resetScreenData();
  // fetch the desired pokemon
  const pokemonData = await fetchPokemon(pokemon);

  // Primary render function
  if (pokemonData) {

    // IMAGE
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

    // STATS
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

        // get the type style
        const typeColor = types[move.moveType];
        // apply the style to the info table
        if (moveTable) {
          moveTable.style.backgroundColor = typeColor.bg;
          moveTable.style.border = `2px solid ${typeColor.border}`;
        }

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
          typeCellData.style.color = "#FFF";
          typeCellData.style.border = "2px solid #fff";
          typeCellLabel.style.backgroundColor = typeStyle.bg;
          typeCellLabel.style.color = "#FFF";
          typeCellLabel.style.border = "2px solid #fff";
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
          categoryCellData.style.border = "2px solid #fff";
          categoryCellLabel.style.backgroundColor = categoryStyle.bg;
          categoryCellLabel.style.color = "#FFF";
          categoryCellLabel.style.border = "2px solid #fff";
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
    }
    // ENCOUNTER
    if (rightDisplayFunction === "encounter") {
      const pokemonEncounter = await fetchPokemon(`${pokemon}/encounters`);
      const versionTables = {};
      // Enconter Table Render
      if (pokemonEncounter.length > 0) {
        pokemonEncounter.forEach((encounter) => {
          encounter.version_details.forEach((versionDetail) => {
            const versionName = versionDetail.version.name.toLowerCase();

            // Check if the version is in the games list
            if (games[versionName]) {
              // Checks if the version has already been processed
              if (!versionTables[versionName]) {
                // Create a new table if the version has not yet been processed
                const encounterTable = document.createElement("table");

                encounterTable.classList.add("encounter-table");
                // Add the table to the versionTables object
                versionTables[versionName] = encounterTable;
                // Add the version to the table
                const versionRow = encounterTable.insertRow();
                const versionCell = versionRow.insertCell(0);

                versionCell.colSpan = 2;
                versionCell.classList.add("encounter-version");
                versionCell.innerHTML = versionName.toUpperCase();
                versionCell.style.textAlign = "center";

                const versionStyle = games[versionName];
                if (versionStyle) {
                  versionCell.style.backgroundColor = versionStyle.bg;
                  versionCell.style.color = versionStyle.fontColor;
                  versionCell.style.borderColor = versionStyle.border;
                }
                versionCell.style.borderRadius = "10px";
              }

              // Adds the version to the table/ Adds the location_area to the corresponding table
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
              methodCellData.innerHTML = formatText(
                versionDetail.encounter_details[0].method.name
              );
            }
          });
        });
        // Add tables to the container
        Object.values(versionTables).forEach((table) => {
          encountersContainer.appendChild(table);
        });
      } else {
        encountersContainer.innerHTML = "Trade or Evolve";
        encountersContainer.style.textAlign = "center";
      }
    }
    // INFO
    if (rightDisplayFunction === "info") {
      const infoTable = document.createElement("table");
      infoTable.classList.add("info-table");

      ////// Info Number Row //////
      const numberRow = infoTable.insertRow();
      const numberCellLabel = numberRow.insertCell(0);
      const numberCellData = numberRow.insertCell(1);
      // Info Number Row numberCell
      numberCellLabel.colSpan = 1;
      numberCellLabel.classList.add("info-numberCell");
      numberCellLabel.style.borderTopRightRadius = "0px";
      numberCellLabel.style.borderBottomRightRadius = "0px";
      numberCellLabel.style.borderTopLeftRadius = "10px";
      numberCellLabel.style.borderBottomLeftRadius = "10px";
      numberCellLabel.innerHTML = "ID";
      // Info Number Row numberData
      numberCellData.colSpan = 1;
      numberCellData.classList.add("info-numberData");
      numberCellData.style.borderTopRightRadius = "10px";
      numberCellData.style.borderBottomRightRadius = "10px";
      numberCellData.style.borderTopLeftRadius = "0px";
      numberCellData.style.borderBottomLeftRadius = "0px";
      numberCellData.innerHTML = pokemonData.id;

      ////// Info Name Row //////
      const nameRow = infoTable.insertRow();
      const nameCellLabel = nameRow.insertCell(0);
      const nameCellData = nameRow.insertCell(1);
      // Info Name Row nameCell
      nameCellLabel.colSpan = 1;
      nameCellLabel.classList.add("info-numberCell");
      nameCellLabel.innerHTML = "Name";
      nameCellLabel.style.borderTopRightRadius = "0px";
      nameCellLabel.style.borderBottomRightRadius = "0px";
      nameCellLabel.style.borderTopLeftRadius = "10px";
      nameCellLabel.style.borderBottomLeftRadius = "10px";
      // Info Name Row nameData
      nameCellData.colSpaname;
      nameCellData.classList.add("info-nameData");
      nameCellData.style.borderTopRightRadius = "10px";
      nameCellData.style.borderBottomRightRadius = "10px";
      nameCellData.style.borderTopLeftRadius = "0px";
      nameCellData.style.borderBottomLeftRadius = "0px";
      nameCellData.innerHTML =
        pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1);

      // Create and style the type cell
      const pokemonTypes = pokemonData.types.map((type) => type.type.name);
      createTypeCell(infoTable, pokemonTypes);

      // get the first type of the pokemon
      const firstType = pokemonTypes[0];
      // get the type style
      const typeColor = types[firstType];
      // apply the style to the info table
      if (infoTable) {
        infoTable.style.backgroundColor = typeColor.bg;
        infoTable.style.border = `2px solid ${typeColor.border}`;
      }

      // Resists
      const resistRowTitle = infoTable.insertRow();
      const resistTitleLabel = resistRowTitle.insertCell(0);
      resistTitleLabel.colSpan = 2;
      resistTitleLabel.innerHTML = "Type effectiveness";
      resistTitleLabel.style.textAlign = "center";
      resistTitleLabel.style.borderTopRightRadius = "10px";
      resistTitleLabel.style.borderBottomRightRadius = "10px";
      resistTitleLabel.style.borderTopLeftRadius = "10px";
      resistTitleLabel.style.borderBottomLeftRadius = "10px";

      // Resists Map
      const damageRelationsPromises = pokemonData.types.map(async (type) => {
        const damageRelations = await fetchType(type.type.name);
        return damageRelations;
      });

      // Wait for all asynchronous calls to complete
      const damageRelationsResults = await Promise.all(damageRelationsPromises);
      const extractTypesByDamageMultiplier = (
        damageRelationsResults,
        damageMultiplier
      ) => {
        const types = new Map();

        damageRelationsResults.forEach((relation) => {
          if (relation[damageMultiplier]) {
            relation[damageMultiplier].forEach((type) => {
              if (!types.has(type.name)) {
                types.set(type.name, { name: type.name, multiplier: 2 });
              } else {
                // If the type already exists, add the multipliers
                types.get(type.name).multiplier += 2;
              }
            });
          }
        });

        // Remove types that are both "double damage from" and "half damage from"
        if (
          damageMultiplier === "half_damage_from" ||
          damageMultiplier === "double_damage_from"
        ) {
          const oppositeMultiplier =
            damageMultiplier === "half_damage_from"
              ? "double_damage_from"
              : "half_damage_from";
          types.forEach((type, typeName) => {
            if (
              damageRelationsResults.some((relation) =>
                relation[oppositeMultiplier]?.some((t) => t.name === typeName)
              )
            ) {
              types.delete(typeName);
            }
          });
        }

        // Remove types that are in "no damage from" from "half damage from" and "double damage from"
        if (
          damageMultiplier === "half_damage_from" ||
          damageMultiplier === "double_damage_from"
        ) {
          const immuneTypeNames = damageRelationsResults.reduce(
            (acc, relation) => {
              const noDamageTypes = relation.no_damage_from || [];
              return acc.concat(noDamageTypes.map((type) => type.name));
            },
            []
          );

          immuneTypeNames.forEach((typeName) => {
            types.delete(typeName);
          });
        }

        return [...types.values()];
      };

      const doubleDamageFrom = extractTypesByDamageMultiplier(
        damageRelationsResults,
        "double_damage_from"
      );

      const immuneTo = extractTypesByDamageMultiplier(
        damageRelationsResults,
        "no_damage_from"
      );

      const halfDamageFrom = extractTypesByDamageMultiplier(
        damageRelationsResults,
        "half_damage_from"
      );

      createDamageRelationCell(
        infoTable,
        "Weak To:",
        doubleDamageFrom,
        damageRelationsResults
      );
      createDamageRelationCell(
        infoTable,
        "Immune To:",
        immuneTo,
        damageRelationsResults
      );
      createDamageRelationCell(
        infoTable,
        "Resistant To:",
        halfDamageFrom,
        damageRelationsResults
      );

      // Abilities

      const abilitiesRowTitle = infoTable.insertRow();
      const abilitiesTitleLabel = abilitiesRowTitle.insertCell(0);
      abilitiesTitleLabel.colSpan = 2;
      abilitiesTitleLabel.innerHTML = "Abilities";
      abilitiesTitleLabel.style.textAlign = "center";
      abilitiesTitleLabel.style.borderTopRightRadius = "10px";
      abilitiesTitleLabel.style.borderBottomRightRadius = "10px";
      abilitiesTitleLabel.style.borderTopLeftRadius = "10px";
      abilitiesTitleLabel.style.borderBottomLeftRadius = "10px";

      // Extract the abilities from the pokemon data
      const pokemonAbilities = pokemonData.abilities.map(
        (abilityObject) => abilityObject.ability
      );
      // Extract the hidden abilities data from the pokemon data
      const pokemonHiddenAbility = pokemonData.abilities.map(
        (abilityObject) => abilityObject
      );

      // Function to fetch details of all skills
      const fetchAllAbilities = async function () {
        // Maps over the skill details array and fetches the details of each one
        const abilitiesDetails = await Promise.all(
          pokemonAbilities.map(async (ability) => {
            const abilityData = await fetchAbility(ability.name);
            return abilityData;
          })
        );

        return abilitiesDetails;
      };

      // Call the function to fetch details of all skills
      fetchAllAbilities().then((abilitiesDetails) => {

        addAbilityRowsToTable(
          infoTable,
          abilitiesDetails,
          pokemonHiddenAbility
        );
      });

      // Append the table to the container
      infoContainer.appendChild(infoTable);
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

// Change right display function to info
const rightDisplayFunctionInfo = function () {
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
  rightDisplayFunction = "info";
};
buttonAbility.addEventListener("click", rightDisplayFunctionInfo);

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
