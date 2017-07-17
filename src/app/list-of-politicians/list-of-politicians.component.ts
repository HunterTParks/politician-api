import { Component, OnInit } from '@angular/core';
import { PoliticianInfoService } from '../politician-info.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-list-of-politicians',
  templateUrl: './list-of-politicians.component.html',
  styleUrls: ['./list-of-politicians.component.css'],
  providers: [ PoliticianInfoService ]
})
export class ListOfPoliticiansComponent {

  constructor(private politicianInfoService: PoliticianInfoService) {
    // public thing: PoliticianInfoService = new PoliticianInfoService;
    // thing.GetListOfPoliticians();
  }

  getInfo(){
    this.politicianInfoService.GetListOfPoliticians().subscribe(response => {
      console.log(response.json());
    });
  }

}
