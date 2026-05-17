// =======================
// BASE DE DADOS
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
      fotos: [
        {
          titulo: "Imagem frontal",
          imagem: "https://imgs.search.brave.com/EOQGnio5GCIfMzFC51adimP7QoC4QanOcF6Cmj1xDTE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jMS5u/ZXdlZ2dpbWFnZXMu/Y29tL3Byb2R1Y3Rp/bWFnZS9uYjY0MC8x/OS0xMTMtODE0LTA0/LmpwZw"
        },
        {
          titulo: "Imagem traseira",
          imagem: "https://images5.kabum.com.br/produtos/fotos/520365/processador-amd-ryzen-5-8600g-100-100001237box_1706637582_gg.jpg"
        }
      ]
    },
    {
      id: 2,
      nome: "Placa de Vídeo RTX 3060",
      preco: 1249,
      categoria: "Placas de Vídeo",
      imagem: "https://imgs.search.brave.com/O5fYCBBS3c9L1kPQ0Al4wRgqtqrlmjNOBZvf1o9OKJM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mdWpp/b2thZGlzdHJpYnVp/ZG9yLnZ0ZXhpbWcu/Y29tLmJyL2FycXVp/dm9zL2lkcy8xOTk1/NTMtMjkyLTI5Mi9w/XzU1MTU3X2FsdGFf/NC5wbmc_dj02Mzc2/ODAyMjkzNDc3NzAw/MDA",
      descricao: "Alta performance gráfica",
      emEstoque: true,
      fotos: [
        {
          titulo: "Imagem frontal",
          imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_876194-MLU72567976318_112023-F.webp"
        },
        {
          titulo: "Produto em detalhe",
          imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_864312-MLA52925614508_122022-F.webp"
        }
      ]
    }
      ,
    {
      id: 3,
      nome: "Memória RAM 16GB",
      preco: 349,
      categoria: "Memória",
      imagem: "https://images6.kabum.com.br/produtos/fotos/172366/memoria-kingston-fury-beast-16gb-3200mhz-ddr4-cl16-preto-kf432c16bb1-16_1626271100_gg.jpg",
      descricao: "Alta velocidade",
      emEstoque: true,
      fotos: [
        {
          titulo: "Imagem frontal",
          imagem: "https://images6.kabum.com.br/produtos/fotos/172366/memoria-kingston-fury-beast-16gb-3200mhz-ddr4-cl16-preto-kf432c16bb1-16_1626271101_gg.jpg"
        },
        {
          titulo: "Detalhes do produto",
          imagem: "https://images6.kabum.com.br/produtos/fotos/172366/memoria-ram-kingston-fury-beast-16gb-3200mhz-ddr4-cl16-preto-kf432c16bb1-16_1743593467_gg.jpg"
        }
      ]
    },

    {
      id: 4,
      nome: "Gabinete Gamer",
      preco: 249,
      categoria: "Gabinetes",
      imagem: "https://images5.kabum.com.br/produtos/fotos/sync_mirakl/997445/xlarge/PC-Gamer-Gabinete-Aquario-Preto-Ryzen-5-5500-RTX-5060-8GB-16gb-Ram-SSD-500GB-Water-Cooler-240mm-Win11-Pro_1768418914.jpg",
      descricao: "Design moderno",
      emEstoque: false,
      fotos: [
        {
          titulo: "Imagem frontal",
          imagem: "https://images5.kabum.com.br/produtos/fotos/sync_mirakl/997445/xlarge/PC-Gamer-Gabinete-Aquario-Preto-Ryzen-5-5500-RTX-5060-8GB-16gb-Ram-SSD-500GB-Water-Cooler-240mm-Win11-Pro_1768418917.jpg"
        },
        {
          titulo: "Imagem Ilustrativa",
          imagem: "https://images5.kabum.com.br/produtos/fotos/sync_mirakl/997445/xlarge/PC-Gamer-Gabinete-Aquario-Preto-Ryzen-5-5500-RTX-5060-8GB-16gb-Ram-SSD-500GB-Water-Cooler-240mm-Win11-Pro_1768418918.jpg"
        }
      ]
    },

    {
      id: 5,
      nome: "SSD 1TB",
      preco: 499,
      categoria: "Armazenamento",
      imagem: "https://images7.kabum.com.br/produtos/fotos/95217/95217_1520016025_gg.jpg",
      descricao: "Muito rápido",
      emEstoque: true,
      fotos: [
        {
          titulo: "Imagem traseira",
          imagem: "https://images7.kabum.com.br/produtos/fotos/95217/95217_1_1520016025_gg.jpg"
        },
        {
          titulo: "Detalhes do produto",
          imagem: "https://images7.kabum.com.br/produtos/fotos/95217/ssd-kingston-a400-960gb-sata-leitura-500mb-s-gravacao-450mb-s-sa400s37-960g_1629126712_gg.jpg"
        }
      ]
    },

    {
      id: 6,
      nome: "Fonte 600W",
      preco: 299,
      categoria: "Fontes",
      imagem: "https://img.terabyteshop.com.br/produto/g/fonte-corsair-vs600-600w-80-plus-cp-9020224-br_113684.png",
      descricao: "Energia estável",
      emEstoque: true,
      fotos: [
        {
          titulo: "Imagem frontal",
          imagem: "https://img.terabyteshop.com.br/produto/g/fonte-corsair-vs600-600w-80-plus-cp-9020224-br_113676.png"
        },
        {
          titulo: "Imagem traseira",
          imagem: "https://img.terabyteshop.com.br/produto/g/fonte-corsair-vs600-600w-80-plus-cp-9020224-br_113683.png"
        }
      ]
    },

    {
      id: 7,
      nome: "Monitor 144Hz",
      preco: 899,
      categoria: "Monitores",
      imagem: "https://images4.kabum.com.br/produtos/fotos/993244/monitor-gamer-msi-24-full-hd-144hz-1ms-ips-freesync-hdr-ready-ai-vision-preto-g242l-e14_1773236384_gg.jpg",
      descricao: "Imagem fluida",
      emEstoque: true,
      fotos: [
        {
          titulo: "Imagem frontal",
          imagem: "https://images4.kabum.com.br/produtos/fotos/993244/monitor-gamer-msi-24-full-hd-144hz-1ms-ips-freesync-hdr-ready-ai-vision-preto-g242l-e14_1773236386_gg.jpg"
        },
        {
          titulo: "Imagem traseira",
          imagem: "https://images4.kabum.com.br/produtos/fotos/993244/monitor-gamer-msi-24-full-hd-144hz-1ms-ips-freesync-hdr-ready-ai-vision-preto-g242l-e14_1773236385_gg.jpg"
        }
      ]
    },

    {
      id: 8,
      nome: "Teclado Mecânico",
      preco: 199,
      categoria: "Acessórios",
      imagem: "https://images4.kabum.com.br/produtos/fotos/535604/teclado-mecanico-gamer-machenike-k500-b61-switch-brown-abnt-branco-k500-b61bbr_1769021519_gg.jpg",
      descricao: "Teclas rápidas",
      emEstoque: true,
      fotos: [
        {
          titulo: "Imagem frontal",
          imagem: "https://images4.kabum.com.br/produtos/fotos/535604/teclado-mecanico-gamer-machenike-k500-b61-switch-brown-abnt-branco-k500-b61bbr_1769021517_gg.jpg"
        },
        {
          titulo: "Detalhes do produto",
          imagem: "https://images4.kabum.com.br/produtos/fotos/535604/teclado-mecanico-gamer-machenike-k500-b61-switch-brown-abnt-branco-k500-b61bbr_1769021517_gg.jpg"
        }
      ]
    }
  ]
};

// =======================
// PEGAR ID URL
// =======================

const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));

// =======================
// BUSCAR PRODUTO
// =======================

const produto = data.produtos.find(p => p.id === id);

// =======================
// DOM
// =======================

const container = document.getElementById("detalhes-produto");

function formatPrice(preco) {
  return "R$ " + preco.toFixed(2);
}

// =======================
// RENDER
// =======================

if (produto) {

  container.innerHTML = `
  
    <div class="card p-4 shadow">

      <div class="row g-4">

        <div class="col-12 col-lg-6">

          <img src="${produto.imagem}"
              class="img-fluid rounded w-100">

        </div>

        <div class="col-12 col-lg-6">

          <h2>${produto.nome}</h2>

          <p class="fs-3 fw-bold text-primary">
            ${formatPrice(produto.preco)}
          </p>

          <p>
            <strong>Categoria:</strong>
            ${produto.categoria}
          </p>

          <p>
            <strong>Descrição:</strong>
            ${produto.descricao}
          </p>

          <p>
            <strong>Status:</strong>
            ${produto.emEstoque
              ? "Em estoque"
              : "Sem estoque"}
          </p>

        </div>

      </div>

      <hr class="my-4">

      <h3 class="mb-4">
        Fotos do Produto
      </h3>

      <div class="row">

        ${produto.fotos.map(foto => `
        
          <div class="col-12 col-md-6 col-lg-4 mb-4">

            <div class="card h-100 shadow-sm">

              <img src="${foto.imagem}"
                  class="card-img-top"
                  style="height:220px; object-fit:cover;">

              <div class="card-body text-center">

                <h5>${foto.titulo}</h5>

              </div>

            </div>

          </div>

        `).join("")}

      </div>

    </div>
  `;

} else {

  container.innerHTML = `
    <div class="alert alert-danger">
      Produto não encontrado.
    </div>
  `;
}