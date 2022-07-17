import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@angular/fire/auth-guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./register/register.module').then((m) => m.RegisterPageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },

  {
    path: 'profile',
    loadChildren: () =>
      import('./profile/profile.module').then((m) => m.ProfilePageModule),
  },
  {
    path: 'profile/edit',
    loadChildren: () =>
      import('./profile-edit/profile-edit.module').then(
        (m) => m.ProfileEditPageModule
      ),
  },
  {
    path: 'list/places/:route',
    loadChildren: () =>
      import('./admin/list-places/list-places.module').then(
        (m) => m.ListPlacesPageModule
      ),
  },
  {
    path: 'create/place/:route',
    loadChildren: () =>
      import('./admin/create-place/create-place.module').then(
        (m) => m.CreatePlacePageModule
      ),
  },
  {
    path: 'edit/place/:route',
    loadChildren: () =>
      import('./encargado/edit-place/edit-place.module').then(
        (m) => m.EditPlacePageModule
      ),
  },
  {
    path: 'categories/:userRol',
    loadChildren: () =>
      import('./categories/categories.module').then(
        (m) => m.CategoriesPageModule
      ),
  },
  {
    path: 'list/users',
    loadChildren: () =>
      import('./admin/list-users/list-users.module').then(
        (m) => m.ListUsersPageModule
      ),
  },
  {
    path: 'favoritos',
    loadChildren: () =>
      import('./favoritos/favoritos.module').then((m) => m.FavoritosPageModule),
  },
  {
    path: 'visitante/:route',
    loadChildren: () =>
      import('./visitante/visitante.module').then((m) => m.VisitantePageModule),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./page-not-found/page-not-found.module').then(
        (m) => m.PageNotFoundPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
