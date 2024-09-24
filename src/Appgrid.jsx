import React from "React";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';

export default function GridMio() {
    return (
        <>
            <Grid direction={{xs: 'column', sm:'row', md:'row'}}  container columnSpacing={{ xs:1, sm: 2, md: 3 }} rowSpacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                    <Button variant="contained" fullWidth>Botón 1</Button>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Button variant="contained" fullWidth>Botón 2</Button>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Button variant="contained" fullWidth>Botón 3</Button>
                </Grid>
            </Grid>
        </>
    );
}
