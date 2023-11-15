# Abstracts 🌈

Bem-vindo à pasta "abstracts"! 🚀 Aqui, estamos prestes a explorar o mundo mágico das personalizações Sass. ✨ Prepare-se para a jornada da sua vida!

## O que são "abstracts"?

Os arquivos nesta pasta são como poções mágicas para seus estilos. Eles armazenam coisas incríveis como variáveis, funções, mixins e placeholders. Mas, espere, o que são essas coisas?

- **Variáveis**: Guardam valores mágicos como cores e tamanhos, para que você possa mudar a aparência do seu site num piscar de olhos. 🎨

- **Funções**: Transformam valores e realizam feitiços matemáticos para criar estilos dinâmicos. 🧙

- **Mixins**: São como receitas de bolo mágicas que você pode reutilizar para criar estilos consistentes e evitar repetição. 🍰

- **Placeholders**: São como feitiços que podem ser invocados quando necessário, economizando espaço e mantendo seu código limpo. 🧹

## Como Usar?

Imagine-se como um feiticeiro estilista, pronto para encantar seu projeto! Aqui está um exemplo básico de como personalizar esses arquivos:

### 🎨 `_variables.scss`

```scss
// Mude as cores para refletir a paleta do seu projeto
$primary-color: #3498db;
$secondary-color: #2ecc71;
$font-family: 'Roboto', sans-serif;
```

### 🧙 `_functions.scss`

```scss
// Use funções para criar estilos dinâmicos
@function em($pixels) {
  @return $pixels / 16 + 0.25em; // Converte pixels para em
}
```

### 🍰 `_mixins.scss`

```scss
// Crie mixins para estilos reutilizáveis
@mixin button-styles {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
}
```

### 🧹 `_placeholders.scss`

```scss
// Defina placeholders para serem usados quando necessário
%flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

## Ativando Suas Configurações

Agora, como um verdadeiro mestre dos feitiços, você precisa garantir que essas personalizações mágicas sejam ativadas em seu projeto principal. Aqui está um exemplo no seu arquivo `main.scss`:

```scss
// Importe os feitiços mágicos da pasta "abstracts"
@import 'abstracts/variables';
@import 'abstracts/functions';
@import 'abstracts/mixins';
@import 'abstracts/placeholders';

// Agora, você está pronto para estilizar o seu mundo! 🌍✨
```

E voilà! 🎩💫 Seu projeto agora está repleto de personalizações mágicas que vão além da imaginação. Divirta-se estilizando! 🚀🎉