// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Função para obter e exibir uma cantada
    function exibirCantada() {
        // Lista de cantadas
        const cantadas = [
            "Você não é Google, mas tem tudo o que eu procuro.",
            "Você acredita em amor à primeira vista ou devo passar por aqui novamente?",
            "Pra que usar metadinha se a gente pode usar aliança?",
            "Eu não sou o Buzz Lightyear, mas posso levar nosso relacionamento ao infinito e além.",
            "A intimidade a gente já pegou, mas agora já pode chegar beijando?",
            "Se beleza fosse crime, você seria condenado à morte.",
            "Eu não tenho chocolate, mas se você procura alguém doce, eu estou aqui.",
            "Não sou papelaria, mas se você quiser, eu posso fazer o papel de ser o amor da sua vida.",
            "EuTeAmo sem vírgula, sem ponto, sem espaço e ponto final!",
            "Que mão linda! Ficaria melhor se eu colocasse uma aliança nela.",
            "Vermelho é vermelho, rosa é rosa. Você deixa sua mãe ser minha sogra?",
            "Me desculpe, Leia, mas o fenômeno mais lindo é o seu sorriso.",
            "Você não é o Batman, mas acelerou meus BATMENtos cardíacos.",
            "Te desejo noite (para ser boa, nós teríamos que estar juntos).",
            "Valorize sua mãe, um dia ela será minha sogra.",
            "Casa comigo, eu sei fazer miojo.",
            "Pode me chamar de Will Smith, porque quando te vi, o maluco ficou em pedaços.",
            "Sim, eu tenho ciúmes de você. Quem divide é calculadora, não eu.",
            "Mona Lisa é só um rabisco comparado com o seu sorriso.",
            "Quem dá golpe é lutador, já eu sou igual ao Itaú: feito para você.",
            "Jesus, eu pedi uma pessoa decente, não uma deusa grega 🙏",
            // Adicione mais cantadas conforme necessário
        ];

        // Escolha aleatoriamente uma cantada da lista
        const cantadaAleatoria = cantadas[Math.floor(Math.random() * cantadas.length)];

        // Exiba a cantada no elemento HTML
        document.getElementById('cantada').textContent = cantadaAleatoria;
    }

    // Chame a função para exibir uma cantada inicialmente
    exibirCantada();
});
