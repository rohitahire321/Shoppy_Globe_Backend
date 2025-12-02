import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router'
import { Provider } from 'react-redux'
import { productStore } from './utils/productStore'

function App() {

  return (
    <Provider store={productStore}>
    <div className='min-h-screen flex flex-col'>
       <Header />
       <Outlet />
       <Footer />
    </div>
    </Provider>
  )
}

export default App
