import React from 'react'
import UserDetails from '../Components/UserDetails'
import {ThemeProvider, Typography } from '@mui/material'
import Cards from '../Components/Cards'
import theme from '../Components/Theme'


function Dashboard() {
  return (
    <>
    <ThemeProvider theme={theme}>
    <Typography variant='h6' sx={{ m: 2}} fontWeight="400" > Social Media Dashboard</Typography>
    <UserDetails/>
    <Cards/>
    </ThemeProvider>

    </>
  )
}

export default Dashboard