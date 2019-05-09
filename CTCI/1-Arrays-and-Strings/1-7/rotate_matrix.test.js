const rotateMatrix = require("./rotate_matrix");

let matrix = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
let matrix2 = [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15]];
let matrix3 = [
	[0, 1, 2, 3, 4],
	[5, 6, 7, 8, 9],
	[10, 11, 12, 13, 14],
	[15, 16, 17, 18, 19],
	[20, 21, 22, 23, 24]
];
let matrix3rotated = [
	[20, 15, 10, 5, 0],
	[21, 16, 11, 6, 1],
	[22, 17, 12, 7, 2],
	[23, 18, 13, 8, 3],
	[24, 19, 14, 9, 4]
];

/*
console.log(matrix3);
rotateMatrix(matrix3);
console.log(matrix3);
*/

test("rotate-matrix", () => {
    rotateMatrix(matrix3);
    expect(matrix3).toEqual(matrix3rotated);
});
