$(document).on("click", ".boxCandidato", function () {
  const id = $(this).attr('id');
  const foto = $(`#${id}`).find('.headBox').find('.foto').html();
  const nome = $(`#${id}`).find('.headBox').find('.nome').html()

  $('.btnConfirmar').attr('id', id)
  $('#titleModal').html(nome)
  $('.containerModal').html(foto);
  $('.modal-footer').show()

});

$(document).on('click', '.btnConfirmar', function () {
  const id = $(this).attr('id')

  $('.modal-footer').hide()
  $('.modal-content').html("<div class='displayFlex'><div class='loaderMin'></div></div>");

  requestVoto(id);

});


$(document).on('click', '.btnBranco', function () {
  const id = $(this).attr('id')

  $('.modal-footer').hide()
  $('.modal-content').html("<div class='displayFlex'><div class='loaderMin'></div></div>");

  requestVoto(0);

});


const checkUseAgent = () => {
  if (navigator.userAgent.toLowerCase().indexOf("android") > -1) {
    return 'Android'
  } else if (navigator.userAgent.toLowerCase().indexOf("iphone") > -1) {
    return 'iOS'
  } else {
    return 'Other'
  }
}


const requestVoto = (id) => M.toast({
  html: 'O Voto é secreto e ninguém irá saber sua identidade! :)', classes: 'rounded', outDuration: 400, inDuration: 400, completeCallback: function () {
    const voted = localStorage.getItem('voted')


    if (!voted) {

      $.ajax(`./api/votar.php?candidato=${id}`)
        .done(function (json) {
          let mensage = json.mensage;
          if (mensage) {
            $('.modal').css('background-color', '#8bc34a').css('color', '#fff')
            $('.displayFlex').html("<i class='material-icons'>check</i> <span>Voto efetuado com sucesso!</span>")

            if (checkUseAgent() === 'Android' || checkUseAgent() === 'iOS') {
              localStorage.setItem('voted', true)
            }

            playSong('comfirmacao');
            setTimeout(() => location.reload(), 2500)
          }
        })

    } else {
      $('.modal').css('background-color', '#F44336').css('color', '#fff')
      $('.displayFlex').html("<i class='material-icons'>close</i> <span>Você já votou antes!</span>")
      $('.modal-footer').html("")
    }


  }
});



$(document).on('click', '.btnCorrigir', () => $('.modal-overlay').click())

// ../imgs/candidatos/
const roletaView = object => $('#wrap').html(`<div class='boxCandidatoBig z-depth-1' id='${object.id}'> 
  <div class='headBox'>
    <div class='foto'>
      <img class="z-depth-1" src="${object.foto}" />
    </div>
    <div class='nome'>
      ${object.nome}
    </div>
    <div class='numero_partido'>
     
    </div>
  </div>
</div>`);



let count = 0;
$('#verResultado').click(function () {

  $(this).hide();
  
  playSong('roleta');

  let candidato = DADOS[Math.floor(Math.random() * DADOS.length)];
  roletaView(candidato);


  let interval = setInterval(function () {
    let candidato = DADOS[Math.floor(Math.random() * DADOS.length)];
    roletaView(candidato)
    count++;
    if (count == 42) {
      clearInterval(interval)
      stopSong();

      ganhador(candidato);
    }
  }, 500)

})


const ganhador = candidato => {
  // let candidatos = candidato;

  // candidatos = candidatos.sort(function (a, b) {

  //   if (parseInt(a.numeroDeVotos) > parseInt(b.numeroDeVotos)) {
  //     return -1;
  //   }
  //   return 1;
  // });


  console.log('candidato >>>', candidato)

  const primeiro = candidato;


  // let porcentagemPrimeiro = primeiro.numeroDeVotos / TOTAL * 100;
  // porcentagemPrimeiro = porcentagemPrimeiro.toFixed(2);


  // let porcentagemSegundo = segundo.numeroDeVotos / TOTAL * 100;
  // porcentagemSegundo = porcentagemSegundo.toFixed(2);


  // let porcentagemTerceiro = terceiro.numeroDeVotos / TOTAL * 100;
  // porcentagemTerceiro = porcentagemTerceiro.toFixed(2);


  // ../imgs/candidatos/
  $('#wrap').html(`<div class='podio'>
    <div class="primeiro">
      <div class='boxCandidatoBig z-depth-1' id='${primeiro.id}'> 
      <div class='headBox'>
        <div class='foto'>
          <img class="z-depth-1" src="${primeiro.foto}" />
        </div>
        <div class='nome'>
          ${primeiro.nome}
        </div>
      </div>
    </div>
    </div>
  </div>`);


  playSong('pyro');

  $('#wrap').append(`<div class="pyro">
<div class="before"></div>
<div class="after"></div>
</div>`)



}

