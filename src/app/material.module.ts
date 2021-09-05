// importamos los componentes y modulos de angular material a utilizar
import { NgModule } from "@angular/core";
import { MatToolbarModule } from '@angular/material/toolbar';
// modulo de card
import {MatCardModule} from '@angular/material/card';
//modulo de button
import { MatButtonModule } from "@angular/material/button";
//modulo de iconos
import { MatIconModule } from "@angular/material/icon";
//Exportamos nuestro de decorador dentro del export vamos a importar nuestros modulos de angular material

@NgModule({
     exports:[
          MatToolbarModule,MatCardModule,MatButtonModule,MatIconModule]
}) 

export class MaterialModule { }