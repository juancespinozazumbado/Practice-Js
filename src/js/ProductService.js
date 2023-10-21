const URL = `Data/Products.json`;

const getProducts = async () => {
  return await fetchData(URL);
};

const fetchData = async (url) => {
  console.log("Fetching data....");
  const result = await fetch(url);
  const data = await result.json();
  if (data != null) {
    console.log(data);
  }
  return data;
};

// This section render the result on the html
async function render() {
  const section = document.getElementById("main-section");

  const Products = await getProducts();

  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card-containner");
  for (var p of Products) {
    
    const card = document.createElement("div");
    const title = document.createElement("H1");
    const description = document.createElement("p");
    const price = document.createElement("p");
    const image = document.createElement("img");
    image.src=`./${p.ImageUri}`;
    title.append(p.Name);
    description.append(p.Description);
    price.append(p.Price);
    card.classList.add("card");
    card.classList.add("containner");
    card.append(image);
    card.append(title);
    card.append(description);
    card.append(price);
    cardContainer.append(card);
  }
  section.append(cardContainer);
}

// const renderAsJSx = async function () {
//     const section = document.getElementById("main-section");
//   const Products = await getProducts();
//   for (const p of Products) {
//     section.app
//       `<div class="card">
//             <h1>${p.Name}</h1>
//             <p>${p.Description}</p>
//             <p>${p.Price}</p>
//         </div>`;
//   }
// };

 render();
// renderAsJSx();

//activate the service
