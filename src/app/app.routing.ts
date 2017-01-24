import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { GlacierComponent } from './glacier/glacier.component';
import { YellowstoneComponent } from './yellowstone/yellowstone.component';

const appRoutes: Routes = [
  {
    path: '',
    component: StartComponent
  },
  {
    path: 'glacier',
    component: GlacierComponent
  },
  {
    path: 'yellowstone/:id',
    component: YellowstoneComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
