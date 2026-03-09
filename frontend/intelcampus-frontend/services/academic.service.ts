import { apiRequest } from "./api"

export async function getClasses() {

    return apiRequest("/academic/classes")

}

export async function createClass(data: any) {

    return apiRequest("/academic/classes", {

        method: "POST",

        body: JSON.stringify(data)

    })

}