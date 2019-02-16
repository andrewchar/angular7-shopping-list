import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('a test recipe name', 'this is a test recipe desc', 'http://res.publicdomainfiles.com/pdf_view/2/13494451211528.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
