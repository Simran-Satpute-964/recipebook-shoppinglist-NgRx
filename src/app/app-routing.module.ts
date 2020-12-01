import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    // loadChildren: './recipes/recipes.module#RecipesModule',
    loadChildren: () =>
      import('./recipes/recipes.module').then((m) => m.RecipesModule), // We can remove import from AppModule
  },
  {
    path: 'shopping-list',
    // loadChildren: './recipes/recipes.module#RecipesModule',
    loadChildren: () =>
      import('./shopping-list/shopping-list.module').then(
        (m) => m.ShoppingListModule
      ),
  },
  {
    path: 'auth',
    // loadChildren: './recipes/recipes.module#RecipesModule',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }), // Preload the bundles asap, e.g.on Auth page
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
