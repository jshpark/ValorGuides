import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'app-map-page',
    templateUrl: './map-page.component.html',
    styleUrls: ['./map-page.component.css']
})

export class MapPageCompnent implements OnInit {
    showToolBar = false;

    constructor(private http: HttpClient) {}
    maps;
    map;

    ngOnInit() {
        this.http.get<{message: String, maps: {mapName: String, mapUrl: String}}>('http://localhost:3000/maps/getMaps').subscribe((mapList) => {
            this.maps = mapList.maps;
            console.log(this.maps);
        })
    };

    selectMap(map) {
        this.showToolBar = true;
        this.map = map;
    };



}
