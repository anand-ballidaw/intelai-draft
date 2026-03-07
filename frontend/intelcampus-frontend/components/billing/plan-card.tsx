"use client"

interface PlanCardProps {
    name: string
    price: string
    features: string[]
    current?: boolean
}

export default function PlanCard({
    name,
    price,
    features,
    current,
}: PlanCardProps) {
    return (
        <div className="rounded-xl border p-6 space-y-4 bg-background">
            <h3 className="text-lg font-semibold">{name}</h3>

            <p className="text-3xl font-bold">{price}</p>

            <ul className="text-sm space-y-2 text-muted-foreground">
                {features.map((feature, index) => (
                    <li key={index}>✓ {feature}</li>
                ))}
            </ul>

            {current ? (
                <button
                    disabled
                    className="w-full px-4 py-2 rounded-md bg-muted text-muted-foreground"
                >
                    Current Plan
                </button>
            ) : (
                <button className="w-full px-4 py-2 rounded-md bg-primary text-primary-foreground">
                    Upgrade Plan
                </button>
            )}
        </div>
    )
}