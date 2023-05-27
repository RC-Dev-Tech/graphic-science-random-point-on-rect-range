# ![](https://drive.google.com/uc?id=10INx5_pkhMcYRdx_OO4rXNXxcsvPtBYq) 矩形範圍中的亂數隨機點的產生
> ##### 理論請自行找，網路上有很多相關的文章，這邊只關注於範例實作的部分.

---

<!--ts-->
## 目錄:
* [簡介](#簡介)
* [實作範例](#實作範例)
* [操作說明](#操作說明)
* [參考資料](#參考資料)
* [備註](#備註)
<!--te-->

---

## 簡介:
在矩形內隨機取一個點的理論基於幾何學和概率論的概念<br>

以下是基本的理論解釋：<br>
計算矩形的寬度和高度：根據矩形的左上角和右下角座標，可以計算出矩形的寬度和高度。寬度可以由右邊座標減去左邊座標，高度可以由底邊座標減去頂邊座標。
生成隨機的 x 和 y 座標：使用隨機數生成器生成一個介於 0 到 1 之間的隨機數，並將其乘以矩形的寬度和高度。這樣可以獲得一個介於矩形左上角和右下角之間的隨機點。
將中心點設為原點：將生成的隨機點的座標系統從矩形的左上角移動到矩形的中心點。這可以通過將生成的隨機 x 和 y 座標減去矩形寬度和高度的一半來實現。
返回結果：將處理後的座標作為結果返回，即獲得在矩形內的隨機點座標。
這個方法確保了生成的隨機點落在矩形的範圍內，並且在矩形內部的每個點都有相等的概率被選中。這是基於概率均勻分佈的原則，假設隨機數生成器是均勻且獨立的。因此，您可以使用此方法在矩形內生成均勻分佈的隨機點。

---


## 實作範例:
- [Example](https://github.com/RC-Dev-Tech/graphic-science-random-point-on-rect-range/blob/main/src/examples/example1.ts) - 標準範例(Typescript).

---

## 操作說明:
#### 1. 安裝套件
> npm install --save
#### 2. 編譯 & 運行
> npm run start

---

## 參考資料:
* [](https://nicolakacha.coderbridge.io/2020/09/11/sync-async/) <br>

---
<!--ts-->
#### [目錄 ↩](#目錄)
<!--te-->
---
