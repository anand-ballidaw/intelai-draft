import { integrationEngine } from "@/core/engines/integration.engine"

integrationEngine.register({

    id: "email",

    name: "Email Service",

    async execute(payload) {

        console.log("Sending email:", payload)

        return { success: true }

    }

})