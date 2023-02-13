import emoji from "react-easy-emoji";

export const greetings = {
	name: "John Hernandez",
	title: "Hi all, I'm John",
	description1: "❤️ I'm John.",
	description2: "Innovative, task-driven professional with 10+ years of experience in web development across diverse industries.",
	description3: "Creative web developer dedicated to developing and optimizing interactive, user-friendly and feature-rich websites.",
	description4: "Certified Technician that operates well in team environments in which technology expertise, extensive analytical skills, and strong problem solving abilities are key to success",
	resumeLink:
		"https://bit.ly/3UF6kgN",
};

export const openSource = {
	githubUserName: "KingTiger001",
};

export const contact = {};

export const socialLinks = {
	phone_number: '123',
	email: 'hernandez.john0014@gmail.com',
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"CRAZY CODE MONSTER WHO IS TRYING TO HELP YOU",
	data: [
		{
			title: "Programming Languages",
			lottieAnimationFile: "/lottie/skills/machine_learning.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Experience in developing RESTful or SOAP API."
				),
				emoji(
					"⚡	Experience in developing in user-friendly websites."
				),
				emoji(
					"⚡ Experience of creating robust and solid server."
				)
			],
			softwareSkills: [
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: 'TypeScript',
					fontAwesomeClassname: "vscode-icons:folder-type-typescript-opened"
				},
				{
					skillName: "Python",
					fontAwesomeClassname: "logos:python",
				},
				{
					skillName: 'PHP',
					fontAwesomeClassname: 'logos:php',
				},
				{
					skillName: "Svelte",
					fontAwesomeClassname: "logos:svelte-icon",
				},
				{
					skillName: "HTML-5",
					fontAwesomeClassname: "vscode-icons:file-type-html",
				},
				{
					skillName: "CSS-3",
					fontAwesomeClassname: "vscode-icons:file-type-css",
				},
			],
		},
		{
			title: "Frameworks",
			lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Building responsive Single-Page-Apps (SPA) & PWA"
				),
				emoji("⚡ Building responsive Dynamic websites"),
				emoji(
					"⚡ Building RESTful and SOAP APIs"
				),
			],
			softwareSkills: [
				
				{
					skillName: "React",
					fontAwesomeClassname: "vscode-icons:file-type-reactjs",
				},
				{
					skillName: "Nextjs",
					fontAwesomeClassname: "vscode-icons:file-type-light-next",
				},
				{
					skillName: "Angular",
					fontAwesomeClassname: "logos:angular-icon",
				},
				{
					skillName: "Vue",
					fontAwesomeClassname: "skill-icons:vuejs-dark",
				},
				{
					skillName: "Node",
					fontAwesomeClassname: "vscode-icons:file-type-node2",
				},
				{
					skillName: "Laravel",
					fontAwesomeClassname: "logos:laravel",
				},
				{
					skillName: "Django",
					fontAwesomeClassname: "vscode-icons:file-type-django",
				},

				{
					skillName: "Ruby on Rails",
					fontAwesomeClassname: "vscode-icons:file-type-rails",
				},
				{
					skillName: "D3.js",
					fontAwesomeClassname: "logos:d3",
				},
				{
					skillName: "Bootstrap",
					fontAwesomeClassname: "skill-icons:bootstrap",
				},
				{
					skillName: "Tailwind CSS",
					fontAwesomeClassname: "skill-icons:tailwindcss-light",
				},
			],
		},
		{
			title: "Services",
			lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
			skills: [
				emoji("⚡ Experience of working on multiple cloud platforms"),
				emoji(
					"⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases"
				),
				emoji(
					"⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions"
				),
			],
			softwareSkills: [
				// ? Check README To get icon details
				{
					skillName: "AWS",
					fontAwesomeClassname: "logos:aws",
				},
				{
					skillName: "Azure",
					fontAwesomeClassname: "logos:microsoft-azure",
				},
				{
					skillName: 'Digital Ocean',
					fontAwesomeClassname: "logos:digital-ocean",
				},
				{
					skillName: "Heroku",
					fontAwesomeClassname: "logos:heroku-icon",
				},
				{
					skillName: "PostgreSQL",
					fontAwesomeClassname: "logos:postgresql",
				},
				{
					skillName: "MySQL",
					fontAwesomeClassname: "logos:mysql-icon"
				},
				{
					skillName: "Docker",
					fontAwesomeClassname: "logos:docker-icon",
				},
				{
					skillName: "MongoDB",
					fontAwesomeClassname: "logos:mongodb-icon",
				},
				{
					skillName: 'Firebase',
					fontAwesomeClassname: 'vscode-icons:file-type-light-firebasehosting'
				},
				{
					skillName: 'API Gateway',
					fontAwesomeClassname: 'logos:aws-api-gateway'
				}
			],
		},
		{
			title: "Tools",
			lottieAnimationFile: "/lottie/skills/business-team.json", // Path of Lottie Animation JSON File
			skills: [
				emoji("⚡ Experience of working on multiple cloud platforms"),
				emoji(
					"⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases"
				),
				emoji(
					"⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions"
				),
			],
			softwareSkills: [
				{
					skillName: 'JEST',
					fontAwesomeClassname: 'vscode-icons:file-type-jest'
				},
				{
					skillName: 'Mocha',
					fontAwesomeClassname: 'logos:mocha'
				},
				{
					skillName: 'Git',
					fontAwesomeClassname: 'akar-icons:github-fill'
				},
				{
					skillName: 'Trello',
					fontAwesomeClassname: 'logos:trello'
				},
				{
					skillName: 'JIRA',
					fontAwesomeClassname: 'logos:jira'
				},
				{
					skillName: 'Slack',
					fontAwesomeClassname: 'logos:slack-icon'
				}
			]
		}
		
	],
};

export const SkillBars = [
	{
		Stack: "Architecture",
		progressPercentage: "100",
	},
	{
		Stack: "Frontend", //Insert stack or technology you have experience in
		progressPercentage: "95", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "100",
	},
	{
		Stack: "Cloud Service",
		progressPercentage: "90",
	},
	{
		Stack: "Data Visualization",
		progressPercentage: "90",
	},
	{
		Stack: "Database",
		progressPercentage: "95",
	},
];

export const educationInfo = [
	{
		schoolName: "Lovely Professional University",
		subHeader: "Bachelors of Computer Science",
		duration: "April 2008 - March 2012",
		desc: "Participated in the various coding contest and published a paper.",
		grade: "Grade A",
		descBullets: [
			"I am currently pursuing minor in Machine Learning.",
			"I have also studied DBMS, OS, Computer Networks and other computer science fundamentals.",
		],
	},
];

export const experience = [
	{
		role: "Machine Learning Engineer",
		company: "Omdena",
		companylogo: "/img/icons/common/omdena.png",
		date: "Sept 2021 – Jul 2022",
		desc: "I worked as Machine Learning Engineer to design and create the AI algorithms capable of learning and making predictions. I worked here as a type and contributed myself as a enthusiastic ML Developer.",
		descBullets: [
			"Improved accuracy of the model from 82 percent to 91 percent in the career recommendation model.",
			"Formulated an AutoML pipeline to automatically search for the best neural model for Natural Language Processing tasks.",
			"Analyzed factors contributing to homelessness in Texas and proposed a solution for homelessness.",
			"Took the charge of developing an image augmentation pipeline for school image datasets.",
		],
	},
	{
		role: "Junior Machine Learning Engineer",
		company: "iNeuron.ai",
		companylogo: "/img/icons/common/ineuron.jpg",
		date: "Jul 2021 – Sep 2021",
		descBullets: [
			"Developed a solution that should be able to predict whether the mushroom is poisonous or edible.",
			"Created a web app for the visualization of drug activity using streamlit.",
		],
	},
	{
		role: "Open Source Collaborator",
		company: "KWOC",
		companylogo: "/img/icons/common/kwoc.png",
		date: "Nov 2021 - Feb 2022",
		desc: "Worked as Open Source Software Developer to create a web app for the analyis, in which I integrated computer vision AI model to process YouTube URLs and show Real Time processing on Website using Django Channels WebSockets , threading for running multiple instances of AI Model, jQuery for UI rendering and deployed it on Heroku server.",
	},
];

export const projects = [
	{
		name: "developer-portfolio",
		desc: "Software Developer Portfolio built with react.js, next.js, typerScript, tailWind CSS and Sanity that helps you showcase your work and skills as a software developer.",
		github: "https://github.com/mohitmishra786/My-Portfolio",
		// link: "https://bit.ly/3AINU77",
	},
	{
		name: "Tea-Quality Predictor",
		desc: "I developed a detector and classifier model which will detect the correct image and classify its quality and also with that I also developed Flask API and used it for the deployment into Microsoft Azure. I had used AWS for the deployment of the model.",
		github: "https://github.com/mohitmishra786/Tea-Leaf-Quality",
	},
	{
		name: "Homelessness in Texas",
		desc: "Get hands-on experience in technical skills with Exploratory Data Analysis. This project focuses mainly on the root causes of the increasing Homelessness in Texas. The data has been collected from Texas Homeless Network, Joint Centre for Housing Studies Harvard, Texas Government, Homelessness Information System, GitHub, and Kaggle. We were able to compare how COVID-19 has affected Texas and how the effects of COVID-19 have attributed to the other socio-economic factors of homelessness and homelessness rates.",
		github: "https://github.com/mohitmishra786/Homelessness-in-Texas",
		link: "https://bit.ly/3AINU77",
	},
	{
		name: "Career Recommendation System",
		desc: "In order to make this engine available for students, we created a web application using Flask as the backend. After filling out the form the student clicks on Recommendation to receive the top recommendation from the engine with a probability for each Major Core and with an explanation of the relevant scores fed to the engine. There any many algorithms used, which were built to predict the compatibility to a particular career given a students high school test scores.",
		github: "https://github.com/mohitmishra786/Career-Recommendation-System",
	},
];

export const feedbacks = [
	{
		name: "John Smith",
		feedback:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	},
	{
		name: "John Smith",
		feedback:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	},
];

// See object prototype on SEO.jsx page
export const seoData = {
	title: "Hernandez John",
	description:
		"A passionate and Honest Senior Full Stack Developer.",
	author: "John Hernandez",
	image: "https://avatars.githubusercontent.com/u/71754779?v=4",
	// url: "https://developer-portfolio-1hanzla100.vercel.app",
	keywords: [
		"john",
		"john hernandez",
		"@john0014",
		"KingTiger001",
		"Portfolio",
		"Hernandez Portfolio ",
		"Jon Hernandez Portfolio",
	],
}
