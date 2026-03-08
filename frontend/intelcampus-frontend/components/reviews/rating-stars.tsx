"use client"

interface Props {
    rating: number
    onChange?: (value: number) => void
}

export default function RatingStars({
    rating,
    onChange,
}: Props) {

    const stars = [1, 2, 3, 4, 5]

    return (

        <div className="flex gap-1 text-xl">

            {stars.map((star) => (

                <span
                    key={star}
                    onClick={() =>
                        onChange && onChange(star)
                    }
                    className={`cursor-pointer ${star <= rating
                            ? "text-yellow-500"
                            : "text-gray-300"
                        }`}
                >
                    ★
                </span>

            ))}

        </div>

    )
}