import { user_options } from "../types and interfaces/interfaces";

export function sort_cards(settings: user_options = JSON.parse(localStorage.user_settings) as user_options){
   const cards = document.getElementById("cards")!;
    switch(settings.sorting_method){
        case 'name_asc':
            [...cards.children]
              .sort((a, b) => (a.querySelector("#card_header")!.textContent! > b.querySelector("#card_header")!.textContent! ? 1 : -1))
              .forEach((node) => cards.appendChild(node));
            break;
        case 'name_desc':
            [...cards.children]
              .sort((a, b) => (a.querySelector("#card_header")!.textContent! < b.querySelector("#card_header")!.textContent! ? 1 : -1))
              .forEach((node) => cards.appendChild(node));
            break;
        case 'year_asc':
            [...cards.children]
              .sort((a, b) => (Number(a.querySelector("#card_year")!.textContent!) > Number(b.querySelector("#card_year")!.textContent!) ? 1 : -1))
              .forEach((node) => cards.appendChild(node));
            break;
        case 'year_desc':
            [...cards.children]
              .sort((a, b) => (Number(a.querySelector("#card_year")!.textContent!) < Number(b.querySelector("#card_year")!.textContent!) ? 1 : -1))
              .forEach((node) => cards.appendChild(node));
            break;
        case 'quantity_asc':
            [...cards.children]
              .sort((a, b) => (Number(a.querySelector("#card_quantity")!.textContent?.split(" ")[2]) > Number(b.querySelector("#card_quantity")!.textContent?.split(" ")[2]) ? 1 : -1))
              .forEach((node) => cards.appendChild(node));
            break;
        case 'quantity_desc':
            [...cards.children]
              .sort((a, b) => (Number(a.querySelector("#card_quantity")!.textContent?.split(" ")[2]) < Number(b.querySelector("#card_quantity")!.textContent?.split(" ")[2]) ? 1 : -1))
              .forEach((node) => cards.appendChild(node));
            break;
    }
}