# Word Game 🎯

Uma recriação do clássico jogo Wordle, desenvolvida como parte do curso **Joy of React** do [Josh Comeau](https://github.com/joshwcomeau).

![Demonstração do jogo](docs/wordle-demo.gif)

## Sobre o Projeto

O jogo segue a mecânica clássica do Wordle: você tem **6 tentativas** para adivinhar uma palavra de 5 letras.  
A cada palpite, o jogo informa:

- **Letras corretas no lugar certo** (verde)
- **Letras corretas no lugar errado** (amarelo)
- **Letras que não estão na palavra** (cinza)

## Funcionalidades Implementadas por mim

- Validação de tentativas com destaque para acertos, erros e letras deslocadas.
- Histórico de tentativas exibido em uma grade 5x6.
- Controle de vitória e derrota, com banners de feedback.
- Reinício do jogo sem recarregar a página.
- Single Page App deploy configurado para GitHub Pages.

## Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [Parcel](https://parceljs.org/) como bundler
- [GitHub Pages](https://pages.github.com/) para deploy

## Acesse Online

👉 [Jogar agora](https://murillobazz.github.io/project-wordle/)

*A resposta é logada no console caso queira trapacear ;)*

## Executar Localmente

```bash
# Instalar dependências
npm install

# Rodar ambiente de desenvolvimento
npm run dev

# Gerar build de produção
npm run build
´´´