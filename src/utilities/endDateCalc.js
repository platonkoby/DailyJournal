import { FaGalacticSenate } from 'react-icons/fa';

function dateChecker(date) {
	date = addZeroesAndSplit(date);
	const [ month, day, year ] = date;

	if (checker(year, 4) && checker(month, 2) && checker(day, 2)) {
		date = `${month}-${day}-${year}`;
		if (dateComparisonTest(date, new Date().toLocaleDateString())) {
			return true;
		}
	}
	return false;
	function checker(num, len) {
		if (isNaN(Number(num)) || num.length !== len) {
			return false;
		}
		return true;
	}
}

function dateComparisonTest(endDate, today) {
	endDate = addZeroesAndSplit(endDate);
	endDate = endDate.join('/');
	today = addZeroesAndSplit(today);
	today = today.join('/');
	let numbers1 = [];
	let numbers2 = [];
	let regex = /\d\d/;
	let testRegex = /(\d\d\d\d)$/;
	let num1 = testRegex.exec(endDate);
	let num2 = testRegex.exec(today);

	endDate = testDate(num1, endDate);
	today = testDate(num2, today);

	[ numbers1, endDate ] = getNumbers(endDate);
	[ numbers2, today ] = getNumbers(today);

	let number1 = addUpNumbers(numbers1);
	let number2 = addUpNumbers(numbers2);

	const result = number1 - number2;

	return result > 0 ? true : false;

	function testDate(num, date) {
		if (num) {
			let num = /\d\d$/.exec(date);
			return date.replace(testRegex, num[0]);
		}
		return date;
	}
	function getNumbers(date) {
		let numbers = [];
		for (let i = 0; i < 3; i++) {
			let found = regex.exec(date);
			try {
				numbers.push(found[0]);
			} catch (error) {
				console.log(date);
				throw new Error(date);
			}
			date = date.replace(regex, '');
		}
		return [ numbers, date ];
	}
	function addUpNumbers(numbers) {
		numbers = numbers.map((item, id) => {
			if (id > 0) {
				return id === 1 ? item : item + 1000 * id;
			}
			return item + 10;
		});
		numbers.sort((a, b) => a - b);
		let endNumbers = [];
		numbers.map((n) => endNumbers.unshift(n));
		endNumbers = endNumbers.reduce((x, y) => x + y, 0);
		return endNumbers;
	}
}

function dateComparison(endDate, today) {
	let numbers1 = [];
	let numbers2 = [];
	let regex = /\d\d/;
	let testRegex = /(\d\d\d\d)$/;
	let num1 = testRegex.exec(endDate);
	let num2 = testRegex.exec(today);

	endDate = testDate(num1, endDate);
	today = testDate(num2, today);

	[ numbers1, endDate ] = getNumbers(endDate);
	[ numbers2, today ] = getNumbers(today);

	let number1 = addUpNumbers(numbers1);
	let number2 = addUpNumbers(numbers2);

	const result = number1 - number2;

	return result > 0 ? true : false;

	function testDate(num, date) {
		if (num) {
			let num = /\d\d$/.exec(date);
			return date.replace(testRegex, num[0]);
		}
		return date;
	}
	function getNumbers(date) {
		let numbers = [];
		for (let i = 0; i < 3; i++) {
			let found = regex.exec(date);
			numbers.push(found[0]);
			date = date.replace(regex, '');
		}
		return [ numbers, date ];
	}
	function addUpNumbers(numbers) {
		numbers = numbers.map((item, id) => {
			if (id > 0) {
				return id === 1 ? item + 10 * id : item + 1000 * id;
			}
			return item;
		});
		let endNumbers = [];
		numbers.map((n) => endNumbers.unshift(n));
		endNumbers = endNumbers.reduce((x, y) => x + y, 0);
		return endNumbers;
	}
}

function addZeroesAndSplit(day) {
	day = day.split('/');
	day = day.map((date) => (date.length < 2 ? '0' + date : date));

	return day;
}
export default dateComparisonTest;
export { dateChecker };
