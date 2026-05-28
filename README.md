# Arcanjos Planejados — Landing Page Premium

Projeto React + Vite + TypeScript para a landing page da Arcanjos Planejados.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra: `http://localhost:5173`

## Gerar build de produção

```bash
npm run build
```

## Contato e WhatsApp

Os dados ficam em:

```txt
src/data/site.ts
```

## Portfólio

Os projetos e categorias ficam em:

```txt
src/data/portfolio.ts
```

Cada projeto usa `images: []`. A primeira imagem é a capa do card e as demais aparecem no carrossel da galeria.

## Formulário

O formulário envia para:

```txt
contato@arcanjos-planejados.com
```

Ele usa FormSubmit. No primeiro envio, será necessário confirmar a ativação no e-mail da empresa.
