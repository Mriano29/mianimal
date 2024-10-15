import { useState } from 'React'
import React from 'React';
import './App.css'
import Ficha from './Components/Ficha';
// import FormRegistro from './Components/FormRegistro';
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'

export default function App() {

  const animals = [{
    id: 0,
    animal: 'gato',
    atribute: 'feliz',
    imageUrl:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSC4DtHTGprsp7K8u0ZlfSDmIDplvQYH5vniT0I3rpcl6wqBh8b',
    imageSize: 150,
    description: 'Gato común',
    },
    { id: 1,
    animal: 'perro',
    atribute: 'bello',
    imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwyXeKDN29AmZgZPLS7n0Bepe8QmVappBwZCeA3XWEbWNdiDFB',
    imageSize: 150,
    description: 'Perro callejero',
    },
    { id: 2,
    animal: 'loro',
    atribute: 'hablador',
    imageUrl: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSQdE59JmGZPmXPtvb2V820pbRwHIHjeWGbOCcdtbhfsrY-liEC',
    imageSize: 150,
    description: 'Loro de la jungla',
    },
    { id: 3,
    animal: 'tortuga',
    atribute: 'perezosa',
    imageUrl: 'https://content.nationalgeographic.com.es/medio/2022/06/10/tortuga-gigante-fantastica-de-la-isla-fernandina-galapagos_8c694854_800x800.jpg',
    imageSize: 150,
    description: 'Tortuga',
    }]
  
  return (
    <>
        <List>
            {animals.map((animal) => (
            <ListItem key={animal.id}>
               <Ficha
                  animal={animal.animal}
                  atribute={animal.atribute}
                  imageUrl={animal.imageUrl}
                  imageSize={150}
                  description={animal.description}
                  />
            </ListItem>))}
        </List>
    </>
  )
}
