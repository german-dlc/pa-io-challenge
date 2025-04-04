const AGED_BRIE = 'Aged Brie';
const CONCERT_PASS = 'Backstage passes to a TAFKAL80ETC concert';
const SULFURAS = 'Sulfuras, Hand of Ragnaros';
const CONJURED = 'Conjured';
const SULFURAS_QUALITY = 80;

export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

abstract class UpdatableItem extends Item {
  constructor(name: string, sellIn: number, quality: number) {
    super(name, sellIn, quality);
  }
  abstract update(): void;
}

class RegularItem extends UpdatableItem {
  update(): void {
    this.sellIn -= 1;

    const isQualityGreaterThan0 = this.quality > 0
    const isSellByDatePassed = this.sellIn < 0 && isQualityGreaterThan0;
    if (isQualityGreaterThan0) {
      this.quality -= 1;
    }
    if (isSellByDatePassed) {
      this.quality -= 1;
    }
  }
}

class AgedBrieItem extends UpdatableItem {
  update(): void {
    this.sellIn -= 1;

    const isQualityLowerThan50 = this.quality < 50;
    const isSellByDatePassed = this.sellIn < 0 && isQualityLowerThan50;
    if (isQualityLowerThan50) {
      this.quality += 1;
    }
    if (isSellByDatePassed) {
      this.quality += 1;
    }
  }
}

class ConcertPassItem extends UpdatableItem {
  update(): void {
    this.sellIn -= 1;
                
    const isConcertDatePassed = this.sellIn < 0;
    const isQualityLowerThan50 = this.quality < 50;
    const is10DaysBeforeConcert = this.sellIn < 11 && isQualityLowerThan50;
    const is5DaysBeforeConcert = this.sellIn < 6 && isQualityLowerThan50;
    if (isConcertDatePassed) {
      this.quality = 0;
    } else if (isQualityLowerThan50) {
      this.quality += 1;
      if (is10DaysBeforeConcert) {
        this.quality += 1;
      }
      if (is5DaysBeforeConcert) {
        this.quality += 1;
      }
    }
  }
}

class SulfurasItem extends UpdatableItem {
  update(): void {
    if (this.quality !== SULFURAS_QUALITY) {
      this.quality = SULFURAS_QUALITY;
    }
  }
}

class ConjuredItem extends UpdatableItem {
  update(): void {
    this.sellIn -= 1;
                
    const isQualityGreaterThan0 = this.quality > 0;
    const isSellByDatePassed = this.sellIn < 0 && isQualityGreaterThan0;
    if (isQualityGreaterThan0) {
      this.quality -= 2;
    }
    if (isSellByDatePassed) {
      this.quality -= 2;
    }
    if (this.quality < 0) {
      this.quality = 0;
    }
  }
}

export class GildedRose {
    items: Array<UpdatableItem>;

    constructor(items = [] as Array<Item>) {
        this.items = items.map(item => {
          const {name, sellIn, quality}: Item = item;
          if (name === AGED_BRIE) {
            return new AgedBrieItem(name, sellIn, quality);
          } else if (name === CONCERT_PASS) {
            return new ConcertPassItem(name, sellIn, quality);
          } else if (name === SULFURAS) {
            return new SulfurasItem(name, sellIn, quality);
          } else if (name === CONJURED) {
            return new ConjuredItem(name, sellIn, quality);
          } else {
            return new RegularItem(name, sellIn, quality);
          }
        });
    }

    updateQuality() {
      this.items.forEach(item => item.update());
    }
}
