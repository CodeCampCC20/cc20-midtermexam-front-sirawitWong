import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useLoginStore = create(persist((set) => ({
    isLogin: false,
    login: ()=> set ((state) =>({isLogin: state.isLogin = true})),
    logout: ()=> set ((state) =>({isLogin: state.isLogin = false}))
})))