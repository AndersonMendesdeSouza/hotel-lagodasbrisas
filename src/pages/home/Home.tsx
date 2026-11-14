import { Link } from 'react-router-dom'
import styles from './Home.module.css'
import ui from '../../styles/shared.module.css'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import RoomsCarousel from '../../components/RoomsCarousel'
import Gallery from '../../components/Gallery'
import Footer from '../../components/Footer'
import Icon from '../../components/Icon'
import SectionLink from '../../components/SectionLink'
import { hotel } from '../../data/hotel'

export default function Home() {
  return (
    <>
      <button className={styles.skipLink} type="button" onClick={() => document.getElementById('conteudo')?.focus()}>Pular para o conteúdo</button>
      <Header />
      <main id="conteudo" tabIndex={-1}>
        <Hero />
        <div className={styles.welcomeStrip}>
          <div className={ui.container}>
            <span>  
              <Icon name="waves" /> A beleza de estar à beira do lago</span>
            <span>
              <Icon name="leaf" /> Natureza em cada detalhe</span>
            <span>
              <Icon name="sun" /> Tempo para o que faz bem</span>
            <Link to="/reservas">Planeje sua visita <Icon name="arrow" />
            </Link>
          </div>
        </div>
        <section className={`${styles.roomsSection} ${ui.sectionSpace}`} id="acomodacoes" aria-labelledby="rooms-title" data-reveal>
          <div className={ui.container}>
            <div className={styles.sectionHeading}>
              <div>
                <span className={ui.eyebrow}>QUARTOS & ACOMODAÇÕES</span>
                <h2 id="rooms-title">Aconchego para<br />
                  <em>ficar mais um pouco.</em>
                </h2>
              </div>
              <p>Explore as fotos de cada opção e encontre<br className={ui.desktopBreak} /> o quarto para a sua próxima viagem.</p>
            </div>
            <RoomsCarousel />
            <p className={styles.sectionNote}>Categorias e capacidades demonstrativas, sujeitas à confirmação pelo hotel. Imagens ilustrativas de banco de fotos; não representam os quartos reais.</p>
          </div>
        </section>
        <section className={`${styles.aboutSection} ${ui.sectionSpace} ${ui.container}`} id="hotel" aria-labelledby="about-title" data-reveal>
          <div className={styles.aboutImages}>
            <img className={styles.aboutMain} src="/images/piscina.jpg" alt="Piscina do Hotel Lago das Brisas em um dia de sol" width="1600" height="1000" loading="lazy" />
            <img className={styles.aboutDetail} src="/images/jardim.jpg" alt="Quiosque e jardins do hotel" width="800" height="600" loading="lazy" />
            <span className={styles.imageCaption}>NATUREZA QUE ACOLHE. MEMÓRIAS QUE FICAM.</span>
          </div>
          <div className={styles.aboutCopy}>
            <span className={ui.eyebrow}>BEM-VINDO AO LAGO DAS BRISAS</span>
            <h2 id="about-title">Há lugares que<br />a gente visita.<br />
              <em>E outros que ficam.</em>
            </h2>
            <p>Em Buriti Alegre, no coração de Goiás, o Hotel Lago das Brisas é um convite para deixar a rotina para depois e aproveitar o que está bem à sua frente.</p>
            <p>O lago no horizonte, a sombra das palmeiras, um mergulho sem pressa. Um cenário para estar perto da natureza — e ainda mais perto de quem você gosta.</p>
            <SectionLink className={ui.textLink} sectionId="experiencias">Descubra o seu próximo refúgio <Icon name="arrow" />
            </SectionLink>
            <div className={styles.aboutLocation}>
              <Icon name="pin" />
              <span>Buriti Alegre, Goiás<br />
                <strong>Às margens do Lago das Brisas</strong>
              </span>
            </div>
          </div>
        </section>
        <section className={`${ui.sectionSpace} ${ui.container}`} id="experiencias" aria-labelledby="experiences-title">
          <div className={styles.sectionHeading} data-reveal>
            <div>
              <span className={ui.eyebrow}>ESTRUTURA, LAZER E BOAS HISTÓRIAS</span>
              <h2 id="experiences-title">Seu único compromisso:<br />
                <em>aproveitar.</em>
              </h2>
            </div>
            <p>Do primeiro mergulho à última conversa<br className={ui.desktopBreak} /> do dia. Viva no seu próprio ritmo.</p>
          </div>
          <div className={styles.experiencesLayout} data-reveal>
            <div className={styles.experienceFeature}>
              <img src="/images/lago.jpg" alt="Vista do lago em meio às palmeiras e espaços de descanso do hotel" width="2400" height="1600" loading="lazy" />
              <div>
                <span className={ui.eyebrow}>01 / A IMENSIDÃO DO LAGO</span>
                <h3>O horizonte é<br />o seu melhor plano.</h3>
                <p>Contemple a paisagem. Respire fundo.<br />Alguns momentos pedem apenas presença.</p>
              </div>
            </div>
            <div className={styles.experienceList}>
              <article>
                <span className={styles.experienceNumber}>02</span>
                <div>
                  <Icon name="waves" />
                  <h3>Um mergulho na leveza</h3>
                  <p>Piscina, sol e tempo de sobra para deixar os dias acontecerem.</p>
                </div>
              </article>
              <article>
                <span className={styles.experienceNumber}>03</span>
                <div>
                  <Icon name="leaf" />
                  <h3>Mais verde, menos pressa</h3>
                  <p>Jardins e espaços ao ar livre para relaxar e se reconectar.</p>
                </div>
              </article>
              <article>
                <span className={styles.experienceNumber}>04</span>
                <div>
                  <Icon name="people" />
                  <h3>Juntos é ainda melhor</h3>
                  <p>Reúna a família e os amigos. Consulte também as possibilidades para eventos.</p>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section className={`${styles.boatSection} ${ui.sectionSpace} ${ui.container}`} id="guarda-barcos" aria-labelledby="boat-title" data-reveal>
          <figure className={styles.boatPhoto}>
            <img
              src="/images/guarda-barcos.jpg"
              alt="Imagem ilustrativa de pequenas embarcações armazenadas em espaço coberto"
              width="1200"
              height="800"
              loading="lazy"
            />
            <figcaption>Imagem ilustrativa · Não representa o guarda-barcos real do hotel</figcaption>
          </figure>
          <div className={styles.boatCopy}>
            <span className={ui.eyebrow}>GUARDA-BARCOS</span>
            <h2 id="boat-title">Seu barco por perto.<br /><em>O lago nos seus planos.</em></h2>
            <p>Vai aproveitar o Lago das Brisas com sua embarcação? Conheça o serviço de guarda-barcos do hotel e organize sua visita com antecedência.</p>
            <p>Converse com a equipe para consultar disponibilidade, valores e condições de utilização do espaço.</p>
            <div className={styles.boatInformation}>
              <Icon name="waves" />
              <span>Planeje antes de chegar<strong>Confirme as orientações de acesso e guarda da sua embarcação.</strong></span>
            </div>
            <a
              className={`${ui.button} ${ui.buttonGreen}`}
              href={`https://wa.me/${hotel.whatsapp}?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre o guarda-barcos do Hotel Lago das Brisas. Podem me informar disponibilidade, valores e condições de utilização?')}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Consultar o guarda-barcos <Icon name="arrow" />
            </a>
          </div>
        </section>
        <section className={styles.gastronomySection} id="gastronomia" aria-labelledby="gastronomy-title" data-reveal>
          <div className={styles.gastronomyPhoto}>
            <img src="/images/restaurante.jpg" alt="Área de convivência e mesas entre os jardins do hotel" width="800" height="600" loading="lazy" />
            <span>ÁREA DE CONVIVÊNCIA DO HOTEL · FOTO PROVISÓRIA</span>
          </div>
          <div className={styles.gastronomyCopy}>
            <span className={ui.eyebrow}>RESTAURANTE · FOGÃO A LENHA</span>
            <h2 id="gastronomy-title">Comida de verdade.<br />
              <em>Feita no fogão a lenha.</em>
            </h2>
            <p>No restaurante do hotel, a comida feita no fogão a lenha traz o sabor da cozinha caseira para a sua estadia. Um convite para sentar à mesa, compartilhar uma boa conversa e aproveitar a pausa.</p>
            <div className={styles.gastronomyHighlights}>
              <span>Fogão a lenha</span>
              <span>Cozinha caseira</span>
              <span>Bons encontros</span>
            </div>
            <p className={styles.gastronomyNote}>Consulte as opções de refeições, os horários e as condições para o período da sua visita.</p>
            <a className={ui.textLink} href={`https://wa.me/${hotel.whatsapp}?text=${encodeURIComponent('Olá! Gostaria de conhecer as opções de refeições do Hotel Lago das Brisas.')}`} target="_blank" rel="noopener noreferrer">Saiba mais sobre as refeições <Icon name="arrow" />
            </a>
          </div>
        </section>
        <Gallery />
        <div className={styles.interlude}>
          <span className={ui.eyebrow}>DESLIGUE UM POUCO DO MUNDO.</span>
          <p>Reconecte-se com o que <em>importa.</em>
          </p>
          <Icon name="waves" />
        </div>
        <section className={`${styles.contactSection} ${ui.sectionSpace} ${ui.container}`} id="contato" aria-labelledby="contact-title" data-reveal>
          <div className={styles.contactCopy}>
            <span className={ui.eyebrow}>O CAMINHO PARA DIAS MAIS LEVES</span>
            <h2 id="contact-title">O seu próximo<br />
              <em>encontro é aqui.</em>
            </h2>
            <div className={styles.contactAddress}>
              <Icon name="pin" />
              <p>Hotel Lago das Brisas<br />
                <strong>Buriti Alegre · Goiás</strong>
                <span>Às margens do Lago das Brisas</span>
              </p>
            </div>
            <p className={ui.muted}>Abra o mapa para consultar o trajeto e confirme as orientações de acesso no atendimento.</p>
            <div className={styles.contactActions}>
              <a className={`${ui.button} ${ui.buttonGreen}`} href={hotel.maps} target="_blank" rel="noopener noreferrer">
                Traçar minha rota <Icon name="arrow" />
              </a>
              <a className={`${styles.contactInstagram} ${ui.textLink}`} href={hotel.instagram} target="_blank" rel="noopener noreferrer">
                <Icon name="instagram" /> Siga os próximos momentos <span>↗</span>
              </a>
            </div>
          </div>
          <div className={styles.mapFrame}>
            <iframe title="Localização do Hotel Lago das Brisas em Buriti Alegre" src="https://maps.google.com/maps?q=Hotel%20Lago%20das%20Brisas%20Buriti%20Alegre%20GO&t=&z=12&ie=UTF8&iwloc=&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            <a className={styles.mapLabel} href={hotel.maps} target="_blank" rel="noopener noreferrer">
              <Icon name="pin" />
              <span>Seu refúgio em Goiás<strong>Hotel Lago das Brisas</strong>
              </span>
              <Icon name="arrow" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
