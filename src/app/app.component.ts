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
