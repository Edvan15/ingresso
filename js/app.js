function comprar() {
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = document.getElementById('qtd').value;
    
    if(qtd <=0) {
        alert('Insirta um numero válido')
    } else {


       if (tipo.value == 'pista') {
            comprarPista(qtd);
        } else if (tipo.value == 'superior') {
            comprarSuperior(qtd);  
        } else { 
            tipo.value == 'inferior';
            comprarInferior(qtd); 

        }
    }
    
}

function comprarSuperior(qtd) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (qtd > qtdSuperior) {
        alert('Quantidade indisponível para tipo superior');
    } else {
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra realizada com sucesso!');
    }
}

    function comprarInferior(qtd) {
        let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
        if (qtd > qtdInferior) {
            alert('Quantidade indisponível para tipo Inferior');
        } else {
            qtdInferior = qtdInferior - qtd;
            document.getElementById('qtd-inferior').textContent = qtdInferior;
            alert('Compra realizada com sucesso!');
        }    
}

function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (qtd > qtdPista) {
        alert('Quantidade indisponível para tipo pista');
    } else {
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso!');
    }
}

    
