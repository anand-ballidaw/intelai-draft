interface Props {

    title: string
    value: number | string

}

export default function StatCard({ title, value }: Props) {

    return (

        <div className="border rounded-lg p-4 bg-white shadow">

            <h3 className="text-sm text-gray-500">
                {title}
            </h3>

            <p className="text-2xl font-bold mt-2">
                {value}
            </p>

        </div>

    )

}