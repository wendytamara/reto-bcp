import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agencia',
  templateUrl: './agencia.component.html',
  styleUrls: ['./agencia.component.css']
})
export class AgenciaComponent implements OnInit {
@Input() agencias: object [] = []

  constructor( private router: Router ) { }

  ngOnInit() {
  }

  showAgency(i:number) {
    console.log(i, 'item')

    this.router.navigate(['/formulario', i]);
  }

}
