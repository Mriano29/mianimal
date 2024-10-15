import React from 'React'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid2'
import TextField from '@mui/material/TextField'
import Container from '@mui/material/Container'
import { useState } from 'React'


export default function FormRegistro() {
    const [data, setData] = useState({name:'', breed:''})
    
    const handleSubmit = (e) => {
        //Para que no mande el formulario, sino que haga lo que yo le diga
        e.preventDefault();
        
    }
    
    const handleChangeName = (e) =>{
        setData({
            ...data,
            name: e.target.value
        })
        console.log(data)
    }
    
    
    const handleChangeBreed = (e) =>{
        setData({
            ...data,
            breed: e.target.value
        })
        console.log(data)
    }
    
    return(
       <Container sx={{justifyContent: 'center'}}>
        <Paper elevation={12} square={false} sx={{ textAlign: 'center', padding: 2 }}>
        <Typography variant='h6' color='blue' sx={{ mt: 2, mb: 2 }}>
        Registra tu mascota
        </Typography>
        <Box component='form' onSubmit={handleSubmit}>
        <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
        <TextField
        required
        label='Nombre Mascota'
        variant='outlined'
        fullWidth
        value={data.name}
        onChange={handleChangeName}
        />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <TextField
        label='Raza'
        variant='outlined'
        fullWidth
        value={data.breed}
        onChange={handleChangeBreed}
        />
        </Grid>
        </Grid >
        {/* Grid para el botón */}
        <Grid item xs={12}>
        <Button type="submit" variant='contained'  color='secondary' fullWidth sx={{ mt: 2 }}>
        Registrar
        </Button>
        </Grid>
        </Box>
        </Paper> 
        </Container>   
    )
}