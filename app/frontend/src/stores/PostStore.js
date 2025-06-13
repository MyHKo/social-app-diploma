import { create } from 'zustand'

const usePostStore = create((set) => {
    return {
        posts: [],
        fetchData: async () => {
            try {
                const response = await fetch("http://localhost:8080/posts/get-newest");
                const data = await response.json();
                set({posts: data})
            }
            catch(e) {
                console.log("Error while fetching posts: ", e);
            }
        }
    }
});

export { usePostStore };
