function getInformacoesCliente () {
    let id = document.getElementById('id_cliente').value
    let apiUrl = '/clientes-lista'
    fetch(apiUrl)
    .then(src=>{
        return src.json();
    })
    .then(src=>{
        for(i in src) {
            if(src[i].id_cliente == id) {
                document.getElementById('endereco').value = src[i].nm_rua;
                document.getElementById('bairro').value = src[i].nm_bairro;
                document.getElementById('numero').value = src[i].nr_casa;
                document.getElementById('telefone').value = src[i].tl_telefone;
            }
        }
    })
    if(id == '') {
        document.getElementById('endereco').value = '';
        document.getElementById('bairro').value = '';
        document.getElementById('numero').value = '';
        document.getElementById('telefone').value = '';
    }
}
