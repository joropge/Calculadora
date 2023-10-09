let operacionRealizada = false;

window.addEventListener("load", () => {
  const display = document.querySelector(".history");
  const displayResult = document.querySelector(".result");
  const keypadBtn = document.getElementsByClassName("key");

  const keypadBtnArray = Array.from(keypadBtn);

  keypadBtnArray.forEach((btn) => {
    btn.addEventListener("click", () => {
      calculator(btn, display, displayResult);
    });
  });
});

function calculator(btn, display, displayResult) {
  switch (btn.innerHTML) {
    case "C":
      deleteAll(display, displayResult);
      break;

    case "⌫":
      deleteLast(display);
      break;

    case "=":
      equals(display, displayResult);
      break;

    case "+/-":
      negativo(display);
      break;

    case "1/x":
      div1(display, displayResult);
      break;

    case "x²":
      squaring(display, displayResult);
      break;

    case "√":
      sqrt(display, displayResult);
      break;

    case "%":
      percent(display, displayResult);
      break;

    case ",":
      comma(display);
      break;

    default:
      update(display, displayResult, btn);
      break;
  }
}

function deleteAll(display, displayResult) {
  display.innerHTML = "";
  displayResult.innerHTML = "";
}

function deleteLast(display) {
  display.innerHTML = display.innerHTML.slice(0, -1);
}

function equals(display, displayResult) {
  const result = eval(display.innerHTML);
  displayResult.innerHTML = result;
  operacionRealizada = true;
}

function negativo(display) {
  display.innerHTML = display.innerHTML * -1;
}

function update(display, displayResult, btn) {
  let valor = btn.innerHTML;
  if (valor === "X") {
    valor = "*";
  }

  if (valor === "÷") {
    valor = "/";
  }

  if (valor === "π") {
    valor = Math.PI;
  }
  if (operacionRealizada) {
    if (parseFloat(valor) >= 1 && parseFloat(valor) <= 9) {
      operacionRealizada = false;
      display.innerHTML = "";
      display.innerHTML += valor;
    } else {
      operacionRealizada = false;
      display.innerHTML = displayResult.innerHTML;
      display.innerHTML += valor;
    }
  } else {
    display.innerHTML += valor;
  }
}
function div1(display, displayResult) {
  const content = displayResult.innerHTML;
  const contDisp = display.innerHTML;
  if (content === "") {
    if (
      !content.includes("*") &&
      !content.includes("/") &&
      !content.includes("-") &&
      !content.includes("+")
    ) {
      display.innerHTML = "1/" + contDisp;
      displayResult.innerHTML = 1 / contDisp;
      operacionRealizada = true;
    }
  } else {
    if (
      !content.includes("*") &&
      !content.includes("/") &&
      !content.includes("-") &&
      !content.includes("+")
    ) {
      let div = 1 / content;
      display.innerHTML = "1/" + content;
      displayResult.innerHTML = div;
      operacionRealizada = true;
    }
  }

  // display.innerHTML = 1 / display.innerHTML;
}

function squaring(display, displayResult) {
  const content = displayResult.innerHTML;
  const contDisp = display.innerHTML;
  if (content === "") {
    if (
      !content.includes("*") &&
      !content.includes("/") &&
      !content.includes("-") &&
      !content.includes("+")
    ) {
      display.innerHTML = contDisp + "²";
      displayResult.innerHTML = contDisp * contDisp;
      operacionRealizada = true;
    }
  } else {
    if (
      !content.includes("*") &&
      !content.includes("/") &&
      !content.includes("-") &&
      !content.includes("+")
    ) {
      let square = content * content;
      display.innerHTML = content + "²";
      displayResult.innerHTML = square;
      operacionRealizada = true;
    }
  }
}

function sqrt(display, displayResult) {
  const content = displayResult.innerHTML;
  const contDisp = display.innerHTML;
  if (content === "") {
    if (
      !content.includes("*") &&
      !content.includes("/") &&
      !content.includes("-") &&
      !content.includes("+")
    ) {
      display.innerHTML = "√" + contDisp;
      displayResult.innerHTML = Math.sqrt(contDisp);
      operacionRealizada = true;
    }
  } else {
    if (
      !content.includes("*") &&
      !content.includes("/") &&
      !content.includes("-") &&
      !content.includes("+")
    ) {
      let squareRoot = Math.sqrt(content);
      display.innerHTML = "√" + content;
      displayResult.innerHTML = squareRoot;
      operacionRealizada = true;
    }
  }
}

function percent(display, displayResult) {
  const content = displayResult.innerHTML;
  const contDisp = display.innerHTML;
  if (content === "") {
    if (
      !content.includes("*") &&
      !content.includes("/") &&
      !content.includes("-") &&
      !content.includes("+")
    ) {
      display.innerHTML = contDisp + "%";
      displayResult.innerHTML = contDisp * 0.01;
      operacionRealizada = true;
    }
  } else {
    if (
      !content.includes("*") &&
      !content.includes("/") &&
      !content.includes("-") &&
      !content.includes("+")
    ) {
      let percentage = content * 0.01;
      display.innerHTML = content + "%";
      displayResult.innerHTML = percentage;
      operacionRealizada = true;
    }
  }

  // display.innerHTML = display.innerHTML * 0.01;
}

function comma(display) {
  display.innerHTML = display.innerHTML + ".";
}
