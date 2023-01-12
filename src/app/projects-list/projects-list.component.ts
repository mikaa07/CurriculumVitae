import { Component, OnInit } from '@angular/core';
import { Projects } from './Projects';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {
  proyectos:Projects[]=[
  {
    image: '../../assets/image/Morondanga.PNG',
    titulo: 'Morondanga',
    periodo:2019,
    descripcion: 'Pagina web del equipo de futbol Morondanga, creada con HTML,CSS,JS',
    link:'https://github.com/mikaa07/Morondanga_web1.git'
  },
  {
    image: '../../assets/image/LosSobrinos.PNG',
    titulo: 'Los Sobrinos de Rosa',
    periodo:2020,
    descripcion: 'Pagina web de la Rotiseria Los Sobrinos de Rosa, creada con HTML,CSS,JS',
    link:'https://github.com/mikaa07/Los_Sobrinos_web1.git'
  },
  {
    image: '../../assets/image/LosSobrinosAngular.PNG',
    titulo: 'Los Sobrinos de Rosa',
    periodo:2021,
    descripcion: 'Pagina web de la Rotiseria Los Sobrinos de Rosa, creada con HTML,CSS,JS utilizando Angular',
    link:'https://github.com/mikaa07/Los_Sobrinos_angular.git'
  },
  {
    image: '../../assets/image/micurriculum.PNG',
    titulo: 'Curriculum Vitae',
    periodo:2022,
    descripcion: 'Pagina web de mi Curriculum personal, creada con HTML,CSS,JS y utilizando Angular',
    link:'https://github.com/mikaa07/CurriculumVitae.git'
  },
  {
    image: '../../assets/image/pasteleria.PNG',
    titulo: 'Pasteleria',
    periodo:2022,
    descripcion: 'Pagina web de una pasteleria, creada con HTML,CSS y utilizando Php',
    link:'https://github.com/mikaa07/Pasteleria_Web2.git'
  },
  {
    image: '../../assets/image/pasteleria_rest.PNG',
    titulo: 'Pasteleria (ApiRest)',
    periodo:2022,
    descripcion: 'ApiRest de una pasteleria utilizando Postman',
    link:'https://github.com/mikaa07/Pasteleria_Web2_ApiRest.git'
  }
]

  constructor() { }

  ngOnInit(): void {
  }

}
