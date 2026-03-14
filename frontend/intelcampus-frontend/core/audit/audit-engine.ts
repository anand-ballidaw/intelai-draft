import { AuditLog, AuditAction } from "./audit-types"

export class AuditEngine {

    static createLog(
        action: AuditAction,
        actorId: string,
        entityId?: string,
        metadata?: Record<string, any>
    ): AuditLog {

        return {

            id: crypto.randomUUID(),

            action,

            actorId,

            entityId,

            metadata,

            createdAt: new Date().toISOString()

        }

    }

    static getLogsByActor(
        logs: AuditLog[],
        actorId: string
    ): AuditLog[] {

        return logs.filter(log => log.actorId === actorId)

    }

    static getLogsByAction(
        logs: AuditLog[],
        action: AuditAction
    ): AuditLog[] {

        return logs.filter(log => log.action === action)

    }

    static getLogsByEntity(
        logs: AuditLog[],
        entityId: string
    ): AuditLog[] {

        return logs.filter(log => log.entityId === entityId)

    }

}