import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPeopleComponent } from './people/components/list-people/list-people.component';
import { InsertPeopleComponent } from './people/components/insert-people/insert-people.component';
import { UpdatePeopleComponent } from './people/components/update-people/update-people.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pessoas/listar',
    pathMatch: 'full'
  },
  {
    path: 'pessoas',
    redirectTo: 'pessoas/listar'
  },
  {
    path: 'pessoas/listar',
    component: ListPeopleComponent
  },
  {
    path: 'pessoas/novo',
    component: InsertPeopleComponent
  },
  {
    path: 'pessoas/editar/:id',
    component: UpdatePeopleComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
