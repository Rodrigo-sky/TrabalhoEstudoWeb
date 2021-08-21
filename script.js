const TMDB_ENDPOINT_BASE = 'https://api.themoviedb.org/3';

// Função que cria os cards dos filmes
function MostraFilmesEmCartaz () {
    //Executar requisição AJAX

    $.ajax({
        // Passar a URL ENDPOINT BASE + /movie/now_playing
        url: TMDB_ENDPOINT_BASE + '/movie/popular',
        data: {
            api_key: 'a6fac8ae05f349c34a524ec87df44498',
            language: 'pt-BR'
        }
    })
    // Receber o JSON
    .done(function (data) {

        let codigo_html = '';
        
         // Montar os cards
         for (i=0; i < data.results.length; i++) {

            // Concatenar o código do Card com os dados do JSON
            titulo = data.results[i].title;
            imagem = 'https://image.tmdb.org/t/p/w500' + data.results[i].poster_path;
            descricao = data.results[i].overview;
            id = data.results[i].id;

            if(descricao == "") {
                descricao = "Não há sinopse disponivel em pt-BR.<br>Para mais informações visite a pagina do The Movie Db";
             }

            codigo_html += `<div class="col mb-3">
            <div class="card h-100">
              <img src="${imagem}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${titulo}</h5>
                <p class="card-text overflow-auto">${descricao}</p>
                <a href="https://www.themoviedb.org/movie/${id}" class="btn btn-link">Saiba mais em The Movie Db</a>
              </div>
            </div>
          </div>`;
         }


        // Repassar os cards para a página
         $('#telaPopular').html(codigo_html);


    }); 

}



function PesquisaFilmes () {
    //Executar requisição AJAX

    $.ajax({
        
        
        // Passar a URL ENDPOINT BASE + /movie/now_playing
        url: TMDB_ENDPOINT_BASE + '/search/movie',
        data: {
            api_key: 'a6fac8ae05f349c34a524ec87df44498',
            language: 'pt-BR',
            query: document.getElementById("txtSearch").value
        }
    })
    
    
    // Receber o JSON
    .done(function (data) {

        let codigo_html = '';
        
         // Montar os cards
         for (i=0; i < 4; i++) {

            // Concatenar o código do Card com os dados do JSON
            titulo = data.results[i].title;
            imagem = 'https://image.tmdb.org/t/p/w500' + data.results[i].poster_path;
            descricao = data.results[i].overview;
            id = data.results[i].id;

            if(descricao == "") {
                descricao = "Não há sinopse disponivel em pt-BR.<br>Para mais informações visite a pagina do The Movie Db";
             }

            codigo_html += `<div class="col mb-3">
            <div class="card h-100">
              <img src="${imagem}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${titulo}</h5>
                <p class="card-text overflow-auto">${descricao}</p>
                <a href="https://www.themoviedb.org/movie/${id}" class="btn btn-link">Saiba mais em The Movie Db</a>
              </div>
            </div>
          </div>`;
         }


        // Repassar os cards para a página
         $('#telaPesquisa').html(codigo_html);


    }); 

}




$( document ).ready(function () {

    MostraFilmesEmCartaz ();

    $('#btnSearch').click (PesquisaFilmes);
});