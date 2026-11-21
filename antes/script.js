// 1. Rolagem suave do menu (descontando o cabeçalho fixo)
document.querySelectorAll('.js-rolar').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const alvo = document.querySelector(link.getAttribute('href'));
    const y = alvo.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top: y, behavior: 'smooth' });
  });
});

// 2. FAQ: abre um item e fecha os outros
document.querySelectorAll('.pergunta').forEach((pergunta) => {
  pergunta.addEventListener('click', () => {
    const resposta = pergunta.nextElementSibling;
    const estavaAberta = !resposta.hidden;
    document.querySelectorAll('.resposta').forEach((r) => { r.hidden = true; });
    resposta.hidden = estavaAberta;
  });
});

// 3. Modal: abrir, fechar, clicar fora e tecla Esc
const modal = document.getElementById('modal');
const fundo = document.getElementById('fundo');
function abrirModal() { modal.hidden = false; fundo.hidden = false; }
function fecharModal() { modal.hidden = true; fundo.hidden = true; }
document.getElementById('abrir-modal').addEventListener('click', abrirModal);
document.getElementById('fechar-modal').addEventListener('click', fecharModal);
fundo.addEventListener('click', fecharModal);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') fecharModal();
});

// 4. Validação do formulário: mostra o erro depois que a pessoa digita
const email = document.getElementById('email');
const erro = document.getElementById('erro');
email.addEventListener('blur', () => {
  const invalido = email.value !== '' && !email.checkValidity();
  erro.style.display = invalido ? 'block' : 'none';
  email.style.borderColor = invalido ? '#ff8a8a' : '';
});

// 5. Tooltip: calcula a posição em cima do selo
const selo = document.getElementById('selo');
const dica = document.getElementById('dica');
function posicionarDica() {
  const r = selo.getBoundingClientRect();
  dica.style.left = r.left + r.width / 2 - dica.offsetWidth / 2 + 'px';
  dica.style.top = r.top - dica.offsetHeight - 8 + 'px';
}
selo.addEventListener('mouseenter', () => { dica.hidden = false; posicionarDica(); });
selo.addEventListener('mouseleave', () => { dica.hidden = true; });
window.addEventListener('scroll', () => { if (!dica.hidden) posicionarDica(); });
window.addEventListener('resize', () => { if (!dica.hidden) posicionarDica(); });
