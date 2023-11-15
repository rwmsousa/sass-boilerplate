# Vendors 🛒

Bem-vindo à Feira Mágica na pasta "vendors"! Aqui é onde você encontra as joias da coroa, os artefatos valiosos que adicionam poderes extraordinários ao seu projeto. Prepare-se para explorar e integrar os tesouros da comunidade nesta jornada mágica! 💎✨

## O que são esses tesouros mágicos?

- **bootstrap.scss**: A gema brilhante do mundo do CSS, o Bootstrap! Uma biblioteca poderosa que acelera a criação de interfaces encantadoras. 🌐🔧

## Como Usar Esses Tesouros?

Integre esses tesouros mágicos em seu projeto para acelerar o desenvolvimento e adicionar funcionalidades extraordinárias!

### 🌐 `_bootstrap.scss`

```scss
// Importa as variáveis Bootstrap para personalização
@import '~bootstrap/scss/functions';
@import '~bootstrap/scss/variables';

// Qualquer customização adicional para o Bootstrap pode ser adicionada abaixo desta linha

// Exemplo de customização de um componente específico (botão, por exemplo)
.custom-btn {
  @include button-variant($primary); // Usa a cor primária definida acima
  // Adiciona estilos adicionais específicos do seu projeto
  font-weight: bold;
}
```

## Ativando Esses Tesouros

Visite a Feira Mágica e adquira seus tesouros! Adicione o seguinte trecho no seu arquivo `main.scss`:

```scss
// Importe os tesouros da pasta "vendors"
@import 'vendors/bootstrap';

// Seu projeto agora brilha com os poderes do Bootstrap! ✨🚀
```

Agora, seu projeto está equipado com as gemas do Bootstrap, prontas para elevar sua interface a novas alturas! 🏰🎉