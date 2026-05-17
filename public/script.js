// =======================
// BASE DE DADOS (JSON)
// =======================

const data = {
  produtos: [
    {
      id: 1,
      nome: "Processador Ryzen 5",
      preco: 849,
      categoria: "Processadores",
      imagem: "https://imgs.search.brave.com/BRLkRXGdnp1MqTlGfLEXL9QuxsNNM6iPXytsrd_sFkk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wY2Rp/Z2EtcHJvZC5ldS5z/YWxlb3IuY2xvdWQv/bWVkaWEvdGh1bWJu/YWlscy9wcm9kdWN0/cy8xX3AwNjQ4OTdf/MV9hMDIyOGNiM190/aHVtYm5haWxfMTAy/NC5qcGc",
      descricao: "Processador rápido para jogos",
      emEstoque: true
    },
    {
      id: 2,
      nome: "Placa de Vídeo RTX 3060",
      preco: 1249,
      categoria: "Placas de Vídeo",
      imagem: "https://imgs.search.brave.com/O5fYCBBS3c9L1kPQ0Al4wRgqtqrlmjNOBZvf1o9OKJM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mdWpp/b2thZGlzdHJpYnVp/ZG9yLnZ0ZXhpbWcu/Y29tLmJyL2FycXVp/dm9zL2lkcy8xOTk1/NTMtMjkyLTI5Mi9w/XzU1MTU3X2FsdGFf/NC5wbmc_dj02Mzc2/ODAyMjkzNDc3NzAw/MDA",
      descricao: "Alta performance gráfica",
      emEstoque: true
    },
    {
      id: 3,
      nome: "Memória RAM 16GB",
      preco: 349,
      categoria: "Memória",
      imagem: "https://imgs.search.brave.com/h5f4J6n9CdQ1t2YZfhcxoScDzWb419cyIbI0PEWsHcw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnpz/dC5jb20uYnIvdGh1/bWJzLzUxLzM0LzFj/Ly0xNTQ3Mzg1NzQ1/LmpwZw",
      descricao: "Alta velocidade",
      emEstoque: true
    },
    {
      id: 4,
      nome: "Gabinete Gamer",
      preco: 249,
      categoria: "Gabinetes",
      imagem: "https://imgs.search.brave.com/_gfa5L68wEgGHurj0uDqcLOsDBr6Z2V56qMi1dOHHe4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wY2J1/aWxkZXIuY29tLmJy/L19uZXh0L2ltYWdl/P3VybD1odHRwczov/L29ibHNqcGFhaWl0/dnhxdGpqbmttLnN1/cGFiYXNlLmNvL3N0/b3JhZ2UvdjEvb2Jq/ZWN0L3B1YmxpYy9t/b25hZC1pbWFnZXMv/cHJvZHV0b3MvYTcz/ZTJkNzEtM2JiMS00/MjY0LWJiOTktZDBk/MTI0YWFhMjZjLzAu/anBnJnc9Mzg0MCZx/PTc1",
      descricao: "Design moderno",
      emEstoque: false
    },
    {
      id: 5,
      nome: "SSD 1TB",
      preco: 499,
      categoria: "Armazenamento",
      imagem: "https://imgs.search.brave.com/c6mGCpbBEi3IOfkt1u3hU2jbfCcCXZBSE3H-zU1BFOs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFjeUhxQitLbUwu/anBn",
      descricao: "Muito rápido",
      emEstoque: true
    },
    {
      id: 6,
      nome: "Fonte 600W",
      preco: 299,
      categoria: "Fontes",
      imagem: "https://imgs.search.brave.com/6jGZV7M9oWdHL67tOZYx4rwihxfluTuGAjg1Kh_wSv8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9OUV9OUF84/MDIxODYtTUxVNzc2/Njc3OTkyODBfMDcy/MDI0LU8ud2VicA",
      descricao: "Energia estável",
      emEstoque: true
    },
    {
      id: 7,
      nome: "Monitor 144Hz",
      preco: 899,
      categoria: "Monitores",
      imagem: "https://imgs.search.brave.com/f4HtlKQRfyTU79de82uFraWRNJWckMzIN045M8miniI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTE1c2xDakhXNUwu/anBn",
      descricao: "Imagem fluida",
      emEstoque: true
    },
    {
      id: 8,
      nome: "Teclado Mecânico",
      preco: 199,
      categoria: "Acessórios",
      imagem: "https://imgs.search.brave.com/Ip2PkCwd47lsUcx7zJ3o5VUZFT-EaegGEQ9qL3AKCQk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/XzkzMzE3Mi1NTEE5/OTQ5NDQ5NTg2MF8x/MTIwMjUtRS53ZWJw",
      descricao: "Teclas rápidas",
      emEstoque: true
    }
  ]
};

// =======================
// DOM
// =======================

const lista = document.getElementById("product-list");
const carousel = document.getElementById("carousel-content");
const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category");
const btnRender = document.getElementById("btnRender");

// =======================
// FUNÇÕES
// =======================

function formatPrice(preco) {
  return "R$ " + preco.toFixed(2);
}

function renderCarousel() {

  carousel.innerHTML = "";

  const destaques = data.produtos.filter(p => p.destaque);

  destaques.forEach((produto, index) => {

    carousel.innerHTML += `
      <div class="carousel-item ${index === 0 ? "active" : ""}">
        
        <div class="card border-0 text-center shadow p-4">

          <img src="${produto.imagem}"
               class="img-fluid mx-auto"
               style="max-height:350px; object-fit:contain;">

          <div class="card-body">

            <h3>${produto.nome}</h3>

            <p>${produto.descricao}</p>

            <p class="fw-bold text-primary fs-4">
              ${formatPrice(produto.preco)}
            </p>

            <button class="btn btn-primary"
              onclick="window.location.href='detalhes.html?id=${produto.id}'">
              Ver detalhes
            </button>

          </div>

        </div>

      </div>
    `;
  });
}

function createProductCard(produto) {

  return `
    <div class="col-12 col-md-6 col-lg-3">

      <div class="card h-100 shadow">

        <img src="${produto.imagem}"
          class="card-img-top"
          style="height:200px; object-fit:cover;">

        <div class="card-body text-center">

          <h5>${produto.nome}</h5>

          <p class="fw-bold text-primary">
            ${formatPrice(produto.preco)}
          </p>

          <p>${produto.categoria}</p>

          <button class="btn btn-primary"
            onclick="window.location.href='detalhes.html?id=${produto.id}'">
            Ver detalhes
          </button>

        </div>

      </div>

    </div>
  `;
}

function renderProducts(produtos) {

  lista.innerHTML = "";

  produtos.forEach(produto => {
    lista.innerHTML += createProductCard(produto);
  });
}

function renderCategories() {

  const categorias = ["Todas"];

  data.produtos.forEach(p => {
    if (!categorias.includes(p.categoria)) {
      categorias.push(p.categoria);
    }
  });

  categorySelect.innerHTML = "";

  categorias.forEach(cat => {

    categorySelect.innerHTML += `
      <option value="${cat}">
        ${cat}
      </option>
    `;
  });
}

function filterProducts() {

  const texto = searchInput.value.toLowerCase();
  const categoria = categorySelect.value;

  return data.produtos.filter(produto => {

    return produto.nome.toLowerCase().includes(texto) &&
      (categoria === "Todas" ||
        produto.categoria === categoria);
  });
}

// =======================
// EVENTOS
// =======================

searchInput.addEventListener("input", () => {
  renderProducts(filterProducts());
});

categorySelect.addEventListener("change", () => {
  renderProducts(filterProducts());
});

btnRender.addEventListener("click", () => {
  renderProducts(data.produtos);
});

// =======================
// INIT
// =======================

renderCategories();
renderProducts(data.produtos);
renderCarousel();