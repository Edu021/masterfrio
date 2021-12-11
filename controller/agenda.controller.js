window.onload = () => {    
    const url = 'http://192.168.1.11/servicos-lista';
    const table = document.getElementById('tabela-agenda')
    table.innerHTML = `<tr>
    <th class="table-dark">Cliente</th>
    <th class="table-dark">Rua</th>
    <th class="table-dark">Numero</th>
    <th class="table-dark">Bairro</th>
    <th class="table-dark">Categoria</th>
    <th class="table-dark">Data e hora</th>
    <th class="table-dark">Valor</th>
</tr>`

    fetch(url)
    .then(src=>{
        return src.json();
    })
    .then(src=>{
        console.log(src)
        for(i in src) {
            tabelaUtils('tabela-agenda').adicionarLinha(src[i])
        }
        return src;
    })
    .then(src=>{
        let valorServicos = 0;
        for(i in src) {
            valorServicos = src[i].vl_pago + valorServicos;
        }
        table.innerHTML += `<tr>
        <th class="table-dark">Total</th>
        <td>${"R$ " + valorServicos}</td>
    </tr>`
        
    })
};


function tabelaUtils(idTabela) {
    const tabela = document.getElementById(idTabela);

    function getTrFormatada(src) {

        return `
        <tr class="fields">
        <td>${src.nm_cliente}</td>
        <td>${src.nm_rua}</td> 
        <td>${src.nr_casa}</td>
        <td>${src.nm_bairro}</td>
        <td>${src.tipo_servico}</td>
        <td>${src.dt_servico}</td>
        <td>${"R$ " + src.vl_pago}</td>
        
        
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