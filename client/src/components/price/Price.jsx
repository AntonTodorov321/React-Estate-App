import { useState } from 'react';

import { Slider, Box, Button } from '@mui/material';

export default function Price() {
    const [range, setRange] = useState([0, 2500]);
    const [currency, setCurrency] = useState('EUR');

    const handleSliderChange = (event, newValue) => {
        setRange(newValue);
    };

    const changeCurrency = (e) => {
        const selectedCurrency = e.target.textContent;
        setCurrency(selectedCurrency);

        setRange(selectedCurrency === 'EUR' ? [0, 2500] : [0, 5000]);
    };

    return (
        <>
            <div onClick={changeCurrency} style={{ padding: '1em' }}>lv</div>
            <div onClick={changeCurrency} style={{ padding: '1em' }}>EUR</div>
            <Box >
                <Button variant="outlined" >
                    From: {range[0]} {currency}
                </Button>

                <Slider
                    value={range}
                    onChange={handleSliderChange}
                    valueLabelDisplay="auto"
                    min={0}
                    max={currency === 'EUR' ? 2500 : 5000}
                    step={currency === 'EUR' ? 25 : 50}
                    sx={{ width: '200px' }}
                />

                <Button variant="outlined" >
                    To: {range[1]} {currency}
                </Button>
            </Box>
        </>
    );
}