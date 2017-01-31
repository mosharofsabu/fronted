import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'
import { HttpModule } from '@angular/http';


import { RegisterComponent } from './register.component';
import { registerRouting } from './register.routing';


@NgModule({

 declarations: [
     RegisterComponent
 ],
 imports: [
     FormsModule,
     ReactiveFormsModule,
     CommonModule,
     HttpModule,
     registerRouting
 ]
})




export class RegisterModule{


}