# Apm

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.3.

## Project Introduction

1. Revision 3-1-2023
2. Check list: <https://app.pluralsight.com/course-player?clipId=dda8d63d-d942-404c-93b8-f6cfc342a309>
3. Something went wrong <https://app.pluralsight.com/course-player?clipId=17a0d977-4b3f-430a-ad00-3495ecfdece9>

### Task: Add Bootstrap and font-aweswome

1. run: "npm i bootstrap font-awesome"

```css
/* styles.css */
...
@import "~bootstrap/dist/css/bootstrap.min.css";
@import "~font-awesome/css/font-awesome.min.css";
...
```

### Task: Add component products

1.Check list <https://app.pluralsight.com/course-player?clipId=a75eafb5-d6af-454d-8abb-21c525f25609>

## Kanabn Task: Data Binding & Pipes

1. Video Ref:    <https://app.pluralsight.com/course-player?clipId=b92b7bcf-9d4c-4ac2-8e6a-ee728e49f1d4>

Examples, property binding one way component>template:

```html
<img [src]='product.imageUrl'>
<img src={{product.imageUrl}}>
<input type='text' [disabled]='isDisabled'>
<img src='http://myImage.org/{{productImage.Url}}'>
```

Example, event binding

```html

<button (click)= toggleImg()>{{ showImage ? "Hide" : "Show" }} Image</button>
```

Example, Two-way binding

1. Ref; <https://app.pluralsight.com/course-player?clipId=bc676b41-bf98-4489-a14d-4b4a4455ea7b>
2. time @0.05/4.55

```html
<!--  Add formsModuel to module for ngModel obj -->
<input type="text" [(ngModel)]="listFilter" />
```

```typescript
...
import { FormsModule } from '@angular/forms';
...
  imports: [
    BrowserModule,
    FormsModule
  ],
```

```typescript
listFilter = "cart";
```

1. Check list for data binding<https://app.pluralsight.com/course-player?clipId=d920a2c3-698c-45a0-9c50-1cbd5d404dcf>

## Kanban Task: More Components (video)

1. Ref <https://app.pluralsight.com/course-player?clipId=439ba8cf-f4ae-4c2c-b88b-a7b633b2cf58>

### Task: Add custom pipe 'converToSpaces'

1. Custom Pipe

```typescript
// add to app.module.ts
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ConvertToSpacesPipe
  ],

// file: convert.to.spaces.pipe.ts
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'convertToSpacesPipe'
})
export class ConvertToSpacesPipe implements PipeTransform {

  transform(value: string, character: string) {
    return value.replace(character, ' ');
  }

}
```

### Task: Getters and Setters (Video)

1. Reference: <https://app.pluralsight.com/course-player?clipId=12e97abe-1601-4488-ac72-2744a8042183>

```typescript
private _amount:number = 0;

get amount():number {
  //process the amount
  //return amount from private storage
  return this._amount;
}
set amount(value: number) {
  //process the amount
  // retain the amount in private storage
  this._amount = value;
}
```

1. Code to perform filtering

```typescript
  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((products: IProduct) =>
      products.productName.toLocaleLowerCase().includes(filterBy)
    );
  }
```

1. Checklist <https://app.pluralsight.com/course-player?clipId=262d5f1d-6b75-4473-9cf0-664f40b6037a>

## Kanban Task: Building nested components (Video)

1. Ref: <https://app.pluralsight.com/course-player?clipId=29fd6ad0-7b39-4220-b0f8-4d968d061a32>
2. TBD Work In Progress

## Kanban Task: Services and Dependency Injection (Video)

1. Add the filtered list of products using the service
2. Check list Ref: <https://app.pluralsight.com/course-player?clipId=7d5f8af5-7065-4c54-b5f7-15c0ac5452a0>

## Kanban Task: Retrieving Data Using HTTP

### Task: Setup http GET request

```typescript
// current recommended format using anonymous functions
  ngOnInit(): void {
    this.prodService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.filteredProducts = this.products;
      },
      error: (error) => console.log(`Error getting data ${error}`),
      complete: () => console.log(`GET products completed`)
    })
  }
```

### Task: Add Error Handling for http calls

```typescript
getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      tap((data) => console.log("All:", JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  private handleError(err: HttpErrorResponse) {
    // in real world app, we may send the server to some remote logging inferstructure
    // instead of just logging to the command console
    let errorMsg = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly
      errorMsg = `An error occured: ${err.error.message}`;
    } else {
      //The backend returned an unsuccessful responce code.
      // The responce body may contain clues as to what went wrong,
      errorMsg = `Server return code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMsg);
    return throwError(() => errorMsg);
  }
```

### Task: Unsubscribe

1. Ref: <https://app.pluralsight.com/course-player?clipId=170f83a9-48e4-42ce-94ce-5d9bae38b714>

```typescript
...
sub!: Subscription;
...
 ngOnInit(): void {
     this.sub = this.prodService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.filteredProducts = this.products;
      },
      error: (error) => console.log(`Error getting data ${error}`),
      complete: () => console.log(`GET products completed`)
    });
  }

  ngOnDestroy():void {
    this.sub.unsubscribe();
  }
```

1. Check List Ref <https://app.pluralsight.com/course-player?clipId=b78f40e0-299c-40ff-b546-dd407c695368>
