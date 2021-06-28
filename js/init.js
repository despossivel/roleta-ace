let DADOS, TOTAL;

const dados = [
  { id: '1', nome: 'Matheus', partido: 'dev', foto: 'https://www.vagalume.com.br/daft-punk/images/daft-punk.jpg', numero: '1' },
  { id: '2', nome: 'Stella', partido: 'dev', foto: 'https://s3.amazonaws.com/TWFiles/61960/userAvatar/tf_ff774a61-ba13-4ed8-a6d2-7f3c7f01ad5f.avatar.jpg', numero: '2' },
  { id: '3', nome: 'Joao', partido: 'dev', foto: 'https://s3.amazonaws.com/TWFiles/61960/userAvatar/tf_4cb1399d-8e27-4d25-9e35-a3f07c1b707b.joao.png', numero: '3' },
  { id: '4', nome: 'William', partido: 'design', foto: 'https://s3.amazonaws.com/TWFiles/61960/userAvatar/tf_09efde32-ed4e-4f67-9933-885b357a0ead.will.jpg', numero: '4' },
  { id: '5', nome: 'Pricila', partido: 'agil', foto: 'https://s3.amazonaws.com/TWFiles/61960/userAvatar/tf_ce5f57c4-43f1-4685-be34-02a85237f450.17554091_1376268985765023_7678593510644646939_n_-_Priscila_Collalto.jpg', numero: '5' },
  { id: '6', nome: 'Thiago', partido: 'po', foto: 'https://s3.amazonaws.com/TWFiles/61960/userAvatar/tf_728e1a51-8ff1-4e6c-b165-77b8e1686ec5.avatar.jpg', numero: '6' },
  { id: '7', nome: 'Mauricio', partido: 'dev', foto: 'https://s3.amazonaws.com/TWFiles/61960/userAvatar/tf_a77cce26-08c0-4d45-bf6d-954d5036755c.Eu_-_Mauricio_Rezende.jpg', numero: '7' },
  { id: '8', nome: 'Gabriel', partido: 'design', foto: 'https://lh3.googleusercontent.com/a-/AOh14Gim_BmLT4t0g11YkeycTAz-ss6JTh4tOHrOL3eA=s192-c-mo', numero: '8' }
] //json.dados;


const init = () => {

  // $.ajax("./api/candidatos.php")
  //   .done(function (json) {
  // const dados = [{ id: '1', nome: 'Matheus', partido: 'dev', foto: 'https://www.vagalume.com.br/daft-punk/images/daft-punk.jpg', numero: '1' }] //json.dados;
  const length = dados.length;

  console.log('length >> ', length)

  $('#wrap').empty();

  for (let i = length - 1; i >= 0; i--) {
    const id = dados[i].id;
    const nome = dados[i].nome;
    const numeroDeVotos = dados[i].numeroDeVotos;
    const partido = dados[i].partido;
    const foto = dados[i].foto;
    const numero = dados[i].numero;


    // ../imgs/candidatos/

    $('#wrap').append(`<a data-target="modal1" class="modal-trigger boxCandidato z-depth-1" href="#" id='${id}'> 
                            <div class='headBox'>
                              <div class='foto'>
                                <img class="z-depth-1" src="${foto}" /> 
                              </div>
                              <div class='nome'>
                                ${nome}
                              </div>
                              <div class='numero_partido'>
                               
                              </div>
                            </div>
                            </a>`);

  }
  // })
}
// ${numero} - ${partido}

const initResultado = () => {

  // $.ajax("./api/resultado.php")
  //   .done(function (json) {
  const totalVotos = [{}] // json.totalVotos;
  // const dados = json.dados;
  const length = dados.length;

  DADOS = dados;
  TOTAL = totalVotos;

  // $('.title').html(`${totalVotos} deixaram sua intenção de voto.`);
  $('.title').html(`Random daily`);
  $('#wrap').empty();

  for (let i = length - 1; i >= 0; i--) {
    const id = dados[i].id;
    const nome = dados[i].nome;
    // const numeroDeVotos = dados[i].numeroDeVotos;
    const partido = dados[i].partido;
    const foto = dados[i].foto;
    const numero = dados[i].numero;

    // let porcentagem = numeroDeVotos / totalVotos * 100;
    // porcentagem = porcentagem.toFixed(2);
    // ${porcentagem}%

    // ../imgs/candidatos/

    $('#wrap').append(`<div class='boxCandidato z-depth-1' id='${id}'> 
                              <div class='headBox'>
                                <div class='foto'>
                                  <img src="${foto}" />
                                </div>
                                <div class='nome'>
                                  ${nome}
                                </div>
                                <div class='numero_partido'>
                                 
                                </div>
                              </div>
                          </div>`);

  }

  // });
}