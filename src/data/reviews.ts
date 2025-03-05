export interface Review {
  date: Date;
  content: string;
}

export const reviews: Review[] = [
  { date: new Date("2023-10-10"), content: "デザインの改善を行った" },
  { date: new Date("2023-10-15"), content: "新機能のプロトタイプを作成した" },
  { date: new Date("2023-11-01"), content: "チームでコードレビューを行った" },
  { date: new Date("2023-11-15"), content: "テストコードを追加した" },
  { date: new Date("2023-12-01"), content: "ドキュメントを更新した" },
];
