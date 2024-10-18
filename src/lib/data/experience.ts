import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'research-assistant',
		company: 'University Researcher',
		description: 'Developed a website using Django to facilitate data collection, optimizing the user interface for better engagement and data integrity. Utilized Amazon Mechanical Turk to efficiently gather and annotate user data on facial expressions, ensuring a diverse and representative dataset for model training.Employed advanced neural network architectures, including convolutional neural networks (CNNs) and long short-term memory networks (LSTMs) combined with attention mechanisms. Automated the extraction of facial action units and analyzed temporal patterns to contribute to systems understanding human emotions and behaviors.',
		contract: ContractType.Research,
		type: 'Artificial Intelligence',
		location: 'Boston, MA',
		period: { from: new Date(2023, 3) }, // Assuming this is April 2024
		skills: getSkills('django', 'python', 'aws'), // Skills relevant to the research role
		name: 'Research Assistant',
		color: 'red',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Developed a website for data collection and optimized user interface.'},
	{
		slug: 'orientation-leader',
		company: 'University Student Leader',
		description: 'Coordinated and executed large-scale orientation events for over 300 students, including campus tours, welcome activities, and informational sessions, to ensure a comprehensive introduction to campus life. Provided personalized mentorship to over 250 new students, offering tailored advice on academic planning, time management strategies, and opportunities for campus involvement to facilitate a successful start. Enhanced student engagement and integration through dynamic workshops, team-building exercises, and interactive sessions, actively encouraging participation and fostering a sense of community.',
		contract: ContractType.PartTime, // Assuming part-time contract for the role
		type: 'Student Leadership',
		location: 'Boston, MA',
		period: { from: new Date(2022, 4), to: new Date(2022, 7) }, // May 2022 to August 2022
		skills: getSkills('leadership', 'teamwork'), // Skills relevant to the orientation leader role
		name: 'Orientation Leader',
		color: 'blue',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Coordinated orientation events for new students.'},
	/*{
		slug: 'software-freelance-junior',
		company: 'Self-employed',
		description: 'Creating awesome applications for customers.',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date(2022, 0, 1), to: new Date() },
		skills: getSkills('css', 'html', 'js'),
		name: 'Junior Freelancer',
		color: 'green',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Creating awesome applications for customers.'
	}*/
];

export const title = 'Experience';
