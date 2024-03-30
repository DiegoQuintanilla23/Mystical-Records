import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { AlbumViewPage } from './pages/album-view/album-view.page';
import { ContentPage } from './pages/content/content.page';
import { RegisterPage } from './pages/register/register.page';
import { LoginPage } from './pages/login/login.page';

export const routes: Routes = [
    {path: "home", component: HomePage },
    {path: "albums", component: ContentPage},
    {path: "tags", component: ContentPage},
    {path: "album", component: AlbumViewPage},
    {path: "register", component: RegisterPage},
    {path: "login", component: LoginPage},
    {path: "dashboard", component: LoginPage},
    {path: "", redirectTo:"home", pathMatch:"full"},
];
