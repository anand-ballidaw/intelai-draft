export interface AuditLog {

    id: string

    action: string

    user?: string

    module?: string

    details?: any

    createdAt: string

}

class AuditEngine {

    private logs: AuditLog[] = []

    log(action: string, module?: string, user?: string, details?: any) {

        const entry: AuditLog = {

            id: crypto.randomUUID(),

            action,

            module,

            user,

            details,

            createdAt: new Date().toISOString()

        }

        this.logs.push(entry)

    }

    getLogs(): AuditLog[] {

        return this.logs

    }

    getLogsByModule(module: string): AuditLog[] {

        return this.logs.filter(log => log.module === module)

    }

}

export const auditEngine = new AuditEngine()