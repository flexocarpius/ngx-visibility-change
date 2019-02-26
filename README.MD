# ngx-visibility-change

This library uses the [InterceptionObserver API](https://developer.mozilla.org/es/docs/Web/API/Intersection_Observer_API) to get whenever a element in your Angular 2+ application is visible.

It is highly inspired on [ng-defer-load from Vamsi Vempati](https://github.com/TradeMe/ng-defer-load).

## Demo

A demo can be found [here on StackBlitz.](https://stackblitz.com/edit/ngx-visibility-change)

## Installation

To install this library, run:

```bash
$ npm install ngx-visibility-change --save
```

## Consuming your library

Once you have published your library to npm, you can import your library in any Angular application by running:

```bash
$ npm install ngx-visibility-change
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { VisibilityChangeModule } from 'ngx-visibility-change';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify your library as an import
    VisibilityChangeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can it inside your application like this:

```xml
<!-- You can now use your library component in app.component.html -->
<div (visibilityChange)="onVisibilityChange" [threshold]="1.0"></div>
```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Flexo Carpius](mailto:flexocarpius@gmail.com)
