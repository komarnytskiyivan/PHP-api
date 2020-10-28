$.ajax({
    url: 'https://pokeapi.co/api/v1/pokemon?limit=12',
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    },
    type: "GET",
    dataType: "json",
    data: {
    },
    success: function (result) {
       let data =  result;
       data.results.forEach(element => {
       createElement(element);
  });
  if(document.readyState !== "loading"){
  let cards = document.querySelector('#card1');
  console.log(cards);
  };
    },
    error: function () {
        console.log("error");
    }
});
function createElement(elements) {
    console.log(elements);
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
           let data_pokemon =  result_pokemon;
        setInnerHtml(data_pokemon.name,data_pokemon.types,data_pokemon.sprites.front_default, data_pokemon.id)
        },
        error: function () {
            console.log("error");
        }
    });
}
function setInnerHtml(name,types,img, id){
    let innerHtml = `
    <div class="card" id="card${id}" style='width: 18rem;'>
       <div class="card-body">
       <img class="card-img" src="${img}"></img>
       <h5 class="card-title">${name}</h5>`;
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
