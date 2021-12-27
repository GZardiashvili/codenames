import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./components/main/main.component";
import {FrontPageComponent} from "./components/front-page/front-page.component";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: '',
      component: MainComponent,
      pathMatch: 'full'
    },
    {
      path: '**',
      component: FrontPageComponent
    }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
