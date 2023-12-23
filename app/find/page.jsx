"use client";

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import MapPage from '../ui/home/find/Map';
import { useState, useEffect } from "react";
import HomeNavbar from '../ui/home/navbar/homenavbar';

const Find = () => {
  
  const [province, setProvince] = useState('');
  const handleprovinceChange = (event) => {
    setProvince(event.target.value);
  };
    return (
      <>
        <HomeNavbar/>
        <section className="w-full">
            <h1 style={{margin: "50px 0px"}}>
                Find a Cave
                <br className="max-md:hidden"/>
            </h1>
            <h2 style={{margin: "50px 0px"}}>    
                <span className="text-center">Select a Province to to find a Cave</span>
            </h2>
            <Box className='mb-10' style={{margin: "50px 0px"}}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Province</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  size='small'
                  id="demo-simple-select"
                  value={province}
                  label="Province"
                  onChange={handleprovinceChange}
                >
                  <MenuItem value={'Cavite'}>Cavite</MenuItem>
                  <MenuItem value={'Laguna'}>Laguna</MenuItem>
                  <MenuItem value={'Batangas'}>Batangas</MenuItem>
                  <MenuItem value={'Rizal'}>Rizal</MenuItem>
                  <MenuItem value={'Quezon'}>Quezon</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <MapPage/>
        </section>
      </>
    );
  }

  export default Find;