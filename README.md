# 🎯 Jogo da Forca

Um clássico dos jogos recriado em **JavaScript (Node.js)**, direto no terminal!
Desafie-se a adivinhar a palavra secreta antes que suas tentativas acabem. 🕹️

---

## 🧩 Sobre o Projeto

Este projeto foi desenvolvido com o objetivo de **reviver o clássico jogo da forca**, permitindo que usuários joguem via terminal.
Foi implementado seguindo um checklist com:

* Exibição de vitória ou derrota 🎉💀
* Lista de palavras sorteadas aleatoriamente
* Controle de tentativas e letras chutadas
* Atualização dinâmica do status do jogo

---

## 🚀 Tecnologias Utilizadas

* **Node.js** → Execução no terminal
* **JavaScript (ES6)** → Lógica e estrutura do jogo
* **Readline** → Entrada de dados do usuário no console

---

## 🕹️ Como Jogar

### 1️⃣ Pré-requisitos

Certifique-se de ter o **Node.js** instalado.
Para verificar:

```bash
node -v
```

Se não tiver, baixe em [https://nodejs.org/](https://nodejs.org/).

---

### 2️⃣ Clonar o repositório

```bash
git clone https://github.com/YasminFernandes/jogo-da-forca.git
```

---

### 3️⃣ Acessar a pasta do projeto

```bash
cd jogo-da-forca
```

---

### 4️⃣ Rodar o jogo

```bash
node app.js
```

---

## 🧠 Funcionamento

O jogo sorteia uma palavra aleatória de uma lista e exibe:

* Letras adivinhadas ✅
* Tentativas restantes ❤️‍🔥
* Letras já chutadas 🔤

Você pode digitar:

* Uma **letra** → para tentar adivinhar
* O símbolo **!** → para **chutar a palavra inteira**

---

## 🏆 Exemplo de Execução

```
=== JOGO DA FORCA ===
Dica: digite '!' para chutar a palavra inteira.

PALAVRA: _ _ _ _ _ _ _
Letras chutadas: —
Tentativas restantes: 6

Digite uma letra: a
✅ Boa! A letra existe na palavra.

PALAVRA: a _ a _ _ a _
Tentativas restantes: 6
```

---

## 📦 Estrutura do Projeto

```
jogo-da-forca/
├── app.js          # Código principal do jogo
└── README.md       # Documentação do projeto
```

---

## 💡 Ideias Futuras

* [ ] Versão web com HTML/CSS/JS 🎨
* [ ] Dificuldades ajustáveis (fácil, médio, difícil)
* [ ] Ranking de jogadores e pontuação

---

## 🧑‍💻 Autora

Feito com ❤️ por **Yasmin Fernandes**
📎 [GitHub](https://github.com/YasminFernandes)

---

## 📝 Licença

Este projeto está sob a licença **MIT**.
Sinta-se livre para usar, modificar e compartilhar! 💫
