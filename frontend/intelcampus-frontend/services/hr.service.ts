import { apiRequest } from "./api"

export async function getEmployees() {

    return apiRequest("/hr/employees")

}

export async function createEmployee(data: any) {

    return apiRequest("/hr/employees", {

        method: "POST",

        body: JSON.stringify(data)

    })

}