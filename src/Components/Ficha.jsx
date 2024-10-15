import { useState } from 'React'
import React from 'React';
// import Button from '@mui/material/Button';
import Avatar from  '@mui/material/Avatar';
import Stack from  '@mui/material/Stack';
import Typography from  '@mui/material/Typography';
import {CustomButton} from 'milibreria';

export default function Ficha({animal, atribute, imageUrl, imageSize, description}) {
  const[count, setCount] = useState(0)
  function handleClick(){
    setCount(count+1)
  }
  
  return (
    <>
    <Stack direction={{xs: 'column', sm:'row', md:'column'}} spacing={{xs: 4, sm:2, md:4}} margin={3} textAlign={'center'}>    
    <Typography variant='h2'>Hola soy un {animal} y soy {atribute}</Typography>
    <Avatar  alt="Alister animalito" src={imageUrl} sx={{width:"90%", height:"100%"}}></Avatar>
    <br />
    <Typography variant='h2'>{description}</Typography>

    <CustomButton
  bgcolor="cyan"
  size="large"
  text={`Me has acariciado ${count} veces`}
  txtcolor="black"
  onClick={handleClick}
/>
   
    </Stack>
    </>
  )
}