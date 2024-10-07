
export default function Skills(){

  const frontendTechnologies = [
		'Javascript',
		'Typescript',
		'React',
		'Next.js',
		'Gatsby.js',
		'HTML',
		'CSS',
		'Material UI',
		'TailwindCSS',
		'Bootstrap',
		'Chart.js',
		'Three.js',
		'D3.js'
	];

	const mobileTechnologies = [
		'React Native',
		'Xcode',
		'Android Studio',
		'Expo'
	];

	const backendTechnologies = [
		'Micro-services',
		'OOP',
		'GraphQL',
		'Node.js',
		'Express.js',
		'Python',
		'Django',
		'Flask',
		'Restful APIs',
		'3rd Party Integration'
	];

	const toolsAndLibraries = [
		'PostgreSQL',
		'MySQL',
		'MongoDB',
		'AWS',
		'AWS Lambda',
		'AWS EC2',
		'AWS S3',
		'AWS ELB',
		'Google Cloud Platform',
		'Firebase',
		'Docker',
		'Git',
		'Github',
		'Bitbucket',
	];
	
  return(
    <section id="experience" className="mb-16 scroll-mt-16 md:mb-16 lg:mb-30 lg:scroll-mt-24" aria-label="skill sets">
      		<div className="mt-10">
					<h2 className="heading">Skill Sets</h2>
					<div>
			
					<ul className="mt-2 flex flex-wrap" aria-label="Frontend Technologies">
						{frontendTechnologies.map((technology, index) => (
							<li key={index} className="mr-1.5 mt-2">
								<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
									{technology}
								</div>
							</li>
						))}
					</ul>
					
					<ul className="mt-4 flex flex-wrap" aria-label="Mobile Technologies">
						{mobileTechnologies.map((technology, index) => (
							<li key={index} className="mr-1.5 mt-2">
								<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
									{technology}
								</div>
							</li>
						))}
					</ul>
					<ul className="mt-4 flex flex-wrap" aria-label="Backend Technologies">
						{backendTechnologies.map((technology, index) => (
							<li key={index} className="mr-1.5 mt-2">
								<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
									{technology}
								</div>
							</li>
						))}
					</ul>
					<ul className="mt-4 flex flex-wrap" aria-label="Tools and Libraries">
						{toolsAndLibraries.map((tool, index) => (
							<li key={index} className="mr-1.5 mt-2">
								<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
									{tool}
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className="mt-12">
				<a className="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold text-slate-200 group" aria-label="View Full Resume" href="/resume/KirKalarash.pdf" target="_blank"></a>

				<a className="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold text-slate-200 group" aria-label="View Full Resume" href="/matthewJ.pdf" target="_blank">

					<span><span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">View Full </span>
								<span className="whitespace-nowrap"><span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">Resume</span>
						</span>
					</span>
				</a>
			</div>	
    </section>
  );

}
