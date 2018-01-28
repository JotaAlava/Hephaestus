import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  multi: any[];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Date';
  showYAxisLabel = true;
  yAxisLabel = 'Reps';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  xAxisTransformCache = {};

  constructor(public navCtrl: NavController) {

  }

  ngOnInit() {
    this.loadLandingStatistics();
  }

  onSelect(event) {
    console.log(event);
  }

  loadLandingStatistics(){
    setTimeout(()=>{
      this.multi = [
        {
          "name": "Tricep Dip",
          "series": [
            {
              "name": "2018-01-27T16:24:45.589Z",
              "value": 3
            },
            {
              "name": "2018-01-28T16:24:45.589Z",
              "value": 6
            }
          ]
        },
        {
          "name": "Bench Press",
          "series": [
            {
              "name": "2018-01-27T16:24:45.589Z",
              "value": 2
            },
            {
              "name": "2018-01-28T16:24:45.589Z",
              "value": 4
            }
          ]
        }
      ];
    }, 2000)

    // I have to transform the dates in the server before they get here...
  }

  yAxisTickFormatting(val){
    return val % 1 === 0 ? val : '';
  }
}
