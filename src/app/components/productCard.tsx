import React, { FC } from 'react';
import { TbArrowUpRight } from 'react-icons/tb';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  duration:string;
  technologies: string[];
  imageUrl: string;
  imageAlt: string;
  url: string;
}

const ProjectCard: FC<ProjectCardProps> = ({
  title,
  description,
  duration,
  technologies,
  imageUrl,
  imageAlt,
  url,
}) => {
  return (
    <li className="mb-12">
      <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
        <div className="z-10 sm:order-2 sm:col-span-6">
          <h3>
            <a
              className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
              href={url}
              target="_blank"
              rel="noreferrer"
              aria-label={title}
            >
              <span>
                {title}
                <span className="inline-block group-hover/link:transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none">
                  <TbArrowUpRight />
                </span>
              </span>
            </a>
          </h3>
          <p className="mt-2 text-sm leading-normal text-justify">{duration}</p>
          <p className="mt-2 text-sm leading-normal text-justify">{description}</p>
        </div>

        <Image
          alt={imageAlt}
          src={imageUrl}
          width={200}
          height={48}
          className="my-10 rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
          style={{ color: 'transparent' }}
          loading="lazy"
          quality={75}
          sizes="(max-width: 640px) 256px, 640px"
        />
       
      </div>
      <div>
          <ul className="mt-2 flex flex-wrap" aria-label="Frontend Technologies">
            {technologies.map((tech, index) => (
              <li key={index} className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                  {tech}
                </div>
              </li>
            ))}
          </ul>
        </div>
    </li>
  );
};

export default ProjectCard;