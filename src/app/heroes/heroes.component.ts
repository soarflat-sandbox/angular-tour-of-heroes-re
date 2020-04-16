import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  // コンポーネントのセレクタ。テンプレートで <app-heroes></app-heroes> と記述して利用できる。
  selector: 'app-heroes',
  // コンポーネントのテンプレートファイル
  templateUrl: './heroes.component.html',
  // コンポーネント専用のスタイル
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  // プロパティ。テンプレート（./heroes.component.html）上で
  //`{{ hero.id }}`、`{{ hero.name }}`と記述すればバインディングできる。
  hero: Hero = {
    id: 1,
    name: 'Windstorm',
  };

  constructor() {}

  ngOnInit(): void {}
}
