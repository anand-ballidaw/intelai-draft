import { create } from "zustand"
import { Book } from "./library.types"
import { getBooks, addBook } from "./library.service"

interface LibraryState {

    books: Book[]

    loadBooks: () => Promise<void>

    createBook: (book: Book) => Promise<void>

}

export const useLibraryStore = create<LibraryState>((set) => ({

    books: [],

    loadBooks: async () => {

        const data = await getBooks()

        set({ books: data })

    },

    createBook: async (book) => {

        const newBook = await addBook(book)

        set((state) => ({
            books: [...state.books, newBook]
        }))

    }

}))