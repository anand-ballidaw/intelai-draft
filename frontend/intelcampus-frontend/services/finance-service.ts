import { apiRequest } from "./api"

export async function getFees() {

    return apiRequest("/finance/fees")

}

export async function payFee(data: any) {

    return apiRequest("/finance/pay", {

        method: "POST",

        body: JSON.stringify(data)

    })

}