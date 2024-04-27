import React, { useState } from "react";
import {
  Infos_div,
  Navigation,
  Content,
  SobreContainer,
  ExperienciasContainer,
  ProjetosContainer,
} from "./styles";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Home = () => {
  const [isMouseInside, setIsMouseInside] = useState("sobre");

  const handleMouseEnter = (area) => {
    setIsMouseInside(area);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      setIsMouseInside(id)
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Infos_div>
        <div className="sobre">
          <h1>Eduardo Alves</h1>
          <h3>Desenvolvedor Web</h3>
          <p>
            Desenvolvo aplicações completas, utilizando criação de API's e banco
            de dados
          </p>
        </div>
        <Navigation>
          <button
            style={{ color: isMouseInside === "sobre" ? "white" : "gray" }}
            onClick={() => scrollToSection("sobre")}
          >
            Sobre
          </button>
          <button
            style={{
              color: isMouseInside === "experiencias" ? "white" : "gray",
            }}
            onClick={() => scrollToSection("experiencias")}
          >
            Experiências
          </button>
          <button
            style={{ color: isMouseInside === "projetos" ? "white" : "gray" }}
            onClick={() => scrollToSection("projetos")}
          >
            Projetos
          </button>
        </Navigation>
        <div className="icones">
          <a href="https://github.com/EduAlves4785">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/deveduardo-alves/">
            <FaLinkedin />
          </a>
          <a href="mailto:edualvesbrito04@gmail.com">
            <IoIosMail />
          </a>
        </div>
      </Infos_div>
      <Content>
      <h1>Sobre mim</h1>
        <SobreContainer id="sobre" onMouseEnter={() => handleMouseEnter("sobre")}>
          <p>
            Como desenvolvedor web, tenho expertise em projetos pessoais usando
            JavaScript, Node.js, MySQL e React. Comecei com React, construindo
            interfaces modernas. Domino o backend com Node.js e MySQL para
            garantir a funcionalidade completa das aplicações. Esses projetos me
            deram profundo entendimento das tecnologias, melhoraram minhas
            habilidades de resolução de problemas e design de código.
          </p>
          <br />
          <p>
            Como freelancer, especializo-me em criar sites institucionais e
            landing pages, transformando visões dos clientes em realidade
            digital. Conduzo reuniões e ofereço suporte técnico, desenvolvendo
            habilidades sólidas de comunicação e trabalho em equipe. Minha
            paixão pelo desenvolvimento web é reforçada por experiências
            desafiadoras, impulsionando-me a buscar constante aprimoramento e
            contribuir de forma significativa para projetos inovadores.
          </p>
          <br />
          <p>
            Minha experiência na área comercial foi fundamental para desenvolver
            habilidades de negociação e gestão de clientes. Aprendi a alinhar
            minhas soluções tecnológicas com as demandas do mercado e dos
            usuários. Essa vivência conferiu-me uma perspectiva mais ampla sobre
            os desafios enfrentados pelos clientes, impulsionando-me a criar
            soluções inovadoras e eficazes para atender às suas expectativas.
          </p>
        </SobreContainer>
        <h1>Minhas experiências</h1>
        <ExperienciasContainer id="experiencias"
          onMouseEnter={() => handleMouseEnter("experiencias")}
        >
          <div className="experiencia-content">
            <div className="dados-experiencia">
              2023 - Presente<p>Estágiario . <a href="http://">LITUS FIDC</a></p>
            </div>
            <div className="experiencia-descricao">
              Durante meu estágio na LITUS FIDC, captei novos clientes através
              de prospecção na plataforma VADU, conduzindo ligações e contatos
              por e-mail. Realizei análise de clientes em potencial e seus
              documentos para cadastro.
              <div>
                <h4>Pacote offcie</h4>
                <h4>Econodata</h4>
                <h4>VADU</h4>
              </div>
            </div>
          </div>
          <div className="experiencia-content">
            <div className="dados-experiencia">
              2024 - Presente<p>FREELANCER . <a href="https://nexusdigitalsites.online/">NEXUS DIGITAL</a></p>
            </div>
            <div className="experiencia-descricao">
              Como freelancer, desenvolvo sites para prestadores de serviços e
              pequenos negócios, realizando prospecção de clientes em redes
              sociais. Conduzo reuniões e análises de projetos com clientes,
              garantindo alinhamento das expectativas. Ofereço suporte e
              manutenção contínuos de sites para garantir sua funcionalidade e
              qualidade.
              <div>
                <h4>HTML</h4>
                <h4>CSS</h4>
                <h4>JAVASCRIPT</h4>
                <h4>React Js</h4>
                <h4>Next JS</h4>
                <h4>Google Analytics</h4>
              </div>
            </div>
          </div>
        </ExperienciasContainer>
        <h1>Principais projetos</h1>
        <ProjetosContainer id="projetos" onMouseEnter={() => handleMouseEnter("projetos")}>
          <div className="projeto-box">
            <h1>React Autos</h1>
            <div className="video-box">
              <iframe
                src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7045530165820436480"
                height="100%"
                width="100%"
                frameborder="0"
                allowfullscreen=""
                title="Publicação incorporada"
              ></iframe>
            </div>
          </div>
          <div className="projeto-box">
            <h1>Banco Demo</h1>
            <div className="video-box">
              <iframe
                src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7029823013273448448"
                height="100%"
                width="100%"
                frameborder="0"
                allowfullscreen=""
                title="Publicação incorporada"
              ></iframe>
            </div>
          </div>
          <div className="projeto-box">
            <h1>Form TypeScript</h1>
            <div className="video-box">
              <iframe
                src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7071998889284747264"
                height="100%"
                width="100%"
                frameborder="0"
                allowfullscreen=""
                title="Publicação incorporada"
              ></iframe>
            </div>
          </div>
        </ProjetosContainer>
      </Content>
    </>
  );
};

export default Home;
