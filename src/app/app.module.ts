import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { map } from 'rxjs/operators';


import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GithubService } from './services/github.service';


const appRoutes: Routes=[

{path: 'gallery', component: GalleryComponent},
{path:'', redirectTo: '/gallery', pathMatch: 'full'}

];

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    
    RouterModule.forRoot(appRoutes)
  ],
  providers: [GithubService],
  exports:[AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
