import React from 'react';
import { 
  StyledDesktop,
  MobileProjectLayout, 
  ProjectImage, 
  MobileProjectDescription, 
  MobileProjectTitle
} from './projectStyles';
import MobileTechStack from './MobileTechStack';



const Project = ({ fields }) => (
  <MobileProjectLayout>
    <MobileProjectTitle>{fields.title}</MobileProjectTitle>
    <StyledDesktop address={fields.link}>
      <ProjectImage
        src={fields.image.fields.file.url}
        alt={`${fields.title} screenshot`}
      />
    </StyledDesktop>
    <MobileProjectDescription>{fields.description}</MobileProjectDescription>
    <MobileTechStack tech={fields.skills} />
  </MobileProjectLayout>
);

export default function Projects ({projects}) {
  return projects.items.map(project =>
    <Project {...project} key={project.sys.id} />
  )
}

// export default function Projects({projects}) {
//   return <ProjectDisplay projects={projects.items} />;
// }
