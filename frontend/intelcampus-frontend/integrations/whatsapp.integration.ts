import { integrationEngine } from "@/core/engines/integration.engine"

integrationEngine.register({

    id: "whatsapp",

    name: "WhatsApp Service",

    async execute(payload) {

        console.log("Sending WhatsApp message:", payload)

        return { success: true }

    }

})