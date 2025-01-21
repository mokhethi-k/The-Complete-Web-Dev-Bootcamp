import generateName from 'sillyName';
import {randomSuperhero} from 'superheroes';

const myName = generateName();

console.log(`My silly name is ${myName}`);

const mySuperHeroName = randomSuperhero();

console.log(`My random super hero name is ${mySuperHeroName}`);