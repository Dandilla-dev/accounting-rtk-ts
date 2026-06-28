
import './App.css'
import Guest from "./components/Guest";
import Profile from "./components/Profile";
import {Route, Routes} from "react-router";


function App() {

  return (
   <Routes>
     <Route path={'/'} element={<Guest/>}/>
     <Route path={'/profile'} element={<Profile/>}/>
   </Routes>
  )
}

export default App
