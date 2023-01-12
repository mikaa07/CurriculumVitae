import { Component, OnInit } from '@angular/core';
import { Skills } from './Skills';

@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.scss']
})
export class SkillsListComponent implements OnInit {
  habilidades:Skills[]=[
    {
    titulo:'HTML5',
    image:'../../assets/image/80.png',
  },
  {
    titulo:'CSS',
    image:'../../assets/image/80.png',
  },
  {
    titulo:'JAVA',
    image:'../../assets/image/60.png',
  },
  {
    titulo:'JAVASCRIPT',
    image:'../../assets/image/50.png',
  },
  {
    titulo:'ANGULAR',
    image:'../../assets/image/40.png',
  },
  {
    titulo:'GIT',
    image:'../../assets/image/50.png',
  },
  {
    titulo:'GITHUB',
    image:'../../assets/image/40.png',
  },
  {
    titulo:'BOOTSTRAP',
    image:'../../assets/image/50.png',
  },
  {
    titulo:'MYSQL',
    image:'../../assets/image/40.png',
  },
  {
    titulo:'PHPMYADMIN',
    image:'../../assets/image/50.png',
  }
  
 ]
  
  constructor() { }

  ngOnInit(): void {
  }

}


