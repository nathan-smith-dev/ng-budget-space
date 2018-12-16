import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';

export const PIE_CHART_COLORS = [
  '#F44336', 
  '#E91E63',
  '#9C27B0',
  '#673AB7',
  '#3F51B5',
  '#2196F3',
  '#03A9F4',
  '#00BCD4' ,
  '#009688',
  '#4CAF50',
  '#8BC34A',
  '#CDDC39',
  '#FFEB3B',
  '#FFC107', 
  '#FF9800', 
  '#FF5722', 
  // Lighter colors
  '#FFCDD2', 
  '#F8BBD0', 
  '#E1BEE7', 
  '#D1C4E9', 
  '#C5CAE9',
  '#BBDEFB', 
  '#B3E5FC', 
  '#B2EBF2', 
  '#B2DFDB', 
  '#C8E6C9', 
  '#DCEDC8', 
  '#F0F4C3', 
  '#FFF9C4', 
  '#FFECB3', 
  '#FFE0B2', 
  '#FFCCBC'
]; 

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit, OnChanges {
  @Input() title: string;
  @Input() labels: string[];
  @Input() data: number[];

  type = 'pie';
  dataConfig = {
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: PIE_CHART_COLORS
      }
    ]
  };
  options = {
    title: {
      display: true, 
      text: ''
    }, 
    legend: {
        display: true,
        position: 'top', 
        labels: {
          boxWidth: 10
        }, 

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
          display: true,
          position: 'top', 
          labels: {
            boxWidth: 10
          }, 
  
      }, 
      maintainAspectRatio: false,
      responsive: true
    };

    this.dataConfig = {
      labels: this.labels,
      datasets: [
        {
          data: this.data,
          backgroundColor: PIE_CHART_COLORS
        }
      ]
    }
  }

}
