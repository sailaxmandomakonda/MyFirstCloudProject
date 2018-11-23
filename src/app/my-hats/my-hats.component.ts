import { Component, OnInit } from '@angular/core';
import {Hat} from '../hat';

@Component({
  selector: 'app-my-hats',
  templateUrl: './my-hats.component.html',
  styleUrls: ['./my-hats.component.css']
})


export class MyHatsComponent implements OnInit {

  public Hats: Hat[] = [
    {Id: 1, Name: 'Sai', Price: 10, Image: 'MyLocation'}
  ]
  ;

  constructor() {

   }

  ngOnInit() {

  }

}
