import { Outlet } from "react-router"
import Header from "../header/Header"

// Marco de las páginas de la tienda: el Header arriba
// y, debajo, la página que corresponda según la ruta.
function PublicLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default PublicLayout
