
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import { Outlet } from "react-router-dom"
import store from "./utils/store"
import { Provider } from 'react-redux'


function App(){
  return(
    // Provide Redux store to the entire application
    <Provider store={store}>
      <div>
        <Header />
        {/* Outlet renders the matched child route component */}
        <Outlet/>
        <Footer/>
      </div>
    </Provider>
    
  )
}

export default App
