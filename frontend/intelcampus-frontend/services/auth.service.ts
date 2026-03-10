export const authService = {

    async login(email: string, password: string) {

        const raw = localStorage.getItem("intelcampus_user")

        if (!raw) {
            throw new Error("User not registered")
        }

        const user = JSON.parse(raw)

        if (user.email !== email) {
            throw new Error("Invalid email")
        }

        return user
    },

    async register(data: any) {

        const user = {
            id: crypto.randomUUID(),
            name: data.name,
            email: data.email,
            role: "STUDENT",
            subscriptionActive: true
        }

        localStorage.setItem(
            "intelcampus_user",
            JSON.stringify(user)
        )

        return user
    },

    async getCurrentUser() {

        const raw = localStorage.getItem("intelcampus_user")

        if (!raw) return null

        return JSON.parse(raw)
    },

    async logout() {

        localStorage.removeItem("intelcampus_user")

    }

}