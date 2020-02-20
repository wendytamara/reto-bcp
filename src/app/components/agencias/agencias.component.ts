import { Component, OnInit } from '@angular/core';
import { AgenciasService, Agencia } from '../../services/agencias.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-agencias',
  templateUrl: './agencias.component.html',
  styleUrls: ['./agencias.component.css']
})
export class AgenciasComponent implements OnInit {
  agencias: Agencia [] = []
  // filter: Agencia [] = []
  constructor( private _agenciaService: AgenciasService, private router: Router ) { }

  ngOnInit() {
    this.agencias = this._agenciaService.getAgencias()
  }

  search(text) {
    if (text != '') {
      this.agencias = this._agenciaService.search(text)
    }
    else {
      this.agencias = this._agenciaService.getAgencias()
    }
  }

  add () {
    // console.log(i, 'item')
    this.router.navigate(['/formulario', 'add']);
  }

}
