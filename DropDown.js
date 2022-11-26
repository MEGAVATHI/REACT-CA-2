import React, { useState } from 'react';
import { FormControl,Box, InputLabel, Select, MenuItem, Button } from '@mui/material';
import "./CA2.css";


function DropDown() {
    const [color, setColor] = useState("White");

    const handleColor = (event) => {
        setColor(event.target.value);
    }

    return(
       
        <>
            <FormControl>
                <InputLabel id="color">Select Color</InputLabel>
                <Select
                    id={color}
                    labelId='color'
                    label="Select Color"
                    value={color}
                    onChange={handleColor}
                    sx={{
                        width: 200
                    }}
                >
                
                <MenuItem value={'lime'}>Lime</MenuItem>
                <MenuItem value={'lavender'}>Lavender</MenuItem>
                <MenuItem value={'crimson'}>Crimson</MenuItem>
                <MenuItem value={'darkblue'}>Darkblue</MenuItem>
                <MenuItem value={'teal'}>Teal</MenuItem>
                <MenuItem value={'rebeccapurple'}>Rebecca Purple</MenuItem>
                <MenuItem value={'ghostwhite'}>GhostWhite</MenuItem>
                <MenuItem value={'aquamarine'}>Aqua Marine</MenuItem>
                <MenuItem value={'aliceblue'}>Alice Blue</MenuItem>   
                </Select>
            </FormControl>
            <Box className='box'
    backgroundColor = {color}
    sx={{
        width: 300,
        height: 300,borderRadius:25
    }}
/>
 </>
    )
   
}

export default DropDown