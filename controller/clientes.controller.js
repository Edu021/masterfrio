window.onload = () => {    
    const url = 'http://127.0.0.1/clientes-lista';
    const table = document.getElementById('tabela-clientes')
    table.innerHTML = `<tr>
        <th>Id</th>
        <th>Nome</th>
        <th>Rua</th>
        <th>Numero</th>
        <th>Bairro</th>
        <th>Telefone</th>
        <th>Email</th></tr>`

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
        <tr>
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
