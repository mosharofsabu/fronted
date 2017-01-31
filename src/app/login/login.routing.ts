import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';

const loginRoutes: Routes = [
    { path: '', component: LoginComponent }

];

export const loginRouting= RouterModule.forChild(loginRoutes)