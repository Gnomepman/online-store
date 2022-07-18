import { filter_cards } from "../cards/cards filter";

const field: HTMLInputElement = document.getElementById("phone_search")! as HTMLInputElement;

field.addEventListener("keyup", () => {
    filter_cards();
})

field.addEventListener("search", () => {
    filter_cards();
})