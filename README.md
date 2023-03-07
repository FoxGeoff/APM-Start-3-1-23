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
