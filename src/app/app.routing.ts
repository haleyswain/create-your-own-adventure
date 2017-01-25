import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { YellowstoneComponent } from './yellowstone/yellowstone.component';
import { GlacierComponent } from './glacier/glacier.component';

const appRoutes: Routes = [
  {
    path: '',
    component: StartComponent
  },
  {
    path: 'yellowstone/:id',
    component: YellowstoneComponent
  },
  {
    path: 'glacier/:id',
    component: GlacierComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
