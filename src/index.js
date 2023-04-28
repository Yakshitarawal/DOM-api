import "./styles.css";

const app = document.getElementById("app");

const url = "https://fakestoreapi.com/products";

function getData() {
  fetch(url)
    .then((res) => {
      res = res.json();
      return res;
    })
    .then((res) => {
      console.log(res);
      mapData(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

const mapData = (data) => {
  app.innerHTML = null;
  data.map((el) => {
    let card = document.createElement("div");
    let poster = document.createElement("img");
    poster.src = el.image;
    poster.setAttribute("class", "poster");

    let title = document.createElement("h4");
    title.innerText = el.title;

    let price = document.createElement("h4");
    price.innerText = el.price;

    let btn = document.createElement("button");
    btn.innerText = "Add";
    btn.addEventListener("click", () => {
      console.log("im in");
      window.location.href = "./cart.html";
    });
    card.append(poster, title, price, btn);
    app.append(card);
  });
};

getData();
