import { create } from "zustand";

export const useFavoriteStore = create((set) => ({
    favoriteList: [],
    updateList: (list) => set((state) => {
        let newList = [...state.favoriteList]
        newList = [...newList, list]
    return {
            favoriteList: newList
    } 
                
    })  
})) 