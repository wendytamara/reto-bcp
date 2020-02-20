import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';



import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

// ROUTES
import { APP_ROUTING } from './app.routes';

//SERVICIOS
import { AgenciasService } from './services/agencias.service';

import { AgmCoreModule } from '@agm/core';


//COMPONENTS
import { AppComponent } from './app.component';
import { AgenciasComponent } from './components/agencias/agencias.component';
import { AgenciaComponent } from './components/agencia/agencia.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { MapsComponent } from './components/maps/maps.component';

//COMPONENTS MATERIAL

import { MatToolbarModule } from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    AgenciasComponent,
    AgenciaComponent,
    FormularioComponent,
    MapsComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDNOu2JQ001PxZY-GVwFvVou0_6h_Sj-14'
    }),
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    APP_ROUTING,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    // AgmCoreModule.forRoot({
    //   // apiKey: 'AIzaSyC1SiC4yVO2DnzvHVtxRpWpU53I8zLOlqo'
    //   apiKey: 'AIzaSyDnTa7ip3BikOrmtXoepeOH_9jmjgUyGfU'

    // })
    ],
  providers: [
    AgenciasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
