import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { AlbumViewPage } from './pages/album-view/album-view.page';
import { ContentPage } from './pages/content/content.page';
import { RegisterPage } from './pages/register/register.page';
import { LoginPage } from './pages/login/login.page';
import { DashboardPage } from './pages/dashboard/dashboard.page';
import { ProfilePage } from './pages/user/profile/profile.page';
import { OrdersPage } from './pages/user/orders/orders.page';
import { CommentsPage } from './pages/user/comments/comments.page';
import { WishlistPage } from './pages/user/wishlist/wishlist.page';
import { ShoppingCartPage } from './pages/user/shopping-cart/shopping-cart.page';

export const routes: Routes = [
    {path: "home", component: HomePage },
    {path: "albums", component: ContentPage},
    {path: "tags", component: ContentPage},
    {path: "album", component: AlbumViewPage},
    {path: "register", component: RegisterPage},
    {path: "login", component: LoginPage},
    {path: "dashboard/user", component: DashboardPage,
        children: [
            {path: '', redirectTo:'profile', pathMatch:'full'},
            {path: "profile", component: ProfilePage},
            {path: "orders", component: OrdersPage},
            {path: "comments", component: CommentsPage},
            {path: "wishlist", component: WishlistPage},
            {path: "shopping-cart", component: ShoppingCartPage},
        ]
    },
    {path: "dashboard/admin", component: DashboardPage,
        children: [

        ]
    },
    {path: "", redirectTo:"home", pathMatch:"full"},
];
