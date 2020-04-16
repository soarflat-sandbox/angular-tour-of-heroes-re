# 学習メモ

## プロジェクトの作成

```bash
$ ng new angular-tour-of-heroes-re
```

今回は Scss を利用したいので以下のように`--style=scss`オプションを追加。

```bash
$ ng new angular-tour-of-heroes-re --style=scss
```

## コンポーネント

### コンポーネントの構成

基本的なコンポーネントは３つのファイルで構成される。

`app`という名前のコンポーネントの場合、以下のファイルで構成される。

- `app.component.ts`: TypeScript で書かれたコンポーネントクラスのコード。
- `app.component.html`: HTML で書かれたコンポーネントのテンプレート。
- `app.component.scss`: コンポーネント専用の CSS（今回は`--style=scss`オプションでプロジェクトを作成したので Scss ファイル）。

#### `app.component.ts`

以下は単純な`app.component.ts`の例。

```ts
import { Component } from "@angular/core";

@Component({
  // コンポーネントのセレクタ。テンプレートで <app-root></app-root> と記述して利用できる。
  selector: "app-root",
  // コンポーネントのテンプレートファイル
  templateUrl: "./app.component.html",
  // コンポーネント専用のスタイル
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  // プロパティ。テンプレート（./app.component.html）上で `{{ title }}` と記述すればバインディングできる。
  title = "Tour of Heroes";
}
```

#### `app.component.html`

以下は単純な`app.component.html`の例。

```html
<h1>{{ title }}</h1>
```

`{{}}`を利用すれば、コンポーネントクラスのプロパティをバインディングできる。

`app.component.ts`で`title`プロパティに`'Tour of Heroes'`を格納しているので、描画時は以下の HTML が出力される。

```html
<h1>Tour of Heroes</h1>
```

#### コンポーネントの利用方法

`src/app.modules.ts`にコンポーネントを利用する記述を追加する。

```ts
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

// App コンポーネントをインポート
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [
    // AppComponent を宣言。app.component.ts で`selector: 'app-root'`を指定しているため、テンプレートで <app-root> を利用できる。
    AppComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

上記のように、コンポーネントの宣言を追加すれば、テンプレートで以下のように記述して利用できる。

```html
<app-root></app-root>
```

描画時は以下の HTML が出力される。

```html
<h1>Tour of Heroes</h1>
```

### コンポーネントの雛形の作成

`ng genetare component`コマンドを実行すればコンポーネントの雛形を作成できる。

以下の場合、Heroes コンポーネントの雛形を作成する。

```bash
$ ng generate component heroes
src/app/heroes/heroes.component.scss # コンポーネントの SCSS ファイル
src/app/heroes/heroes.component.html # コンポーネントのテンプレートファイル
src/app/heroes/heroes.component.spec.ts # コンポーネントのテストファイル
src/app/heroes/heroes.component.ts # コンポーネントクラスのファイル
```

また、`src/app/app.module.ts`で Heroes コンポーネントをインポートし、`declarations`に`HeroesComponent`が追加されるため、テンプレートで利用できる状態になる。

```ts
// 省略...
import { HeroesComponent } from './heroes/heroes.component';
// 省略...

@NgModule({
  declarations: [
    // 省略...
    // HeroesComponent を宣言。heroes.component.ts で`selector: 'app-heroes'`を指定しているため、テンプレートで <app-heros> を利用できる。
    HeroesComponent
  ],
  // 省略...
})
```

## バインディング

### プロパティバインディング

@Input デコレータを利用したバインディングのこと。

親コンポーネントのデータを子コンポーネントに共有（バインド）できる。

#### プロパティバインディングの例

Heros コンポーネントのデータを HeroDetail コンポーネントにバインドすることを想定する。

以下は HeroDetail コンポーネントのクラスコンポーネントファイル。

```ts
import { Component, OnInit, Input } from "@angular/core";
import { Hero } from "../hero";

@Component({
  selector: "app-hero-detail",
  templateUrl: "./hero-detail.component.html",
  styleUrls: ["./hero-detail.component.scss"],
})
export class HeroDetailComponent implements OnInit {
  // @Input() を利用することで、親コンポーネントのデータを子コンポーネントに共有（バインド）できる。
  // 今回の場合 <app-hero-detail [hero]="selectedHero"></app-hero-detail> のようにして
  // 親のデータ(selectedHero)を、子では hero として利用する。
  // @Input() を利用したバインディングのことをプロパティバインディング（Property binding）という。
  @Input() hero: Hero;

  constructor() {}

  ngOnInit(): void {}
}
```

`@Input() hero: Hero`を指定することで、親の Heros コンポーネントのテンプレートで以下のようにバインディングできる。

```html
<!-- Heros コンポーネントのデータである selectedHero を、HeroDetail コンポーネントでは hero というプロパティで利用する-->
<app-hero-detail [hero]="selectedHero"></app-hero-detail>
```
