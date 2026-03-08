export function Footer() {
    return (
        <footer className="border-t bg-background py-8">
            <div className="mx-auto max-w-6xl px-6 text-center text-sm text-muted-foreground">
                © {new Date().getFullYear()} IntelCampus. All rights reserved.
            </div>
        </footer>
    );
}