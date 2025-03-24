import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { catchError, Observable, throwError } from "rxjs";

export class myInterceptor implements HttpInterceptor{
    constructor(){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError((error:HttpErrorResponse)=>{
                if(error.status === 500){
                    console.log(error)
                }

                return throwError(error)
            })
        )
    }
}