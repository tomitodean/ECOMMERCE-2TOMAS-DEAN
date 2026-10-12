import "./Contact.css";

function Contact() {
  return (
    <>
      <section className="hero-contacto">
        <div className="hero-contacto-content">
          <h1>Contacto</h1>
          <p>
            ¿Tenés un proyecto en mente? Contactanos y te responderemos a la
            brevedad.
          </p>
        </div>
      </section>
      {/* FORMULARIO */}
      <section className="contacto-formulario">
        <div className="container-contacto">
          <div className="info-contacto">
            <h2>Hablemos</h2>
            <p>
              Estamos disponibles para ayudarte con cartelería, impresión digital,
              diseño gráfico, corte láser y mucho más.
            </p>
            <div className="dato-contacto">
              <strong>Teléfono:</strong>
              <span>+54 9 3482 52-2560</span>
            </div>
            <div className="dato-contacto">
              <strong>Email:</strong>
              <span>info@ldgrafica.com.ar</span>
            </div>
          </div>
          <form className="form-contacto">
            <label htmlFor="nombre">Nombre completo</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Ingresá tu nombre"
              required=""
            />
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="ejemplo@email.com"
              required=""
            />
            <label htmlFor="mensaje">Mensaje</label>
            <textarea
              id="mensaje"
              name="mensaje"
              placeholder="Escribí tu consulta..."
              required=""
              minLength={20}
              maxLength={1000}
              defaultValue={""}
            />
            <button type="submit">Enviar mensaje</button>
          </form>
        </div>
      </section>
      {/* MAPA */}
      <section className="mapa-section">
        <h2>¿Dónde estamos?</h2>
        <div className="mapa-responsive">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3484.7287965741616!2d-59.657086023734706!3d-29.143188690072577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x944eba9d16eb6a67%3A0x8d14b6521c2c1d1!2sLD%20GRAFICA!5e0!3m2!1ses-419!2sar!4v1781473838383!5m2!1ses-419!2sar"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>

  )
}

export default Contact
