function pesquisar() {
    // Seleciona a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (!campoPesquisa) {
        section.innerHTML = "<p>Nenhum dado foi localizado. Por gentileza, inserir uma pesquisa.</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase() 

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tag = dado.tags.toLowerCase(

        )
        //se titulo includes campoPesquisa 
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)||tags.includes(campoPesquisa) ){  
            // Cria um novo item de resultado formatado em HTML
            resultados += `
              <div class="item-resultado">
                <h2><a href="#" target="_blank">${dado.titulo}</a></h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
              </div>
            `;

        }
            
    
    }
  if (!resultados){
    resultados = "<p>Nenhum dado foi localizado.</p>"
  }
    // Atualiza o conteúdo da seção com os resultados da pesquisa gerados
    section.innerHTML = resultados;
  }


