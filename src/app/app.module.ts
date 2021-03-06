import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// ngModel（双方向バインディング）をオプトインするためにインポートする
import { FormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

// App コンポーネントをインポート
import { AppComponent } from './app.component';
// Heroes コンポーネントをインポート
import { HeroesComponent } from './heroes/heroes.component';
// HeroDetailComponent コンポーネントをインポート
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
// MessagesComponent コンポーネントをインポート
import { MessagesComponent } from './messages/messages.component';
// DashboardComponent コンポーネントをインポート
import { DashboardComponent } from './dashboard/dashboard.component';
// AppRoutingModule コンポーネントをインポート
import { AppRoutingModule } from './app-routing.module';
// HeroSearchComponent コンポーネントをインポート
import { HeroSearchComponent } from './hero-search/hero-search.component';

@NgModule({
  declarations: [
    // AppComponent を宣言。app.component.ts で`selector: 'app-root'`を指定しているため、テンプレートで <app-root> を利用できる。
    AppComponent,
    // HeroesComponent を宣言。heroes.component.ts で`selector: 'app-heroes'`を指定しているため、テンプレートで <app-heros> を利用できる。
    HeroesComponent,
    // HeroDetailComponent を宣言。heroes-detail.component.ts で`selector: 'app-heroes-detail'`を指定しているため、テンプレートで <app-heros-detail> を利用できる。
    HeroDetailComponent,
    // MessagesComponent を宣言。heroes-detail.component.ts で`selector: 'app-messages'`を指定しているため、テンプレートで <app-heros-detail> を利用できる。
    MessagesComponent,
    // DashboardComponent を宣言。heroes-detail.component.ts で`selector: 'app-dashboard'`を指定しているため、テンプレートで <app-dashboard> を利用できる。
    DashboardComponent,
    // HeroSearchComponent を宣言。heroes-search.component.ts で`selector: 'app-hero-search'`を指定しているため、テンプレートで <app-hero-search> を利用できる。
    HeroSearchComponent,
  ],
  imports: [
    BrowserModule,
    // ngModel（双方向バインディング）は FormsModule に属しているため、これをインポートすれば
    // <input [(ngModel)]="currentItem.name" id="eample-ngModal"> のように ngModel を利用できる。
    FormsModule,
    // AppRoutingModule は RouterModule をエクスポートしているため、アプリ全体でルーティングを利用できるようになる。
    AppRoutingModule,
    // コンポーネントで HttpClient を注入できるようになる
    HttpClientModule,
    // HTTP リクエストをインターセプトし、シミュレートされたレスポンスを返す。
    // 今回は InMemoryDataService で定義したデータをレスポンスとして返す。
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
