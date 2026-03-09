"use client"

interface QuizQuestionProps {
    question: string
    options: string[]
    selected: number | null
    onSelect: (index: number) => void
}

export default function QuizQuestion({
    question,
    options,
    selected,
    onSelect,
}: QuizQuestionProps) {
    return (
        <div className="space-y-4">
            <h3 className="font-medium">{question}</h3>

            <div className="space-y-2">
                {options.map((option, index) => (
                    <button
                        key={index}
                        onClick={() => onSelect(index)}
                        className={`block w-full text-left px-4 py-2 border rounded-md transition ${selected === index
                                ? "border-primary bg-primary/10"
                                : "hover:bg-muted"
                            }`}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    )
}