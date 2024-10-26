import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Anish';

export const lastName = 'Kanade';

export const description = `

Hi there! I am currently a Computer Science undergraduate studying at the University of Massachusetts Boston, Class of 2025.
I am passionate about software development, problem-solving, and exploring innovative tech solutions.
I am always eager to learn new technologies and contribute to impactful projects. Check out more about me!`;

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/AnishKanade' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/anish-kanade'
	},
	/*{
		platform: Platform.Twitter,
		link: 'https://twitter.com/'
	},*/
	/*{
		platform: Platform.StackOverflow,
		link: 'https://stackoverflow.com/'
	},*/
	{
		platform: Platform.Email,
		link: 'AnishKanade45@gmail.com'
	},
	/*{
		platform: Platform.Youtube,
		link: 'https://www.youtube.com'
	},/*
	/*{
		platform: Platform.Facebook,
		link: 'https://www.facebook.com'
	}*/
];

export const skills = getSkills('js', 'css', 'html', 'reactjs', 'sass', 'svelte', 'ts');
