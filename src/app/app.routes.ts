// import { Route } from "@angular/router";
// import { PageUserComponent } from "./fontend-app-user/page-user/page-user.component";


// export const appRoutes: Route[] = [ 

//     { path: '', pathMatch: 'full', redirectTo: 'page-user' },

//     {
//         path: '',
//         component: PageUserComponent,
//         children: [
//             {
//                 path: 'apps',
//                 data: {},
//                 children: [
//                     {
//                         path: '',
//                         pathMatch: 'full',
//                         redirectTo: 'page-user',
//                     },
//                     {
//                         path: 'page-user',
//                         loadChildren: () =>
//                             import('./fontend-app-user/page-user/page-user.routes').then(m => m.default),
//                     },
//                     {
//                         path: 'page-user-buy',
//                         loadChildren: () =>
//                             import('./fontend-app-user/page-user-buy/page-user-buy.routes').then(m => m.default),
//                     }
//                 ],
//             },
//         ],
//     },

// ];