import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProduct } from './product';

@Component({
  selector: 'pm-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  performFilter(value: string): IProduct[] {
    throw new Error('Method not implemented.');
  }

  constructor() { }

  pageTitle = 'Product List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  errorMessage = '';
  sub!: Subscription;

  private _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.performFilter(value);
  }

  filteredProducts: IProduct[] = [];
  products: IProduct[] = [];

  ngOnInit(): void {
  }

  toggleImage(): boolean {
    return true;
  }



}
