import { NavLink, Outlet, useMatch, useNavigate, useNavigation } from 'react-router-dom'
import './App.css'

function checkIsActive({ isActive }: { isActive: boolean }) {
  return { color: isActive ? 'red' : 'gray' }
}

function NavBar() {

  const isInfo = useMatch('/info');
  if (isInfo) {
    console.log('Estoy en la ruta de Info');
  } else {
    console.log('NO ES INFO')
  }

  return (
    <nav>
      <ul>
        <li>
          <NavLink to={'/info'} style={checkIsActive}>Información</NavLink>
        </li>
        <li>
          <NavLink to={'/contact'} style={checkIsActive}>Contacto</NavLink>
        </li>
        <li>
          <NavLink to={'/product/63740f5fe2c75d8744f80a2d'} style={checkIsActive}>Detalle Producto</NavLink>
        </li>
      </ul>
    </nav>
  )
}

function App() {

  const navigate = useNavigate();
  const navigation = useNavigation();

  const handleClick = (path: string) => {
    // realizamos cualquier acción
    navigate(path);
  }

  return (
    <>
      <NavBar />
      <h1>Título de la página</h1>
      {navigation.state === 'loading' ?
        <p>Cargando contenido...</p> :
        <Outlet />
      }
      <div>
        <button onClick={() => handleClick('/info')}>Info</button>
        <button onClick={() => handleClick('/contact')}>Contact</button>
      </div>
    </>
  )
}

export default App