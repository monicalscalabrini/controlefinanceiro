let chart;

let euroIn = 0, euroOut = 0;
let realIn = 0, realOut = 0;
let cotacao = 5.82;

function criarGrafico() {
  const ctx = document.getElementById('grafico').getContext('2d');


options: {
  responsive: true,
  maintainAspectRatio: false, // 🔥 ISSO AQUI É O SEGREDO

  plugins: {
    legend: {
      labels: {
        color: '#ffffff'
      }
    }
  },

  scales: {
    x: {
      ticks: { color: '#ffffff' }
    },
    y: {
      ticks: { color: '#ffffff' }
    }
  }
}

  
  chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Entradas €', 'Saídas €', 'Entradas R$', 'Saídas R$'],
      datasets: [{
        label: 'Valores',
        data: [0, 0, 0, 0],
        backgroundColor: [
          '#00ff88',
          '#ff4d4d',
          '#00c2ff',
          '#ff9f40'
        ],
        borderRadius: 8
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          labels: { color: '#ffffff' }
        }
      },
      scales: {
        x: {
          ticks: { color: '#ffffff' }
        },
        y: {
          ticks: { color: '#ffffff' }
        }
      }
    }
  });
}

// 🔥 ADD (SÓ RESPONSÁVEL POR ADICIONAR)
function add() {
  let valor = parseFloat(document.getElementById("valor").value);
  let tipo = document.getElementById("tipo").value;
  let moeda = document.getElementById("moeda").value;

  if (isNaN(valor)) return;

  if (tipo === "entrada") {
    moeda === "euro" ? euroIn += valor : realIn += valor;
  } else {
    moeda === "euro" ? euroOut += valor : realOut += valor;
  }

  update();

  // limpar
  document.getElementById("desc").value = "";
  document.getElementById("valor").value = "";
  document.getElementById("tipo").value = "entrada";
  document.getElementById("moeda").value = "euro";
}

// 🔥 UPDATE (SEPARADO E LIMPO)
function update() {
  let saldoEuro = euroIn - euroOut;
  let saldoReal = realIn - realOut;

  let totalConvertido = saldoEuro * cotacao;

  document.getElementById("euroIn").innerText = euroIn.toFixed(2);
  document.getElementById("realIn").innerText = realIn.toFixed(2);
  document.getElementById("euroOut").innerText = euroOut.toFixed(2);
  document.getElementById("realOut").innerText = realOut.toFixed(2);

  document.getElementById("saldoEuro").innerText = saldoEuro.toFixed(2);
  document.getElementById("saldoReal").innerText = (saldoReal + totalConvertido).toFixed(2);
  document.getElementById("totalConvertido").innerText = totalConvertido.toFixed(2);

  // atualizar gráfico
  chart.data.datasets[0].data = [
    euroIn,
    euroOut,
    realIn,
    realOut
  ];

  chart.update();
}

// 🔥 INICIAR
window.onload = function () {
  criarGrafico();
};
