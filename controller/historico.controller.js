allItems = []
window.onload = () => {    
    const url = '/servicos-lista';
    const table = document.getElementById('tabela-agenda')
    table.innerHTML = `<tr>
    <th class="table-dark">Cliente</th>
    <th class="table-dark">Rua</th>
    <th class="table-dark">Numero</th>
    <th class="table-dark">Bairro</th>
    <th class="table-dark">Categoria</th>
    <th class="table-dark">Data e hora</th>
    <th class="table-dark">Valor</th>
    <th class="table-dark"></th>
    </tr>`

    fetch(url)
    .then(src=>{
        return src.json();
    })
    .then(src=>{
        console.log(src)
        for(i in src) {
            allItems[i] = src[i];
            tabelaUtils('tabela-agenda').adicionarLinha(src[i])
        }
        return src;
    })
    .then(src=>{
        let valorServicos = 0;
        for(i in src) {
            valorServicos = src[i].vl_pago + valorServicos;
        }
    //     table.innerHTML += `<tr>
    //     <th class="table-dark">Total</th>
    //     <td>${"R$ " + valorServicos}</td>
    // </tr>`
        
    })
};


function tabelaUtils(idTabela) {
    const tabela = document.getElementById(idTabela);

    function getTrFormatada(src) {

        return `
        <tr class="fields accordion-item">
        <td>${src.nm_cliente}</td>
        <td>${src.nm_rua}</td> 
        <td>${src.nr_casa}</td>
        <td>${src.nm_bairro}</td>
        <td>${src.tipo_servico}</td>
        <td>${src.dt_servico}</td>
        <td>${"R$ " + src.vl_pago}</td>
        <td><button class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#editModal" onclick="editRow(${allItems.indexOf(src)})">Editar</button></td>
        
        </tr>`;
        // <td><button class="btn btn-secondary btn-sm" onclick="showDetails(${allItems.indexOf(src)})" data-bs-toggle="modal" data-bs-target="#detailsModal">Detalhes</button></td>
    }
    // function getTrFormatadaDetails(src) {
    //     return `
    //     <tr class="fields accordion-item">
    //     <td>${src.nm_cliente}</td>
    //     <td>${src.nm_rua}</td> 
    //     <td>${src.nr_casa}</td>
    //     <td>${src.nm_bairro}</td>
    //     <td>${src.tipo_servico}</td>
    //     <td>${src.dt_servico}</td>
    //     <td>${"R$ " + src.vl_pago}</td>
    //     </tr>`;
    // }
    
    return {
        adicionarLinha: function (src) {
            tabela.innerHTML += getTrFormatada(src);
        },
        // adicionarLinhaDetalhes: function (src) {
        //     tabela.innerHTML += getTrFormatadaDetails(src);
        // }
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

function editRow(index) {
    src = allItems[index]
    document.getElementById('rua').value = src.nm_rua;
    document.getElementById('numero').value = src.nr_casa;
    document.getElementById('bairro').value = src.nm_bairro;
    document.getElementById('valor').value = src.vl_pago;
    document.forms.editForm.action = `/servicos-lista/${src.id_servico}`;
    document.forms.editForm.method = 'POST';
    console.log(document.forms.editForm);
}

// function showDetails(src) {
//     const all = allItems[src-1];
//     document.getElementById('detailsModalLabel').innerText = `Detalhes ${all.nm_cliente}`;
//     tabelaUtils('detailsTable').adicionarLinhaDetalhes(all);


//     // document.getElementById()

// }