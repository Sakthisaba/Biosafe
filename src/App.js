import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import './App.css';
import Login from './component/login/Login'
import style from './style'
import Banner from './component/Banner'
import Banner2 from './component/Banner2'
import Nav from './component/Nav'
import GetStarted from './component/GetStarted'

import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
       
      <Router>
      <Routes>
       
        
        <Route path='/' element={<Home></Home>} >
        
        </Route>
         
        <Route path='/login' element={<Login></Login>}>
       
        </Route>
      </Routes>
      </Router>
   
   
   
   
    
    </ChakraProvider>
  );
}

function Home()
{return (<> 
<div className="bg-primary  w-full ">
<div className={`${style.paddingX } ` }>
<Nav></Nav>
<Banner></Banner>
<Banner2></Banner2>
<GetStarted></GetStarted></div></div></>)}

export default App;
