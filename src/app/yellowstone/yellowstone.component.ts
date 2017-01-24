import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Scenario } from '../scenario.model'
import { ScenarioService } from '../scenario.service';

@Component({
  selector: 'app-yellowstone',
  templateUrl: './yellowstone.component.html',
  styleUrls: ['./yellowstone.component.css']
})
export class YellowstoneComponent implements OnInit {
  scenarioId: number;
  scenarioToDisplay: Scenario;

  constructor() { }

  ngOnInit() {

  }

}
