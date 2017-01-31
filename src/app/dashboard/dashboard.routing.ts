import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const dashboardRoutes: Routes = [
    { path: '', component: DashboardComponent }

];

export const dashboardRouting= RouterModule.forChild(dashboardRoutes)