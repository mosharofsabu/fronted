import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register.component';

const registerRoutes: Routes = [
    { path: '', component: RegisterComponent }

];

export const registerRouting= RouterModule.forChild(registerRoutes)