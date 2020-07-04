
async function loadTodos() {
    
    // contantes
    const url =
    "https://my-json-server.typicode.com/VilelaMarcus/FrameworkTest/Albuns"; 

    // get api
    const todosList = await fetch(url).then(res => res.json());
    
    console.log(todosList);
    
    let arrays = todosList.map( function(e){    
    return [e.id, e.userId, e.title]
    })


    console.log(arrays)
    
    function criarTabela(conteudo) {
        let tabela = document.createElement("table");
        tabela.className = "tabela"
        tabela.id = "remove"
        let thead  = document.createElement("thead");
        thead.className = "thead"
        let tbody  = document.createElement("tbody");
        tbody.className = "tbody"
        tbody.id = "tbody"
        let thd = function(i){return (i==0)?"th":"td";};
            for (let i=0;i<conteudo.length;i++) {                
                let tr = document.createElement("tr");
                for(let o=0;o<conteudo[i].length;o++){
                    let t = document.createElement(thd(i));
                    t.className = `${thd(i)}`                    
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
        ["id","userId","title"],
        ...arrays]))
    
    let conteudo = document.getElementById('conteudo')
    conteudo.display = "none"    
    
    document.getElementById("txtBusca").addEventListener("keyup", function(){
        let busca = document.getElementById("txtBusca").value.toLowerCase()
         for(let i =0; i < arrays.length ; i++){
            let tr = arrays[i]
            for(let j =0; j < tr.length ; j++){    
                let valor = tr[j]        
                var n = valor.toString();
                let tb = document.getElementById('tbody')               
                if(n.indexOf(busca) != -1){
                    let conteudo = document.getElementById('conteudo')                    
                    tb.style.display = "none"                    
                    conteudo.innerHTML = tr
                }
                if(busca == ''){                                       
                    tb.style.display = "table-row-group"  
                    conteudo.innerHTML = ''                
                }
            }
        }

    })


}
  
loadTodos();     