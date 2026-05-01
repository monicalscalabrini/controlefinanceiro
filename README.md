

# 💰 Controle Financeiro

Aplicação web simples para gerenciamento de finanças pessoais, permitindo registrar entradas e saídas em diferentes moedas, calcular saldo e visualizar os dados por meio de gráficos.

---

## 🚀 Funcionalidades

* Adicionar transações (entrada ou saída)
* Suporte a múltiplas moedas:

  * Euro (€)
  * Real (R$)
* Conversão automática de Euro para Real
* Cálculo de:

  * Total de entradas
  * Total de saídas
  * Saldo em Euro
  * Saldo total em Real
* Gráfico dinâmico com atualização em tempo real (Chart.js)
* Limpeza automática dos campos após adicionar uma transação

---

## 🖥️ Tecnologias utilizadas

* HTML5
* CSS3
* JavaScript (Vanilla JS)
* Chart.js (biblioteca para gráficos)

---

## 📊 Como funciona

1. O usuário insere:

   * descrição
   * valor
   * tipo (entrada ou saída)
   * moeda (Euro ou Real)

2. Ao clicar em **"Adicionar"**:

   * os valores são atualizados nos cards
   * o saldo é recalculado
   * o gráfico é atualizado automaticamente
   * os campos são limpos para nova inserção

---

## 📈 Estrutura do projeto

```bash
controle-financeiro/
│
├── index.html
└── README.md
```

---

## 🧠 Lógica principal

* As entradas e saídas são armazenadas em variáveis separadas:

  * `euroIn`, `euroOut`
  * `realIn`, `realOut`

* O saldo é calculado com base nesses valores:

  * `saldoEuro = euroIn - euroOut`
  * `saldoReal = (realIn - realOut) + conversão do saldo em euro`

---

## 💱 Conversão de moeda

* A conversão utiliza uma taxa fixa:

  ```
  1 € = 5.82 R$
  ```

* O saldo em Euro é convertido automaticamente para Real e somado ao saldo em R$.

---

## 📊 Gráfico

* Implementado com **Chart.js**
* Tipo: gráfico de barras
* Atualizado em tempo real com os valores:

  * Entradas €
  * Saídas €
  * Entradas R$
  * Saídas R$

---

## 🎯 Objetivo do projeto

Este projeto foi desenvolvido com foco em:

* Praticar lógica de programação
* Manipulação do DOM
* Organização de interface (UI)
* Trabalhar com eventos e atualização dinâmica
* Integração com bibliotecas externas

---

## 🔮 Melhorias futuras

* Armazenamento de dados com `localStorage`
* Histórico de transações
* Exclusão de registros
* Integração com API de cotação em tempo real
* Responsividade para dispositivos móveis

---

## 📌 Observação

Este projeto faz parte do aprendizado inicial em desenvolvimento web e pode ser expandido para aplicações mais completas.

---

