import { cameras, colors, manufactures, user_options } from "../types and interfaces/interfaces";
import { slider_quantity } from "../sliders/sliders";
import { slider_year } from "../sliders/sliders";

const reset_filters: HTMLElement = document.getElementById("reset filters")!;
const reset_user_settings: HTMLElement = document.getElementById("reset user options")!;
const select_sorting = (<HTMLSelectElement>document.getElementById("sorting"))!;

reset_filters.addEventListener("click", () => {
  localStorage.user_settings = JSON.stringify({
    manufacture: [],
    number_of_cameras: [],
    color: [],
    popularity: false,
    range_storage: [5, 50],
    range_year: [2016, 2022],
    sorting_method: (<HTMLSelectElement>document.getElementById("sorting"))!.value,
  });
  apply_user_settings();
});

reset_user_settings.addEventListener('click', () => {
    localStorage.user_settings = JSON.stringify({
        manufacture: [],
        number_of_cameras: [],
        color: [],
        popularity: false,
        range_storage: [5, 50],
        range_year: [2016, 2022],
        sorting_method: 'name_asc',
      });
      apply_user_settings();
});

select_sorting.addEventListener('change', () => {
    let temp: user_options = JSON.parse(localStorage.user_settings);
    temp.sorting_method = select_sorting.value;
    localStorage.user_settings = JSON.stringify(temp);
});

Array.from(document.querySelector("#manufactures")!.children).forEach(element => {
    element.addEventListener("click", (e) => {
      element.classList.toggle("active");
      let manufacture: manufactures = [...element.classList][1] as manufactures;
      let temp: user_options = JSON.parse(localStorage.user_settings);

      if (temp.manufacture.indexOf(manufacture) > -1) {
        temp.manufacture.splice(temp.manufacture.indexOf(manufacture), 1);
      } else {
        temp.manufacture.push(manufacture);
      }

      localStorage.user_settings = JSON.stringify(temp);
    });
});

Array.from(document.querySelector("#number_of_cameras")!.children).forEach(element => {
    element.addEventListener("click", (e) => {
      element.classList.toggle("active");
      let number_of_cameras: cameras =
        element.textContent! as unknown as cameras;
      let temp: user_options = JSON.parse(localStorage.user_settings);

      if (temp.number_of_cameras.indexOf(number_of_cameras) > -1) {
        temp.number_of_cameras.splice(
          temp.number_of_cameras.indexOf(number_of_cameras),
          1
        );
      } else {
        temp.number_of_cameras.push(number_of_cameras);
      }

      localStorage.user_settings = JSON.stringify(temp);
    });
})

Array.from(document.querySelector("#colors")!.children).forEach(element => {
    element.addEventListener("click", (e) => {
      element.classList.toggle("active");
      let colors: colors = [...element.classList][1] as colors;
      let temp: user_options = JSON.parse(localStorage.user_settings);

      if (temp.color.indexOf(colors) > -1) {
        temp.color.splice(temp.color.indexOf(colors), 1);
      } else {
        temp.color.push(colors);
      }

      localStorage.user_settings = JSON.stringify(temp);
    });
})

document.getElementById("popular_checkbox")!.onchange = (e) => {
    const checkbox: HTMLInputElement = document.getElementById("popular_checkbox")! as HTMLInputElement;
    let temp: user_options = JSON.parse(localStorage.user_settings);
    temp.popularity = checkbox.checked
    localStorage.user_settings = JSON.stringify(temp);
    apply_user_settings();
}

export function apply_user_settings(settings: user_options = JSON.parse(localStorage.user_settings)) {
  Array.from(document.getElementsByClassName("active")).forEach(element => {
    element.classList.remove("active");
  })
  settings.manufacture.forEach((elem) => {
    document.getElementById(`${elem}`)?.classList.add("active");
  });
  settings.number_of_cameras.forEach((elem) => {
    document.getElementById(`cameras_${elem}`)?.classList.add("active");
  });
  settings.color.forEach((elem) => {
    document.getElementById(`color_${elem}`)?.classList.add("active");
  });

  (document.getElementById("popular_checkbox")! as HTMLInputElement).checked = settings.popularity;
  slider_quantity.noUiSlider!.set([
    Number(settings.range_storage[0]),
    Number(settings.range_storage[1]),
  ]);
  slider_year.noUiSlider!.set([
    settings.range_year[0],
    settings.range_year[1],
  ]);
  (<HTMLSelectElement>document.getElementById("sorting"))!.value = settings.sorting_method;
}