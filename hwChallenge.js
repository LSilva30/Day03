// // // FizzBuzz Challenge:
// // //1. make an output 1 to 100
// // //2. if /3 make it say fizz
// // //3. if /5 make it say buzz
// // //4. if /3 && /5 make it say fizzBuzz

for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log('fizzbuzz')
    } else if (i % 3 === 0) {
        console.log('fizz')
    } else if (i % 5 === 0) {
        console.log('buzz')
    } else {
        console.log(i)
    }
}


// // // if (true) {.. does something}
// // // else if (true) {... does something} // ONLY RUNS IF *IF IS NOT TRUE
// // // else {... does something}


// // //-------------------------------------------------------------------------


// // // Pyramid Challenge
// // // write a loop to print
// // // #
// // // ##
// // // ###
// // // ####
// // // #####


// function pyramid(numberOfRows) {
//     for (let i = 1; i <= numberOfRows; i++) { // this creates one row per loop
//         let row = []
        
//         for (let j = 1; j <= i; j++) { // this makes one hashtag per loop
//             row.push('#')
//         }

//         console.log(row.join(' '))
//     }

// }

// pyramid(5)

// current have a for lop that creates a new row
// need another loop to create the columns


// alternate better solution
//---------------------------------------

// function pyramid(numberOfRows) {
//     let row = ''
//     for (let i = 1; i <= numberOfRows; i++){
//         row += '#'
//         console.log(row)
//     }
// }    
// pyramid(10)