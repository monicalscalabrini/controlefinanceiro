let chart;

function criarGrafico() {
  const ctx = document.getElementById('grafico').getContext('2d');

  chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Entradas €', 'Saídas €', 'Entradas R$', 'Saídas R$'],
      datasets: [{
        label: 'Valores',
        data: [0, 0, 0, 0]
      }]
    },
    options: {
      responsive: true
    }
  });
}
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

  // 🔥 LIMPAR CAMPOS
  document.getElementById("desc").value = "";
  document.getElementById("valor").value = "";
  document.getElementById("tipo").value = "entrada";
  document.getElementById("moeda").value = "euro";
}