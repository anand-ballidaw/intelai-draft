import { Lead } from "./admissions.types"
import { fetchLeads, createLead } from "./admissions.repository"
import { eventBus } from "@/services/event-bus.service"

export async function getLeads(): Promise<Lead[]> {

    return fetchLeads()

}

export async function addLead(data: Lead): Promise<Lead> {

    const result = await createLead(data)

    eventBus.emit("NEW_ADMISSION", result)

    return result

}