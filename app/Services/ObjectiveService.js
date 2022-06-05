import { ProxyState } from "../AppState.js"






class ObjectiveService {
  constructor() {

  }

  update(objective) {
    ProxyState.objective = objective
    console.log('objective updated')
  }
}

export const objectiveService = new ObjectiveService()