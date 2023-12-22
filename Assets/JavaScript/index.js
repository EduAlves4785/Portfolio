const textCard = document.getElementById("text-card");

function addClickEventToBtnTecnologias() {
  const btnTecnologias = document.getElementById("btn-tecnologias");
  btnTecnologias.addEventListener("click", () => {
    textCard.innerHTML = `
      <p>As tecnologias que utilizo atualmente são:</p>
      <ul>
          <li>HTML</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>Bootstrap</li>
          <li>ReactJs</li>
          <li>Node.js</li>
          <li>MySQL</li>
      </ul>
      <button class="tecnologias" id="btn-voltar">Voltar</button>
    `;
    const btnVoltar = document.getElementById("btn-voltar");
    btnVoltar.addEventListener("click", () => {
      textCard.innerHTML = `
        <p>Me chamo Eduardo , sou desenvolvedor web, com experiência em projetos que vão desde sistemas Kanban até bancos digitais e plataformas de venda de automóveis.</p>
        <p> Comprometido com a excelência, estou sempre em busca de desafios para aprimorar minhas habilidades e contribuir com soluções inovadoras.</p>
        <button class="tecnologias" id="btn-tecnologias">Tecnologias</button>
      `;
      addClickEventToBtnTecnologias();
    });
  });
}

addClickEventToBtnTecnologias();