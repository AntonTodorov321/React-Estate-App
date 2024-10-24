import { useState } from 'react';

import { Slider, Box, Button } from '@mui/material';

import * as styles from './Price.module.css';

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
        <div className={styles.container}>
            <div className={styles.buttonsCurrency}>
                <div onClick={changeCurrency} className={`${styles.buttonCurrency} ${currency === 'lv' ? styles.selected : ''}`}>lv</div>
                <div onClick={changeCurrency} className={`${styles.buttonCurrency} ${currency === 'EUR' ? styles.selected : ''}`}>EUR</div>
            </div>

            <Box >
                <div className={styles.sliderContainer}>
                    <Button variant="outlined" className={styles.button} style={{ padding: '5px' }}>
                        {range[0]} {currency}
                    </Button>

                    <Slider
                        value={range}
                        onChange={handleSliderChange}
                        valueLabelDisplay="auto"
                        min={0}
                        max={currency === 'EUR' ? 2500 : 5000}
                        step={currency === 'EUR' ? 25 : 50}
                        sx={{ width: '140px' }}
                    />

                    <Button variant="outlined" className={styles.button} style={{ padding: '1px' }}>
                        {range[1]} {currency}
                    </Button>
                </div>
            </Box>
        </div>
    );
}