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

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        const AGED_BRIE = 'Aged Brie';
        const CONCERT_PASS = 'Backstage passes to a TAFKAL80ETC concert';
        const SULFURAS = 'Sulfuras, Hand of Ragnaros';
        const CONJURED = 'Conjured';

        const SULFURAS_QUALITY = 80;

        this.items.forEach((item) => {
            if (item.name === AGED_BRIE) {
                item.sellIn -= 1;

                const isQualityLowerThan50 = item.quality < 50;
                const isSellByDatePassed = item.sellIn < 0 && isQualityLowerThan50;

                if (isQualityLowerThan50) {
                    item.quality += 1;
                }
                if (isSellByDatePassed) {
                    item.quality += 1;
                }
            } else if (item.name === CONCERT_PASS) {
                item.sellIn -= 1;
                
                const isConcertDatePassed = item.sellIn < 0;
                const isQualityLowerThan50 = item.quality < 50;
                const is10DaysBeforeConcert = item.sellIn < 11 && isQualityLowerThan50;
                const is5DaysBeforeConcert = item.sellIn < 6 && isQualityLowerThan50;

                if (isQualityLowerThan50) {
                    item.quality += 1;
                }
                if (is10DaysBeforeConcert) {
                    item.quality += 1;
                }
                if (is5DaysBeforeConcert) {
                    item.quality += 1;
                }
                if (isConcertDatePassed) {
                    item.quality = 0;
                }
            } else if (item.name === SULFURAS) {
                if (item.quality !== SULFURAS_QUALITY) {
                    item.quality = SULFURAS_QUALITY;
                }
            } else if (item.name === CONJURED) {
                item.sellIn -= 1;
                
                const isQualityGreaterThan0 = item.quality > 0;
                const isSellByDatePassed = item.sellIn < 0 && isQualityGreaterThan0;
                if (isQualityGreaterThan0) {
                    item.quality -= 2;
                }
                if (isSellByDatePassed) {
                    item.quality -= 2;
                }
                if (item.quality < 0) {
                    item.quality = 0;
                }
            } else {
                item.sellIn -= 1;
                
                const isQualityGreaterThan0 = item.quality > 0;
                const isSellByDatePassed = item.sellIn < 0 && isQualityGreaterThan0;
                if (isQualityGreaterThan0) {
                    item.quality -= 1;
                }
                if (isSellByDatePassed) {
                    item.quality -= 1;
                }
            }
        });
    }
}
