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
            Sou Desenvolvedor Backend com experiência em JavaScript, Node.js, MySQL e React, atuando em projetos que vão desde a construção de APIs e sistemas integrados a bancos de dados até o desenvolvimento de interfaces modernas e responsivas.
          </p>
          <br />
          <p>
            Atualmente, trabalho como Técnico de Suporte e Implantação, onde além de gerenciar bancos de dados (Oracle, Firebird e PostgreSQL), também fui responsável pela refatoração completa de um site interno, melhorando código e usabilidade. Essa vivência me trouxe forte conhecimento em sistemas críticos e em garantir estabilidade e performance em ambientes de alta demanda.
          </p>
          <br />
          <p>
            Minha trajetória inclui ainda experiência como freelancer, criando sites institucionais e landing pages, e atuação na área comercial, que fortaleceu minhas habilidades de comunicação, negociação e alinhamento de soluções às necessidades dos usuários.
          </p>
          <br />
          <p>
            Busco oportunidades como Desenvolvedor Backend (ou Fullstack) para aplicar minhas habilidades em sistemas escaláveis, seguros e de alta performance, sempre com foco em boas práticas de desenvolvimento, aprendizado contínuo e entrega de valor.
          </p>
        </SobreContainer>
        <h1>Minhas experiências</h1>
        <ExperienciasContainer id="experiencias"
          onMouseEnter={() => handleMouseEnter("experiencias")}
        >
          <div className="experiencia-content">
            <div className="dados-experiencia">
              2025 - Presente<p>Téc. Suporte e Implantação . <a href="https://nexusdigitalsites.online/">MEDILAB SISTEMAS</a></p>
            </div>
            <div className="experiencia-descricao">
              Gerencia chamados críticos, garantindo resolução eficaz e mitigação de impactos em ambientes sensíveis.
              Planeja e executa projetos de implantação e integração de sistemas em clínicas e hospitais.
              Conduz treinamentos técnicos e mantém relacionamento estratégico com clientes, promovendo melhorias contínuas.
              <div>
                <h4>HTML</h4>
                <h4>CSS</h4>
                <h4>Oracle, PostgreSQL, Firebird</h4>
                <h4>React Js</h4>
                <h4>RIS, PACS</h4>
              </div>
            </div>
          </div>
          <div className="experiencia-content">
            <div className="dados-experiencia">
              2024 - 2025<p>FREELANCER . <a href="https://nexusdigitalsites.online/">NEXUS DIGITAL</a></p>
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
            <h1>Folha de ponto</h1>
            <div className="video-box">
              <iframe
                src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7378254026213249024"
                height="100%"
                width="100%"
                frameborder="0"
                allowfullscreen=""
                title="Publicação incorporada"
              ></iframe>
            </div>
          </div>
          <div className="projeto-box">
            <h1>Banco Demo - Java</h1>
            <div className="video-box">
              <iframe
                src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7349621019717828609"
                height="100%"
                width="100%"
                frameborder="0"
                allowfullscreen=""
                title="Publicação incorporada"
              ></iframe>
            </div>
          </div>
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
            <h1>Banco Demo- Node.js</h1>
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
