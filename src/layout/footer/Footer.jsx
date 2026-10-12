import logo from "../../assets/images/logo/logoLDblanco.svg"
import iconoInstagram from "../../assets/images/iconos/instagram.svg"
import iconoTiktok from "../../assets/images/iconos/tiktok.svg"
import iconoUbicacion from "../../assets/images/iconos/ubicacion.svg"
import iconoWhatsapp from "../../assets/images/iconos/whatsapp.svg"
import iconoCorreo from "../../assets/images/iconos/correo.svg"

function Footer() {
  return (
    <footer className="footer">
  <div className="footer-container">
    <div className="footer-col footer-brand">
      <img
        src={logo}
        alt="Logo LD Gráfica"
        className="logofooter"
      />
      <p className="texto-footer">
        Especialistas en impresión digital, cartelería, corpóreos y comunicación
        visual.
      </p>
    </div>
    <div className="footer-col">
      <h3>Redes</h3>
      <div className="content-footer">
        <a
          href="https://www.instagram.com/ldgraficareconquista/"
          target="_blank"
        >
          <img src={iconoInstagram} alt="Instagram" />
        </a>
        <a
          href="https://www.instagram.com/ldgraficareconquista/"
          target="_blank"
        >
          Instagram
        </a>
      </div>
      <div className="content-footer">
        <a href="https://www.tiktok.com/@ldgraficareconquista" target="_blank">
          <img src={iconoTiktok} alt="TikTok" />
        </a>
        <a href="https://www.tiktok.com/@ldgraficareconquista" target="_blank">
          TikTok
        </a>
      </div>
    </div>
    <div className="footer-col">
      <h3>Contacto</h3>
      <div className="content-footer">
        <a href="https://maps.app.goo.gl/BQkJxLJzi6M3QG34A" target="_blank">
          <img src={iconoUbicacion} alt="Ubicación" />
        </a>
        <a href="https://maps.app.goo.gl/BQkJxLJzi6M3QG34A" target="_blank">
          Patricio Diez 1498
        </a>
      </div>
      <div className="content-footer">
        <a
          href="https://wa.me/5493482522560?text=Hola,%20quiero%20hacer%20una%20consulta"
          target="_blank"
        >
          <img src={iconoWhatsapp} alt="WhatsApp" />
        </a>
        <a
          href="https://wa.me/5493482522560?text=Hola,%20quiero%20hacer%20una%20consulta"
          target="_blank"
        >
          +54 9 3482 522560
        </a>
      </div>
      <div className="content-footer">
        <a href="mailto:ldgrafica10@gmail.com">
          <img src={iconoCorreo} alt="Correo" />
        </a>
        <a href="mailto:ldgrafica10@gmail.com">ldgrafica10@gmail.com</a>
      </div>
    </div>
  </div>
  <div className="footer-bottom">
    <p>© 2026 LD Gráfica. Todos los derechos reservados.</p>
  </div>
</footer>
  )
}

export default Footer