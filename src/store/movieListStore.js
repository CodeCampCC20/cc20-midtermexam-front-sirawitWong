import { create } from "zustand";

export const useMovieStore = create((set) => ({
    movieList: {},
    updateList: (list) => set((state) => {
        const newList = {...list}
        return {
            movieList: newList
        } 
        
    })
}))