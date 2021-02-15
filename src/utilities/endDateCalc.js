import { FaGalacticSenate } from 'react-icons/fa';

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
export default dateComparison;

let random = [
	{
		title: 'Workout',
		description: 'Every 2 day workout',
		endDate: '14/03/2021',
		creationDate: '15/02/2021',
		id: 'lqqcrZOgQFOVFyiBQW7wd',
		time: 1613348743324,
		undone: 'green'
	},
	{
		title: 'Life Journal Entry',
		description: 'Everyday journal entry, with the most import parts of the day',
		endDate: '14/03/2021',
		creationDate: '15/02/2021',
		id: 'G3HWpoUTwM-T_jCHhor7I',
		time: 1613348799483,
		undone: 'green'
	}
][
	{
		title: '9 Hour Job',
		description: 'Daily work!',
		endDate: '14/03/2021',
		creationDate: '15/02/2021',
		id: 'o-YNUl6pZAlMws147-oMD',
		time: 1613348716089,
		undone: 'grey'
	}
];
