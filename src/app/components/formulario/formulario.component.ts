import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AgenciasService, Agencia } from '../../services/agencias.service'
import { Router } from '@angular/router';

import { AgmCoreModule } from '@agm/core';



@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  agencia:any = {}
  isNew: boolean;
  
  // latitude: number = -79.042123;
  // longitude: number = -8.128624;

  constructor( private activatedRoute: ActivatedRoute, private _agenciasService: AgenciasService,private router: Router ) { 
    this.activatedRoute.params.subscribe(params =>  {
      if (params['i'] == 'add') {
        this.isNew = true
        this.agencia = new Agencia();
      }
      else {
        this.isNew = false
        this.agencia = this._agenciasService.getAgencia(params['i'])
      }
    })
    console.log(this.agencia)
  }

  ngOnInit() {
  }

  edit():any {
    if (this.isNew ) {
     this._agenciasService.addAgency(this.agencia)
    }
    else {
      this._agenciasService.updateItem(this.agencia)  
    }
    this.router.navigate(['/agencias']);
  }

}
