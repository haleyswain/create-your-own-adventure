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
    this.selectedScenario = this.scenarioService.getScenarioById(1);
    console.log(this.selectedScenario.option1);
  }

  goToNewScenario(clickedScenario: Scenario) {
    this.router.navigate(['yellowstone', clickedScenario.id]);
  };


}
