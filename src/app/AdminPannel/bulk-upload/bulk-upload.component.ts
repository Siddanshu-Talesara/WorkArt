import { Component,OnInit} from '@angular/core';
import{Chart,registerables}from 'node_modules/chart.js'
Chart.register(...registerables);
@Component({
  selector: 'app-bulk-upload',
  templateUrl: './bulk-upload.component.html',
  styleUrls: ['./bulk-upload.component.css']
})
export class BulkUploadComponent implements OnInit {
  constructor(){}
  ngOnInit(): void {
    this.RenderChart();
  }
  RenderChart(){
    const mychart = new Chart("chart",{
      type: 'doughnut',
      data:{
     labels: [
       'Red',
       'Blue',
       'Yellow'
     ],
     datasets: [{
       label: 'My First Dataset',
       data: [300, 50, 100],
       backgroundColor: [
         'rgb(255, 99, 132)',
         'rgb(54, 162, 235)',
         'rgb(255, 205, 86)'
       ],
       hoverOffset: 4
     }]
   }
    });
  }
}
