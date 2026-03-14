"use client"

import React, { useState } from "react"
import VisitorForm from "@/components/visitors/VisitorForm"
import VisitorList from "@/components/visitors/VisitorList"
import { Visitor } from "@/components/visitors/VisitorCard"

export default function VisitorsPage() {

    const [visitors, setVisitors] = useState<Visitor[]>([])

    const handleCreateVisitor = (visitor: Visitor) => {

        setVisitors([...visitors, visitor])

    }

    return (

        <div className="p-6">

            <h1 className="text-2xl font-bold mb-6">
                Visitor Management
            </h1>

            <VisitorForm onCreate={handleCreateVisitor} />

            <VisitorList visitors={visitors} />

        </div>

    )

}