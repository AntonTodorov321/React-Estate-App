import { useContext } from 'react';

import { Slider, Box, Button } from '@mui/material';

import * as styles from './Price.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEraser } from '@fortawesome/free-solid-svg-icons';
import { FilterContext } from '../../contexts/filterContext';

export default function Price({
    cleanFilter
}) {
    const { range, filter, handleChange, handleSliderChange } = useContext(FilterContext);
    const currency = filter.currency;

    return (
        <div className={styles.container}>

            <div className={styles.buttonsCurrency}>
                <div className={styles.currencyWrapper}>

                    <div
                        data-name="currency"
                        onClick={handleChange}
                        className={`${styles.buttonCurrency} ${currency === 'lv' ? styles.selected : ''}`}>
                        lv
                    </div>

                    <div
                        data-name="currency"
                        onClick={handleChange}
                        className={`${styles.buttonCurrency} ${currency === 'EUR' ? styles.selected : ''}`}>
                        EUR
                    </div>
                </div>

                <FontAwesomeIcon
                    icon={faEraser}
                    className={styles.eraser}
                    onClick={cleanFilter}
                />
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