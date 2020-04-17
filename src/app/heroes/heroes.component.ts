import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  // コンポーネントのセレクタ。テンプレートで <app-heroes></app-heroes> と記述して利用できる。
  selector: 'app-heroes',
  // コンポーネントのテンプレートファイル
  templateUrl: './heroes.component.html',
  // コンポーネント専用のスタイル
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  // プロパティ。テンプレート（./heroes.component.html）上でバインディングできる。
  heroes: Hero[];

  constructor(
    // HeroService を注入する
    private heroService: HeroService
  ) {}

  // コンポーネント作成直後に呼び出されるライフサイクルフック
  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    // 注入した HeroService からヒーローデータを取得
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
}
