/*

1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/
const sum = (a, b) => {
	if (a === b) {
		return 3 * (a + b);
	} else return a + b;
};
console.log(sum(1, 3));
console.log(sum(3, 3));
/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/
const check = (a, b) => {
	if (a === 50 || b === 50 || a + b === 50) {
		return true;
	} else return false;
};
console.log(check(50, 0));
console.log(check(0, 50));
console.log(check(25, 25));
/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/
const removeCharacter = (str, charPosition) => {
	let part1 = str.substring(0, charPosition);
	let part2 = str.substring(charPosition + 1, str.length);
	console.log(part1);
	console.log(part2);
	return part1 + part2;
};
console.log(removeCharacter('manishElaganti', 3));

/*

4)
 Create a function to find the largest of three given integers.
*/
const largest = (x, y, z) => {
	let maximum_value = 0;
	if (x > y) {
		maximum_value = x;
	} else {
		maximum_value = y;
	}
	if (z > maximum_value) {
		maximum_value = z;
	}
	return maximum_value;
};
console.log(largest(100, 1000, 7777));
/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/
const range = (x, y) => {
	if (
		(x >= 40 && x <= 60 && y >= 40 && y <= 60) ||
		(x >= 70 && x <= 100 && y >= 70 && y <= 100)
	) {
		return true;
	} else {
		return false;
	}
};
console.log(range(45, 55));
console.log(range(75, 95));
console.log(range(25, 55));
/*
6) 

Create a function to create a new string of specified copies (positive number) of a given string.
*/
const copies = (str, a) => {
	if (a < 0) return false;
	else return str.repeat(a);
};
console.log(copies('manish', 3));
/*

7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/
const cityName = (str) => {
	if (
		str.length >= 3 &&
		(str.substring(0, 3) == 'Los' || str.substring(0, 3) == 'New')
	) {
		return str;
	}

	return '';
};

console.log(cityName('New Jersy'));
console.log(cityName('Los Angeles'));
console.log(cityName('paris'));

/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/ const sumThree = (nums) => {
	return nums[0] + nums[1] + nums[2];
};

console.log(sumThree([15, 12, 20]));
console.log(sumThree([6, 7, 6]));
console.log(sumThree([23, -8, -11]));

/*

9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/
const contains1And3 = (arr) => {
	if (arr.includes(1) || arr.includes(3)) {
		return true;
	} else {
		return false;
	}
};

console.log(contains1And3([1, 5]));
console.log(contains1And3([2, 3]));
console.log(contains1And3([7, 5]));

// 10)

// Create a function to test whether an array of integers of length 2 does not contain 1 or a 3
const is13 = (nums) => {
	if (!nums.includes(1) && !nums.includes(3)) {
		return true;
	} else {
		return false;
	}
};

console.log(is13([7, 8]));
console.log(is13([3, 2]));
console.log(is13([0, 1]));

// 11)

// Create a function to find the longest string from a given array of strings.
const longest_string = (strArr) => {
	let longestStr = strArr[0].length;
	strArr.map((str) => (max = Math.max(longestStr, str.length)));
	let result = strArr.filter((str) => str.length === max);
	return result;
};

console.log(
	longest_string([
		'mani',
		'manish',
		'elagantimanish',
		'manishreddy',
		'manishreddyelaganti',
	]),
);

// 12)

// Create a function to find the types of a given angle.

// Types of angles:
//     Acute angle: An angle between 0 and 90 degrees.
//     Right angle: An 90 degree angle.
//     btuse angle: An angle between 90 and 180 degrees.
//     Straight angle: A 180 degree angle.

const angleType = (angle) => {
	if (angle < 90) {
		return 'Acute angle.';
	}
	if (angle === 90) {
		return 'Right angle.';
	}
	if (angle < 180) {
		return 'Obtuse angle.';
	}
	return 'Straight angle.';
};

console.log(angleType(47));
console.log(angleType(90));
console.log(angleType(155));
console.log(angleType(190));
// 13)

// Create a function to find the index of the greatest element of a given array of integers
const indexOfGreatest = (arr) => {
	if (arr.length === 0) {
		return -1;
	}

	let maxValue = arr[0];
	let greatestIndex = 0;

	for (let i = 1; i < arr.length; i++) {
		if (arr[i] > maxValue) {
			greatestIndex = i;
			maxValue = arr[i];
		}
	}

	return greatestIndex;
};
console.log(indexOfGreatest([8, 22, 33, 45, 66]));
// 14)

// Create a function to get the largest even number from an array of integers.
function max_even(arra) {
	arra.sort((x, y) => y - x);

	for (var i = 0; i < arra.length; i++) {
		if (arra[i] % 2 === 0) return arra[i];
	}
}

console.log(max_even([20, 40, 200]));
console.log(max_even([20, 40, 200, 301]));

// 16)

// Create a function to check from two given integers, whether one is positive and another one is negative.
const positive_negative = (x, y) => {
	if ((x < 0 && y > 0) || (x > 0 && y < 0)) {
		return true;
	} else {
		return false;
	}
};
console.log(positive_negative(2, 2));
console.log(positive_negative(-2, 2));
console.log(positive_negative(2, -2));
console.log(positive_negative(-2, -2));
// 17)

// Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case.
const upper_lower = (str) => {
	if (str.length < 3) {
		return str.toUpperCase();
	}
	front_part = str.substring(0, 3).toLowerCase();
	back_part = str.substring(3, str.length).toUpperCase();
	return front_part + back_part;
};
console.log(upper_lower('MANIsh'));
console.log(upper_lower('jaVAscrIpT'));
console.log(upper_lower('cASCADIng'));
// 18)

// Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.
const sortaSum = (x, y) => {
	const sum_nums = x + y;
	if (sum_nums >= 50 && sum_nums <= 80) {
		return 65;
	}
	return 80;
};

console.log(sortaSum(30, 20));
console.log(sortaSum(90, 80));
// 19)

// Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:

// If the number has 3 as a factor, output 'Diego'.
// If the number has 5 as a factor, output 'Riccardo'.
// If the number has 7 as a factor, output 'Stefano'.
// If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
// Examples
// 28's factors are 1, 2, 4, 7, 14, 28.
// this would be a simple "Stefano".
// 30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
// this would be a "DiegoRiccardo".
// 34 has four factors: 1, 2, 17, and 34.
// this would be "34".

function factors(n) {
	let num_factors = [],
		i;

	for (i = 1; i <= Math.floor(Math.sqrt(n)); i += 1)
		if (n % i === 0) {
			num_factors.push(i);
			if (n / i !== i) num_factors.push(n / i);
		}
	num_factors.sort(function (x, y) {
		return x - y;
	}); // numeric sort
	return num_factors;
}
let arr1 = factors(3);
let arr2 = factors(5);
let arr3 = factors(7);
console.log(arr1, arr2, arr3);
const content = (n, arr1, arr2, arr3) => {
	if (arr1.includes(n) || arr2.includes(n) || arr3.includes(n)) {
		if (arr1.includes(n)) {
			return 'diego';
		} else if (arr2.includes(n)) {
			return 'ricardo';
		} else if (arr3.includes(n)) {
			return 'stefano';
		}
	}
	// if (arr1.includes(n) || arr2.includes(n) || arr3.includes(n)) {
	// 	if (arr2.includes(n) && arr3.includes(n)) {
	// 		return 'RicardoStefano';
	// 	} else if (arr2.includes(n)) {
	// 		return 'ricardo';
	// 	} else {
	// 		return 'stefano';
	// 	}
	// }
	// if (arr1.includes(n) || arr2.includes(n) || arr3.includes(n)) {
	// 	if (arr1.includes(n) && arr3.includes(n)) {
	// 		return 'DiegoStefano';
	// 	} else if (arr1.includes(n)) {
	// 		return 'diego';
	// 	} else {
	// 		return 'Stefano';
	// 	}
	// }
};
console.log(content(7, arr1, arr2, arr3));
// 20)
// Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC
const str = 'British Broadcasting Corporation';
const acronym = (str = '') => {
	const strArr = str.split(' ');
	let res = '';
	strArr.forEach((el) => {
		const [char] = el;
		if (char === char.toUpperCase() && char !== char.toLowerCase()) {
			res += char;
		}
	});
	return res;
};
console.log(acronym(str));
console.log(acronym('Bachelor of Science'));
