import { Lead } from "@/core/domain/Lead"
import { fetchLeads, saveLead } from "@/repositories/admissions.repository"
import { eventBus } from "./event-bus.service"

export async function getLeads(): Promise<Lead[]> {

    return fetchLeads()

}

export async function createLead(data: Lead): Promise<Lead> {

    const result = await saveLead(data)

    eventBus.emit("NEW_ADMISSION", result)

    return result

}