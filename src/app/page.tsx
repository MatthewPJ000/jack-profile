import About from './components/MyProfilePic';
import Products from './components/products';
import Contact from './components/Contact';
import Skills from './components/skill-set';
import Certifications from './components/Certificate';
import ParticlesPage from './three/particle'

export const revalidate = process.env.REVALIDATE_TIME;

export default function Home() {
	return (
		<div className='pt-24 lg:w-3/5 lg:py-24 relative'>
			<ParticlesPage />
			
			<About />	
			<Skills />
			<Products />
			<Certifications />
			<Contact />
		
		</div>
	);
}
