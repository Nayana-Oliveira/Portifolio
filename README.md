# Portfólio Pessoal

Portfólio pessoal desenvolvido para apresentar minha trajetória como desenvolvedora, minhas habilidades técnicas, formação, projetos e formas de contato.

A aplicação foi construída com React.js e Vite, seguindo uma interface moderna, responsiva e focada em proporcionar uma navegação simples e agradável.

## Funcionalidades

- Apresentação profissional
- Download do currículo
- Exibição das principais tecnologias e habilidades
- Seção de formação acadêmica
- Projetos em destaque
- Links para GitHub e demonstrações dos projetos
- Formulário de contato funcional
- Envio de mensagens através do EmailJS
- Links para redes profissionais
- Layout responsivo para diferentes dispositivos
- Animações e efeitos de hover

## Tecnologias

O projeto foi desenvolvido utilizando:

- React.js
- JavaScript
- Vite
- HTML5
- CSS3
- React Icons
- EmailJS

## Estrutura do Projeto

```text
src/
├── assets/
│   └── projects/
│
├── components/
│   ├── Navbar/
│   ├── Hero/
│   ├── About/
│   ├── TechStack/
│   ├── Projects/
│   ├── Contact/
│   └── Footer/
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## Como executar

Clone o repositório:

```bash
git clone URL_DO_SEU_REPOSITORIO
```

Entre na pasta:

```bash
cd portfolio
```

Instale as dependências:

```bash
npm install
```

Crie um arquivo `.env` na raiz do projeto:

```env
VITE_EMAILJS_SERVICE_ID=seu_service_id
VITE_EMAILJS_TEMPLATE_ID=seu_template_id
VITE_EMAILJS_PUBLIC_KEY=sua_public_key
```

Execute o projeto:

```bash
npm run dev
```

Depois acesse o endereço exibido pelo Vite no terminal.

## Formulário de contato

O formulário utiliza o EmailJS para realizar o envio das mensagens.

As configurações são armazenadas através de variáveis de ambiente:

```env
VITE_EMAILJS_SERVICE_ID
VITE_EMAILJS_TEMPLATE_ID
VITE_EMAILJS_PUBLIC_KEY
```

O arquivo `.env` não deve ser enviado para o repositório.

## Responsividade

O portfólio foi desenvolvido para funcionar em diferentes tamanhos de tela, incluindo:

- Desktop
- Tablet
- Smartphone

## Deploy

O projeto pode ser publicado utilizando a Vercel.

Durante o deploy, as variáveis utilizadas pelo EmailJS devem ser cadastradas nas configurações de **Environment Variables** da Vercel.

## Autora

**Nayana Oliveira**

Desenvolvedora Full Stack

- GitHub: [Nayana-Oliveira](https://github.com/Nayana-Oliveira)

---

Desenvolvido com React.js.