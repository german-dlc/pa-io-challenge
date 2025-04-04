import { expect } from "chai";
import { GildedRose, Item } from "./gilded-rose";
import "mocha";

describe("GildedRose", () => {
    it("should reduce quality and sellIn by 1 for a normal item", () => {
        const items = [new Item("Normal Item", 10, 20)];
        const gildedRose = new GildedRose(items);
        gildedRose.updateQuality();
        
        expect(gildedRose.items[0].sellIn).to.equal(9);
        expect(gildedRose.items[0].quality).to.equal(19);
    });

    it("should increase quality for AGED_BRIE", () => {
        const items = [new Item("Aged Brie", 10, 30)];
        const gildedRose = new GildedRose(items);
        gildedRose.updateQuality();
        
        expect(gildedRose.items[0].quality).to.equal(31);
    });

    it("should drop quality to 0 after the concert for CONCERT_PASS", () => {
        const items = [new Item("Backstage passes to a TAFKAL80ETC concert", 0, 30)];
        const gildedRose = new GildedRose(items);
        gildedRose.updateQuality();
        
        expect(gildedRose.items[0].quality).to.equal(0);
    });

    it("should not change quality or sellIn for SULFURAS", () => {
        const items = [new Item("Sulfuras, Hand of Ragnaros", 5, 80)];
        const gildedRose = new GildedRose(items);
        gildedRose.updateQuality();
        
        expect(gildedRose.items[0].sellIn).to.equal(5);
        expect(gildedRose.items[0].quality).to.equal(80);
    });

    it("should degrade quality twice as fast for CONJURED items", () => {
        const items = [new Item("Conjured", 5, 10)];
        const gildedRose = new GildedRose(items);
        gildedRose.updateQuality();
        
        expect(gildedRose.items[0].quality).to.equal(8);
    });

    it("should not allow quality to drop below 0", () => {
        const items = [new Item("New Item", 5, 0)];
        const gildedRose = new GildedRose(items);
        gildedRose.updateQuality();
        
        expect(gildedRose.items[0].sellIn).to.equal(4);
        expect(gildedRose.items[0].quality).to.equal(0);
    });
});

