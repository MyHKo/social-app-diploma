import { create } from 'zustand'

const useAuthStore = create((set) => {
    return {
        isLoggedIn: false,
        publicKey: "",
        username: "",
        setIsLoggedIn: (value) => {
            set({isLoggedIn: value})
        },
        setPublicKey: (value) => {
            set({publicKey: value})
        },
        setUsername: (value) => {
            set({username: value})
        },
        logOut: () => {
            fetch("http://localhost:8080/auth/logout", {
                method: "POST",
                credentials: "include",
            })
            set({username: ""})
            set({publicKey: ""})
            set({isLoggedIn: false})
        }
    }
});

export { useAuthStore };
