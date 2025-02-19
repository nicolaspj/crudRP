import "./App.css";
import "./index.css";
import NavBar from "./components/Navbar"; // Asegúrate de que la ruta esté correcta
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom"; // Importamos Router, Routes, y Route
import LogInUser from "./LogIn/LogInUser"; // Tu componente de inicio de sesión
import Home from "./Home/Home";
import HomeUsu from "./HomeUserAdmin/Edicion/EdicionProducto";
import HomeUser from "./HomeUserAdmin/HomeUser";
import NavBarHomeUsu from "./HomeUserAdmin/NavBarHomeUsu";
import LogOutUser from "./LogIn/LogOutUser";
import EdicionUser from "./HomeUserAdmin/Edicion/EdicionUser";
import AltaAdmin from "./HomeUserAdmin/AltaAdmin";
import EdicionAdmin from "./HomeUserAdmin/Edicion/EdicionAdmin";
import Estadisticas from "./HomeUserAdmin/Estadisticas";
import Reporte from "./HomeUserAdmin/Reporte/Reporte";
import InfoAdmin from "./HomeUserAdmin/Edicion/InfoAdmin";

function App() {
  return (
    <Router>
      <NavBarConditional /> {/* Componente con lógica para cambiar el Navbar */}
      <Routes>
        <Route path="/Home/Home.jsx" element={<Home />} />
        <Route path="/LogIn/LogInUser" element={<LogInUser />} />
        <Route path="/LogIn/LogOutUser" element={<LogOutUser />} />
        <Route path="/HomeUserAdmin/HomeUser" element={<HomeUser />} />
        <Route
          path="/HomeUserAdmin/Edicion/EdicionProducto"
          element={<HomeUsu />}
        />
        <Route
          path="/HomeUserAdmin/Edicion/EdicionUser"
          element={<EdicionUser />}
        />
        <Route path="/HomeUserAdmin/AltaAdmin" element={<AltaAdmin />} />
        <Route
          path="/HomeUserAdmin/Edicion/EdicionAdmin"
          element={<EdicionAdmin />}
        />
        <Route path="/HomeUserAdmin/Estadisticas" element={<Estadisticas />} />
        <Route path="/HomeUserAdmin/Reporte/Reporte" element={<Reporte />} />
        <Route
          path="/HomeUserAdmin/Edicion/InfoAdmin"
          element={<InfoAdmin />}
        />
      </Routes>
    </Router>
  );
}

function NavBarConditional() {
  const location = useLocation(); // Hook useLocation solo aquí dentro del componente funcional

  // Verifica si la ruta contiene "/HomeUser"
  return location.pathname.startsWith("/HomeUserAdmin") ? (
    <NavBarHomeUsu /> // Este NavBar se muestra en todas las rutas dentro de /HomeUser
  ) : (
    <NavBar /> // Este NavBar se muestra en todas las demás rutas
  );
}

export default App;
