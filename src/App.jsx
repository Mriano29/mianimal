import { useState } from 'React'
import React from 'React';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Button from '@mui/material/Button';
import './App.css'
import Avatar from  '@mui/material/Avatar';
import Stack from  '@mui/material/Stack';
import Typography from  '@mui/material/Typography';

function App() {
  const[count, setCount] = useState(0)
  function handleClick(){
    alert('Acariciaste a Alister');
    setCount(count+1)
  }
  
  return (
    <>
    <Stack direction={{xs: 'column', sm:'row', md:'column'}} spacing={{xs: 4, sm:2, md:4}}>    
    <Avatar  alt="Alister animalito" src="https://www.rspca-yorkhome.org.uk/images/uploads/img-13-13569.jpg" sx={{width:"90%", height:"100%"}}></Avatar>
    <br />
  o  <Button variant='contained' size='large' sx={{color:'blue', backgroundColor:'white'}} nClick={handleClick} >Acaricia a Alister</Button>
    <br />
    <Typography variant='h2'>Has acariciado a Alister {count} veces</Typography></Stack>
    </>
  )
}
export default App
