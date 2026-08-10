/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    //Concatenar los arreglos 
    const nums3 = nums1.concat(nums2);
    //Ordenar el arreglo
    const ordenadoNums3 = nums3.toSorted((a, b) => a - b);
    //Buscar el tamaño del nuevo arreglo 
    const totalElementos = ordenadoNums3.length;
    //Sort para buscar la media
    if(totalElementos % 2 == 0){
        let media1 = 0;
        let media2 = 0;
        let indice = parseInt((totalElementos/2));

        media1 = ordenadoNums3[indice]
        media2 = ordenadoNums3[indice-1]
        let resultado = (media1+media2)/2;
        return resultado;
    }else{
        let indice = parseInt((totalElementos/2));
        
        let media1 = ordenadoNums3[indice]
        return media1;
    }
};