import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'halal-hustler',
		color: '#5e95e3',
		description:
			'Halal Hustler is an engaging PC game developed using Unity, inspired by the popular mobile game Crossy Road. In this family-friendly game, players navigate an avatar through a challenging environment filled with various obstacles and hazards, with the objective of reaching the other side safely while achieving the longest survival time for higher scores. This project showcases quick and addictive gameplay mechanics that appeal to players of all ages.',
		shortDescription:
			'Developed a Unity-based PC game inspired by Crossy Road, featuring engaging gameplay and competitive scoring.',
		links: [{ to: 'https://github.com/AnishKanade/Halal-Hustlers', label: 'GitHub' }], // Replace with your actual GitHub link
		logo: Assets.Csharp, // Change to appropriate asset if available
		name: 'Halal Hustler',
		period: {
			from: new Date(2023, 0), // Assuming this is January 2023
			to: new Date(2023, 3) // Assuming this is April 2023
		},
		skills: getSkills('Unity', 'C#', 'game-development'), // Include relevant skills
		type: 'PC Game'
	},
	{
		slug: 'percolation',
		color: 'yellow',
		description:
			'Analyzed and solved complex percolation problems in Java by applying scientific principles to model and study percolation phenomena.',
		shortDescription:
			'Developed a Java application to model percolation and analyze data visualizations.',
		links: [{ to: 'https://github.com/AnishKanade/Percolation', label: 'GitHub' }], // Replace with your actual GitHub link
		logo: Assets.Java,
		name: 'Percolation Model',
		period: {
			from: new Date(2022, 3), // Assuming this is April 2022
			to: new Date(2022, 4) // Assuming this is May 2022
		},
		skills: getSkills('java', 'data-analysis', 'visualization'), // Update skills as appropriate
		type: 'Java Application'
	},
	{
		slug: 'markov-model',
		color: 'darkgreen',
		description:
			'Developed a Python-based first-order Markov model capable of predicting text sequences using probability transition matrices.',
		shortDescription:
			'Created a Markov model in Python for natural language processing.',
		links: [{ to: 'https://github.com/yourusername/markov-model', label: 'GitHub' }], // Replace with your actual GitHub link
		logo: Assets.Python,
		name: 'Markov Model',
		period: {
			from: new Date(2021, 9), // Assuming this is October 2021
			to: new Date(2021, 10) // Assuming this is November 2021
		},
		skills: getSkills('python', 'numpy', 'data-analysis'), // Update skills as appropriate
		type: 'Python Application'
	},
	{
		slug: 'ambient-lights',
		color: 'red',
		description:
			'Designed and implemented a custom ambient lighting system using Arduino microcontrollers.',
		shortDescription:
			'Created an Arduino-based ambient lighting system that adapts to environmental conditions.',
		links: [{ to: 'https://github.com/yourusername/ambient-lights', label: 'GitHub' }], // Replace with your actual GitHub link
		logo: Assets.Unknown, // Change to appropriate asset if available
		name: 'Ambient Lights System',
		period: {
			from: new Date(2021, 0), // January 2021
			to: new Date(2021, 3) // Assuming this is April 2021
		},
		skills: getSkills('arduino microcontrollers', 'c', 'embedded-systems'), // Update skills as appropriate
		type: 'Embedded Systems Project'
	}
];

export const title = 'Projects';
