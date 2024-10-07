'use client';

import Navbar from './components/Navbar';
import react,{ useState, useEffect, useRef } from 'react';

import './globals.css';

interface MousePosition {
	x: number;
	y: number;
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	
	

		const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
		const pointerEventsRef = useRef<HTMLDivElement>(null);
	
		useEffect(() => {
			const handleMouseMove = (e: MouseEvent) => {
				setMousePosition({ x: e.clientX, y: e.clientY });
			};
	
			document.addEventListener('mousemove', handleMouseMove);
	
			return () => {
				document.removeEventListener('mousemove', handleMouseMove);
			};
		}, []);

	return (
		<html lang='en'>
			
			<body className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-200 selection:text-teal-900">
			<div className="relative min-h-screen">
      {/* Pointer effects background */}
      <div
        id="pointer-events"
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.25), transparent 80%)`,
        }}
        ref={pointerEventsRef}
      />

      {/* Content */}
      <div className="relative flex ">
       
        <div className="mx-auto min-h-screen max-w-screen-2xl px-2 py-12 font-sans md:px-4 md:py-20 lg:px-6 lg:py-0">
          <div className="lg:flex lg:justify-between lg:gap-4">
					<Navbar />
            {children}
          </div>
        </div>
      </div>
    </div>
    </body>
    </html>
	);
}
