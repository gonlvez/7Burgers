/* ===== CONFIGURAÇÃO CENTRAL — edite aqui telefone, links, horários, preços ===== */
window.CONFIG = {
  nome: "7 Burgers",
  whatsapp: "5592994470415",            // DDI+DDD+número (somente dígitos)
  whatsappExibicao: "(92) 99447-0415",
  endereco: "Rua João Paulo, 17 – Alvorada, Manaus – AM, CEP 69042-210",
  enderecoConfirmado: false,            // mude para true após confirmar
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Rua João Paulo, 17, Alvorada, Manaus - AM, 69042-210"),
  horarios: [["Segunda-feira", "18h às 23h"], ["Terça a domingo", "18h às 4h"]],
  instagram: "",                        // ex.: "https://instagram.com/seuperfil"
  links: {
    anotaai: "https://app.anota.ai/p/7burgers",
    menudino: "https://7burgers.menudino.com",
    rappi: ""                           // cole o link da Rappi aqui
  },
  mensagens: {
    padrao: "Olá! Vim pelo site da 7 Burgers e gostaria de fazer um pedido.",
    produto: "Olá! Vim pelo site da 7 Burgers e quero pedir: "
  },
  // price: null => mostra "R$ --,--" (preço ainda não confirmado). Use ex.: "R$ 29,90"
  destaques: [
    { nome: "X-Salada", img: "xsalada.jpg", price: null },
    { nome: "X-Bacon", img: "xbacon.jpg", price: null },
    { nome: "X-Tudo", img: "xtudo.jpg", price: null },
    { nome: "X-Bagunça", img: "xtudo.jpg", price: null, placeholder: true },
    { nome: "Kikão Especial", img: "kikao.jpg", price: null },
    { nome: "Pizza Grande", img: "pizza.jpg", price: null },
    { nome: "Combo Família", img: "combo.jpg", price: null }
  ],
  categorias: [
    { nome: "Hambúrgueres", desc: "Sabor em cada mordida", img: "cat-burger.jpg", href: "#destaques" },
    { nome: "Pizzas", desc: "Artesanais e deliciosas", img: "cat-pizza.jpg", href: "#pizzas" },
    { nome: "Kikão", desc: "O clássico manauara", img: "cat-kikao.jpg", href: "#destaques" },
    { nome: "Combos", desc: "Mais sabor por mais", img: "cat-combo.jpg", href: "#destaques" },
    { nome: "Acompanhamentos", desc: "O complemento perfeito", img: "cat-fries.jpg", href: "cardapio" },
    { nome: "Bebidas", desc: "Refresque sua experiência", img: "cat-drinks.jpg", href: "cardapio" }
  ],
  // Galeria: troque "img" pelo nome do arquivo em assets/images/. Itens sem img viram espaço reservado.
  galeria: [
    { alt: "Salão da 7 Burgers", img: "ambiente.jpg", grande: true },
    { alt: "Fachada", img: "" }, { alt: "Terraço", img: "" }, { alt: "Mesas para grupos", img: "" }
  ]
};
