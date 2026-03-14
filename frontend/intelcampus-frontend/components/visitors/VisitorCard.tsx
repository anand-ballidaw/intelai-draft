"use client"

import React from "react"

export interface Visitor {
    id: string
    name: string
    purpose: string
    host: string
    entryTime: string
}

interface VisitorCardProps {
    visitor: Visitor
}

export default function VisitorCard({ visitor }: VisitorCardProps) {

    return (

        <div className="border rounded-lg p-4 bg-white shadow-sm">

            <h3 className="text-lg font-semibold">
                {visitor.name}
            </h3>

            <p className="text-sm text-gray-500">
                Purpose: {visitor.purpose}
            </p>

            <p className="text-sm text-gray-500">
                Host: {visitor.host}
            </p>

            <p className="text-sm text-gray-500">
                Entry Time: {visitor.entryTime}
            </p>

        </div>

    )

}