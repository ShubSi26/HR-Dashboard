import { create } from 'zustand'

type User = {
    user:any;
    searcheduser:any
    isLoading: boolean;
    isError: boolean;
    setUser: (user: any) => void;
    clearUser: () => void;
    setIsLoading: (isLoading: boolean) => void;
    setIsError: (isError: boolean) => void;
    setSearcheduser: (searcheduser: any) => void;
}

const useUserStore = create<User>((set) => ({
    user: null,
    searcheduser: null,
    isLoading: true,
    isError: false,
    setUser: (user) => set({ user }),
    setSearcheduser: (searcheduser: any) => set({ searcheduser }),
    clearUser: () => set({ user: null }),
    setIsLoading: (isLoading) => set({ isLoading }),
    setIsError: (isError) => set({ isError }),

}))

type Bookmark = {
    bookmark: any;
    setBookmark: (bookmark: any) => void;
}

const useBookmarkStore = create<Bookmark>((set) => ({
    bookmark: [],
    setBookmark: (bookmark) => set({ bookmark }),
}))

export { useBookmarkStore };

export default useUserStore;