import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { RequestComponent } from './request/request.component';

// export const routes: Routes = [];
const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home page'
    },
    {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Home details'
    },
    {
        path: 'request',
        component: RequestComponent,
        title: 'Request Page'
    }

];

export default routeConfig;