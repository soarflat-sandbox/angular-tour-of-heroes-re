import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// ngModel（双方向バインディング）をオプトインするためにインポートする
import { FormsModule } from '@angular/forms';

// App コンポーネントをインポート
import { AppComponent } from './app.component';
// Heroes コンポーネントをインポート
import { HeroesComponent } from './heroes/heroes.component';
// HeroDetailComponent コンポーネントをインポート
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@NgModule({
  declarations: [
    // AppComponent を宣言。app.component.ts で`selector: 'app-root'`を指定しているため、テンプレートで <app-root> を利用できる。
    AppComponent,
    // HeroesComponent を宣言。heroes.component.ts で`selector: 'app-heroes'`を指定しているため、テンプレートで <app-heros> を利用できる。
    HeroesComponent,
    // HeroDetailComponent を宣言。heroes-detail.component.ts で`selector: 'app-heroes-detail'`を指定しているため、テンプレートで <app-heros-detail> を利用できる。
    HeroDetailComponent,
  ],
  imports: [
    BrowserModule,
    // ngModel（双方向バインディング）は FormsModule に属しているため、これをインポートすれば
    // <input [(ngModel)]="currentItem.name" id="eample-ngModal"> のように ngModel を利用できる。
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
