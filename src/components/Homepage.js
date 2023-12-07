import React from 'react'

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import { Box, Button, Divider, Tab, TextField, Typography } from '@mui/material';

import CustomizedTables from './CustomizedTable';

function Homepage() {
  return (
    <Box>
        <Box gap={"1rem"} margin={"20px"} display={"flex"} flexDirection={"rows"}>
            <HomeOutlinedIcon sx={{color:"grey"}} />
            <ArrowForwardIosOutlinedIcon sx={{color:"grey"}} />
            <Typography>Users</Typography>
        </Box>

        {/* table starts */}
        <Box m={'3%'} border='1px solid black'>
            <Box sx={{backgroundColor:"orange",p:"1%",margin:'1px'}}>
                <Typography fontWeight={"600"} color={'white'}>USERS</Typography>
            </Box>
            <Box display={"flex"} justifyContent={"space-between"} marginBottom={"5px"}>
                {/* search division */}
                <Box>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                    <SearchIcon sx={{height:"6vh",paddingLeft:'5px'}}/>
                </Box>

                <Box display={"flex"} flexDirection={"row"} backgroundColor="#32be32" padding={"8px"}margin="0 2px 2px 0">
                    {/* <Button> */}
                        <PersonIcon sx={{color:"white"}} />
                        <Typography sx={{color:"white"}} >Create User</Typography>
                    {/* </Button> */}
                </Box>
            </Box>
            <Divider/>

            <Box>
                <CustomizedTables/>
            </Box>

        </Box>
    </Box>
  )
}

export default Homepage