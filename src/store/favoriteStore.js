import { create } from "zustand";

export const useFavoriteStore = create((set) => ({
    favoriteList: [],
    updateList: (list) => set((state) => {
        const newList = {...list}
    return {
            favoriteList: newList
    } 
                
    })  
})) 