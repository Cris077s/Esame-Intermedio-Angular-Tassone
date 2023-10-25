import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
    selector: "app-detail",
    templateUrl: "./detail.component.html",
    styleUrls: ["./detail.component.css"],
})
export class DetailComponent implements OnInit {
    drinks: any = [];

    constructor(private http: HttpClient) {}

    ngOnInit(): void {
        this.http
            .get(
                "http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=15200"
            )
            .subscribe((res: any) => {
                console.log(res);
                this.drinks = res.drinks;
            });
    }
}
