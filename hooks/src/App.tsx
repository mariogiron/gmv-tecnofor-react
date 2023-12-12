import { useState } from 'react'
import './App.css'
import Reloj from './components/Reloj'
import Scroll from './components/Scroll';
import PrecioIva from './components/PrecioIva';
import LogRender from './components/LogRender';

function App() {

  const [showDate, setShowDate] = useState(true);

  return (
    <>
      <LogRender />
      <PrecioIva precio={259} />
      <Scroll />
      <button onClick={
        () => setShowDate(!showDate)
      }>
        Show date
      </button>
      {showDate && <Reloj />}
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ab repudiandae minima consectetur autem velit. Necessitatibus alias ab distinctio cum quisquam eum quasi, quas inventore aliquid porro non quaerat officiis libero incidunt illum voluptates, quam excepturi iusto eaque accusantium? Assumenda blanditiis ad sed excepturi, quos suscipit. Suscipit, laborum? Mollitia voluptatem numquam quis exercitationem expedita unde quod minus perferendis debitis obcaecati, pariatur ipsum vel voluptatibus ducimus ut ipsam quia nobis! Reiciendis asperiores, non quod quidem sint libero et quos ut! Accusamus eius iste architecto. Veniam, ex! Deleniti quasi error, officia magnam molestiae, voluptatibus animi, inventore asperiores quia maxime accusamus labore laboriosam?</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit sequi eos quae in autem velit! Assumenda nostrum enim nihil voluptate delectus quibusdam autem? Animi corporis similique at officiis illo a est provident magnam fugiat! Perferendis nulla nobis ex minima? In voluptatem vitae quasi dolorum similique consectetur deserunt nulla nemo, tempora aliquam sit? Tempore maxime veniam molestias quod iusto recusandae doloribus eum odit minima eveniet mollitia aliquid, aliquam sequi quae ex sit. Ipsum eius enim debitis repudiandae quis, vel a officia. Odio, dolorum, accusamus asperiores earum reprehenderit praesentium debitis sunt, accusantium consequuntur aliquid in deleniti corrupti autem possimus fugit molestias culpa?</p>
    </>
  )
}

export default App
