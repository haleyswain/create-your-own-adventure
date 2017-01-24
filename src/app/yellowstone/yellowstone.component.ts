import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Scenario } from '../scenario.model'
import { ScenarioService } from '../scenario.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-yellowstone',
  templateUrl: './yellowstone.component.html',
  styleUrls: ['./yellowstone.component.css'],
  providers: [ScenarioService]
})
export class YellowstoneComponent implements OnInit {
  scenarioId: number;
  selectedScenario: Scenario;

  constructor(private router: Router, private route: ActivatedRoute, private location: Location, private scenarioService: ScenarioService) {}

  ngOnInit() {
    this.route.params.forEach((urlParametersArray) => {
      this.scenarioId = parseInt(urlParametersArray['id']);
    this.selectedScenario = this.scenarioService.getScenarioById(this.scenarioId);
    });
  }

  goToNewScenario(clickedScenario: number) {
    this.router.navigate(['yellowstone', clickedScenario]);
    console.log(clickedScenario);
  };
}
