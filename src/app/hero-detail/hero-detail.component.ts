import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  // コンポーネントのセレクタ。テンプレートで <app-hero-detail></app-hero-detail> と記述して利用できる。
  selector: 'app-hero-detail',
  // コンポーネントのテンプレートファイル
  templateUrl: './hero-detail.component.html',
  // コンポーネント専用のスタイル
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent implements OnInit {
  // プロパティ。テンプレート（./hero-detail.component.html）上でバインディングできる。
  hero: Hero;

  constructor(
    // ActivatedRoute（ルーティングに関連する情報を取得できるサービス）を注入する
    private route: ActivatedRoute,
    // HeroService を注入する
    private heroService: HeroService,
    // Location（アプリケーションがブラウザーのURLと対話するためのサービス）を注入する
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    // detail/13 の場合 id は 13 になる。
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe((hero) => (this.hero = hero));
  }

  goBack(): void {
    // １つ前の URL に戻る
    this.location.back();
  }

  save(): void {
    this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
  }
}
