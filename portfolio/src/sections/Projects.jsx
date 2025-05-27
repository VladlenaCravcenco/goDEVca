import { useEffect, useState } from 'react';
import { client } from '../sanityClient';

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "project"]{_id,
    title,
    description,
    link,
    images[]{asset->{url}}`)
      .then((data) => setProjects(data))
      .catch(console.error);
  }, []);

  return (
  <section className="p-6 bg-white text-black">
    <h2 className="text-3xl font-bold mb-6">Проекты</h2>
    <div className="space-y-4">
      {projects.map((project) => (
        <div key={project._id} className="p-4 border rounded bg-gray-100">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <p className="text-sm">{project.description}</p>
          {project.images?.[0]?.asset?.url && (
  <img
    src={project.images[0].asset.url}
    alt={project.title || 'Project'}
    className="w-full h-48 object-cover rounded mt-4"
  />
)}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Смотреть проект
            </a>
          )}
        </div>
      ))}
    </div>
  </section>
);
}