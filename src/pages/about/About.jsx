import "./About.css";

function About() {
  return (
    <div>
      <main>
        <section className="about">
          <div className="about-container">
            <div className="about-texto">
              <h1>Sobre LD GRÁFICA</h1>
              <p>
                En LD Gráfica creamos soluciones visuales pensadas para destacar tu
                marca. Diseñamos, imprimimos y producimos piezas gráficas con
                terminaciones profesionales, combinando creatividad, calidad y rapidez
                en cada trabajo.
              </p>
              <p>
                Acompañamos a negocios, empresas y emprendimientos con cartelería,
                impresión digital, ploteos, gigantografías y productos personalizados
                que generan impacto visual y ayudan a potenciar su imagen.
              </p>
              <h2>Lo hacemos posible</h2>
            </div>
            <div className="developer-card">
              <div className="avatar">
                <img
                  src="./src/assets/images/about img/FOTO ABOUT LD.png"
                  alt="Foto del fundador"
                />
              </div>
              <h3>Tomás Dean</h3>
              <p>Fundador de LD Gráfica</p>
            </div>
          </div>
        </section>
      </main>

    </div>

  )
}

export default About
