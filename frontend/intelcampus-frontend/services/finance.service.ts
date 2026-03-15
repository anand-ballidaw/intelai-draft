import { Invoice } from "@/core/domain/Invoice"
import { fetchFees, submitPayment } from "@/repositories/finance.repository"

export async function getFees(): Promise<Invoice[]> {

    return fetchFees()

}

export async function payFee(data: Invoice): Promise<Invoice> {

    return submitPayment(data)

}