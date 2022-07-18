import { user_options } from "../types and interfaces/interfaces";
import { manufactures } from "../types and interfaces/interfaces";
import { colors } from "../types and interfaces/interfaces";
import { cameras } from "../types and interfaces/interfaces";
import { sort_cards } from "./cards sort";

export function filter_cards(settings: user_options = JSON.parse(localStorage.user_settings) as user_options){
    const cards = document.getElementById("cards")!.children;
    const field: HTMLInputElement = document.getElementById("phone_search")! as HTMLInputElement;
    for (const element of cards){
        dispay(element);
        
        if(field.value.length !== 0){
         // let reg = new RegExp(field.value, 'i');
          if(!new RegExp(field.value, 'i').test(element.querySelector("#card_header")!.textContent!)){
            hide(element);
          }
        }
        if(settings.manufacture.length > 0 && !(settings.manufacture.includes(element.querySelector("#card_name")!.textContent as manufactures))){
          hide(element);
        }
        if(
          settings.number_of_cameras.length > 0 &&
          !(settings.number_of_cameras.includes(element.querySelector("#card_cameras")!.textContent!.split(" ")[1] as unknown as cameras) as unknown as cameras)
        ) {
          hide(element);
        }
        if(settings.color.length > 0 && !(settings.color.includes(element.querySelector("#card_color")!.textContent as colors))){
          hide(element);
        }
        if(settings.popularity && (element.querySelector("#card_popularity")!.textContent !== 'популярный')){
          hide(element);
        }
        if(Number(element.querySelector("#card_quantity")!.textContent?.split(" ")[2]) < Number(settings.range_storage[0]) ||
        Number(element.querySelector("#card_quantity")!.textContent?.split(" ")[2]) > Number(settings.range_storage[1])
        ){
          hide(element);
        }
        if(Number(element.querySelector("#card_year")!.textContent) < Number(settings.range_year[0]) ||
        Number(element.querySelector("#card_year")!.textContent) > Number(settings.range_year[1])
        ){
          hide(element);
        }
    }
    sort_cards();
}

/*
Татьяна, если вы смотрите на это и думаете: "Ведь это бред, можно было использовать один класс filtered{dispay: none}"
И метод .toggle() - то у меня почему-то не перезаписывались стили. Уверен, этому есть разумное объяснение, но я его не нашел
*/
function hide(element: Element) {
  element.classList.remove("flex");
  element.classList.add("filtered");
}

function dispay(element: Element) {
  element.classList.remove("filtered");
  element.classList.add("flex");
}

