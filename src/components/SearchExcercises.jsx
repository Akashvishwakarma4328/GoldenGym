import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import '../App.css'
const SearchExcercises = () => {
    const [search, setSearch] = useState('');
    const handleSearch = async () => {
        if (search) {
            // const excerciseData = await fetchData();
        }
    }
    return (
        <Stack alignItems='center' mt='37px' justifyContent="center" p="20px">
            <Typography sx={
                {
                    fontSize: {
                        lg: '44px',
                        xs: '30px'
                    }
                }
            } mb='50px' textAlign='center'>
                Awesome Excercise You shoul <br />
                Should now
            </Typography>
            <Box position='relative' mb='72px'>
                <TextField
                    sx={
                        {
                            input: {
                                fontWeight: '700px',
                                border: 'none',
                                borderRadius: '4px'
                            },
                            width: {
                                lg: '800px',
                                xs: '350px'
                            },
                            backgroundColor: '#fff',
                            borderRadius: '40px'
                        }
                    }
                    height='76px'
                    value={search}
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                    placeholder='Search Excercise'
                    type='text'
                >

                </TextField>
                <Button className="search-btn"
                    sx={{
                        bgcolor: '#ff2625',
                        color: '#fff',
                        textTransform: 'none',
                        width: {
                            lg: '175px',
                            xs: '80px',
                        },
                        fontSize: {
                            lg: '20px',
                            xs: '14px'
                        }, height: '56px',
                        position: 'absolute',
                        right:'0'

                    }}
                    onClick={handleSearch}
                >Search</Button>

            </Box>

        </Stack>
    )
}

export default SearchExcercises