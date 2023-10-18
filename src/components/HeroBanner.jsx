import { Box, Button, Typography } from '@mui/material'
import HerBannerImage from'../assets/images/banner.png'
import React from 'react'
import '../App.css'
const HeroBanner = () => {
    return (
        <Box sx={
            {
                mt: {
                    lg: '211px', xs: '70px'
                },
                ml: {
                    sm: '50px'
                }
            }
        } position='relative' p ='20px'>
            <Typography color='#FF2625' fontSize='26px' fontWeight='600'>
                Fitness Club
            </Typography>
            <Typography fontWeight='700px' sx={{
                fontSize: {
                    lg :'44px',xs :'40px' 
                }
            }} mb="23px" mt="30px">
                Sweat , Smile <br/> Repeat
            </Typography>
            <Typography fontSize="22px" lineHeight='35px' mb={4}>
                Click out the most effective excercises
            </Typography>
            <Button variant='contained' color='error' href='#excercises' sx={{
                background:"#ff2625",padding:'10px'
            }}> Explore Excercises</Button>
            <Typography fontWeight={600}
                color="#ff2625"
                sx={{
                    opacity: 0.1,
                    display:{lg :'block' , xs:'none'}
                }}
                fontSize='200px'
            >
                Excercise
            </Typography>
            <img src={HerBannerImage} alt ='banner' className='hero-banner-img'/>
        </Box>
    )
}

export default HeroBanner