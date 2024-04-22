import { create } from 'zustand'

export const useStore = create((set) => ({
  isVisible: false,
  setIsVisible: (value) => set({ isVisible: value }),
}))
