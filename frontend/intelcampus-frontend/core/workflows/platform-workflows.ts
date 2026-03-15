import { workflowEngine } from "@/core/engines/workflow.engine"

workflowEngine.registerWorkflow({

    id: "leave_request",

    name: "Teacher Leave Approval",

    steps: [

        { role: "hod", action: "approve_leave" },

        { role: "principal", action: "final_approval" }

    ]

})

workflowEngine.registerWorkflow({

    id: "complaint_escalation",

    name: "Complaint Escalation",

    steps: [

        { role: "teacher", action: "review" },

        { role: "hod", action: "investigate" },

        { role: "principal", action: "resolve" }

    ]

})