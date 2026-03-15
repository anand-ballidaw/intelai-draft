import { apiRequest } from "@/services/api.service"
import { Lead } from "@/core/domain/Lead"

export async function fetchLeads(): Promise<Lead[]> {

    return apiRequest("/admissions/leads")

}

export async function saveLead(data: Lead): Promise<Lead> {

    return apiRequest("/admissions/leads", {

        method: "POST",

        body: JSON.stringify(data)

    })

}