import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { client } from "./sanityClient";
import "./Projects.css";

const MotionArticle = motion.article;

export default function ProjectsPage() {
  const [works, setWorks] = useState([]);
  const [activeTag, setActiveTag] = useState("All");

  useEffect(() => {
    client
      .fetch(`*[_type == "work"] | order(year desc, _createdAt desc) {
        _id,
        title,
        year,
        shortDescription,
        tags,

        collab {
          label,
          text,
          "companyLogoUrl": companyLogo.asset->url
        },

        media[]{
          _key,
          type,
          alt,
          layout { colSpan, rowSpan },
          "imageUrl": image.asset->url,
          "videoUrl": video.asset->url,
          "posterUrl": poster.asset->url
        }
      }`)
      .then((res) => setWorks(res || []));
  }, []);

  const allTags = useMemo(() => {
    const set = new Set();
    works.forEach((w) => (w.tags || []).forEach((t) => set.add(t)));
    return ["All", ...Array.from(set)];
  }, [works]);

  const filteredWorks = useMemo(() => {
    if (activeTag === "All") return works;
    return works.filter((w) => (w.tags || []).includes(activeTag));
  }, [works, activeTag]);

  return (
    <section className="dp-page">
      <div className="dp-top">
        <div className="dp-filters">
          {allTags.map((t) => (
            <button
              key={t}
              className={`dp-pill ${activeTag === t ? "is-active" : ""}`}
              onClick={() => setActiveTag(t)}
              type="button"
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="dp-list">
        <AnimatePresence mode="popLayout">
          {filteredWorks.map((work, idx) => (
            <MotionArticle
              key={work._id}
              className="dp-project"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25, delay: Math.min(idx * 0.03, 0.2) }}
            >
              <ProjectHeader work={work} index={idx} />
              <MediaGrid items={work.media || []} />
            </MotionArticle>
          ))}
        </AnimatePresence>

        {!filteredWorks.length && (
          <div className="dp-empty">Пока нет проектов в этой категории.</div>
        )}
      </div>
    </section>
  );
}

function ProjectHeader({ work, index }) {
  return (
    <header className="dp-header">
      <div className="dp-left">
        <span className="dp-miniTag">{work.tags?.[0] || "Project"}</span>

        <h2 className="dp-title">
          {work.title || `Название проекта #${index + 1}`}
          <span className="dp-titleMeta">{work.year ? `/${work.year}` : "/—"}</span>
        </h2>

        {work.shortDescription ? <p className="dp-desc">{work.shortDescription}</p> : null}
      </div>

      <div className="dp-right">
        {work?.collab?.label || work?.collab?.text ? (
          <div className="dp-collab">
            {work?.collab?.companyLogoUrl ? (
              <img
                className="dp-collabLogo"
                src={work.collab.companyLogoUrl}
                alt={work.collab.label || "Company logo"}
                loading="lazy"
              />
            ) : null}

            <div className="dp-collabText">
              {work?.collab?.label ? (
                <strong className="dp-collabTitle">{work.collab.label}</strong>
              ) : null}
              {work?.collab?.text ? <p className="dp-collabSub">{work.collab.text}</p> : null}
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}

function MediaGrid({ items }) {
  const safeItems = Array.isArray(items) ? items : [];

  return (
    <div className="dp-grid">
      {safeItems.map((m) => {
        const colSpan = m?.layout?.colSpan || 4;
        const rowSpan = m?.layout?.rowSpan || 3;

        return (
          <figure
            key={m._key}
            className="dp-cell"
            style={{
              gridColumn: `span ${Math.max(2, Math.min(12, colSpan))}`,
              gridRow: `span ${Math.max(2, Math.min(12, rowSpan))}`,
            }}
          >
            {m.type === "video" && m.videoUrl ? (
              <video
                className="dp-media"
                src={m.videoUrl}
                poster={m.posterUrl}
                controls
                playsInline
                preload="metadata"
              />
            ) : (
              <img className="dp-media" src={m.imageUrl} alt={m.alt || ""} loading="lazy" />
            )}
          </figure>
        );
      })}
    </div>
  );
}