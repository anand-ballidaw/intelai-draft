interface Props {

    title: string
    value: number | string
    description?: string

}

export default function StatCard({
    title,
    value,
    description
}: Props) {

    return (

        <div className="border rounded-lg p-4 bg-white shadow">

            <h3 className="text-sm text-gray-500">
                {title}
            </h3>

            <p className="text-2xl font-bold mt-2">
                {value}
            </p>

            {description && (

                <p className="text-xs text-gray-400 mt-1">
                    {description}
                </p>

            )}

        </div>

    )

}