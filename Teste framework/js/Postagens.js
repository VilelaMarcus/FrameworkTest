
async function loadTodos() {
    
    // contantes
    const url =
    "https://my-json-server.typicode.com/VilelaMarcus/FrameworkTest/Postagens"; 

    // get api
    const todosList = await fetch(url).then(res => res.json());
    
    console.log(todosList);
    
    let arrays = todosList.map( function(e){    
    return [e.albumId, e.id, e.title, e.url, e.thumbnailUrl]
    })


    console.log(...arrays)
    
    function criarTabela(conteudo) {
        let tabela = document.createElement("table");
        tabela.className = "tabela"
        let thead  = document.createElement("thead");
        thead.className = "thead"
        let tbody  = document.createElement("tbody");
        tbody.className = "tbody"
        let thd = function(i){return (i==0)?"th":"td";};
            for (let i=0;i<conteudo.length;i++) {                
                let tr = document.createElement("tr");
                for(let o=0;o<conteudo[i].length;o++){
                    let t = document.createElement(thd(i));                    
                    let texto=document.createTextNode(conteudo[i][o]);
                    t.appendChild(texto);
                    tr.appendChild(t);
            }
                (i==0)?thead.appendChild(tr):tbody.appendChild(tr);
            }
        tabela.appendChild(thead);
        tabela.appendChild(tbody);
        return tabela;
    }
    
            
    
    document.getElementById("tabela").appendChild(criarTabela([
        ["albumId","id","title","url","thumbnailUrl"],
        ...arrays]))
   
}
  
loadTodos();     