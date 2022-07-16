import { user_options } from "../types and interfaces/interfaces";
import { apply_user_settings } from "./events on buttons"

(function () {
  let user_settings: user_options;
  if (!localStorage.user_settings) {
    user_settings = {
      manufacture: [],
      number_of_cameras: [],
      color: [],
      popularity: false,
      range_storage: [5, 50],
      range_year: [2016, 2022],
      sorting_method: 'name_asc',
    };
    localStorage.user_settings = JSON.stringify(user_settings);
  } else {
    user_settings = JSON.parse(localStorage.user_settings);
  }
  apply_user_settings(user_settings);
})();
