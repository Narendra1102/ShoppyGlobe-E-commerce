
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import { Outlet } from "react-router-dom"
import store from "./utils/store"
import { Provider } from 'react-redux'


function App(){
  return(
    <Provider store={store}>
      <div>
        <Header />
        <Outlet/>
        <Footer/>
      </div>
    </Provider>
    
  )
}

export default App
