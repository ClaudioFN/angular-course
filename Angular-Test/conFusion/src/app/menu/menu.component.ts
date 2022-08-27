import { Component, OnInit, Inject } from '@angular/core';

/* Incluindo o import da nova classe Dish.ts */
import { Dish } from '../shared/dish';
import { flyInOut, expand } from '../animations/app.animation';
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut()
  ]
})
export class MenuComponent implements OnInit {

  dishes: Dish[];
  errMess: string;

  //selectedDish: Dish;

  constructor(private dishService: DishService, @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {

    //this.dishService.getDishes().then((dishes) => this.dishes = dishes);
    this.dishService.getDishes().subscribe((dishes) => this.dishes = dishes, errmess => this.errMess = <any>errmess);

  }

  /*
  onSelect(dish: Dish){
    this.selectedDish = dish;
  }
  */

}
