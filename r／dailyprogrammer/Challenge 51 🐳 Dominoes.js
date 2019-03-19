/* 
    Take a 7x7 grid of cells and remove the central cell (like a chessboard, but slightly smaller and with a hole in the middle), 
    and it would look something like this: (http://i.imgur.com/UXtTA.png), the number of cells is 7*7 - 1 = 48 because we removed the central cell.

    Now, lets start tiling this grid with dominoes, each domino covers exactly two cells that are either horizontally or vertically next to each other,
    so if you are going to tile the whole thing with dominoes, you would need 24 of them (48 over 2),
    here is an example of the grid being perfectly tiled by dominoes (http://i.imgur.com/NmD8m.png).

    There are exactly 75272 ways you can use dominoes to tile a 7x7 grid with the central cell removed,
    find the last 8 digits of the number of ways you can use dominoes to tile a 15x15 grid with the central cell removed.

    💡  Note: rotations and reflections of tilings count as distinct tilings. I.e. if two tilings differ only by rotation or reflection, they are still considered to be different.
*/

"use strict";
function placeholder(){
    
};