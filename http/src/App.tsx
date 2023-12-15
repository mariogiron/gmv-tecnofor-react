import './App.css'
import ProductsList from './components/ProductsList'
import SeriesList from './components/SeriesList'
import UserList from './components/UserList'
import ServicesProvider from './services/ServicesProvider'

function App() {

  return (
    <ServicesProvider>
      <ProductsList />
      <SeriesList />
      <UserList />
    </ServicesProvider>
  )
}

export default App
