"use client"

import { useState } from "react"
import { useFinanceStore } from "@/stores/finance-store"

export default function FeeForm() {

    const { addFee } = useFinanceStore()

    const [studentName, setStudentName] = useState("")
    const [className, setClassName] = useState("")
    const [totalFee, setTotalFee] = useState(0)

    const handleSubmit = (e: React.FormEvent) => {

        e.preventDefault()

        addFee({

            id: Date.now().toString(),

            studentName,
            className,

            totalFee,
            paidAmount: 0,
            dueAmount: totalFee,

            status: "due"

        })

        setStudentName("")
        setClassName("")
        setTotalFee(0)

    }

    return (

        <form onSubmit={handleSubmit} className="space-y-4">

            <input
                placeholder="Student Name"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                className="border p-2 rounded w-full"
            />

            <input
                placeholder="Class"
                value={className}
                onChange={(e) => setClassName(e.target.value)}
                className="border p-2 rounded w-full"
            />

            <input
                type="number"
                placeholder="Total Fee"
                value={totalFee}
                onChange={(e) => setTotalFee(Number(e.target.value))}
                className="border p-2 rounded w-full"
            />

            <button className="bg-blue-600 text-white px-4 py-2 rounded">
                Add Fee Record
            </button>

        </form>

    )

}