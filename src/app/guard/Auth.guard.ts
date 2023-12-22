import { Injectable } from "@angular/core";
import { AuthService } from "../services/auth/auth.service";
import { Router } from "@angular/router";
import { Observable, of, switchMap } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class AuthGuard {
    constructor(
        private authService: AuthService,
        private router: Router,
    ) {}

    canActivate(): Observable<boolean> {
        return this.authService.me().pipe(
            switchMap(message => {
                if (message) {
                    return of(true);
                } else {
                    this.router.navigate(["/"])
                    return of(false);
                }
            })
        )
    }
}