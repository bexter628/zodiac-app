document.addEventListener('DOMContentLoaded', () => {

	const html = document.getElementsByTagName('html');

	const name = document.getElementById('name');
	const description = document.getElementById('description');
	const adjectives = document.getElementById('adjectives');
	const dates = document.getElementById('dates');

	const submitButton = document.getElementById('submit');
	const resetButton = document.getElementById('reset');

	const resultDiv = document.getElementById('result');
	const formDiv = document.getElementById('form');

	const select = document.getElementById('day');

	for (let i = 0; i < 31; i++) {
		const option = document.createElement("option");
		option.text = i + 1;
		option.value = option.text.toString();
		select.appendChild(option);
	}

	const signs = [
		{name:'capricorn ♑', element: 'earth', dates: 'December 22 – January 19', adjectives: 'practical, ambitions, disciplined, dedicated, careful, patient, reserved', description: 'Capricorn is the 10th sign of the Zodiac and is associated with hard work and business affairs. Individuals born under this sign are thought to have an ambitious, modest, patient, responsible, stable, trustworthy, powerful, intellectual, perspicacious, and persistent character. They are also prone to coldness, conservatism, rigidity, materialism, and dullness.'},
		{name:'aquarius ♒', element: 'air', dates: 'January 20 – February 18', adjectives: 'humanitarian, innovative, progressive, independent, intellectual, contrary, unpredictable', description: 'Aquarius is the 11th sign of the Zodiac and is associated with future ideas and the unusual. Individuals born under this sign are thought to have a modest, creative, challenging, inquisitive, entertaining, progressive, stimulating, nocturnal, and independent character. They are also prone to rebelliousness, coldness, erraticism, indecisiveness, and impracticality.'},
		{name:'pisces ♓', element: 'water', dates: 'February 19 – March 20', adjectives: 'imagninative, sensitive, compassionate, selfless, empathetic, escapist, secretive', description: 'Pisces is the 12th and last sign of the Zodiac and is associated with human emotions. Individuals born under this sign are thought to be tolerant, modest, dreamy, romantic, humorous, generous, emotional, receptive, and affectionate. They are thought to have an honest character. But they are also prone to exaggeration, fickleness, passiveness, hypersensitivity, and paranoia.'},
		{name:'aries ♈', element: 'fire', dates: 'March 21 – April 19', adjectives:'adventurous, energetic, courageous, competitive, confident, impulsive, impatient', description: 'Aries is the first sign of the Zodiac. It is associated with fresh vigor and new beginnings. Individuals born under this sign are said to have an enthusiastic, adventurous, and passionate character. They are usually ambitious, humorous, and pioneering. On the less positive side, they are also said to be prone to selfishness, boastfulness, intolerance, impulsiveness, and impatience.'},
		{name:'taurus ♉', element: 'earth', dates: 'April 20 – May 20', adjectives: 'patient, reliable, warmhearted, loving, persistent, jealous, self-indulgent', description: 'Taurus is the second sign of the Zodiac and is associated with material pleasure. Individuals born under this sign are thought to have a calm, patient, reliable, loyal, affectionate, sensuous, ambitious, and determined character. They are also prone to hedonism, laziness, inflexibility, jealousy, and antipathy.'},
		{name:'gemini ♊', element: 'air', dates: 'May 21 – June 20', adjectives: 'witty, charismatic, intellectual, spontaneous, superficial, nervous, unpredictable', description: 'Gemini is the third sign of the Zodiac and is associated with youth and versatility. Individuals born under this sign are thought to have a sociable, fun-loving, versatile, lively, communicative, liberal, intelligent, mentally active, and friendly character. They are also thought to be prone to moodiness, inconsistency, superficiality, restlessness, and laziness.'},
		{name:'cancer ♋', element: 'water', dates: 'June 21 – July 22', adjectives: 'intuitive, imaginative, cautious, loyal, protective, sympathetic, moody, emotional', description: 'Cancer is the fourth sign of the Zodiac. It is associated with family and domesticity. Individuals born under this sign are thought to have a kind, emotional, romantic, imaginative, sympathetic, nurturing, and intuitive character. They are also supposed to be prone to changeability, moodiness, hypersensitivity, depression, and clinginess.'},
		{name:'leo ♌', element: 'fire', dates: 'July 23 – August 22', adjectives: 'passionate, loyal, enthusiastic, vivacious, theatrical, dramatic, self-confident', description: 'Leo is the fifth sign of the Zodiac and is associated with the keywords magnanimous, generous, hospitable, authoritative, and active. Leos are typically pictured as very dignified and regal. They are known to be exuberant, extroverted, and have a natural dramatic flair. They are typically very self-assured and love taking center-stage.'},
		{name:'virgo ♍', element: 'earth', dates: 'August 23 – September 22', adjectives: 'logical, practical, reliable, systematic, analytical, critical, perfectionist', description: 'Virgo is the sixth sign of the Zodiac. It is associated with purity and service. Individuals born under this sign are thought to have a diligent, analytical, self-sufficient, controlled, orderly, and modest character. But they are also prone to fussiness, perfectionism, harsh criticism, coldness, and hypochondria.'},
		{name:'libra ♎', element: 'air', dates: 'September 23 – October 22', adjectives: 'diplomatic, just, charming, sociable, peaceable, indecisive, gullible, self-indulgent', description: 'Libra is the seventh sign of the Zodiac. It is associated with justice. Individuals born under this sign are thought to have a pleasant, articulate, charming, social, charismatic character. They are artistic, but they also possess a fair, refined, diplomatic, even-tempered and self-sufficient character. On the negative side, they can be indecisive, lazy, aloof, shallow, or extravagant, impatient, envious, and quarrelsome.'},
		{name:'scorpio ♏', element: 'water', dates: 'October 23 – November 21', adjectives: 'elusive, mysterious, emotional, intuitive, passionate, magnetic, jealous', description: 'Scorpio is the eighth sign of the Zodiac. It is associated with intensity, passion, and power. Individuals born under this sign are thought to have a complex, analytical, patient, keenly perceptive, inquisitive, focused, determined, hypnotic, and self-contained character. They are also prone to extremity, jealousy, envy, secretiveness, possessiveness, cruelty, and cunning.'},
		{name:'sagittarius ♐', element: 'fire', dates: 'November 22 – December 21', adjectives: 'optimistic, free spirited, adventurer, honest, intellectual, irresponsible, restless', description: 'Sagittarius is the ninth sign of the Zodiac. It is associated with travel and expansion. Individuals born under this sign are thought to have a straight-forward, dynamic, highly intelligent, extremely clever, ethical, humorous, generous, open-hearted, compassionate, and energetic character. They are also prone to restlessness, impulsiveness, impatience, and recklessness.'},
	]

	gsap.set(resultDiv, {autoAlpha: 0});

	// ****** for star parallax eventually *******

	// const randomize = (n) => Math.random() * n;
	// const stars = document.getElementById('stars');
	// const stars1 = document.getElementById('stars1');
	// const stars2 = document.getElementById('stars2');

	const getZodiacSign = (day, month) => {
        let sign;

		switch(month) {
			case "december":
				sign = (day < 22) ? signs[11] : signs[0];
			break;
			case "january":
				sign = (day < 20) ? signs[0] : signs[1];
			break;
			case "february":
				sign = (day < 19) ? signs[1] : signs[2];
			break;
			case "march":
				sign = (day < 21) ? signs[2] : signs[3];
			break;
			case "april":
				sign = (day < 20) ? signs[3] : signs[4];
			break;
			case "may":
				sign = (day < 21) ? signs[4] : signs[5];
			break;
			case "june":
				sign = (day < 21) ? signs[5] : signs[6];
			break;
			case "july":
				sign = (day < 23) ? signs[6] : signs[7];
			break;
			case "august":
				sign = (day < 23) ? signs[7] : signs[8];
			break;
			case "september":
				sign = (day < 23) ? signs[8] : signs[9];
			break;
			case "october":
				sign = (day < 23) ? signs[9] : signs[10];
			break;
			case "november":
				sign = (day < 22) ? signs[10] : signs[11];
			break;
		}    
		return sign;
	}
	

	const animateIn = (el1, el2, color) => {
		gsap.fromTo(el1, .5, {autoAlpha: 0, y:30}, {autoAlpha: 1, y:0});
		gsap.to(el2, .2, {autoAlpha: 0});
		gsap.to(html, 1, {background: color});
		
	}

	const animateOut = (el1, el2) => {
		gsap.fromTo(el1, .5, {autoAlpha: 0, y:-30}, {autoAlpha: 1, y:0});
		gsap.to(el2, .2, {autoAlpha: 0});
		gsap.to(html, 1, {background: 'radial-gradient(ellipse at bottom, #221462 0%, #000418 100%)'})
	}
 

	const onSubmit = () => {

		let backgroundGradient;

		let month = document.getElementById('month').value;
		let day = document.getElementById('day').value;
		
		let zodiacSign = getZodiacSign(day, month);
		

		name.innerText = zodiacSign.name.toUpperCase();
		dates.innerText = zodiacSign.dates
		description.innerText = zodiacSign.description
		adjectives.innerText = zodiacSign.adjectives


		if (zodiacSign.element === 'earth') backgroundGradient = 'radial-gradient(ellipse at bottom, #c38354 0%, #5b991e 100%)';
		if (zodiacSign.element === 'water') backgroundGradient = 'radial-gradient(ellipse at bottom, #3fbbaf 0%, #030b6f 100%)';
		if (zodiacSign.element === 'air') backgroundGradient = 'radial-gradient(ellipse at bottom, #749eb0 0%, #8d67a1 100%)';
		if (zodiacSign.element === 'fire') backgroundGradient = 'radial-gradient(ellipse at bottom, #ffbb1f 0%, #e22549 100%)';

		animateIn(resultDiv, formDiv, backgroundGradient);
	}
 
	submitButton.addEventListener('click', () => onSubmit())
	resetButton.addEventListener('click', () => animateOut(formDiv, resultDiv))


  })
