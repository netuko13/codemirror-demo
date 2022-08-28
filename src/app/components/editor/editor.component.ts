import { Component, OnInit } from '@angular/core';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/xml/xml';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  //Propiedades que permiten acceder y establecer el contenido de
  //un componente de codemirror
  entrada :string= ''
  consola: string =''

  constructor() { }

  ngOnInit(): void {
  }

  //Permite obtener el valor del codemirror
  //que representa a nuestra entrada.
  getValue(){
    alert(this.entrada)
  }

  //Permite establecer el valor del codemirror
  //que representa a nuestra consola
  setValue(){
    this.consola='Esta es una salida de consola'
  }
}
