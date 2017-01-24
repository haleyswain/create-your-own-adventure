import { Scenario } from './scenario.model';

export const SCENARIOS: Scenario[] = [
  new Scenario("You've seen the pictures. You can't wait to see the Buffalo, Old Faithful, and the Waterfalls. You drive all day and all night, and when you get there, you park your car at your campsite, and take a breath of fresh air. What to do first?", 1, "put bison in car", 1, "roast marshmallows",2),
  new Scenario("second level", 2, "start a fire and then take a walk",3, "nap in your hammock",4),
  new Scenario("third level", 3, "swim in a lake",5 , "climb a mountain",6 ),
  new Scenario("fourth level", 4, "run from forest service", 7, "take bison to lodge", 8)

];
