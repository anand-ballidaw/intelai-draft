class ApiService {

    async get<T = any>(url: string): Promise<T> {

        const response = await fetch(url)

        if (!response.ok) {
            throw new Error("GET request failed")
        }

        return response.json()
    }

    async post<T = any>(url: string, data: any): Promise<T> {

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            throw new Error("POST request failed")
        }

        return response.json()
    }

    async put<T = any>(url: string, data: any): Promise<T> {

        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            throw new Error("PUT request failed")
        }

        return response.json()
    }

    async delete(url: string): Promise<void> {

        const response = await fetch(url, {
            method: "DELETE"
        })

        if (!response.ok) {
            throw new Error("DELETE request failed")
        }
    }

}

const apiServiceInstance = new ApiService()

export const apiService = apiServiceInstance

export const apiRequest: any = (...args: any[]) => {
    return apiServiceInstance.get(args[0])
}

apiRequest.get = apiServiceInstance.get.bind(apiServiceInstance)
apiRequest.post = apiServiceInstance.post.bind(apiServiceInstance)
apiRequest.put = apiServiceInstance.put.bind(apiServiceInstance)
apiRequest.delete = apiServiceInstance.delete.bind(apiServiceInstance)