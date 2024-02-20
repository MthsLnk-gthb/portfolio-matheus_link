import "./style.scss";

import whatsAppSVG from "/public/iconsRedes/whatsapp-icon.svg";
import emailSVG from "/public/iconsRedes/gmail-icon.svg";
import instagramSVG from "/public/iconsRedes/instagram-icon.svg";

const SobreMim = () => {
  const handleAcessarCV = () => {
    window.open(
      "https://drive.google.com/file/d/1pJPQrPULfIz1J8ytAwqhd_y592cWatWR/view?usp=drive_link"
    );
  };

  return (
    <main id="tela-sobremim">
      <h1 className="nome-pagina">Sobre Mim</h1>
      <article className="container-sobre">
        <section className="texto-e-cv">
          <p>
            Tenho 18 anos de idade, curso Ciências da Computação e tenho muita
            determinação e entusiasmo por botar em prática e aprender constantemente.
            <br />
            Atualmete estou em busca de uma vaga de estágio ou trainee onde eu possa conseguir uma 
            experiência profissional e aprender com uma equipe determinada em oferecer o melhor.
            <br />
            Abaixo você pode vizualizar meu currículo e também encontrar opções de contato.

          </p>
          <button
            onClick={(e) => {
              e.preventDefault, handleAcessarCV();
            }}
          >
            Vizualizar CV
          </button>
        </section>
        <section className="lista-contatos">
          <h2>Contatos</h2>
          <ul>
            <li className="contato">
              <div>
                <img src={whatsAppSVG} alt="" />
              </div>
              <h4>WhatsApp</h4>
              <span>(41)99972-4736</span>
            </li>
            <li className="contato">
              <div>
                <img src={emailSVG} alt="" />
              </div>
              <h4>Email</h4>
              <span>matheuslink.dev@gmail.com</span>
            </li>
            <li className="contato">
              <div>
                <img src={instagramSVG} alt="" />
              </div>
              <h4>Instagram</h4>
              <span>@matheus._.link</span>
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
};

export default SobreMim;
