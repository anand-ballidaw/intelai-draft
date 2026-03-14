"use client"

import React from "react"
import ItemCard, { InventoryItem } from "./ItemCard"

interface ItemListProps {
    items: InventoryItem[]
}

export default function ItemList({ items }: ItemListProps) {

    return (

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

            {items.map((item) => (

                <ItemCard
                    key={item.id}
                    item={item}
                />

            ))}

        </div>

    )

}