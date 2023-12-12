import './App.css'
import Contador from './components/Contador';
import Counter from './components/Counter';
// import Despedida from './components/Despedida';
// import ProfileCard from './components/ProfileCard';
// import Saludo from './components/Saludo';
// import Employee from './interfaces/Employee';
import { MouseEvent, useState } from 'react';
import Formulario, { User } from './components/Formulario';
import Condicionales from './components/Condicionales';
import Listas from './components/Listas';

function App() {

  const [users, setUsers] = useState<User[]>([]);

  // let nombre: string = 'Lucía';
  // let currentEmployee: Employee = { name: 'Raúl', surname: 'García', email: 'raul@gmail.com', department: 'desarrollo', available: true };

  const handleContadorClick = (event: MouseEvent) => {
    console.log('Se ha pulsado el botón en el Contador');
  }

  const handleOnCreateUser = (newUser: User) => {
    setUsers([...users, newUser]);
  }

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
      {/* <Counter /> */}
      {/* <Contador onContadorClick={handleContadorClick} /> */}
      {/* <Formulario onCreateUser={handleOnCreateUser} />
      <p>{users.length}</p> */}
      {/* <Condicionales /> */}
      <Listas />
    </>
  )
}

export default App
