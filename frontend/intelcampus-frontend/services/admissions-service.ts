import { apiRequest } from "./api"
import { eventBus } from "./event-bus.service"
import { Lead } from "@/core/domain/Lead"

export async function getLeads(): Promise<Lead[]> {

    return apiRequest("/admissions/leads")

}

export async function createLead(data: Lead): Promise<Lead> {

    const result = await apiRequest("/admissions/leads", {

        method: "POST",

        body: JSON.stringify(data)

    })

    eventBus.emit("NEW_ADMISSION", data)

    return result

}