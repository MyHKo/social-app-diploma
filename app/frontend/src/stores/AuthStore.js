import { create } from 'zustand'

const useAuthStore = create((set) => {
    return {
        isLoggedIn: false,
        publicKey: "",
        setIsLoggedIn: (value) => {
            set({isLoggedIn: value})
        },
        setPublicKey: (value) => {
            set({publicKey: value})
        }

    }
});

export { useAuthStore };
