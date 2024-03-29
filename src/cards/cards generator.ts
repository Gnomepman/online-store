import  { phones } from '../array of phones/phones'
import { Phone } from '../phone/Phone'
import { filter_cards } from './cards filter';

function generate_cards(){
    const area: HTMLDivElement = document.querySelector('.products')?.querySelector('.wrapper')!;
    phones.forEach( (element: Phone) => {
        const template: HTMLTemplateElement = document.querySelector("template") as HTMLTemplateElement;
        (template.content.querySelector("#card_header") as HTMLHeadElement).textContent = element.name;
        (template.content.querySelector('#card_image') as HTMLImageElement).src = element.src;
        (template.content.querySelector("#card_name") as HTMLSpanElement).textContent = element.manufacture;
        (template.content.querySelector("#card_year") as HTMLSpanElement).textContent = String(element.year);
        (template.content.querySelector("#card_color") as HTMLSpanElement).textContent = element.color;
        (template.content.querySelector("#card_cameras") as HTMLSpanElement).textContent = String("камер: " + element.number_of_cameras);
        (template.content.querySelector("#card_popularity") as HTMLSpanElement).textContent = element.popularity ? 'популярный' : "непопулярный";
        (template.content.querySelector("#card_quantity") as HTMLSpanElement).textContent = String('на складе: ' + element.quantity);
        area.appendChild(template.content.cloneNode(true)!);
    });
    Array.from(document.getElementById("cards")!.children).forEach(function (element){
        element.addEventListener("click", (e) => {
          
            if (element.classList.contains("in-cart")) {
              element.classList.remove("in-cart");
              document.getElementById("cart_counter")!.textContent = String(
                Number(document.getElementById("cart_counter")!.textContent) - 1
              );
            } else {
              if (
                Number(document.getElementById("cart_counter")!.textContent) ===
                20
              ) {
                alert("Невозможно добавить, в корзине 20 товаров");
              } else {
                element.classList.add("in-cart");
                document.getElementById("cart_counter")!.textContent = String(
                  Number(document.getElementById("cart_counter")!.textContent) +
                    1
                );
              }
            }
          
        });
    });
    filter_cards();
}

generate_cards();