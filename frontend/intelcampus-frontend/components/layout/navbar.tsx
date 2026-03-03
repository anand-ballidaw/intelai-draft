"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b bg-background/70 backdrop-blur-md">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/logo.png"
                        alt="IntelCampus Logo"
                        width={200}
                        height={200}
                        className="h-8 w-auto"
                    />
                    <span className="font-semibold text-lg">IntelCampus</span>
                </Link>

                <div className="flex items-center gap-4">
                    <Link href="/signin">
                        <Button variant="outline">Sign In</Button>
                    </Link>
                    <Link href="/register">
                        <Button>Subscribe</Button>
                    </Link>
                </div>
            </div>
        </header>
    );
}