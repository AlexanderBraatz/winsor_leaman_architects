import { styled } from 'styled-components';

export default function Otto(props) {
	let output = 'nothing yet';
	let directory = {
		Pages: {
			About: {
				image1jpeg: 'image1.jpeg',
				image2jpeg: 'image2.jpeg',
				otto: 'otto'
			},
			Contact: {
				imageAjpeg: 'imageA.jpeg',
				imageBjpeg: 'imageB.jpeg'
			},
			imageKjpeg: 'imageK.jpeg'
		},
		imageOjpeg: 'imageO.jpeg'
	};

	//loop over every file ---done
	//check if file ends in jpeg
	//if so copy the name , add a suffix , save it next to the original file
	// console log out how many files have been copied
	// list the ones that have not

	let loopOver = obj => {
		for (let key in obj) {
			if (typeof obj[key] === 'object' && obj[key] !== null) {
				loopOver(obj[key]);
			} else {
				if (/\.jpeg$/i.test(obj[key])) {
					obj[obj[key].replace(/\.jpeg$/i, '_20pxjpeg')] = obj[key].replace(
						/\.jpeg$/i,
						'_20px.jpeg'
					);
				}
			}
		}
	};
	loopOver(directory);
	console.log(directory);
	// console.log(output)n;
	// console.log(Object.keys(direcutmory).length);

	return <Output>see console</Output>;
}

const Output = styled.div`
	width: 100%;
	min-height: 20rem;
	min-width: 20rem;
	height: fit-content;

	padding: 2rem;
	background-color: greenyellow;
	color: black;
	font-size: 2rem;
`;
