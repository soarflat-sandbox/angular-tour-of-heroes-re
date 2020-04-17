import { NgModule } from '@angular/core';
// アプリにルーティング機能を持たせることができる RouterModule と Routes をインポート
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    // '' を指定すると、URL のルートを意味する
    path: '',
    // /dashboard にリダイレクトする
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    // ブラウザのアドレスバーにある URL にマッチする文字列
    path: 'heroes',
    // そのルートに遷移するときにルーターが作成する（描画する）コンポーネント
    component: HeroesComponent,
  },
  {
    // detail/12 などでアクセスすれば、HeroDetail コンポーネントを描画する
    path: 'detail/:id',
    component: HeroDetailComponent,
  },
  { path: 'dashboard', component: DashboardComponent },
];

// モジュールに関する情報を宣言
@NgModule({
  // モジュールで利用する外部のモジュール
  // RouterModule.forRoot(routes) を実行することで、ルーティングに必要なサービス・プロバイダーとディレクティブが提供され、
  // ブラウザの現在の URL を元に最初の遷移を行う。
  // forRoot() は開発者がシングルトンであることを意図したサービスとプロバイダーを簡単に設定できるようにするための規約。
  // forRoot() は ModuleWithProviders オブジェクトを返す。
  // forRoot() の結果はルートアプリケーションモジュールで実行してインポートしなければならない。
  imports: [RouterModule.forRoot(routes)],
  // 外部に公開するモジュール
  // RouterModule をエクスポートし、app.modules.ts でインポートすれば、アプリ全体でルーティングを利用できるようになる。
  // 機能の１つとして、<router-outlet> ディレクティブを利用できる。
  exports: [RouterModule],
})
// @NgModule デコレーターが付与されたクラスのことを NgModule という
// そのため、AppRoutingModule は NgModule である。
export class AppRoutingModule {}
