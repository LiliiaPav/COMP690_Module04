/*
Looping a Triangle

Write a loop that displays the following triangle within a console window:

#
##
###
####
#####
######
#######
*/

let rows=0;
while (rows<7){
    rows++;
    console.log('#'.repeat(rows));
}

