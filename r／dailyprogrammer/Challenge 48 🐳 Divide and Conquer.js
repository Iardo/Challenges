/* 
    Inspired by the divide and conquer problem posted on 4/16/12, here's another problem that can be solved using divide and conquer.
    You are given a grid of vertices/nodes connected by adjacent nodes in a checkerboard manner and each of these nodes is marked with a positive number,
    assuming that these numbers are distinct, give an algorithm that can find a single local minimum.

    🍑  Bonus: If there are n2 nodes in our grid, give an O(n) time complexity algorithm that can find one/any local minimum,
        in other words, if the construction of the grid takes some time c* n2, 
        find an algorithm that locates any local minimum by looking at only some constant factor times the square root of the total number of nodes there are in the grid.

    💡  Hint: divide into quadrants; the recurrence T(n) = 1*T(n/4) + O(n) is (maybe somewhat counter-intuitively) in O(n).
*/

"use strict";
function placeholder(){
    
};