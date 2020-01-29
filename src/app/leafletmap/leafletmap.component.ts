import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';


@Component({
  selector: 'app-leafletmap',
  templateUrl: './leafletmap.component.html',
  styleUrls: ['./leafletmap.component.css']
})
export class LeafletmapComponent implements AfterViewInit {
  private map;

  constructor() { }
  // title = 'testDrive';
  // map = L.map('map', {
  //  center: [51.505, -0.09],
  //  zoom: 13 
  //  });
  ngAfterViewInit(): void {
    this.initMap()
  }
  private initMap(): void {
    this.map = L.map('map', {
      center: [ 12.952573,77.684763 ],
      zoom: 3
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  });

tiles.addTo(this.map);
  
  }
}
