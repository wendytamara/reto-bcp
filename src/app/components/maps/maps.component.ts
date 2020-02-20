import { Component, OnInit } from '@angular/core';
// import { AgmMap, AgmMarker } from '@agm/core';


@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  latitude: number = 51.678418;
  longitude: number = 7.809007;
  zoom: number = 4;

  lat = -51.678418;
  lng = -7.809007;

  constructor() { }

  ngOnInit() {
  }

}
