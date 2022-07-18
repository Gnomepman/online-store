import { Phone } from '../phone/Phone'
import galaxy_a14_32gb from "../assets/galaxy_a14_32gb.png"
import galaxy_a32_123gb from "../assets/galaxy_a32_123gb.png"
import galaxy_a32_63gb from "../assets/galaxy_a32_63gb.png"
import galaxy_a52_128gb from "../assets/galaxy_a52_128gb.png"
import galaxy_a73_256gb from "../assets/galaxy_a73_256gb.png"
import galaxy_M32 from "../assets/galaxy_M32.png"
import galaxy_m33_5g from "../assets/galaxy_m33_5g.png"
import galaxy_m53_5g from "../assets/galaxy_m53_5g.png"
import galaxy_s21_256gb from "../assets/galaxy_s21_256gb.png"
import iphone_11 from "../assets/iphone_11.png"
import iphone_12_64_gb from "../assets/iphone_12_64_gb.png"
import iphone_13_mini from "../assets/iphone_13_mini.png"
import iphone_13_pro_1tb from "../assets/iphone_13_pro_1tb.png"
import iphone_13_pro_max_512_gb from "../assets/iphone_13_pro_max_512_gb.png"
import samsung_a53_5g from "../assets/samsung_a53_5g.png"
import xiaomi_poco_x4_pro_256_gb from '../assets/xiaomi_poco_x4_pro_256_gb.png'
import xiaomi_redmi_9_64gb from "../assets/xiaomi_redmi_9_64gb.png"
import xiaomi_redmi_9a from "../assets/xiaomi_redmi_9a.png"
import xiaomi_redmi_9A_64_gb from '../assets/xiaomi_redmi_9A_64_gb.png'
import xiaomi_redmi_9c from '../assets/xiaomi_redmi_9c.png'
import xiaomi_redmi_note_9_128_gb from "../assets/xiaomi_redmi_note_9_128_gb.png"
import xiaomi_redmi_note_11_128_gb from "../assets/xiaomi_redmi_note_11_128_gb.png"
import xiaomi_redmi_note_11_pro_128_gb from "../assets/xiaomi_redmi_note_11_pro_128_gb.png"

export let phones: Phone[] = [
    new Phone(galaxy_a14_32gb, 'samsung', "Galaxy a14", 2020, 'light', 3, true, 20),
    new Phone(galaxy_a32_123gb, 'samsung', "Galaxy a32 128GB", 2021, 'light', 3, false, 15),
    new Phone(galaxy_a32_63gb, 'samsung', "Galaxy a32 63GB", 2021, "dark", 3, false, 20),
    new Phone(galaxy_a52_128gb, 'samsung', "Galaxy a52", 2020, 'light', 3, false, 10),
    new Phone(galaxy_a73_256gb, 'samsung', 'Galaxy a73', 2022, 'light', 3, true, 40),
    new Phone(galaxy_M32, 'samsung', "Galaxy m32", 2021, 'dark', 1, false, 15),
    new Phone(galaxy_m33_5g, 'samsung', "Galaxy m33", 2020, 'dark', 3, false, 50),
    new Phone(galaxy_m53_5g, 'samsung', "Galaxy m53", 2021, 'dark', 3, true, 27),
    new Phone(galaxy_s21_256gb, 'samsung', "Galaxy s21", 2020, 'dark', 3, false, 14),
    new Phone(iphone_11, "apple", 'Iphone 11', 2019, 'light', 2, true, 19),
    new Phone(iphone_12_64_gb, 'apple', 'Iphone 12', 2020, 'blue', 2, false, 8),
    new Phone(iphone_13_mini, "apple", "Iphone 13 mini", 2021, 'light', 2, false, 35),
    new Phone(iphone_13_pro_1tb, 'apple', "Iphone 13 pro", 2021, 'blue', 3, true, 31),
    new Phone(iphone_13_pro_max_512_gb, 'apple', "Iphone 13 pro max", 2021, 'light', 3, false, 24),
    new Phone(samsung_a53_5g, 'samsung', 'a53', 2016, 'dark', 3, false, 14),
    new Phone(xiaomi_poco_x4_pro_256_gb, 'xiaomi', 'Poco x4 pro', 2018, 'light', 2, false, 46),
    new Phone(xiaomi_redmi_9_64gb, 'xiaomi', 'Redmi 9' , 2018, 'blue', 3, true, 6),
    new Phone(xiaomi_redmi_9a, 'xiaomi', 'Redmi 9a 128GB', 2016, 'blue', 1, false, 34),
    new Phone(xiaomi_redmi_9A_64_gb, "xiaomi", "Redmi 9a 64gb", 2016, 'blue', 1, false, 34),
    new Phone(xiaomi_redmi_9c, 'xiaomi', "Redmi 9c", 2017, 'dark', 1, false, 28),
    new Phone(xiaomi_redmi_note_9_128_gb, "xiaomi", "Redmi note 9", 2021, "blue", 3, false, 31),
    new Phone(xiaomi_redmi_note_11_128_gb, 'xiaomi', "Redmi note 11", 2022, 'dark', 3, true, 14),
    new Phone(xiaomi_redmi_note_11_pro_128_gb, 'xiaomi', "Redmi note 11 pro", 2022, 'dark', 3, false, 44)
];