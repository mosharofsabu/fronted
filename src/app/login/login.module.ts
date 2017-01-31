import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'
import { HttpModule } from '@angular/http';


import { LoginComponent } from './login.component';
import { loginRouting } from './login.routing';


@NgModule({

 declarations: [
     LoginComponent
 ],
 imports: [
     FormsModule,
     ReactiveFormsModule,
     CommonModule,
     HttpModule,
     loginRouting
 ]
})




export class LoginModule{


}