import { Component, Input, OnInit } from '@angular/core';
import { Libros } from '../../interfaces/libros.interfaces';

@Component({
  selector: 'app-libros-componentes',
  templateUrl: './libros-componentes.component.html',
  styles: [`  
     img {
      width: 430px;
    height: 540px;
    position: center;
    border-radius: 8px;
  }


  .fecha{
    padding-left: 20px;
  }
  .director{
    text-align: left;
    padding-left: 20px;
  }
  .scroll{
    height: 300px;
    overflow-x: hidden;
    overflow-x: hidden;
  }
 
 mat-divider{
   background-color: #c49c10
   
 }
  .titulo{
    color: #c49c10
  }
  .card {
  border-radius: 16px;
  margin: 0 auto;
  width: 500px;
  max-width: 100%;
  min-height: 500px;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 5px 8px 0px rgba(0, 0, 0, 0.14),
    0px 1px 14px 0px rgba(0, 0, 0, 0.12);
  overflow: hidden;
 
  background-size: cover;
}

.info {
  position: relative;
  width: 100%;
  height: 550px;
  transform: translateY(100%)
    translateY(-88px)
    translateZ(0);
  transition: transform 0.5s ease-out;
}

.info:before {
  z-index: -1;
  display: block;
  position: absolute;
  content: ' ';
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-image: url(https://images.unsplash.com/photo-1583997052103-b4a1cb974ce5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80);
  filter: blur(10px);
  background-size: cover;
  opacity: 0.25;
  transform: translateY(-100%)
    translateY(88px)
    translateZ(0);
  transition: transform 0.5s ease-out;
}

.card:hover .info,
.card:hover .info:before {
  transform: translateY(0) translateZ(0);
}

.title {
  margin: 0;
  padding: 54px;
  padding-top: 1px;
  font-size: 40px;
  line-height: 1;
  color: rgba(0, 0, 0, 0.87);
}

.description {
  margin: 0;
  padding: 0 24px 24px;
  font-size: 18px;
  line-height: 1.5;
}


* {
  box-sizing: border-box;
  position: relative;
  transition: all .3s ease
}

html {
  font-size: 16px
}

body {
  font-family: Raleway, "Ralewat", sans-serif;
  color: rgba(0, 0, 0, .87);
  font-weight: 400;
  line-height: 1.45;
}



h1 {
  margin-bottom: 0.5em;
  font-weight: inherit;
  line-height: 1.2;
  color: #1c5b72;
  font-size: 2.618em
}

@media (min-width:800px) {
  h1 {
    font-size: 4.236em;
    font-weight: 300
  }
}

p {
  margin-bottom: 1.3em;
  line-height: 1.618
}

@media (min-width:800px) {
  p {
    font-size: 1.3em;
   font-family: Raleway, "Ralewat", sans-serif;
  }
}

a {
  color: #e03616;
  text-decoration: none
}

  `]
})
export class LibrosComponentesComponent implements OnInit {

  @Input() libro!: Libros;
  constructor() { }

  ngOnInit(): void {
  }

}
