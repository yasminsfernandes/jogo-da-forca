// Jogo da Forca (CLI - Node.js)
// Para jogar: node app.js

const readline = require("readline");

// ===== Configurações do jogo =====
const PALAVRAS = [
  "programacao",
  "javascript",
  "algoritmo",
  "desafio",
  "computador",
  "internet",
  "variavel",
  "funcao",
  "array",
  "objeto",
  "nodejs",
  "classe",
  "sistema",
  "dados",
  "estrutura",
  "processador",
  "memoria",
  "teclado",
  "monitor",
  "desenvolvedor"
];

// Quantidade de tentativas (erros) permitidas
const TENTATIVAS_INICIAIS = 6;

// ===== Utilidades =====
const normalizar = (str) =>
  str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, ""); // remove acentos

function sortearPalavra(lista) {
  const idx = Math.floor(Math.random() * lista.length);
  return lista[idx];
}

function revelarPalavra(palavraOriginal, letrasAcertadasSet) {
  const chars = [...palavraOriginal];
  return chars
    .map((ch) => {
      const n = normalizar(ch);
      if (/[a-z]/.test(n) && letrasAcertadasSet.has(n)) return ch; // revela mantendo acentos, se houver
      if (/[a-z]/.test(n)) return "_";
      return ch; // mantém espaços/pontuação (se tivesse)
    })
    .join(" ");
}

function todasLetrasAdivinhadas(palavraOriginal, letrasAcertadasSet) {
  for (const ch of palavraOriginal) {
    const n = normalizar(ch);
    if (/[a-z]/.test(n) && !letrasAcertadasSet.has(n)) {
      return false;
    }
  }
  return true;
}

function ehLetraValida(input) {
  return /^[a-zA-ZÀ-ÿ]$/.test(input || "");
}

// ===== Estado do jogo =====
const palavraSecretaOriginal = sortearPalavra(PALAVRAS);
const palavraSecretaNormalizada = normalizar(palavraSecretaOriginal);

let tentativasRestantes = TENTATIVAS_INICIAIS;
const letrasChutadas = new Set(); // guarda as normalizadas (para validar repetição)
const letrasAcertadas = new Set(); // normalizadas também

// ===== Interface CLI =====
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function mostrarStatus() {
  console.log("\n==============================");
  console.log("PALAVRA:", revelarPalavra(palavraSecretaOriginal, letrasAcertadas));
  const chuteOrdenado = [...letrasChutadas].sort().join(", ");
  console.log("Letras chutadas:", chuteOrdenado || "—");
  console.log("Tentativas restantes:", tentativasRestantes);
  console.log("==============================\n");
}

function perguntarChute() {
  rl.question("Digite uma letra (ou '!' para chutar a palavra inteira): ", (entrada) => {
    const raw = (entrada || "").trim();

    // Chutar a palavra inteira
    if (raw === "!") {
      rl.question("Seu chute da palavra inteira: ", (palpite) => {
        const palpiteNorm = normalizar(palpite.trim());
        if (palpiteNorm.length === 0) {
          console.log("Chute vazio. Tente novamente.");
          return loop();
        }
        if (palpiteNorm === palavraSecretaNormalizada) {
          console.log("\n🎉 Você ACERTOU a palavra inteira!");
          console.log("Palavra:", palavraSecretaOriginal);
          console.log("Resultado: VITÓRIA ✅");
          rl.close();
        } else {
          tentativasRestantes--;
          console.log("❌ Palavra incorreta!");
          finalizarSePreciso();
        }
      });
      return;
    }

    // Validação de letra
    if (!ehLetraValida(raw)) {
      console.log("Por favor, digite apenas UMA letra válida (A-Z).");
      return loop();
    }

    const letraNorm = normalizar(raw);

    if (letrasChutadas.has(letraNorm)) {
      console.log("Você já chutou essa letra. Tente outra.");
      return loop();
    }

    letrasChutadas.add(letraNorm);

    if (palavraSecretaNormalizada.includes(letraNorm)) {
      letrasAcertadas.add(letraNorm);
      console.log("✅ Boa! A letra existe na palavra.");
    } else {
      tentativasRestantes--;
      console.log("❌ Errou! Essa letra não existe na palavra.");
    }

    finalizarSePreciso();
  });
}

function finalizarSePreciso() {
  if (todasLetrasAdivinhadas(palavraSecretaOriginal, letrasAcertadas)) {
    mostrarStatus();
    console.log("🎉 Resultado: VITÓRIA ✅");
    console.log("Parabéns! Você descobriu a palavra:", palavraSecretaOriginal);
    rl.close();
    return;
  }

  if (tentativasRestantes <= 0) {
    console.log("\n💀 Resultado: DERROTA ❌");
    console.log("A palavra era:", palavraSecretaOriginal);
    rl.close();
    return;
  }

  loop();
}

function loop() {
  mostrarStatus();
  perguntarChute();
}

// ===== Início =====
console.clear();
console.log("=== JOGO DA FORCA ===");
console.log("Dica: digite '!' para chutar a palavra inteira.");
loop();
