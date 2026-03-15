import { apiRequest } from "@/services/api.service"
import { Invoice } from "@/core/domain/Invoice"

export async function fetchFees(): Promise<Invoice[]> {

    return apiRequest("/finance/fees")

}

export async function submitPayment(data: Invoice): Promise<Invoice> {

    return apiRequest("/finance/pay", {

        method: "POST",

        body: JSON.stringify(data)

    })

}