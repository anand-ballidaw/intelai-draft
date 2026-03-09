export interface Lead {

    id: string

    name: string
    phone: string
    email: string

    source: "website" | "facebook" | "instagram" | "walk-in" | "referral"

    interestedClass: string

    status: "new" | "contacted" | "interested" | "admission-taken" | "lost"

    createdAt: string

}