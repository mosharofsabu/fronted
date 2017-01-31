import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'
import { HttpModule } from '@angular/http';


import { DashboardComponent } from './dashboard.component';
import { dashboardRouting } from './dashboard.routing';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { MenuComponent } from './menu/menu.component';
import { MenuitemComponent } from './menuitem/menuitem.component';
import { TopmescenterComponent } from './topmescenter/topmescenter.component';


@NgModule({

 declarations: [
     DashboardComponent,
     SidebarComponent,
     TopbarComponent,
     MenuComponent,
     MenuitemComponent,
     TopmescenterComponent
 ],
 imports: [
     FormsModule,
     ReactiveFormsModule,
     CommonModule,
     HttpModule,
     dashboardRouting
 ]
})




export class DashboardModule{


}