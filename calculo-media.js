function notaAluno() {
    let nome = prompt("Qual é o seu nome ?");
    let n1 = Number(prompt("Digite sua nota Nº1:"));
    let n2 = Number(prompt("Digite sua nota Nº2:"));
    media = (n1 + n2)/2

   let msg 
    if(media >=6){
        msg = "Parabéns!";
    }else{
        msg = "Precisa estudar um pouco mais !";
    }

    let res =document.getElementById('situacao');
    res.innerHTML = `<p> Calculando a media final de <mark>${nome}<mark>.<p>`;
    res.innerHTML += `<p> As notas obtidas foram <mark>${n1} e ${n2}<mark>.<p>`;
    res.innerHTML += `<p> A media final é <mark>${media}<mark>.<p>`;
    res.innerHTML += `<p> A mensagem que temos é: <strong style='color:red;'>${msg}</strong>.<p>`; // css para msg ficar vermelha
}


