import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
import { user_options } from "../types and interfaces/interfaces";
import { filter_cards } from "../cards/cards filter";

let slider_quantity: noUiSlider.target = document.getElementById('slider_quantity')! as noUiSlider.target;
let slider_year: noUiSlider.target = document.getElementById('slider_year')! as noUiSlider.target;

noUiSlider.create(slider_quantity, {
    start: [15, 30],
    connect: true,
    step: 1,
    range: {
        'min': 5,
        'max': 50
    },
});

noUiSlider.create(slider_year, {
    start: [2019, 2021],
    connect: true,
    step: 1,
    range: {
        'min': 2016,
        'max': 2022
    },
});

slider_quantity.noUiSlider?.on('update', function(values){
    document.getElementById('formatting-start-quantity')!.textContent = String(Math.floor(values[0] as number));
    document.getElementById('formatting-end-quantity')!.textContent = String(Math.floor(values[1] as number));
});

slider_year.noUiSlider?.on('update', function(values){
    document.getElementById('formatting-start-year')!.textContent = String(Math.floor(values[0] as number));
    document.getElementById('formatting-end-year')!.textContent = String(Math.floor(values[1] as number));
});

slider_quantity.noUiSlider?.on('change', (values) => {
    let temp: user_options = JSON.parse(localStorage.user_settings);
    temp.range_storage[0] = Number(values[0]);
    temp.range_storage[1] = Number(values[1]);
    localStorage.user_settings = JSON.stringify(temp);
    filter_cards();
})

slider_year.noUiSlider?.on('change', (values) => {
    let temp: user_options = JSON.parse(localStorage.user_settings);
    temp.range_year[0] = Number(values[0]);
    temp.range_year[1] = Number(values[1]);
    localStorage.user_settings = JSON.stringify(temp);
    filter_cards();
})

export { slider_quantity };
export { slider_year };