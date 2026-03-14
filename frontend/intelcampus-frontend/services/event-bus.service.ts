import { workflowService } from "./workflow.service"

class EventBusService {

    emit(type: string, payload?: any) {

        workflowService.trigger({
            type,
            payload
        })

    }

}

export const eventBus = new EventBusService()