"use client"

import React from "react"

export interface InventoryItem {
    id: string
    name: string
    category: string
    quantity: number
}

interface ItemCardProps {
    item: InventoryItem
}

export default function ItemCard({ item }: ItemCardProps) {

    return (

        <div className="border rounded-lg p-4 bg-white shadow-sm">

            <h3 className="text-lg font-semibold">
                {item.name}
            </h3>

            <p className="text-sm text-gray-500">
                Category: {item.category}
            </p>

            <p className="text-sm text-gray-500">
                Quantity: {item.quantity}
            </p>

        </div>

    )

}