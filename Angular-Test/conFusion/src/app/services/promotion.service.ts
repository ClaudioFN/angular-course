import { Injectable } from '@angular/core';
/* NEW IMPORTS */
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private http: HttpClient,
              private processHTTPMsgService: ProcessHTTPMsgService) { }

  /*getPromotions(): Promise<Promotion[]>{
    return new Promise(resolve => { setTimeout(() => resolve(PROMOTIONS), 2000) });
  }
  getPromotions(): Promise<Promotion[]>{
    return of(PROMOTIONS).pipe(delay(2000)).toPromise();
  }*/
  getPromotions(): Observable<Promotion[]>{
    //return of(PROMOTIONS).pipe(delay(2000));
    return this.http.get<Promotion[]>(baseURL + 'promotions')
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  /*getPromotion(id: string): Promise<Promotion> {
    return new Promise(resolve => { setTimeout(() => resolve(PROMOTIONS.filter((promotion) => (promotion.id === id))[0]), 2000) });
  }
  getPromotion(id: string): Promise<Promotion> {
    return of(PROMOTIONS.filter((promotion) => (promotion.id === id))[0]).pipe(delay(2000)).toPromise();
  }*/
  getPromotion(id: string): Observable<Promotion> {
    //return of(PROMOTIONS.filter((promotion) => (promotion.id === id))[0]).pipe(delay(2000));
    return this.http.get<Promotion>(baseURL + 'promotions/' + id)
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  /*getFeaturedDish(): Promise<Promotion> {
    return new Promise(resolve => { setTimeout(() => resolve(PROMOTIONS.filter((promotion) => promotion.featured)[0]), 2000) });
  }
  getFeaturedDish(): Promise<Promotion> {
    return of(PROMOTIONS.filter((promotion) => promotion.featured)[0]).pipe(delay(2000)).toPromise();
  }*/
  getFeaturedDish(): Observable<Promotion> {
    //return of(PROMOTIONS.filter((promotion) => promotion.featured)[0]).pipe(delay(2000));
    return this.http.get<Promotion>(baseURL + 'promotions?featured=true')
    .pipe(map(promotion => promotion[0]))
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }


}
