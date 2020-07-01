import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './module/dashboard/dashboard.component';
import { PostsComponent } from './module/posts/posts.component';
import { ArticlesComponent } from './module/articles/articles.component';


const routes: Routes = [
	{
		path : '',
		component : DefaultComponent,
		children : [
			{
				path : '',
				component : DashboardComponent
			},
			{
				path : 'posts',
				component : PostsComponent
			},
			{
				path : 'articles',
				component : ArticlesComponent
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
