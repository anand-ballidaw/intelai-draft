"use client"

interface StatsCardProps {
    title: string
    value: string | number
    description?: string
}

export default function StatsCard({
    title,
    value,
    description,
}: StatsCardProps) {
    return (
        <div className="rounded-2xl border bg-background p-6 shadow-sm transition hover:shadow-md">
            <h3 className="text-sm font-medium text-muted-foreground">
                {title}
            </h3>

            <div className="mt-3 text-3xl font-bold tracking-tight">
                {value}
            </div>

            {description && (
                <p className="mt-2 text-xs text-muted-foreground">
                    {description}
                </p>
            )}
        </div>
    )
}