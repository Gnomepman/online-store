export type colors = 'dark' | 'blue' | 'light';
export type cameras = 1 | 2 | 3;
export type years = 2016 | 2017 | 2018 | 2019 | 2020 | 2021 | 2022; 
export type manufactures = 'samsung' | 'apple' | 'xiaomi';

export interface Iphone {
    src: string;
    manufacture: manufactures;
    name: string;
    year: years;
    color: colors;
    number_of_cameras: cameras;
    popularity: boolean;
    quantity: number;
} 