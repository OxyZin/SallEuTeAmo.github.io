// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Função para formatar o tempo em HH:MM:SS
    function formatarTempo(horas, minutos, segundos) {
        return `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
    }

    // Função para obter e exibir uma cantada
    function exibirCantada() {
        // Lógica para obter uma nova cantada (pode ser uma lista de cantadas)
        const cantadas = [
            "Você não é Google, mas tem tudo o que eu procuro.",
            "Você acredita em amor à primeira vista ou devo passar por aqui novamente?",
            // Adicione mais cantadas conforme necessário
        ];

        // Escolha aleatoriamente uma cantada da lista
        const cantadaAleatoria = cantadas[Math.floor(Math.random() * cantadas.length)];

        // Exiba a cantada no elemento HTML
        document.getElementById('cantada').textContent = cantadaAleatoria;
    }

    // Função para atualizar o letreiro e a cantada
    function atualizarLetreiro() {
        // Obtenha o tempo atual em segundos
        const segundosDecorridos = Math.floor(Date.now() / 1000);

        // Calcule as horas, minutos e segundos restantes
        const horasRestantes = Math.max(24 - Math.floor(segundosDecorridos / 3600), 0);
        const minutosRestantes = Math.floor((segundosDecorridos % 3600) / 60);
        const segundosRestantes = segundosDecorridos % 60;

        // Exiba o tempo decorrido no elemento HTML
        document.getElementById('tempo').textContent = formatarTempo(horasRestantes, minutosRestantes, segundosRestantes);

        // Chame a função para exibir a cantada a cada 24 horas (86400 segundos)
        if (segundosDecorridos % 86400 === 0) {
            exibirCantada();
        }

        // Agende a próxima chamada após 1 segundo
        setTimeout(atualizarLetreiro, 1000);
    }

    // Chame a função para exibir a cantada inicialmente
    exibirCantada();

    // Agende a próxima chamada após 1 segundo
    setTimeout(atualizarLetreiro, 1000);
});
