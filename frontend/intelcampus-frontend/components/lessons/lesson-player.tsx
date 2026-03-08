"use client"

interface LessonPlayerProps {
    title: string
    videoUrl: string
}

export default function LessonPlayer({
    title,
    videoUrl,
}: LessonPlayerProps) {
    return (
        <div className="space-y-4">
            <h2 className="text-xl font-semibold">{title}</h2>

            <div className="aspect-video rounded-lg overflow-hidden border">
                <iframe
                    src={videoUrl}
                    title={title}
                    className="w-full h-full"
                    allowFullScreen
                />
            </div>
        </div>
    )
}