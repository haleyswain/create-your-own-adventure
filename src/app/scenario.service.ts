import { Injectable } from '@angular/core';
import { Scenario } from './scenario.model';
import { SCENARIOS } from './mock-scenarios';

@Injectable()
export class ScenarioService {

  constructor() { }

  getScenarios() {
    return SCENARIOS;
  }

  getScenarioById(scenarioOptionId: number) {
    for (var i = 0; i<SCENARIOS.length; i++) {
      if (SCENARIOS[i].option1Id === scenarioOptionId) {
        console.log("option id " + scenarioOptionId);
        return SCENARIOS[i+2];
      } else if (SCENARIOS[i].option2Id === scenarioOptionId) {
        console.log(SCENARIOS[i]);
        return SCENARIOS[i+1];
      }
    }
  }
}
