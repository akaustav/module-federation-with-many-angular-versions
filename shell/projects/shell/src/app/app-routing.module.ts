import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  WebComponentWrapper,
  WebComponentWrapperOptions,
} from '@angular-architects/module-federation-tools';

const routes: Routes = [
  {
    path: 'angular13',
    component: WebComponentWrapper,
    data: {
      type: 'module',
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      exposedModule: './Component',
      elementName: 'angular13-element',
    } as WebComponentWrapperOptions,
  },

  {
    path: 'angular14',
    component: WebComponentWrapper,
    data: {
      type: 'module',
      remoteEntry: 'http://localhost:4202/remoteEntry.js',
      exposedModule: './Component',
      elementName: 'angular14-element',
    } as WebComponentWrapperOptions,
  },

  {
    path: 'angular15',
    component: WebComponentWrapper,
    data: {
      type: 'module',
      remoteEntry: 'http://localhost:4203/remoteEntry.js',
      exposedModule: './Component',
      elementName: 'angular15-element',
    } as WebComponentWrapperOptions,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
