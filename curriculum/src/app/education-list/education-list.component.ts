import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education-list',
  templateUrl: './education-list.component.html',
  styleUrls: ['./education-list.component.scss']
})
export class EducationListComponent implements OnInit {
  educacion={
    "image":"../../assets/image/unicen.jpg",
    "instituto": "Unicen",
    "titulo":"Tecnicatura Universitaria en Desarrollo de Aplicaciones Informaticas",
    "periodo": "2019-actualidad"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
