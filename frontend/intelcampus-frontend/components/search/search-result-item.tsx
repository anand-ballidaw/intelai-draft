"use client"

import Link from "next/link"

interface ResultItemProps {
    title: string
    href: string
}

export default function SearchResultItem({
    title,
    href,
}: ResultItemProps) {
    return (
        <Link
            href={href}
            className="block px-4 py-2 hover:bg-muted rounded-md text-sm"
        >
            {title}
        </Link>
    )
}