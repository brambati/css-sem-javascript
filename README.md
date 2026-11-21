# Pare de usar JavaScript para isso [CSS 2026]

O mesmo site em duas versões:

- **`antes/`**: rolagem suave, FAQ, modal, validação e tooltip feitos com **44 linhas de JavaScript**.
- **`depois/`**: o mesmo comportamento com **zero JavaScript**, usando **20 linhas de CSS** e atributos de HTML.

As duas versões foram testadas no navegador e se comportam igual.

Vídeo 23 do canal **Cursos Online (JM Tutoriais)** · [Digital Lift](https://digitallift.com.br)

## Os 5 recursos

| # | Antes (JavaScript) | Depois (CSS/HTML) | Suporte |
| --- | --- | --- | --- |
| 1 | clique + `getBoundingClientRect` + `scrollTo` | `scroll-behavior: smooth` + `scroll-margin-top` | todos os navegadores |
| 2 | FAQ com clique que fecha as outras | `<details name="faq">` | Baseline desde set/2024 |
| 3 | modal com 4 eventos (abrir, fechar, fundo, Esc) | `popover` + `popovertarget` + `::backdrop` | Baseline desde jan/2025 |
| 4 | validação no `blur` | `:user-invalid` + `form:has(...)` | Baseline desde 2023 |
| 5 | tooltip com cálculo de posição | anchor positioning (`anchor-name`, `position-area`) | Baseline desde jan/2026, com fallback em `@supports` |

## Passo a passo para quem nunca programou

1. **Baixe o projeto:** clique no botão verde **Code** aqui em cima e depois em **Download ZIP**.
2. **Descompacte** o arquivo (clique com o botão direito → *Extrair tudo*).
3. Abra a pasta **`depois`** e dê dois cliques no **`index.html`**. O site abre no navegador.
4. **Teste cada recurso:** clique no menu (rolagem suave), abra as perguntas (FAQ), clique em **Orçamento** (modal; feche com Esc ou clicando fora), digite um e-mail errado e clique fora do campo (validação), e passe o mouse no selo **"Entrega em 7 dias"** (tooltip).
5. Quer comparar? Abra também o `index.html` da pasta **`antes`**.
6. **Para usar no seu site:** abra `depois/style.css` no Bloco de Notas (ou no [VS Code](https://code.visualstudio.com/), grátis) e copie os blocos numerados de 1 a 5.

Use o **Chrome, Edge, Safari ou Firefox atualizados**. Em navegadores antigos, o tooltip aparece logo abaixo do selo (fallback).

## Licença

MIT — use à vontade.
