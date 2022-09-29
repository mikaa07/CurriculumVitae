import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience-list',
  templateUrl: './experience-list.component.html',
  styleUrls: ['./experience-list.component.scss']
})
export class ExperienceListComponent implements OnInit {
  experiencia={
    "puesto":"",
    "logo":"",
    "descripcion":"Aun no poseo experiencia en el rubro, estoy en capacitacion constante, para poder llegar a obtener mi primer oportunidad en el mundo it",
    "periodo":""
  }
  constructor() { }

  ngOnInit(): void {
  }

}
