import MenuDrop from "../images/MenuDropdown.png";
import ListBox from "../images/listbox.png";
import combobox from "../images/combobox.png";
export interface Image {
  src: string;
  alt: string;
  path: string;
  id: number;
  title: string;
}

export const imageList: Image[] = [
  {
    id: 1,
    src: MenuDrop,
    alt: "dropdowun",
    path: "/dropmenu",
    title: "Menu DropDwon ",
  },
  {
    id: 2,
    src: ListBox,
    alt: "listbox",
    path: "/listbox",
    title: "List Box",
  },
  {
    id: 3,
    src: combobox,
    alt: "combobox",
    path: "/combobox",
    title: "Combobox (Autocomplete)",
  },
  {
    id: 4,
    src: MenuDrop,
    alt: "dropdowun",
    path: "/dropmenu",
    title: "Menu DropDwon ",
  },
  {
    id: 5,
    src: MenuDrop,
    alt: "dropdowun",
    path: "/dropmenu",
    title: "Menu DropDwon ",
  },
  {
    id: 6,
    src: MenuDrop,
    alt: "dropdowun",
    path: "/dropmenu",
    title: "Menu DropDwon ",
  },
  {
    id: 7,
    src: MenuDrop,
    alt: "dropdowun",
    path: "/dropmenu",
    title: "Menu DropDwon ",
  },
];
