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
      emEstoque: true,
      destaque: true 
    },
    {
      id: 2,
      nome: "Placa de Vídeo RTX 3060",
      preco: 1249,
      categoria: "Placas de Vídeo",
      imagem: "https://imgs.search.brave.com/O5fYCBBS3c9L1kPQ0Al4wRgqtqrlmjNOBZvf1o9OKJM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mdWpp/b2thZGlzdHJpYnVp/ZG9yLnZ0ZXhpbWcu/Y29tLmJyL2FycXVp/dm9zL2lkcy8xOTk1/NTMtMjkyLTI5Mi9w/XzU1MTU3X2FsdGFf/NC5wbmc_dj02Mzc2/ODAyMjkzNDc3NzAw/MDA",
      descricao: "Alta performance gráfica",
      emEstoque: true,
      destaque: true
    },
    {
      id: 3,
      nome: "Memória RAM 16GB",
      preco: 349,
      categoria: "Memória",
      imagem: "https://images6.kabum.com.br/produtos/fotos/172366/memoria-kingston-fury-beast-16gb-3200mhz-ddr4-cl16-preto-kf432c16bb1-16_1626271100_gg.jpg",
      descricao: "Alta velocidade",
      emEstoque: true,
      destaque: false
    },
    {
      id: 4,
      nome: "Gabinete Gamer",
      preco: 249,
      categoria: "Gabinetes",
      imagem: "https://images5.kabum.com.br/produtos/fotos/sync_mirakl/997445/xlarge/PC-Gamer-Gabinete-Aquario-Preto-Ryzen-5-5500-RTX-5060-8GB-16gb-Ram-SSD-500GB-Water-Cooler-240mm-Win11-Pro_1768418914.jpg",
      descricao: "Design moderno",
      emEstoque: false,
      destaque: false
    },
    {
      id: 5,
      nome: "SSD 1TB",
      preco: 499,
      categoria: "Armazenamento",
      imagem: "https://images7.kabum.com.br/produtos/fotos/95217/95217_1520016025_gg.jpg",
      descricao: "Muito rápido",
      emEstoque: true,
      destaque: false
    },
    {
      id: 6,
      nome: "Fonte 600W",
      preco: 299,
      categoria: "Fontes",
      imagem: "https://imgs.search.brave.com/6jGZV7M9oWdHL67tOZYx4rwihxfluTuGAjg1Kh_wSv8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9OUV9OUF84/MDIxODYtTUxVNzc2/Njc3OTkyODBfMDcy/MDI0LU8ud2VicA",
      descricao: "Energia estável",
      emEstoque: true,
      destaque: false
    },
    {
      id: 7,
      nome: "Monitor 144Hz",
      preco: 899,
      categoria: "Monitores",
      imagem: "https://images4.kabum.com.br/produtos/fotos/993244/monitor-gamer-msi-24-full-hd-144hz-1ms-ips-freesync-hdr-ready-ai-vision-preto-g242l-e14_1773236384_gg.jpg",
      descricao: "Imagem fluida",
      emEstoque: true,
      destaque: true
    },
    {
      id: 8,
      nome: "Teclado Mecânico",
      preco: 199,
      categoria: "Acessórios",
      imagem: "https://images4.kabum.com.br/produtos/fotos/535604/teclado-mecanico-gamer-machenike-k500-b61-switch-brown-abnt-branco-k500-b61bbr_1769021519_gg.jpg",
      descricao: "Teclas rápidas",
      emEstoque: true,
      destaque: false
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