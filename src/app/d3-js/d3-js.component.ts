import { Component, OnInit, ViewChild } from '@angular/core';
import * as d3 from "d3";


@Component({
  selector: 'app-d3-js',
  templateUrl: './d3-js.component.html',
  styleUrls: ['./d3-js.component.css']
})
export class D3JsComponent implements OnInit {

  constructor() { }
   data = [4, 8, 15, 16, 23, 42];
   
   ngOnInit() {
    this.render()
   }
    addData(){
      let s=Math.floor(this.data.length*(Math.random()*10))
      this.data.push(s)
      this.render()
    }
render(){
  d3.select('.chart')
  .selectAll('div')
  .data(this.data)
  .enter().append('div')
  .style("width",(d)=>{return d * 9 + "px";})
  .style('background-color',"steelblue")
  .style('text-align', 'right')
  .style('padding' ,'3px')
  .style('margin','1px')
  .style('color','white')
  .text(function(d) { return d; });
 }

//unused

 renderDynamic(){
  var data = [4, 8, 15, 16, 23, 42];

  var width = 420,
      barHeight = 20;
  
  var x = d3.scaleLinear()
      .domain([0, d3.max(data)])
      .range([0, width]);
  
  var chart = d3.select(".chart")
      .attr("width", width)
      .attr("height", barHeight * data.length);
  
  var bar = chart.selectAll("g")
      .data(data)
    .enter().append("g")
      .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });
  
  bar.append("rect")
      .attr("width", x)
      .style('fill','steelblue')
      .attr("height", barHeight - 1);
  
  bar.append("text")
      .attr("x", function(d) { return x(d) - 3; })
      .attr("y", barHeight / 2)
      .attr("dy", ".35em")
      .style('fill' ,'white')
      .style('text-anchor', 'end')
      .style('font', '10px sans-serif')
      .text(function(d) { return d; });
  
 }

 mapGraph(){
  d3.csv('../../assets/stocks.csv').then(data=>console.log);
 }

}
