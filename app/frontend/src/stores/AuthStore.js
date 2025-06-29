import { create } from 'zustand'
import {createJSONStorage, persist} from 'zustand/middleware'

const useAuthStore = create(
    persist((set) => {
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
                headers: {
                    "Content-Type": "application/json",
                }
            })
            set({username: ""})
            set({publicKey: ""})
            set({isLoggedIn: false})
        }
    }
    },
        {
            name: 'LogIn',
            storage: createJSONStorage(() => sessionStorage)
        }
        )
);

export { useAuthStore };
