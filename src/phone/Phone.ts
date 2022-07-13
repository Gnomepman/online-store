import { Iphone, colors, cameras, years, manufactures } from '../types and interfaces/interfaces';

export class Phone implements Iphone{
    readonly src: string;
    readonly manufacture: manufactures;
    readonly name: string;
    readonly year: years;
    readonly color: colors;
    readonly number_of_cameras: cameras;
    readonly popularity: boolean;
    readonly quantity: number;

    constructor(src: string, manufacture: manufactures, name: string, year: years, color: colors, 
        number_of_cameras: cameras, popularity: boolean, quantity: number){
        this.src = src;
        this.manufacture = manufacture;
        this.name = name;
        this.year = year;
        this.color = color;
        this.number_of_cameras = number_of_cameras;
        this.popularity = popularity;
        this.quantity = quantity;
    }
}