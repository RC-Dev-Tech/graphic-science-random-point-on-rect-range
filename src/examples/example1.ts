import { IExample } from "../core/base";

/*
  範例實作: 矩形範圍中的亂數隨機點的產生.
 */
export class Example extends IExample {

    getRandomPointInRectangle(left: number, right: number, top: number, bottom: number): [number, number] {
      // 計算矩形寬度和高度
      const width = Math.abs(right - left);
      const height = Math.abs(bottom - top);
    
      // 生成隨機 x 座標
      const randomX = Math.random() * width + left;
    
      // 生成隨機 y 座標
      const randomY = Math.random() * height + top;
    
      // 將中心點設為原點
      const translatedX = randomX - width / 2;
      const translatedY = randomY - height / 2;
    
      // 返回結果
      return [translatedX, translatedY];
    }

    run(): void {
      // 矩形範圍
      const left = 5.3;
      const right = -5.3;
      const top = -3.7;
      const bottom = 3.7;
         
      // 獲取隨機點
      const [randomX, randomY] = this.getRandomPointInRectangle(left, right, top, bottom);
         
      // 輸出結果
      console.log(`隨機點座標：(${randomX}, ${randomY})`);
    }
}
 