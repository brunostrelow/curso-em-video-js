function tabuada () {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')    
    if (num.value.length == 0) {
        window.alert('[ERRO] Número não pode estar vazio')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''
        for (let m = 1; m <= 10; m++){
            let item = document.createElement('option')
            item.text= `${n} x ${m} = ${n*m}` 
            item.value = `tab${m}`
            tab.appendChild(item)
        }
    }
}
