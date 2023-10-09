window.addEventListener("load", () => {
  const display = document.querySelector(".result");
  const keypadBtn = document.getElementsByClassName("key");

  const keypadBtnArray = Array.from(keypadBtn);

  keypadBtnArray.forEach((btn) => {
    btn.addEventListener("click", () => {
      calculator(btn, display);
    });
  });
});

function calculator(btn, display) {
  switch (btn.innerHTML) {
    case "C":
      deleteAll(display);
      break;

    case "⌫":
      deleteLast(display);
      break;

    case "=":
      equals(display);
      break;

    case "+/-":
      negativo(display);
      break;

    case "1/x":
      div1(display);
      break;

    case "x":
      multiplication(display);
      break;

    case "x²":
      squaring(display);
      break;

    case "√":
      sqrt(display);
      break;

    case "π":
      pi(display);
      break;

    case "%":
      percent(display);
      break;

    case ",":
      comma(display);
      break;

    case "÷":
      division(display);
      break;

    // case document.getelementsByClassName("prueba"):
    //   division(display);
    //   break;

    default:
      update(display, btn);
      break;
  }
}

function deleteAll(display) {
  display.innerHTML = "";
}

function deleteLast(display) {
  display.innerHTML = display.innerHTML.slice(0, -1);
}

function equals(display) {
  display.innerHTML = eval(display.innerHTML);
  /*coge el string y lo resueelve como number */
}

function negativo(display) {
  display.innerHTML = display.innerHTML * -1;
}

function update(display, btn) {
  if (display.innerHTML === 0) {
    display.innerHTML = "";
  }
  display.innerHTML +=
    btn.innerHTML; /*cada numero que toquemos los pone en orden */
}
function div1(display) {
  display.innerHTML = 1 / display.innerHTML;
}

function multiplication(display) {
  display.innerHTML += "*";
}

function squaring(display) {
  display.innerHTML = display.innerHTML * display.innerHTML;
}

function sqrt(display) {
  display.innerHTML = Math.sqrt(display.innerHTML);
}

function division(display) {
  display.innerHTML += "/";
}

function pi(display) {
  display.innerHTML = Math.PI;
}

function percent(display) {
  display.innerHTML = display.innerHTML * 0.01;
}

function comma(display) {
  display.innerHTML = display.innerHTML + ".";
}
