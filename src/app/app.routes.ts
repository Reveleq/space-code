import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DestinationComponent } from './components/destination/destination.component';
import { CrewComponent } from './components/crew/crew.component';
import { TechnologyComponent } from './components/technology/technology.component';
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Frontend Mentor | Space tourism website',
  },
  {
    path: 'destination/:id',
    component: DestinationComponent,
    title: 'Frontend Mentor | Space tourism website',
  },
  {
    path: 'destination',
    redirectTo: '/destination/66fbabf8e0a43f699263f2b6',
  },
  {
    path: 'crew/:id',
    component: CrewComponent,
  },
  {
    path: 'crew',
    redirectTo: '/crew/66fbac36e0a43f699263f2b8',
  },
  {
    path: 'technology/:id',
    component: TechnologyComponent,
  },
  {
    path: 'technology',
    redirectTo: '/technology/66fbac59e0a43f699263f2be',
  },
];
