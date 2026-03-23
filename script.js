// Configuração dos produtos
// OBS: Em um site estático (como GitHub Pages) o JavaScript não consegue
// "listar" pastas automaticamente no servidor. Por isso, mantemos aqui
// um mapa com:
//  - nome exato da pasta em /produtos
//  - lista de arquivos de imagem dentro dela
//  - qual arquivo usar como capa no índice

const PRODUCTS = [
  // MANTAS ---------------------------------------------------
  {
    id: "mantas-420",
    title: "Mantas REF 520",
    folder: "Mantas REF 420",
    coverImage: "Azul Bebê.jpg",
    images: [
      "Azul Bebê.jpg",
      "Azul Marinho.jpg",
      "Bege.jpg",
      "Branco.jpg",
      "Cinza.jpg",
      "Rosa Bb.jpg",
      "Rose.jpg",
      "Verde Bb.jpg",
      "Verde Maré.jpg",
      "Vermelho 2.jpg",
      "Vermelho.jpg",
    ],
    category: "Mantas",
  },
  {
    id: "mantas-520",
    title: "Mantas REF 420",
    folder: "Mantas REF 520",
    coverImage: "Bege.jpg",
    images: [
      "Amarelo.jpg",
      "Azul Bb.jpg",
      "Azul Marinho.jpg",
      "Bege.jpg",
      "Cinza.jpg",
      "Rosa Bb.jpg",
      "Rose.jpg",
      "Verde Bb.jpg",
      "Verde Maré.jpg",
      "Vermelho.jpg",
    ],
    category: "Mantas",
  },
  {
    id: "mantas-720",
    title: "Mantas REF 720",
    folder: "Mantas REF 720",
    coverImage: "Bege.jpg",
    images: [
      "Amarelo.jpg",
      "Azul BB.jpg",
      "Bege.jpg",
      "Cinza.jpg",
      "Lilás.jpg",
      "Marinho.jpg",
      "OFF.jpg",
      "Rose.jpg",
      "Verde BB.jpg",
      "Verde Maré t.jpg",
      "Verde Maré.jpg",
      "Vermelho.jpg",
    ],
    category: "Mantas",
  },
  {
    id: "mantas-820",
    title: "Mantas REF 820",
    folder: "Mantas REF 820",
    coverImage: "1.jpg",
    images: [
      "1.jpg",
      "Azul Bb.jpg",
      "Azul Marinho.jpg",
      "Bege.jpg",
      "Branco.jpg",
      "Cinza.jpg",
      "Rosa Bb.jpg",
      "Rose.jpg",
      "Verde Bb.jpg",
      "Verde Maré.jpg",
      "Vermelho 2.jpg",
      "Vermelho.jpg",
    ],
    category: "Mantas",
  },
  {
    id: "mantas-821",
    title: "Mantas REF 821",
    folder: "Mantas REF 821",
    coverImage: "Amarelo.jpg",
    images: [
      "Amarelo 2.jpg",
      "Amarelo.jpg",
      "Azul Bb.jpg",
      "Azul Marinho.jpg",
      "Bege.jpg",
      "Cinza.jpg",
      "OFF.jpg",
      "Rosa Bb.jpg",
      "Rose.jpg",
      "Verde Bb.jpg",
      "Verde Maré.jpg",
      "Vermelho.jpg",
    ],
    category: "Mantas",
  },
  {
    id: "mantas-822",
    title: "Mantas REF 822",
    folder: "Mantas REF 822",
    coverImage: "Branco.jpg",
    images: [
      "Amarelo.jpg",
      "Azul Bb.jpg",
      "Azul Marinho.jpg",
      "Branco.jpg",
      "Cinza.jpg",
      "Rosa Bb.jpg",
      "Rose.jpg",
      "Verde Bb.jpg",
      "Verde Maré.jpg",
      "Vermelho.jpg",
    ],
    category: "Mantas",
  },
  {
    id: "mantas-825",
    title: "Mantas REF 825",
    folder: "Mantas REF 825",
    coverImage: "Bege.jpg",
    images: [
      "Amarelo.jpg",
      "Azul Bb.jpg",
      "Bege.jpg",
      "Branco.jpg",
      "Cinza.jpg",
      "IMG_4714.jpg",
      "IMG_4721.jpg",
      "OFF r.jpg",
      "OFF.jpg",
      "Rosa Bb.jpg",
      "Rose.jpg",
      "Verde Bb.jpg",
      "Verde Maré.jpg",
    ],
    category: "Mantas",
  },
  {
    id: "mantas-828",
    title: "Mantas REF 828",
    folder: "Mantas REF 828",
    coverImage: "Bege.jpg",
    images: [
      "Amarelo.jpg",
      "Azul Bb.jpg",
      "Azul Marinho.jpg",
      "Bege.jpg",
      "Cinza.jpg",
      "IMG_4643.jpg",
      "Rosa Bb 2.jpg",
      "Rosa Bb.jpg",
      "Verde Bb.jpg",
      "Vermelho.jpg",
    ],
    category: "Mantas",
  },
  {
    id: "mantas-829",
    title: "Mantas REF 829",
    folder: "Mantas REF 829",
    coverImage: "Bege.jpg",
    images: [
      "Amarelo.jpg",
      "Azul Bb.jpg",
      "Azul Marinho.jpg",
      "Bege.jpg",
      "Branco.jpg",
      "Cinza.jpg",
      "OFF.jpg",
      "Rosa Bb.jpg",
      "Rose.jpg",
      "Verde Bb.jpg",
      "Verde Maré.jpg",
      "Vermelho.jpg",
    ],
    category: "Mantas",
  },

  // GORROS ---------------------------------------------------
  {
    id: "gorro-303",
    title: "Gorro REF 303",
    folder: "Gorro REF 303",
    coverImage: "IMG_4072.JPG",
    images: [
      "IMG_4072.JPG",
      "IMG_4073.JPG",
      "IMG_4078.JPG",
      "IMG_4079.JPG",
      "IMG_4751.jpg",
      "IMG_4752.jpg",
      "IMG_4757.jpg",
      "IMG_4758.jpg",
      "IMG_4759.jpg",
      "IMG_4760.jpg",
      "IMG_4763.jpg",
      "IMG_4766.jpg",
      "IMG_4767.jpg",
      "IMG_4768.jpg",
      "IMG_4769.jpg",
      "IMG_4771.jpg",
      "IMG_4772.jpg",
      "IMG_4774.jpg",
      "IMG_4775.jpg",
      "IMG_4778.jpg",
      "IMG_4780.jpg",
      "IMG_4781.jpg",
      "IMG_4782.jpg",
      "IMG_4783.jpg",
      "IMG_4784.jpg",
      "IMG_4786.jpg",
      "IMG_4798.jpg",
      "IMG_4799.jpg",
      "IMG_4801.jpg",
    ],
    category: "Gorros",
  },
  {
    id: "gorro-307",
    title: "Gorro REF 307",
    folder: "Gorro REF 307",
    coverImage: "IMG_4049.JPG",
    images: [
      "IMG_4049.JPG",
      "IMG_4053.JPG",
      "IMG_4055.JPG",
      "IMG_4058.JPG",
      "IMG_4061.JPG",
      "IMG_4063.JPG",
      "IMG_4725.jpg",
      "IMG_4726.jpg",
      "IMG_4733.jpg",
      "IMG_4734.jpg",
      "IMG_4735.jpg",
      "IMG_4736.jpg",
      "IMG_4737.jpg",
      "IMG_4738.jpg",
      "IMG_4740.jpg",
      "IMG_4742.jpg",
      "IMG_4745.jpg",
      "IMG_4747.jpg",
      "IMG_4748.jpg",
      "IMG_4789.jpg",
      "IMG_4790.jpg",
      "IMG_4791.jpg",
      "IMG_4792.jpg",
      "IMG_4793.jpg",
      "IMG_4795.jpg",
      "IMG_4796.jpg",
    ],
    category: "Gorros",
  },

  // CASACOS --------------------------------------------------
  {
    id: "casaco-930",
    title: "Casaco REF 930",
    folder: "Casaco REF 930",
    coverImage: "_MG_3740.jpg",
    images: [
      "MG3740.jpg",
      "MG3742.jpg",
      "MG3748.jpg",
      "MG3750.jpg",
      "MG3755.jpg",
      "MG3757.jpg",
      "MG3764.jpg",
      "MG3766.jpg",
      "MG3772.jpg",
      "MG3776.jpg",
    ],
    category: "Casacos",
  },
  {
    id: "casaco-931",
    title: "Casaco REF 931",
    folder: "Casaco REF 931",
    coverImage: "_MG_3689.jpg",
    images: [
      "MG3689.jpg",
      "MG3691.jpg",
      "MG3701.jpg",
      "MG3702.jpg",
      "MG3711.jpg",
      "MG3713.jpg",
      "MG3717.jpg",
      "MG3720.jpg",
      "MG3724.jpg",
      "MG3730.jpg",
      "MG3734.jpg",
      "MG3736.jpg",
    ],
    category: "Casacos",
  },
  {
    id: "casaco-932",
    title: "Casaco REF 932",
    folder: "Casaco REF 932",
    coverImage: "_MG_3664.jpg",
    images: [
      "MG3664.jpg",
      "MG3668.jpg",
      "MG3672.jpg",
      "MG3674.jpg",
      "MG3677.jpg",
      "MG3681.jpg",
      "MG3685.jpg",
      "MG3687.jpg",
    ],
    category: "Casacos",
  },
];

const appEl = document.getElementById("app");

function setActiveNav(section) {
  document
    .querySelectorAll(".nav-link")
    .forEach((link) => link.classList.remove("is-active"));

  const active = document.querySelector(`.nav-link[data-nav="${section}"]`);
  if (active) {
    active.classList.add("is-active");
  }
}

function renderHome() {
  setActiveNav("produtos");

  appEl.innerHTML = `
    <section class="fade-in home">
      <header class="home-hero">
        <h1 class="page-title">Coleção MB Tricot</h1>
        <p class="page-subtitle">
          Catálogo de peças em tricot selecionadas, com foco em texturas,
          conforto e atemporalidade.
        </p>
      </header>

      <div class="product-grid">
        ${PRODUCTS.map(
          (p) => `
            <article class="product-card" data-product-id="${p.id}">
              <div class="product-card-cover">
                <img
                  src="${
                    p.coverImage
                      ? `produtos/${encodeURIComponent(p.folder)}/${encodeURIComponent(p.coverImage)}`
                      : "https://via.placeholder.com/600x450?text=Em+breve"
                  }"
                  alt="${p.title} - capa"
                  class="product-card-cover-img"
                  loading="lazy"
                />
                <div class="product-card-info">
                  <div class="product-card-label">${
                    p.category || "Produto"
                  }</div>
                  <h2 class="product-card-title">${p.title.toUpperCase()}</h2>
                  <div class="product-card-year">
                    ${new Date().getFullYear()}
                  </div>
                </div>
              </div>
            </article>
          `
        ).join("")}
      </div>
    </section>
  `;

  // Click handler para cards
  appEl.querySelectorAll(".product-card").forEach((card) => {
    card.addEventListener("click", () => {
      const id = card.getAttribute("data-product-id");
      window.location.hash = `#/produto/${id}`;
    });
  });
}

function renderProduct(id) {
  setActiveNav("produtos");

  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    appEl.innerHTML = `
      <section class="fade-in">
        <p>Produto não encontrado.</p>
        <p><a href="#produtos">Voltar para todos os produtos</a></p>
      </section>
    `;
    return;
  }

  const images = (product.images || [])
    .map((fileName, index) => {
      const folder = encodeURIComponent(product.folder);
      const file = encodeURIComponent(fileName);
      const src = `produtos/${folder}/${file}`;
      const idx = index + 1;
      return `
        <figure class="gallery-item">
          <img
            src="${src}"
            alt="${product.title} - foto ${idx}"
            class="gallery-img"
            loading="lazy"
          />
        </figure>
      `;
    })
    .join("");

  appEl.innerHTML = `
    <section class="fade-in">
      <nav class="breadcrumb">
        <a href="#produtos">Produtos</a>
        <span> / </span>
        <span>${product.title.toUpperCase()}</span>
      </nav>

      <header class="product-header">
        <h1 class="product-title">${product.title.toUpperCase()}</h1>
        ${
          product.category
            ? `<p class="product-meta">${product.category}</p>`
            : ""
        }
      </header>

      <div class="gallery-grid">
        ${images}
      </div>
    </section>
  `;
}

function renderContact() {
  setActiveNav("contato");

  appEl.innerHTML = `
    <section class="fade-in contact-wrapper">
      <h1 class="page-title">Contato</h1>
      <p class="page-subtitle">
        Para informações sobre peças, disponibilidade e condições especiais,
        entre em contato com a equipe MB Tricot.
      </p>

      <ul class="contact-list">
        <li>
          <div class="contact-label">E-mail</div>
          <div class="contact-value">
            <a href="mailto:contato@mbtricot.com">contato@mbtricot.com</a>
          </div>
        </li>
        <li>
          <div class="contact-label">Instagram</div>
          <div class="contact-value">
            <a href="https://www.instagram.com/mbtricot" target="_blank" rel="noreferrer">
              @mbtricot
            </a>
          </div>
        </li>
      </ul>
    </section>
  `;
}

// Roteador simples baseado em hash: #/produto/mantas-829, #contato, #produtos
function handleRoute() {
  const hash = window.location.hash || "#produtos";

  if (hash.startsWith("#/produto/")) {
    const id = hash.replace("#/produto/", "");
    renderProduct(id);
    return;
  }

  if (hash === "#contato") {
    renderContact();
    return;
  }

  // Qualquer outro hash leva para a home de produtos
  renderHome();
}

window.addEventListener("hashchange", handleRoute);
window.addEventListener("DOMContentLoaded", handleRoute);

