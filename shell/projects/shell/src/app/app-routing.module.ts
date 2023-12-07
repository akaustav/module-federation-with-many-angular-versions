import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  WebComponentWrapper,
  WebComponentWrapperOptions,
} from '@angular-architects/module-federation-tools';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  // {
  //   path: 'angular13',
  //   loadChildren: () =>
  //     loadRemoteModule({
  //       type: 'module',
  //       remoteEntry: 'http://localhost:4201/remoteEntry.js',
  //       exposedModule: './Module',
  //     }).then((m) => m.AppModule),
  // },
  // {
  //   path: 'angular15',
  //   loadChildren: () =>
  //     loadRemoteModule({
  //       type: 'module',
  //       remoteEntry: 'http://localhost:4203/remoteEntry.js',
  //       exposedModule: './Module',
  //     }).then((m) => m.AppModule),
  // },

  // {
  //   path: 'angular13',
  //   component: WebComponentWrapper,
  //   data: {
  //     type: 'module',
  //     remoteEntry: 'http://localhost:4201/remoteEntry.js',
  //     exposedModule: './Module',
  //     elementName: 'angular13-element',
  //   } as WebComponentWrapperOptions,
  // },

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
