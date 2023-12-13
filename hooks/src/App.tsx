import { useState } from 'react';
import './App.css'
import useFetch from './customHooks/useFetch';
import useOnlineStatus from './customHooks/useOnlineStatus';
import { useGeolocation } from './customHooks/useGeolocation';
import useEnterEscButtons from './customHooks/useEnterEscButtons';
import { useBoolean } from './customHooks/useBoolean';

function App() {

  const [page, setPage] = useState(1);

  // Custom Hooks
  const isOnline = useOnlineStatus();
  const products = useFetch('https://rickandmortyapi.com/api/character/', page);
  const [position] = useGeolocation({});
  useEnterEscButtons({
    handleCancel: () => console.log('ESC'),
    handleConfirm: () => console.log('INTRO')
  });
  const [activo] = useBoolean(true);

  return (
    <>
      {position &&
        <div>
          <p>LAT: {position.coords.latitude}</p>
          <p>LNG: {position.coords.longitude}</p>
        </div>
      }
      <div>
        <button onClick={() => setPage(page - 1)}>Anterior</button>
        <button onClick={() => setPage(page + 1)}>Siguiente</button>
      </div>
      {isOnline ?
        <p>Estás ONLINE</p> :
        <p>Estás OFFLINE</p>
      }
      <h2>Lista de productos</h2>
      <div>
        {products && products.results.map((product: any) => (
          <div key={product._id}>
            <h4>{product.name}</h4>
            <img src={product.image} alt="" />
          </div>
        ))}
      </div>
    </>
  );

}

export default App
