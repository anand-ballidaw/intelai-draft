import { apiRequest } from "@/services/api.service"
import { Book } from "./library.types"

export async function fetchBooks(): Promise<Book[]> {

    return apiRequest("/library/books")

}

export async function createBook(data: Book): Promise<Book> {

    return apiRequest("/library/books", {

        method: "POST",

        body: JSON.stringify(data)

    })

}