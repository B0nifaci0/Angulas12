import { NgModule } from "@angular/core";
import { MatToolbarModule } from '@angular/material/toolbar';

//Exportamos nuestro de decorador dentro del export vamos a importar nuestros modulos de angular material

@NgModule({
     exports:[MatToolbarModule]
}) 

export class MaterialModule{}