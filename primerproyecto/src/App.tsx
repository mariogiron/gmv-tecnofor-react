import './App.css'
import Contador from './components/Contador';
import Counter from './components/Counter';
import Despedida from './components/Despedida';
import ProfileCard from './components/ProfileCard';
import Saludo from './components/Saludo';
import Employee from './interfaces/Employee';

function App() {

  let nombre: string = 'Lucía';
  let currentEmployee: Employee = { name: 'Raúl', surname: 'García', email: 'raul@gmail.com', department: 'desarrollo', available: true };

  return (
    <>
      {/* <h1 className="header">Primer proyecto</h1>
      <h2>Subtítulo</h2>
      <p>{nombre.toUpperCase()}</p>
      <Saludo nombre="Lucia" />
      <Despedida nombre="Paco" />
      <ProfileCard employee={currentEmployee} buttonText="Ver detalle">
        <p>Este empleado trabaja muy</p>
      </ProfileCard>

      <ProfileCard employee={currentEmployee} buttonText="Ver detalle">
        Este empleado trabaja muy bien
      </ProfileCard> */}
      <Counter />
      <Contador />
    </>
  )
}

export default App
