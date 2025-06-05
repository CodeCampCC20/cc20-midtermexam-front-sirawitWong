import { create } from "zustand";

export const useDetailId = create((set) => ({
    id: "",
    updateId: (newId) => set((state) => ({id: state.id = newId}))  
}))