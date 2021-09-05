/** @module utils/mapUtils */

/**
* @description do two rectangles intersect
*/
export const rectanglesIntersect = (shape1, shape2) => {
    const min1x = shape1.top;
    const min1y = shape1.left;
    const max1x = shape1.height + shape1.top;
    const max1y = shape1.width + shape1.left;
    const min2x = shape2.top;
    const min2y = shape2.left;
    const max2x = shape2.height + shape2.top;
    const max2y = shape2.width + shape2.left;

    const shape1LeftOf2 = max1x <= min2x;
    const shape1RightOf2 = min1x >= max2x;
    const shape1Above2 = min1y >= max2y;
    const shape1Below2 = max1y <= min2y;

    return !(shape1LeftOf2 || shape1RightOf2 || shape1Above2 || shape1Below2);
};
