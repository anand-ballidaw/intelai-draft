"use client"

interface Props {
    author: string
    message: string
    createdAt: string
}

export default function DiscussionMessage({
    author,
    message,
    createdAt,
}: Props) {

    return (

        <div className="border rounded-lg p-4 space-y-2">

            <div className="flex justify-between text-sm">

                <span className="font-medium">
                    {author}
                </span>

                <span className="text-muted-foreground">
                    {createdAt}
                </span>

            </div>

            <p className="text-sm">
                {message}
            </p>

        </div>

    )
}