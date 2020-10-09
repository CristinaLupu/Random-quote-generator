window.onload = async () => {
  const colors = [
    "#16a085",
    "#27ae60",
    "#2c3e50",
    "#f39c12",
    "#e74c3c",
    "#9b59b6",
    "#FB6964",
    "#342224",
    "#472E32",
    "#BDBB99",
    "#77B1A9",
    "#73A857",
  ];

  function showColor(color) {
    document.body.style.background = color;
    document.body.style.color = color;
    let buttons = document.querySelectorAll(".button");
    buttons.forEach((button) => {
      button.style.background = color;
    });
  }
  function showQuote(quoteObj) {
    // ? show quote
    document.getElementById("text").innerHTML = quoteObj.quote;
    // ? show author
    document.getElementById("author").innerHTML = quoteObj.author;
  }

  function getRandomColor(colorsArr) {
    const randomColor = Math.floor(Math.random() * colorsArr.length);
    return colorsArr[randomColor];
  }
  function getRandomQuote(quotesArr) {
    const randomNr = Math.floor(Math.random() * quotesArr.length);
    return quotesArr[randomNr];
  }

  const res = await fetch("/data.json");
  const quotes = await res.json();

  const randomQuoteObj = getRandomQuote(quotes);
  showQuote(randomQuoteObj);

  document.getElementById("new-quote").onclick = () => {
    const randomQuoteObj = getRandomQuote(quotes);
    const randomColor = getRandomColor(colors);
    showQuote(randomQuoteObj);
    showColor(randomColor);
  };
};
