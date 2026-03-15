import { moduleRegistry } from "@/core/engines/module-registry.engine"

moduleRegistry.register({
    id: "students",
    name: "Students",
    route: "/dashboard/students",
    roles: ["admin", "teacher", "principal"]
})

moduleRegistry.register({
    id: "finance",
    name: "Finance",
    route: "/dashboard/finance",
    roles: ["admin", "finance"]
})

moduleRegistry.register({
    id: "transport",
    name: "Transport",
    route: "/dashboard/transport",
    roles: ["admin", "transport"]
})

moduleRegistry.register({
    id: "library",
    name: "Library",
    route: "/dashboard/library",
    roles: ["admin", "librarian"]
})

moduleRegistry.register({
    id: "admissions",
    name: "Admissions",
    route: "/dashboard/admissions",
    roles: ["admin", "marketing"]
})