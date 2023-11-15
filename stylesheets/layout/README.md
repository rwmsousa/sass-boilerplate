# Layout 🏰

Bem-vindo à Sala do Trono da pasta "layout"! Aqui, os elementos se alinham para criar o reino visual do seu projeto. Prepare-se para moldar o layout do seu mundo com esses poderosos arquivos! 🌐✨

## O que são esses elementos mágicos?

- **\_footer.scss**: A fundação que sustenta seu reino, mantendo tudo em equilíbrio. 🦶🏽🏰

- **\_grid.scss**: A grade encantada que organiza os elementos do seu projeto, garantindo uma disposição perfeita. 📏📐

- **\_header.scss**: A coroa brilhante do seu projeto, onde a realeza das informações é exibida. 👑📜

- **\_sidebar.scss**: O confidente leal, oferecendo informações adicionais e mantendo o equilíbrio do reino. 🤝📖

## Como Usar Esses Poderes?

Personalize esses elementos mágicos para criar um reino visual que conte a história do seu projeto!

### 🦶🏽 `_footer.scss`

```scss
// Estilize o alicerce do seu reino
.kingdom-footer {
  background-color: #f8f9fa; // Escolha uma cor sólida
  padding: 20px; // Adicione espaço para sustentar o reino
}
```

### 📏 `_grid.scss`

```scss
// Utilize a grade mágica para organizar seu reino
.kingdom-content {
  display: grid;
  grid-template-columns: repeat(3, 1fr); // Divida o reino em três partes iguais
  gap: 20px; // Adicione espaçamento entre os elementos
}
```

### 👑 `_header.scss`

```scss
// Dê brilho à coroa do seu projeto
.kingdom-header {
  font-size: 2em; // Aumente o tamanho para um toque majestoso
  color: #3498db; // Escolha uma cor real
}
```

### 🤝 `_sidebar.scss`

```scss
// Confie no confidente leal para fornecer informações adicionais
.kingdom-sidebar {
  width: 25%; // Ajuste a largura para equilibrar o reino
  background-color: #ecf0f1; // Escolha uma cor complementar
}
```

## Ativando Esses Poderes

Prepare-se para a coroação do seu projeto! Adicione o seguinte trecho no seu arquivo `main.scss`:

```scss
// Importe os elementos mágicos da pasta "layout"
@import 'layout/footer';
@import 'layout/grid';
@import 'layout/header';
@import 'layout/sidebar';

// Seu reino visual está pronto para brilhar! ✨👑
```

Agora, seu projeto está equipado com os elementos mágicos necessários para criar um reino visual digno de admiração! 🚀🌟