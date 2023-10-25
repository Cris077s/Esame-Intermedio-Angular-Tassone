import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
    drinks: any = [];

    constructor(private http: HttpClient) {}

    ngOnInit(): void {
        this.http
            .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
            .subscribe((res: any) => {
                console.log(res);
                this.drinks = res.drinks;
            });
    }
}
