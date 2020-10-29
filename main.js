var limit = 6;
var limitPrev = 0;
function getPokemons(limit = 6,limitPrev = 0) { 
  $.ajax({
    url: `https://pokeapi.co/api/v1/pokemon/`,
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    type: "GET",
    dataType: "json",
    data: {},
    success: async function (result) {
      let data = result;
      for (let i = limitPrev; i < limit; i++) {
        let element = data.results[i];
        await createElement(element);
      }
      let cards = document.querySelectorAll('.card-list');
      setInfoElement('https://pokeapi.co/api/v1/pokemon/1')
      cards.forEach(card => {card.addEventListener('click', (e) => {
          e.preventDefault();
          let api = 'https://pokeapi.co/api/v1/pokemon/';
          setInfoElement(api + card.id.substr(4))
      })
      });
    },
    error: function () {
      console.log("error");
    }
  });
}
  function createElement(elements) {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: elements.url,
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        type: "GET",
        dataType: "json",
        data: {
        },
        success: function (result_pokemon) {
          let data_pokemon = result_pokemon;
          setInnerHtml(data_pokemon.name, data_pokemon.types, data_pokemon.sprites.front_default, data_pokemon.id);
          resolve();
        },
        error: function () {
          console.log("error");
          reject();
        }
      });
    });
  }
  function setInfoElement(url) {
      $.ajax({
        url: url,
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        type: "GET",
        dataType: "json",
        data: {
        },
        success: function (result_pokemon) {
          let data_pokemon = result_pokemon;
          setInnerInfoHtml(data_pokemon.name, data_pokemon.types, data_pokemon.sprites.front_default, data_pokemon.id, data_pokemon.stats, data_pokemon.weight, data_pokemon.moves);
        },
        error: function () {
          console.log("error");
        }
      });
  }
function setInnerHtml(name,types,img, id){
    let innerHtml = `
    <div class="card card-list" id="card${id}" style='width: 18rem;'>
       <div class="card-body">
       <img class="card-img" src="${img}"></img>
       <h5 class="card-title">${capitalizeFirstLetter(`${name}`)}</h5>`;
       for(let i=0;i<types.length;i++){
        innerHtml +=
       `<p class="card-text ${types[i].type.name}" >${types[i].type.name}</p>`;
       }
       innerHtml +=`
        </div>
        </div>
        `;
     document.querySelector('.post-list').innerHTML += innerHtml;
}
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function setInnerInfoHtml(name, types, img, id, stats, weight, moves){
  let cardInfoImg = document.querySelector('.card-info-img');
  let cardInfoTitle = document.querySelector('.card-info-title');
  let cardTypes = document.querySelector('.types');
  let cardAttack = document.querySelector('.attack');
  let cardDefense= document.querySelector('.defense');
  let cardHp = document.querySelector('.hp');
  let cardSpAttack = document.querySelector('.spattack');
  let cardSpDefense = document.querySelector('.spdefense');
  let cardSpeed = document.querySelector('.speed');
  let cardWeight = document.querySelector('.weight');
  let cardTotalMoves = document.querySelector('.totalmoves');
  cardInfoImg.src = `${img}`;
  cardTypes.textContent = '';
  for(let i = 0; i < types.length; i++){
  cardTypes.textContent += `${types[i].type.name} `;
  }
  cardInfoTitle.textContent = `${capitalizeFirstLetter(name)}` + `       #${id}`;
  cardAttack.textContent = `${stats[1].base_stat}`;
  cardDefense.textContent = `${stats[2].base_stat}`;
  cardHp.textContent = `${stats[0].base_stat}`;
  cardSpAttack.textContent = `${stats[3].base_stat}`;
  cardSpDefense.textContent = `${stats[4].base_stat}`;
  cardSpeed.textContent = `${stats[5].base_stat}`;
  cardWeight.textContent = `${weight}`;
  cardTotalMoves.textContent = `${moves.length}`;
}
document.querySelector('#loadMore').addEventListener('click', () => {
  limitPrev = limit;
  limit += 6;
  getPokemons(limit,limitPrev);
})
getPokemons(6,0);