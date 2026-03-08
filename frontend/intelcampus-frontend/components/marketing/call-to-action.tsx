import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CallToAction() {
    return (
        <section className="px-6 py-24 text-center">
            <h2 className="text-3xl font-semibold">
                Ready to Transform Your Learning Experience?
            </h2>

            <p className="mt-4 text-muted-foreground">
                Join IntelCampus today and unlock smart ranking analytics and structured tutorials.
            </p>

            <div className="mt-8">
                <Link href="/subscribe">
                    <Button size="lg">Subscribe Now</Button>
                </Link>
            </div>
        </section>
    );
}
