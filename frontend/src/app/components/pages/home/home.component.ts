import { FoodService } from './../../../services/food.service';
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  foods: Food[] = [];

  constructor(
    private foodService: FoodService,
    activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm) {
        this.foods = this.foodService.getAllFoodsBySearchTerm(
          params.searchTerm
        );
      } else if (params.tag) {
        this.foods = this.foodService.getAllFoodsByTag(params.tag);
      } else {
        this.foods = foodService.getAll();
      }
    });
  }
}
