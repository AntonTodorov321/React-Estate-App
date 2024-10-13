import { useState } from 'react';

import { Slider, Box, Button } from '@mui/material';

export default function Filter() {
    const [range, setRange] = useState([0, 5000]);

    const handleSliderChange = (event, newValue) => {
        setRange(newValue);
    };

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Button variant="outlined" >
                From: {range[0]}
            </Button>

            <Slider
                value={range}
                onChange={handleSliderChange}
                valueLabelDisplay="auto"
                min={0}
                max={5000}
                step={50}
                sx={{ flex: 1, mx: 2, width: '300px' }}
            />

            <Button variant="outlined" >
                To: {range[1]}
            </Button>
        </Box>
    );
};