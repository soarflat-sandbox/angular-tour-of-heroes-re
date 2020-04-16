import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

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
  heroes = HEROES;
  selectedHero: Hero;

  constructor() {}

  ngOnInit(): void {}

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
