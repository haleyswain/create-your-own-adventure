import { Component, OnInit } from '@angular/core';
import { ScenarioService } from '../scenario.service';
import { Scenario } from '../scenario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
  providers: [ScenarioService]
})
export class StartComponent implements OnInit {

  scenarios: Scenario[];
  selectedScenario: Scenario;

  constructor(private router: Router, private scenarioService: ScenarioService) {}

  ngOnInit(){
    console.log(this.scenarios);
    this.selectedScenario = this.scenarioService.getScenarios()[0];
  };

  goToNewGlacier(clickedScenario: number) {
    this.router.navigate(['glacier', clickedScenario]);
    console.log(clickedScenario);
  };

  goToNewYellowstone(clickedScenario: number) {
    this.router.navigate(['yellowstone', clickedScenario]);
    console.log(clickedScenario);
  };

}
