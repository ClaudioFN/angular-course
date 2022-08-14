import { Injectable } from '@angular/core';
/* NEW IMPORTS */
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';


@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  getPromotions(): Promotion[]{
    return PROMOTIONS;
  }

  getPromotion(id: string): Promotion{
    return PROMOTIONS.filter((promotion) => (promotion.id === id))[0];
  }

  getFeaturedDish(): Promotion {
    return PROMOTIONS.filter((promotion) => promotion.featured)[0];
  }
}
