import { apiRequest } from "./api"

export async function loginApi(email: string, password: string) {

    return apiRequest("/auth/login", {

        method: "POST",

        body: JSON.stringify({
            email,
            password
        })

    })

}

export async function registerApi(data: any) {

    return apiRequest("/auth/register", {

        method: "POST",

        body: JSON.stringify(data)

    })

}