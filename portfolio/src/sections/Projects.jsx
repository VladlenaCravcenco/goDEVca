import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { client } from "../sanityClient";
import "/src/Projects.css";

/** чтобы ESLint не ругался на motion */
const MotionArticle = motion.article;
const MotionDiv = motion.div;
const MotionButton = motion.button;

export default function Projects() {
  const [folders, setFolders] = useState([]);
  const [activeFolderId, setActiveFolderId] = useState(null);
  const [activeWorkIndex, setActiveWorkIndex] = useState(0);

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "folder"] | order(year desc, sortOrder asc) {
        _id, title, year, color, stickerText,
        "works": *[_type == "work" && references(^._id)] | order(sortOrder asc, _createdAt desc) {
          _id,
          title,
          caption,
          description,
          collabLabel,
          "companyLogoUrl": companyLogo.asset->url,
          "coverImageUrl": image.asset->url,
          media[]{
            _key,
            type,
            alt,
            "imageUrl": image.asset->url,
            "videoUrl": video.asset->url,
            "posterUrl": poster.asset->url
          }
        }
      }`,
      )
      .then((res) => {
        console.log("folders from sanity:", res);
        setFolders(res || []);
        if (res?.[0]?._id) setActiveFolderId(res[0]._id);
        setActiveWorkIndex(0);
      });
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => setIsVisible(e.isIntersecting),
      { threshold: 0.3 },
    );
    if (sectionRef.current) io.observe(sectionRef.current);
    return () => io.disconnect();
  }, []);

  const activeFolder = useMemo(
    () => folders.find((f) => f._id === activeFolderId) || null,
    [folders, activeFolderId],
  );

  const works = activeFolder?.works || [];
  const activeWork = works[activeWorkIndex] || null;

  const canPrev = activeWorkIndex > 0;
  const canNext = activeWorkIndex < works.length - 1;

  function openFolder(folderId) {
    setActiveFolderId(folderId);
    setActiveWorkIndex(0);
  }

  function prevWork() {
    if (!canPrev) return;
    setActiveWorkIndex((i) => i - 1);
  }

  function nextWork() {
    if (!canNext) return;
    setActiveWorkIndex((i) => i + 1);
  }

  return (
    <section ref={sectionRef} className="projects">
      <div className="projects-top">
        <h2 className="projects-title">Design projects</h2>

        <div className="folders-row">
          {folders.map((folder, i) => (
            <FolderPill
              key={folder._id}
              folder={folder}
              active={folder._id === activeFolderId}
              bounce={!isVisible && !activeFolderId}
              delay={i * 0.06}
              onClick={() => openFolder(folder._id)}
            />
          ))}
        </div>
      </div>

      <div className="project-stage">
        <div className="project-nav">
          <button className="nav-btn" onClick={prevWork} disabled={!canPrev}>
            ← Предыдущий
          </button>

          <div className="nav-meta">
            {activeFolder ? (
              <span className="nav-folder">
                {activeFolder.title}
                {activeFolder.year ? ` · ${activeFolder.year}` : ""}
              </span>
            ) : null}
            {works.length ? (
              <span className="nav-count">
                {activeWorkIndex + 1} / {works.length}
              </span>
            ) : null}
          </div>

          <button className="nav-btn" onClick={nextWork} disabled={!canNext}>
            Следующий →
          </button>
        </div>

        <AnimatePresence mode="wait">
          {activeWork ? (
            <MotionArticle
              key={activeWork._id}
              className="project"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.25 }}
            >
              <div className="project-head">
                <div className="project-head__left">
                  <h1 className="project-title">
                    {activeWork.title || "Untitled project"}
                  </h1>

                  {activeWork.collabLabel ? (
                    <span className="project-collab">
                      {activeWork.collabLabel}
                    </span>
                  ) : null}
                </div>

                <div className="project-head__right">
                  {activeWork.companyLogoUrl ? (
                    <img
                      className="project-logo"
                      src={activeWork.companyLogoUrl}
                      alt="Company logo"
                      loading="lazy"
                    />
                  ) : null}
                </div>
              </div>

              {(activeWork.description || activeWork.caption) && (
                <p className="project-desc">
                  {activeWork.description || activeWork.caption}
                </p>
              )}

              <MediaMasonry work={activeWork} />
            </MotionArticle>
          ) : (
            <MotionDiv
              key="empty"
              className="project-empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              Пока нет проектов в этой категории.
            </MotionDiv>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function FolderPill({ folder, active, onClick, bounce, delay }) {
  return (
    <MotionButton
      className={`folder-pill ${active ? "is-active" : ""}`}
      onClick={onClick}
      animate={bounce ? { y: [0, -6, 0] } : { y: 0 }}
      transition={
        bounce ? { duration: 1.2, repeat: Infinity, delay } : { duration: 0.15 }
      }
      style={
        active ? { background: folder.color || "#111", color: "#fff" } : {}
      }
    >
      <strong>{folder.stickerText || folder.title}</strong>
      {folder.year ? <span className="pill-year">{folder.year}</span> : null}
    </MotionButton>
  );
}

function MediaMasonry({ work }) {
  const hasMediaArray = Array.isArray(work.media) && work.media.length > 0;

  const items = hasMediaArray
    ? work.media
        .map((m) => {
          if (m?.videoUrl) {
            return {
              key: m._key,
              kind: "video",
              src: m.videoUrl,
              poster: m.posterUrl,
            };
          }
          if (m?.imageUrl) {
            return {
              key: m._key,
              kind: "image",
              src: m.imageUrl,
              alt: m.alt || work.title || "",
            };
          }
          return null;
        })
        .filter(Boolean)
    : work.coverImageUrl
      ? [
          {
            key: "cover",
            kind: "image",
            src: work.coverImageUrl,
            alt: work.title || "",
          },
        ]
      : [];

  return (
    <div className="masonry">
      {items.map((it) => (
        <figure key={it.key} className="masonry-item">
          {it.kind === "image" ? (
            <img
              className="masonry-media"
              src={it.src}
              alt={it.alt || ""}
              loading="lazy"
            />
          ) : (
            <video
              className="masonry-media"
              src={it.src}
              poster={it.poster}
              controls
              playsInline
              preload="metadata"
            />
          )}
        </figure>
      ))}
    </div>
  );
}
