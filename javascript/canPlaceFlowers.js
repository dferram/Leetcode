/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let lastBed;
    let nextBed;

    for(let i = 0; i < flowerbed.length; i++){
        flowerbed[i];
        let lastBed = flowerbed[i-1];
        let nextBed = flowerbed[i+1];
        if(((lastBed == 0 || lastBed == undefined) && (nextBed == 0 || nextBed == undefined) && flowerbed[i] == 0)){
            flowerbed[i] = 1;
            n--;
        }
    }
    
    return n <= 0;
};