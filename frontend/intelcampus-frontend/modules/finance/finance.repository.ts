import { apiRequest } from "@/services/api.service"
import { Invoice } from "./finance.types"

export async function fetchInvoices(): Promise<Invoice[]> {

    return apiRequest("/finance/fees")

}

export async function createInvoice(data: Invoice): Promise<Invoice> {

    return apiRequest("/finance/fees", {

        method: "POST",

        body: JSON.stringify(data)

    })

}

export async function payInvoice(data: Invoice): Promise<Invoice> {

    return apiRequest("/finance/pay", {

        method: "POST",

        body: JSON.stringify(data)

    })

}