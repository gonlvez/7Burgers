# 7 Burgers — site institucional

## Estrutura
- `index.html` — páginas e seções (conteúdo estático + SEO + dados estruturados)
- `css/style.css` — todo o visual (cores em `:root`)
- `js/config.js` — **único lugar para editar**: WhatsApp, links, endereço, horários, preços, produtos, galeria
- `js/script.js` — menu mobile, links dinâmicos, carrossel, renderização dos dados do config
- `assets/images/` — fotos. **Atenção:** as imagens atuais são recortes da imagem conceitual (provisórias). Substitua pelas fotos reais mantendo o nome do arquivo, ou altere o nome em `config.js`.

## Ver localmente
Abra `index.html` no navegador, ou rode `python3 -m http.server 8000` na pasta e acesse http://localhost:8000.

## Editar
- Telefone: `whatsapp` (só dígitos com 55+DDD) e `whatsappExibicao` no `config.js`; ajuste também o telefone no JSON-LD do `index.html`.
- Preços: `price: "R$ 29,90"` em cada item de `destaques`. `null` mostra `R$ --,--`.
- Horários/endereço: `horarios`, `endereco`, `mapsUrl` no `config.js` (e endereço no JSON-LD). Confirme antes de publicar.
- Rappi/Instagram: preencha `links.rappi` e `instagram`. Vazio = item desativado/oculto.
- Fotos do ambiente: preencha `img` em `galeria`.

## Publicar na Vercel (grátis)
1. Suba a pasta num repositório do GitHub. 2. Em vercel.com → Add New → Project → importe o repositório. 3. Framework "Other", sem build, deploy. (Ou arraste a pasta em vercel.com/new.)
## Domínio próprio
Vercel → Project → Settings → Domains → adicione o domínio e crie no seu registrador o registro DNS indicado (A `76.76.21.21` ou CNAME `cname.vercel-dns.com`).
