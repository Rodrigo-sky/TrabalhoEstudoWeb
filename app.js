const API_KEY = 'a6fac8ae05f349c34a524ec87df44498';

// function exibeFilmes () {
//     let divTela = document.getElementById('tela');
//     let texto = '';

//     // Montar texto HTML das noticias
//     let dados = JSON.parse (this.responseText);
//     for (i=0; i< dados.articles.length; i++) {
//         let noticia = dados.articles[i];
//         let data = new Date (noticia.publishedAt);

//         texto = texto + `
//             <div class="box-noticia">
//                 <img src="${noticia.urlToImage}" alt="">
//                 <span class="titulo">${noticia.title}</span><br>
//                 <span class="creditos">${data.toLocaleDateString ()} - 
//                     ${noticia.source.name} - 
//                     ${noticia.author}</span><br>
//                 <span class="text">
//                 ${noticia.content} <a href="${noticia.url}">Leia mais ...</a>
//                 </span>
//             </div>            
//         `;
//     };

//     // Preencher a DIV com o texto HTML
//     divTela.innerHTML = texto;
// }
function aletta() { 
    alert('funcionou')
};

function exibePopular(){
    aletta();
    let divPopulares = document.getElementById('telaPopular');
    let texto = '';

    let dadoPopular = JSON.parse(this.responseText);
    for (i=0; i< dadoPopular.results.length; i++) {
        let Popular = dadoPopular.results[i];
        texto = texto + `
        <div class="carousel-item active">
            <img src="https://image.tmdb.org/t/p/w94_and_h141_bestv2${Popular.poster_path}" class="d-block w-100" alt="Descrição 1">
        </div>
        `

    };
    divPopulares.innerHTML = texto;

};


function testPopular() {
    let xhr = new XMLHttpRequest();
    xhr.onload = exibePopular();
    xhr.open ('GET', `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR&region=BR`);
    xhr.send ();
}

document.getElementById ('btnSearch').addEventListener ('click', exibePopular);