# Especificação de Layout: Site Letícia Dri (Psicoterapia Online)

Este documento foi criado seguindo as diretrizes de Direção de Arte estabelecidas no workflow `/gerar-layout`, utilizando a `creative-reference` e a `copy.md` já aprovadas.

## Linguagem Visual Base
- **Fontes**: `Playfair Display` (Headings) + `Poppins` (Body) - Clássico, editorial e elegante, contrastando com um corpo moderno e legível. (Serif Heading + Sans Body)
- **Paleta de Cores**:
  - `--color-primary`: #DA6220 (Terracota / Laranja escuro)
  - `--color-primary-dark`: #AA4013 (Terracota queimado)
  - `--color-bg-deep`: #4E1828 (Carmim fechado)
  - `--color-dark`: #3D0012 (Bordô profundo)
  - `--color-light`: #FAF9F6 (Off-white)
  - `--color-gray`: #B9B9B9 (Cinza neutro suave)

---

## Seção 1: Hero (Dobra 1)

### Arquétipo e Constraints
- **Arquétipo**: Split Assimétrico (1.2fr : 1fr).
- **Constraints**: Grain Overlay (Efeitos), Floating Card (Camada), Imagem com Cantos Irregulares.
- **Justificativa**: Transmite a ideia de duas partes – a paciente e a profissional – se encontrando. O desequilíbrio leve (assimétrico) reflete a humanidade, enquanto a estética "grain overlay" (já presente no CSS) fornece um aspecto acolhedor e levemente texturizado.

### Conteúdo
- Headline: Psicoterapia Online: acolhimento e base científica para a sua saúde mental.
- Subheadline: Um espaço dedicado a compreender a ansiedade, aliviar o peso da autocrítica e transformar a forma como você se relaciona consigo e com os outros. Através das Terapias Comportamentais Contextuais (ACT e FAP), unimos a escuta empática a estratégias fundamentadas na ciência para promover mais flexibilidade e equilíbrio no seu dia a dia.
- CTA: Agendar atendimento online
- Identificação: Letícia Dri | Psicóloga Clínica | CRP 12/30206 | ACT e FAP

### Layout
- **Container**: `max-width: 1400px`, `display: grid`, `grid-template-columns: 1.2fr 1fr`, gap de `8rem`. 
- **Background**: `#4E1828` (`--color-bg-deep`) ocupando toda a tela (min-height: 100vh).
- **Padding**: `8rem 5%`.

### Tipografia
- **Badge**: `0.875rem`, `uppercase`, `letter-spacing: 1px`, `Poppins`, Cor `#FAF9F6` com border rgba `0.3`.
- **Title (H1)**: `clamp(3rem, 5vw, 4.5rem)`, `Playfair Display`, `font-weight: 400`, `line-height: 1.2`. `em` com cor `#DA6220` e `font-style: italic`.
- **Description**: `1.125rem`, `Poppins`, `line-height: 1.6`, Cor `rgba(250, 249, 246, 0.8)`.

### Cores
- **Texto Principal**: `#FAF9F6`   - **Destaques**: `#DA6220`
- **Botão CTA**: Background `#DA6220`, texto `#FAF9F6`.

### Elementos Visuais e Interatividade
- **Botão**: `border-radius: 50px`, padding `1rem 2rem`. **Hover**: Fundo transparente, borda `#DA6220`, ícone translata `4px` direita, transição `300ms ease`.
- **Grain Overlay**: Position fixo com multiply `0.05`. (Instrução: Aplicar Globalmente).
- **Imagem Principal**: `aspect-ratio: 4/5`, `border-radius: 20px 20px 20px 0`.
- **Floating Card**: Card com ícone check. `box-shadow: 0 20px 40px rgba(61, 0, 18, 0.2)`. Anima flutuando.

### Animações (Somente no carregamento e em idle, sem Data-AOS no Hero)
- **Floating Card**: Animação manual CSS de flutuar vertical `translateY(-15px) a 0px`, duration `6s ease-in-out infinite`. NUNCA usar AOS no hero por regras de performance.

### Responsividade
- `< 992px`: As colunas mudam para `1fr` apenas. A imagem é jogada ao centro, alinhamento stack.

---

## Seção 2: A Abordagem (O Processo Clínico)

### Arquétipo e Constraints
- **Arquétipo**: Grid Simétrico em Cards (3 colunas/benthos iguais).
- **Constraints**: Hover Lift (Card desliza e ilumina), Ícones contidos em Shapes Redondos (Layered).
- **Justificativa**: A leitura sistemática de features/vantagens funciona em grids perfeitos. Os efeitos hover dão o "encantamento" para não deixarem o grid entediante.

### Conteúdo
- Todo o conteúdo de Features (Flexibilidade, Laboratório Social, Estratégias Práticas).

### Layout
- **Background**: `#FAF9F6` (`--color-light`).
- **Container**: `max-width: 1400px`, padding vertical `8rem`. Header ao centro com largura max `800px`.
- **Grid de Cards**: `grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))`, `gap: 2rem`.

### Tipografia
- **Título da Seção**: `clamp(2.5rem, 4vw, 3.5rem)`, `Playfair Display`, cor `#AA4013`. Palavras de destaque (`em`) na cor `#3D0012` `italic`.
- **Card Title**: `1.5rem`, `Playfair Display`, `#AA4013`.

### Elementos Visuais e Interatividade
- **Cards**: Border de `1px solid var(--color-gray)`, padding `3rem 2rem`, `border-radius: 12px`.
- **Hover no Card**: Borda transita para `--color-primary-dark`, translada em Y `-5px`, e emite box-shadow delicado `0 10px 30px rgba(170, 64, 19, 0.1)`. Transição `300ms ease-out`.

### Responsividade
- Para tablets (`< 900px`) se transforma em 2 colunas, para celulares em 1 coluna.

---

## Seção 3: Para quem é (Identificação e Cuidado)

### Arquétipo e Constraints
- **Arquétipo**: Split Vertical + Sticky Element.
- **Constraints**: Progressive Reveal (revelação por scroll em opacidade), Background Color Overlay.
- **Justificativa**: A leitura de dores pode ser densa. Fixar a introdução (lateral esquerda) e fazer o usuário rolar apenas os problemas num fluxo vertical cria um "Scroll Storytelling" amarrado e instigante.

### Conteúdo
- Título: Identificação e Cuidado: o foco do meu trabalho. (E seus dados de Copy dos 4 desafios).

### Layout
- **Background**: Fundo dinâmico/color-block do roxo escuro `--color-dark` `#3D0012` para criar constraste imenso com a seção anterior.
- **Grid Lado a Lado**: `display: grid; grid-template-columns: 1fr 1fr; gap: 4rem;`.
- **Esquerda (Sticky)**: O título e a introdução recebem o comportamento `position: sticky; top: 20vh;`. Altura em conformidade. 
- **Direita (Scrolling List)**: Lista dos quatro desafios alinhados de cima pra baixo, `display: flex; flex-direction: column; gap: 3rem;`.

### Tipografia
- **Títulos**: Heading principal branco (`#FAF9F6`), Headings dos cards laranjas (`#DA6220`).
- **Body**: Textos dos cards brancos mas num tom um pouco mais escuro `rgba(250, 249, 246, 0.9)`, tamanho `1.125rem`.

### Elementos Visuais e Interatividade
- O lado direito contém 4 Cards sem background. Eles funcionam puramente de forma tipográfica com uma sutil borda esquerda.
- O card individual ganha uma borda vertical na esquerda `border-left: 3px solid rgba(218, 98, 32, 0.3)`. No estado com Scroll Ativo (Progressive Reveal), essa borda ascende em clareza para `#DA6220`. 
- **Marca Dágua**: Numeração "01", "02" na cor `rgba(250, 249, 246, 0.05)` (branco apagado), em `Playfair Display` absurdo `5rem`, no fundo flutuante daquele card, para ambientação.

### Responsividade
- `< 992px`: Cancela o modo Sticky. Vira tudo coluna empilhada sem grid fixado.

---

## Seção 4: Sobre mim

### Arquétipo e Constraints
- **Arquétipo**: Overlapping Grid + Rule of Thirds (Quebra de Limites).
- **Constraints**: Imagem Overlay (Hover para Fullcolor), Elemento Decorativo Subjacente (Formato Curvo em Borda).
- **Justificativa**: Psicoterapia exige acolhimento. A foto dela deve ser calorosa e em grande formato. Quebrar a barreira entre o texto da Bio e a imagem quebra a noção de "caixotes corporativos".

### Layout
- **Background Central**: Em torno de um container gigante de fundo `var(--color-light)`.
- **Posicionamento Relativo**: A seção terá `grid-template-columns: 5fr 4fr`. A foto da psicóloga ficará do lado esquerdo, e o bloco de texto avançará e sobreporá o contorno da imagem na margem, `margin-left: -5%` no bloco de texto. 

### Tipografia
- **Headings**: `Playfair Display`, `clamp(2rem, 4vw, 3.5rem)`, `--color-primary-dark`.
- **Bio e Parágrafos**: `Poppins`, `font-size: 1.125rem` para o primeiro parágrafo, `1rem` para os subsequentes de formação.

### Elementos Visuais e Interatividade
- **Máscara de Arco na Foto**: A imagem entrará com um shape `border-radius: 200px 200px 0 0` em aspecto retrato `4:5`.
- **Efeito Hover da Imagem**: A imagem de "Sobre" fica em efeito dessaturado (`grayscale(80%) sepia(10%)`) - e ao arrastar o mouse para cima, ativa um fading para Full Color numa janela de duração `800ms`. 

### Responsividade
- Flex-wrap ativado para dispositivos menores. Imagem empilha sobre a bio e o overflow/margin negativa deixa de existir para simplificação de leitura.

---

## Seção 5: FAQ (Como funciona o atendimento?)

### Arquétipo e Constraints
- **Arquétipo**: Focus Single Center + Accordion.
- **Constraints**: Text Reveal (Collapse do Accordion), Highlight do Título em Hover.
- **Justificativa**: Conteúdo utilitário centralizado é esteticamente funcional e permite ao usuário ler e clicar numa área curta visual e densa.

### Layout
- **Background**: Revestimento sútil contínuo do `--color-light` branco sujo.
- **Container Center**: Container com largura máxima restringida drásticamente para focos centrais, `max-width: 800px; margin: 0 auto;`.
- Blocos sem padding lateral massivos, só no scroll vertical.

### Interatividade e Animações
- **Accordion Logic**: Toda a seção fica resumida em blocos `div` (pergunta). O painel de Resposta possui `max-height: 0` invisível e transita para exibição por fade-in quando ativada a class `active` com JavaScript que será programado depois.
- **Hover na Pergunta (Hover Underline/Translate)**: Adiciona cor `var(--color-primary-dark)` no hover e o ícone de `+` gira suavemente em `-180deg` para ficar `-` (sinal de menos).

---

## Seção 6: Rodapé e CTA Final

### Arquétipo e Constraints
- **Arquétipo**: Typography Hero (CTA Absoluto), Text Split (Responsivo).
- **Constraints**: Hover Fill no botão, Minimal Densidade final.
- **Justificativa**: O desfecho da página tem que ser marcante. O uso de uma tipografia gigantesca inspira atitude (o primeiro passo terapêutico), com finalização de página rápida e sóbria.

### Conteúdo
- Frase CTA / Botão Final
- Infos Técnicas.

### Layout
- **Background**: Toda a seção de CTA até o final é imersa na cor terracotta secundária `--color-primary-dark` (`#AA4013`). O texto e botões ficam Brancos.
- Content Center absoluto (`text-align: center`), grande `padding: 8rem 2rem 4rem`.

### Tipografia
- **CTA Macro**: Tamanho extremo adaptativo `clamp(2.5rem, 6vw, 5rem)`, font-family `Playfair Display`, peso `valente`. Intercalados da cor Off-White, `line-height: 1.1`.
- Rodapé miúdo abaixo de uma linha `border-top`, com tamanho `0.85rem` transparente a `0.7` opacidade.

### Elementos Visuais e Interatividade
- **Botão Ação Gigante (WhatsApp)**: Background Branco `--color-light`, texto `--color-primary-dark`. Formato de pílula maciça `border-radius: 100px`. No Hover, ganha transparência e texto fica branco, ganhando um sub-shadow sútil (Hover Lift) durando `300ms cubic-bezier `.
