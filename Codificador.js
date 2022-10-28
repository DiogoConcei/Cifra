function Action() {
  if (opc.value == 2) {
    CriptBase64();
  } else {
    CifraCesar();
  }
}

const CriptBase64 = () => {
  if (radio1.checked == true) {
    if (text.value == "") {
      Troca();
      text.value = btoa(text2.value);
    } else {
      Troca();
      text2.value = btoa(text.value);
    }
  } else {
    if (text.value == "") {
      Troca();
      text.value = atob(text2.value);
    } else {
      Troca();
      text2.value = atob(text.value);
    }
  }
};

const CifraCesar = () => {
  if (radio1.checked) {
    Criptografa();
  } else {
    Decodifica();
  }
};

const Criptografa = () => {
  let alfabeto = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let NCriptFras = text.value;
  let code = parseInt(number.value);
  text2.value = " ";

  for (let i = 0; i < NCriptFras.length; i++) {
    let Letra = NCriptFras[i];
    if (Letra === " ") {
      text2.value += Letra;
    } else {
      for (let i = 0; i < alfabeto.length; i++) {
        if (Letra === alfabeto[i] || alfabeto.includes(Letra) == false) {
          if (code > 0) {
            if (alfabeto[i].includes(Letra) === true) {
              let CriptFras = alfabeto[(i + code) % alfabeto.length];
              text2.value += CriptFras;
            } else {
              text2.value += Letra;
              break;
            }
          } else {
            text2.value = text.value;
          }
        }

      }
    }
  }
};

const Decodifica = () => {
  let alfabeto = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let NCriptFras = text.value;
  let code = parseInt(number.value);
  text2.value = " ";

  for (let i = 0; i < NCriptFras.length; i++) {
    let Letra = NCriptFras[i];
    if (Letra === " ") {
      text2.value += Letra;
    } else {
      for (let i = 0; i < alfabeto.length; i++) {
        if (Letra === alfabeto[i] || alfabeto.includes(Letra) == false) {
          if (code > 0) {
            if (alfabeto[i].includes(Letra) === true) {
              let CriptFras = alfabeto[i - code];
              text2.value += CriptFras;
            } else {
              text2.value += Letra;
              break;
            }
          } else {
            text2.value = text.value;
          }
        }
      }
    }
  }
};

const Troca = () => {
  let textV = text.value;
  let textV2 = text2.value;
  if (textV == "") {
    document.querySelector("#area1").value = textV2;
  } else {
    document.querySelector("#area2").value = textV;
  }
};

const chave = () => {
  let select = opc.value;
  if (select == 1) {
    number.style.display = "block";
  } else {
    number.style.display = "none";
  }
};

function info() {
  let ocult = document.querySelector('.ocult-text')
  ocult.style.display = "block"

  if (opc.value == 2) {
    let DescritivText = document.querySelector('#Troca-troca')
    DescritivText.innerHTML = "Base64 é um método para codificação de dados para transferência na Internet (codificação MIME para transferência de conteúdo). É utilizado frequentemente para transmitir dados binários por meios de transmissão que lidam apenas com texto, como por exemplo para enviar arquivos anexos por e-mail."
  } else {
    let DescritivText = document.querySelector('#Troca-troca')
    DescritivText.innerHTML = "Trata-se de um tipo de cifra de substituição, na qual cada letra de um texto a ser criptografado é substituída por outra letra, presente no alfabeto porém deslocada um certo número de posições à esquerda ou à direita. Por exemplo, se usarmos uma troca de quatro posições à esquerda, cada letra é substituída pela letra que está quatro posições adiante no alfabeto, e nesse caso a letra A seria substituída pela letra E, B por F, C por G, e assim sucessivamente."
  }
}


let opc = document.querySelector("select");
let number = document.querySelector("#passos");
let radio1 = document.querySelector("#Criptografar");
let radio2 = document.querySelector("#Decodificar");
let text = document.querySelector("#area1");
let text2 = document.querySelector("#area2");
opc.addEventListener("change", chave);
