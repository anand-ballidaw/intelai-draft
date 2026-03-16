import { apiRequest } from "@/services/api.service"
import { Lead } from "./admissions.types"

export async function fetchLeads(): Promise<Lead[]> {

    return apiRequest("/admissions/leads")

}

export async function createLead(data: Lead): Promise<Lead> {

    return apiRequest("/admissions/leads", {

        method: "POST",

        body: JSON.stringify(data)

    })

}