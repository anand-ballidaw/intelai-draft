import { Invoice } from "./finance.types"
import {
    fetchInvoices,
    createInvoice,
    payInvoice
} from "./finance.repository"

import { eventBus } from "@/services/event-bus.service"

export async function getInvoices(): Promise<Invoice[]> {

    return fetchInvoices()

}

export async function addInvoice(data: Invoice): Promise<Invoice> {

    const result = await createInvoice(data)

    eventBus.emit("NEW_INVOICE", result)

    return result

}

export async function payFee(data: Invoice): Promise<Invoice> {

    const result = await payInvoice(data)

    eventBus.emit("FEE_PAID", result)

    return result

}