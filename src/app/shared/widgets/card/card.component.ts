import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';  
import HC_exporting from "Highcharts/modules/exporting";

@Component({
	selector: 'app-widget-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

	@Input() label: string;
	@Input() total: string;
	@Input() percentage: string;
	
	chartOptions: {};
	Highcharts = Highcharts;
	
	@Input() cardData = [];
	
	constructor() { }

	ngOnInit() {
		this.chartOptions = {
			chart: {
				type: 'area',
				background: null,
				borderWidth: 0,
				margin: [2, 2, 2, 2],
				height: 60
			},
			title: {
				text: null
			},
			subtitle: {
				text: null
			},
			legend:{ 
				enabled:false
			},
			tooltip: {
				split: true,
				outside: true,
			},
			credits:{ 
				enabled:false
			},
			xAxis: {
				labels: {
					enabled: true
				},
				title: {
					text: null
				},
				startOnTick: false,
				endOnTick: false,
				tickOption: []
			},
			yAxis: {
				labels: {
					enabled: true
				},
				title: {
					text: null
				},
				startOnTick: false,
				endOnTick: false,
				tickOption: []
			},
			exporting: {
				enabled: false,
			},
			series: [{
				data: this.cardData
			}]
		}; 		

		HC_exporting(Highcharts); //chart context menu

		setTimeout(() => { 
			window.dispatchEvent(
				new Event('resize')
				);
		}, 300);
	}

}
