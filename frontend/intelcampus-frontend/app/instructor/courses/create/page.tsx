"use client"

import { useState } from "react"

export default function CreateCoursePage() {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")

    const handleSubmit = (e: React.FormEvent) => {

        e.preventDefault()

        const course = {
            title,
            description,
            price,
            category
        }

        console.log("Course Created:", course)

        alert("Course created (frontend mock). Backend integration later.")
    }

    return (

        <div className="max-w-2xl space-y-6">

            <h1 className="text-3xl font-bold">
                Create Course
            </h1>

            <form
                onSubmit={handleSubmit}
                className="space-y-4"
            >

                <div>

                    <label className="text-sm font-medium">
                        Course Title
                    </label>

                    <input
                        value={title}
                        onChange={(e) =>
                            setTitle(e.target.value)
                        }
                        className="w-full border rounded-md px-3 py-2 mt-1"
                        placeholder="Enter course title"
                    />

                </div>

                <div>

                    <label className="text-sm font-medium">
                        Description
                    </label>

                    <textarea
                        value={description}
                        onChange={(e) =>
                            setDescription(e.target.value)
                        }
                        className="w-full border rounded-md px-3 py-2 mt-1"
                        rows={4}
                        placeholder="Enter course description"
                    />

                </div>

                <div>

                    <label className="text-sm font-medium">
                        Price (₹)
                    </label>

                    <input
                        type="number"
                        value={price}
                        onChange={(e) =>
                            setPrice(e.target.value)
                        }
                        className="w-full border rounded-md px-3 py-2 mt-1"
                        placeholder="Enter course price"
                    />

                </div>

                <div>

                    <label className="text-sm font-medium">
                        Category
                    </label>

                    <input
                        value={category}
                        onChange={(e) =>
                            setCategory(e.target.value)
                        }
                        className="w-full border rounded-md px-3 py-2 mt-1"
                        placeholder="Example: AI, Programming, Data Science"
                    />

                </div>

                <button
                    type="submit"
                    className="px-6 py-2 bg-primary text-primary-foreground rounded-md"
                >
                    Create Course
                </button>

            </form>

        </div>

    )

}