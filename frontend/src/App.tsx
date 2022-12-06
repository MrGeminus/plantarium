import { FunctionComponent, useEffect } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import { useLang } from "./context/LangContext";
import Header from "./components/header/Header";
import Breadcrumbs from "./components/breadcrumbs/Breadcrumbs";
import Footer from "./components/footer/Footer";
import PlantariumRoutes from "./router/index"


const App: FunctionComponent = () => {
  const { lang } = useLang()!;
  const location = useLocation()

  if (lang && !location.pathname.includes(lang)) {
    const newLocation = location.pathname.replace(/en|de|rs/, lang)
    Navigate({ to: newLocation })
  }
  if (!location.pathname.includes("en") && !location.pathname.includes("de") && !location.pathname.includes("rs")) {
    const newLocation = `/${lang ? lang : 'en'}/`
    Navigate({ to: newLocation })
  }
  return (
    <>
      <Link to="#main" className="btn btn-outline-primary btn-skip">Skip to main content</Link>
      <Container className="d-flex flex-column min-vh-100">
        <Header />
        <PlantariumRoutes />
        <Footer />
      </Container>
    </>
  );
}

export default App;
