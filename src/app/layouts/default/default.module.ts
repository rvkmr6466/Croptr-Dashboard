import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/module/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/module/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from "@angular/material/card";
import { DashboardService } from 'src/app/module/dashboard.service';
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTableModule } from "@angular/material/table";
import { ArticlesComponent } from 'src/app/module/articles/articles.component';

@NgModule({
	declarations: [
		DefaultComponent,
		DashboardComponent,
		PostsComponent,
		ArticlesComponent
	],
	imports: [
		CommonModule,
		RouterModule,
		SharedModule,
		MatSidenavModule,
		MatDividerModule,
		FlexLayoutModule,
		MatCardModule,
		MatPaginatorModule,
		MatTableModule
	],
	providers: [
		DashboardService
	]
})
export class DefaultModule { }
