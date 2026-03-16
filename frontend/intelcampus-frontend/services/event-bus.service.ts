type EventCallback = (payload: any) => void

class EventBus {

    private listeners: Record<string, EventCallback[]> = {}

    publish(event: string, payload?: any) {

        const callbacks = this.listeners[event]

        if (!callbacks) return

        callbacks.forEach(cb => cb(payload))
    }

    emit(event: string, payload?: any) {
        this.publish(event, payload)
    }

    subscribe(event: string, callback: EventCallback) {

        if (!this.listeners[event]) {
            this.listeners[event] = []
        }

        this.listeners[event].push(callback)
    }

    unsubscribe(event: string, callback: EventCallback) {

        const callbacks = this.listeners[event]

        if (!callbacks) return

        this.listeners[event] = callbacks.filter(cb => cb !== callback)
    }

}

export const eventBus = new EventBus()

export const eventBusService = eventBus