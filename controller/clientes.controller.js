window.onload = () => {    
    const url = 'http://192.168.1.9/clientes-lista';
    const table = document.getElementById('tabela-clientes')
    table.innerHTML = `<tr>
        <th class="table-dark">Id</th>
        <th class="table-dark">Nome</th>
        <th class="table-dark">Rua</th>
        <th class="table-dark">Numero</th>
        <th class="table-dark">Bairro</th>
        <th class="table-dark">Telefone</th>
        <th class="table-dark">Email</th>
        </tr>`

    fetch(url)
    .then(src=>{
        return src.json();
    })
    .then(src=>{
        for(i in src) {
            tabelaUtils('tabela-clientes').adicionarLinha(src[i])
        }
    })
};

function tabelaUtils(idTabela) {
    const tabela = document.getElementById(idTabela);

    function getTrFormatada(src) {

        return `
        <tr class="fields accordion-item">
        <td>${src.id_cliente}</td> 
        <td>${src.nm_cliente}</td> 
        <td>${src.nm_rua}</td> 
        <td>${src.nr_casa}</td>
        <td>${src.nm_bairro}</td>
        <td>${src.tl_telefone}</td>
        <td>${src.email}</td>
        </tr>
        `;
        
    }
    
    return {
        adicionarLinha: function (src) {
            tabela.innerHTML += getTrFormatada(src);
        }
    }
}

function searchFields() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('fields');
    
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="table-row";                 
        }
    }
}