import { Observable } from "rxjs";
import { Advice } from "./advice.model";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class AdviceService {
    static http: any;
    constructor(private http: HttpClient) {
    }

    public generateAdvice(inputNumber:any): Observable<any> {
        return this.http.get<Advice>(`https://api.adviceslip.com/advice/${inputNumber}`)

    }
    
    public getAddvice(): Observable<any> {
        return this.http.get<Advice>(`https://api.adviceslip.com/advice`)

    }

    public get100Addvice(inputNumber:any): Observable<any> {
        return this.http.get<Advice>(`https://api.adviceslip.com/advice/${inputNumber}`)
    }
}