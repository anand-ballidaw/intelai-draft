import { apiRequest } from "./api"

export async function getLeads() {

    return apiRequest("/admissions/leads")

}

export async function createLead(data: any) {

    return apiRequest("/admissions/leads", {

        method: "POST",

        body: JSON.stringify(data)

    })

}