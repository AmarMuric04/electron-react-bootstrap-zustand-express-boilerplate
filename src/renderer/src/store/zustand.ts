import { create } from 'zustand'

interface StoreState {
  user: User | undefined
  setUser: (userData: User) => void
}

const useStore = create<StoreState>((set) => ({
  user: undefined,
  setUser: (userData) => set(() => ({ user: userData }))
}))

export default useStore
