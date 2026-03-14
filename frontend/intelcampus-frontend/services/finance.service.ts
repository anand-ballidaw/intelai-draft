import { apiRequest } from "./api"
import { Invoice } from "@/core/domain/Invoice"

export async function getFees(): Promise<Invoice[]> {

    return apiRequest("/finance/fees")

}

export async function payFee(data: Invoice): Promise<Invoice> {

    return apiRequest("/finance/pay", {

        method: "POST",

        body: JSON.stringify(data)

    })

}