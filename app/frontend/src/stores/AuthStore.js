import { create } from 'zustand'
import {createJSONStorage, persist} from 'zustand/middleware'

const useAuthStore = create(
    persist((set) => {
    return {
        isLoggedIn: false,
        publicKey: "",
        username: "",
        accessToken: "",
        setIsLoggedIn: (value) => {
            set({isLoggedIn: value})
        },
        setPublicKey: (value) => {
            set({publicKey: value})
        },
        setUsername: (value) => {
            set({username: value})
        },
        setAccessToken: (value) => {
            set({authToken: value})
        },
        logOut: () => {
            fetch("http://localhost:8080/auth/logout", {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                }
            }).then(() => {
                window.location.reload()
            }).catch((e) => {
                console.log("Error while loging out: ", e)
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
