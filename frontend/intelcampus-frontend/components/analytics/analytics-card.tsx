"use client"

interface Props {
    title: string
    value: string | number
    description?: string
}

export default function AnalyticsCard({
    title,
    value,
    description,
}: Props) {

    return (

        <div className="rounded-xl border p-6 bg-background">

            <p className="text-sm text-muted-foreground">
                {title}
            </p>

            <p className="text-3xl font-bold mt-2">
                {value}
            </p>

            {description && (
                <p className="text-xs text-muted-foreground mt-2">
                    {description}
                </p>
            )}

        </div>

    )
}