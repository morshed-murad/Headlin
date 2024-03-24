import { create } from "zustand";
import { listBoxes } from "./lItemslist";
import { persist } from "zustand/middleware";

export interface ListItem {
  id: number;
  title: string;
}

const getStored = (): ListItem[] => {
  const storedItems = localStorage.getItem("items");
  if (storedItems) {
    return JSON.parse(storedItems);
  }
  return [];
};
type ListItemsState = {
  items: ListItem[];
  addItems: (item: ListItem) => void;
  removeItem: (id: number) => void;
};

export const useListStore = create(
  persist<ListItemsState>(
    (set) => ({
      items: listBoxes.concat(getStored()),
      addItems: (item: ListItem) =>
        set((state) => {
          const updateItems = [
            ...state.items,
            { ...item, id: state.items.length + 1 },
          ];
          listBoxes.push({ ...item, id: state.items.length + 1 });

          localStorage.setItem("items", JSON.stringify(updateItems));
          return { items: updateItems };
        }),
      removeItem: (id: number) =>
        set((state) => {
          const updateItems = state.items.filter((item) => item.id !== id);
          const updateListBOxes = listBoxes.filter((item) => item.id !== id);
          listBoxes.length = 0;
          listBoxes.push(...updateListBOxes);
          localStorage.setItem("items", JSON.stringify(updateItems));
          return { items: updateItems };
        }),
    }),
    { name: "ListItemsState" }
  )
);
