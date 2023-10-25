import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from "./home/home.component";
import { AppRoutingModule } from "./app.routing.module";
import { DetailComponent } from "./detail/detail.component";

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
    ],
    declarations: [AppComponent, HomeComponent, DetailComponent],
    bootstrap: [AppComponent],
})
export class AppModule {}
