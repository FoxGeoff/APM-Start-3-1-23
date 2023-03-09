import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private prodService: ProductService) { }

  pageTitle = 'Product List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = true;
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

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((products: IProduct) =>
      products.productName.toLocaleLowerCase().includes(filterBy)
    );
  }

  filteredProducts: IProduct[] = []
  products: IProduct[] = [];


  ngOnInit(): void {
    this.prodService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.filteredProducts = this.products;
      },
      error: (error) => console.log(`Error getting data ${error}`),
      complete: () => console.log(`GET products completed`)
    });
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

}
