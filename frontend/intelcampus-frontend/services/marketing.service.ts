export const marketingService = {

    async getLeads() {

        return [
            {
                id: 1,
                name: "Kiran Kumar",
                phone: "9876543210",
                email: "kiran@example.com",
                source: "Facebook",
                status: "New"
            },
            {
                id: 2,
                name: "Sneha Reddy",
                phone: "9123456780",
                email: "sneha@example.com",
                source: "Website",
                status: "Contacted"
            }
        ]

    }

}