import { Book } from "./library.types"
import { fetchBooks, createBook } from "./library.repository"
import { eventBus } from "@/services/event-bus.service"

export async function getBooks(): Promise<Book[]> {

    return fetchBooks()

}

export async function addBook(data: Book): Promise<Book> {

    const result = await createBook(data)

    eventBus.emit("NEW_BOOK", result)

    return result

}