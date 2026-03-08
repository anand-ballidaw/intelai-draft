export function TutorialSection() {
    return (
        <section className="px-6 py-24">
            <div className="mx-auto max-w-6xl">
                <div className="text-center">
                    <h2 className="text-3xl font-semibold">Featured Tutorials</h2>
                    <p className="mt-4 text-muted-foreground">
                        Interactive video-based learning modules with progress tracking.
                    </p>
                </div>

                <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {["Mathematics", "Science", "Technology"].map((subject) => (
                        <div
                            key={subject}
                            className="group rounded-xl border bg-background p-6 shadow-sm transition hover:shadow-lg"
                        >
                            <div className="aspect-video rounded-md bg-muted" />

                            <h3 className="mt-6 text-lg font-semibold">{subject}</h3>

                            <p className="mt-2 text-sm text-muted-foreground">
                                Comprehensive modules with ranking insights and performance analytics.
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
