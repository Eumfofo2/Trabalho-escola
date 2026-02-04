// for
const lista = [
  {
    n: "coisa",
    v : "gato zoiando",
    t : "jpg"
  }, 
  {
     n: "dariel",
    v : "dariel curte usar nodejs :)",
    t : "png"
  },
  {
    n: "ga",
    v : "gato trabalhando",
    t : "jpg"
  },
  {
    n: "gatocute",
    v: "gato coisando pc",
    t: "jpg"
  },
  {
    n: "miau",
    v: "gato preucupado",
    t: "jpg"
  },
  {
    n: "oxi",
    v: "gato filósofo",
    t: "jpg"
  },
  {
    n: "print",
    v: null,
    t: "jpg"
  }
]
// operação 
const quadros = document.getElementById("quadros")
lista.forEach((item) => {
  const div = document.createElement("div")
  div.id = `quadro-${item.n}`;
  div.style = "display: flex; flex-direction: column; align-items: center; justify-content: center; margin: 20px;"
  div.innerHTML = `
    ${typeof item.v === 'string'? `<h3>${item.v}</h3>` : ""}
    <img src="p/${item.n}.${item.t}" alt="${item.v}"
    
    style="width: 200px; height: 40%; margin: 10px; ${item.t !== "jpg" ? "" : "border: 1px solid black; border-radius: 5px;"}">
  `;
  quadros.appendChild(div)
})