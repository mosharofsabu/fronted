import { Routes ,RouterModule} from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
    { path: 'login', loadChildren: 'app/login/login.module#LoginModule' },
    { path: 'register', loadChildren: 'app/register/register.module#RegisterModule' },
    { path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule' },

    { path: '', component: AppComponent }


];

export const routing = RouterModule.forRoot(routes);