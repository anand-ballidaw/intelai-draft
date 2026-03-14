"use client"

import React, { useState } from "react"
import { InventoryItem } from "./ItemCard"

interface ItemFormProps {
    onCreate: (item: InventoryItem) => void
}

export default function ItemForm({ onCreate }: ItemFormProps) {

    const [name, setName] = useState("")
    const [category, setCategory] = useState("")
    const [quantity, setQuantity] = useState(1)

    const handleSubmit = (e: React.FormEvent) => {

        e.preventDefault()

        const item: InventoryItem = {

            id: crypto.randomUUID(),

            name,

            category,

            quantity

        }

        onCreate(item)

        setName("")
        setCategory("")
        setQuantity(1)
    }

    return (

        <form
            onSubmit={handleSubmit}
            className="border p-4 rounded-lg bg-white shadow-sm mb-6"
        >

            <h2 className="text-lg font-semibold mb-4">
                Add Inventory Item
            </h2>

            <div className="mb-3">
                <input
                    type="text"
                    placeholder="Item Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full border rounded px-3 py-2"
                />
            </div>

            <div className="mb-3">
                <input
                    type="text"
                    placeholder="Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full border rounded px-3 py-2"
                />
            </div>

            <div className="mb-4">
                <input
                    type="number"
                    placeholder="Quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="w-full border rounded px-3 py-2"
                />
            </div>

            <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded"
            >
                Add Item
            </button>

        </form>

    )

}