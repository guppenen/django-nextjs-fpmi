import ProjectDetails from '../../components/ProjectDetails';
import datasource from '../../datalayer';
import { useState, useEffect } from 'react';

const ProjectPage = ({ project }) => {

  useEffect(() => {
  }, []);

  return <ProjectDetails project={project} />;

};

export default ProjectPage;

export const getStaticPaths = async () => {
  const slugs = await datasource.getProjectSlugs();
  const paths = slugs.map((slug) => ({ params: { slug: String(slug) } }));

  return {
    paths,
    fallback: true,
  };
};


export const getStaticProps = async ({ params }) => {
  const slug = params.slug;
  const project = await datasource.getProjectBySlug(slug);
  
  if (!project) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  return {
    props: {
      project,
    },
    revalidate: 5,
  };

};

