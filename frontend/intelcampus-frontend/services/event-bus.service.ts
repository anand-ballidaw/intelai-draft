type EventHandler = (payload: any) => void

class EventBus {

    private events: Record<string, EventHandler[]> = {}

    on(event: string, handler: EventHandler) {

        if (!this.events[event]) {
            this.events[event] = []
        }

        this.events[event].push(handler)

    }

    emit(event: string, payload?: any) {

        if (!this.events[event]) return

        this.events[event].forEach(handler => handler(payload))

    }

}

export const eventBus = new EventBus()