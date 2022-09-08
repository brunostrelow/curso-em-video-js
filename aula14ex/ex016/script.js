function contar() {
    var inicio = document.getElementById('inic')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    let res = document.getElementById('res')
    if (inicio.value.length == '0' || fim.value.length == '0' || passo.value.length == '0') {
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando Passo 1')
            p = 1
        }
        if (i < f) {
            // Contagem crescente
            for (let c = i; c <= f; c += p) {
            res.innerHTML += `${c} &#128073`
            } 
        } else {
            // Contagem regressiva
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} &#128073` 
            }
        }
        res.innerHTML += `&#127937`
    }
    
}