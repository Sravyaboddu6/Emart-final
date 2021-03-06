import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmartService } from '../../emart.service';
import { Item } from '../../item';
import { SubCategory } from '../../sub-category';
import { Category } from '../../category';

@Component({
  selector: 'app-item-display',
  templateUrl: './item-display.component.html',
  styleUrls: ['./item-display.component.css']
})
export class ItemDisplayComponent implements OnInit {
  item: Item;
  category: Category;
  subCategory: SubCategory;
  constructor(protected activatedRoute: ActivatedRoute,
    protected emartService: EmartService,
    protected router: Router) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(params => {
      let id: any = params.get('iId');

      this.emartService.getItem(id).subscribe(
        (response: any) => {
          this.item = response;
        }
      );
    });
  }
  addToCart(item: any) {
    this.emartService.addToCart(item);
    this.router.navigate(['item-list']);
  }

}
