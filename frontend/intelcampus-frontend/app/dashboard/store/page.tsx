"use client"

import React, { useState } from "react"
import ItemForm from "@/components/store/ItemForm"
import ItemList from "@/components/store/ItemList"
import { InventoryItem } from "@/components/store/ItemCard"

export default function StorePage() {

    const [items, setItems] = useState<InventoryItem[]>([])

    const handleCreateItem = (item: InventoryItem) => {

        setItems([...items, item])

    }

    return (

        <div className="p-6">

            <h1 className="text-2xl font-bold mb-6">
                Store & Inventory Management
            </h1>

            <ItemForm onCreate={handleCreateItem} />

            <ItemList items={items} />

        </div>

    )

}