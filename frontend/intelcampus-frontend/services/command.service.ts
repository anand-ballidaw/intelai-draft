export interface CommandItem {
    id: string
    title: string
    description: string
    link: string
}

class CommandService {

    async getCommands(): Promise<CommandItem[]> {

        return [

            {
                id: "1",
                title: "Open Analytics Dashboard",
                description: "Institution Command Center",
                link: "/dashboard/analytics"
            },

            {
                id: "2",
                title: "Open Admissions",
                description: "Admissions management system",
                link: "/admissions"
            },

            {
                id: "3",
                title: "Open SmartClass",
                description: "Learning platform",
                link: "/smartclass"
            },

            {
                id: "4",
                title: "Open Finance",
                description: "Finance management",
                link: "/finance"
            },

            {
                id: "5",
                title: "Open Transport",
                description: "Transport management",
                link: "/transport"
            }

        ]

    }

}

export const commandService = new CommandService()