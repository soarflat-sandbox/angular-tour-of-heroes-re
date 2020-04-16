# 学習メモ

## プロジェクトの作成

```bash
$ ng new angular-tour-of-heroes-re
```

今回は Scss を利用したいので以下のように`--style=scss`オプションを追加。

```bash
$ ng new angular-tour-of-heroes-re --style=scss
```

## コンポーネントの構成

基本的なコンポーネントは３つのファイルで構成される。

`app`という名前のコンポーネントの場合、以下のファイルで構成される。

- `app.component.ts`: TypeScript で書かれたコンポーネントクラスのコード。
- `app.component.html`: HTML で書かれたコンポーネントのテンプレート。
- `app.component.scss`: コンポーネント専用の CSS（今回は`--style=scss`オプションでプロジェクトを作成したので Scss ファイル）。

### `app.component.ts`

以下は単純な`app.component.ts`の例。

```ts
import { Component } from '@angular/core';

@Component({
  // コンポーネントのセレクタ。テンプレートで <app-root></app-root> と記述して利用できる。
  selector: 'app-root',
  // コンポーネントのテンプレートファイル
  templateUrl: './app.component.html',
  // コンポーネント専用のスタイル
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // プロパティ。テンプレート（./app.component.html）上で `{{ title }}` と記述すればバインディングできる。
  title = 'Tour of Heroes';
}
```

### `app.component.html`

以下は単純な`app.component.html`の例。

```html
<h1>{{ title }}</h1>
```

`{{}}`を利用すれば、コンポーネントクラスのプロパティをバインディングできる。

`app.component.ts`で`title`プロパティに`'Tour of Heroes'`を格納しているので、描画時は以下の HTML が出力される。

```html
<h1>Tour of Heroes</h1>
```

### コンポーネントの利用方法

`app.component.ts`で`selector: 'app-root'`を指定しているため、このコンポーネントを利用する場合、テンプレートで以下のように記述する。

```html
<app-root></app-root>
```

描画時は以下の HTML が出力される。

```html
<h1>Tour of Heroes</h1>
```
