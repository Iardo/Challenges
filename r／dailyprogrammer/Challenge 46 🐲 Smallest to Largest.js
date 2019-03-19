/* 
    Consider this game: 
    Write 8 blanks on a sheet of paper, randomly pick a digit 0-9, after seeing the digit, choose one of the 8 blanks to place that digit in,
    randomly choose another digit (with replacement) and then choose one of the 7 remaining blanks to place it in,repeat until you've filled all 8 blanks, 
    you win if the 8 digits written down are in order from smallest to largest.

    Write a program that plays this game by itself and determines whether it won or not,
    run it 1 million times and post your probability of winning.

    Assigning digits to blanks randomly lets you win about 0.02% of the time.
    Here's a python script that wins about 10.3% of the time. Can you do better?

        import random  
        def trial():
            indices = range(8)                           # remaining unassigned indices
            s = [None] * 8                               # the digits in their assigned places
            while indices:
                d = random.randint(0,9)                  # choose a random digit
                index = indices[int(d*len(indices)/10)]  # assign it an index
                s[index] = str(d)
                indices.remove(index)
            return s == sorted(s)
        print sum(trial() for _ in range(1000000))
*/

"use strict";
function placeholder(){
    
};