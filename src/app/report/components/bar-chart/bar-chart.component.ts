import { Component, OnInit, SimpleChange, Input } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  @Input() title: string;
  @Input() labels: string[];
  @Input() data: number[];

  type = 'bar';
  dataConfig = {
    labels: [],
    datasets: [{
        data: [], // needs an added 0 because of chartjs bug
        backgroundColor: [
          '#F44336',
          '#4CAF50'
        ],
        borderWidth: 1
    }]
  };
  options = {
    title: {
      display: true, 
      text: ''
    }, 
    legend: {
        display: false
    },
    tooltips: {
        callbacks: {
          label: function(tooltipItem) {
            return tooltipItem.yLabel;
          }
        }
    }, 
    maintainAspectRatio: false,
    responsive: true
  };

  constructor() { }

  ngOnInit() {
    this.initChart();
  }
  
  ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
    this.initChart();
  }

  initChart() {
    this.options = {
      title: {
        display: true, 
        text: this.title
      }, 
      legend: {
          display: false
      },
      tooltips: {
          callbacks: {
            label: function(tooltipItem) {
              return tooltipItem.yLabel;
            }
          }
      }, 
      maintainAspectRatio: false,
      responsive: true
    };

    this.dataConfig = {
      labels: this.labels,
      datasets: [{
          data: [...this.data, 0], // needs an added 0 because of chartjs bug
          backgroundColor: [
            '#4CAF50',
            '#F44336'
          ],
          borderWidth: 1
      }]
    };  
  }


}
