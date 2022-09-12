let num = document.getElementById('txtn')
let lista = document.getElementById('tabela')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <=100){
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    let n = Number(num.value)
    
    if (isNumero(num.value) && !inLista(num.value, valores)) {  
        valores.push(n)      
        let item = document.createElement('option')
        item.text = `O valor ${n} foi adicionado` 
        item.value = `lista${n}`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor invalido ou já encontrado na lista!')
    }
    num.value = ''
    num.focus()    
}

function finalizar() {
    if (valores.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    } else{
        let nCadastrados = valores.length
        let maiorNumero = Math.max.apply(null, valores)
        let menorNumero = Math.min.apply(null, valores)
        let somaNumeros = valores.reduce((somaNumeros, valores) => somaNumeros + valores, 0)
        let mediaNumeros = somaNumeros/nCadastrados
    
        res.innerHTML = `Temos um total de ${nCadastrados} números na lista!`
        res.innerHTML += `<br>O maior número da lista é ${maiorNumero}`
        res.innerHTML += `<br>O menor número da lista é ${menorNumero}`
        res.innerHTML += `<br>A soma dos números da lista é ${somaNumeros}`
        res.innerHTML += `<br>A média dos números da lista é ${mediaNumeros}`
    }
}