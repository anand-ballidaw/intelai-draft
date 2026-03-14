import { SystemEvent, EventType } from "./event-types"

export class EventEngine {

    static createEvent(
        type: EventType,
        actorId: string,
        entityId?: string,
        metadata?: Record<string, any>
    ): SystemEvent {

        return {
            id: crypto.randomUUID(),
            type,
            actorId,
            entityId,
            metadata,
            createdAt: new Date().toISOString()
        }

    }

    static getEventsByActor(
        events: SystemEvent[],
        actorId: string
    ): SystemEvent[] {

        return events.filter(e => e.actorId === actorId)

    }

    static getEventsByType(
        events: SystemEvent[],
        type: EventType
    ): SystemEvent[] {

        return events.filter(e => e.type === type)

    }

    static getEventsByEntity(
        events: SystemEvent[],
        entityId: string
    ): SystemEvent[] {

        return events.filter(e => e.entityId === entityId)

    }

}