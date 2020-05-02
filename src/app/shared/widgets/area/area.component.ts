import { Component, OnInit, Input } from '@angular/core';
import * as HighCharts from 'highcharts';  
import HC_exporting from "Highcharts/modules/exporting";

@Component({
	selector: 'app-widgets-area',
	templateUrl: './area.component.html',
	styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

	chartOptions: {};
	Highcharts = HighCharts;

	@Input() data = [];

	constructor() { }

	ngOnInit() {
		this.chartOptions = {
			chart: {
				type: 'area'
			},
			title: {
				text: 'Random Data'
			},
			subtitle: {
				text: 'Dashboard Demo'
			},
			tooltip: {
				split: true,
				valueSuffix: ' millions'
			},
			credits:{ 
				enabled:false
			},
			exporting: {
				enabled: true,
			},
			plotOptions: {
				area: {
					stacking: 'normal',
					lineColor: '#666666',
					lineWidth: 1,
					marker: {
						lineWidth: 1,
						lineColor: '#666666'
					}
				}
			},
			series: this.data
		};

		HC_exporting(HighCharts); //chart context menu
		 
		setTimeout(() => { 
			window.dispatchEvent(
				new Event('resize')
				);
		},300);
	}

}
