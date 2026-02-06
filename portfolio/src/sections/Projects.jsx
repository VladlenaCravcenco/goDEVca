import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { client } from "../sanityClient";
import "/src/Projects.css";

export default function Projects() {
  const [folders, setFolders] = useState([]);
  const [openFolderId, setOpenFolderId] = useState(null);

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    client
      .fetch(`*[_type == "folder"] | order(year desc, sortOrder asc) {
        _id, title, year, color, stickerText,
        "works": *[_type == "work" && references(^._id)] {
          _id, title, caption, link, "imageUrl": image.asset->url
        }
      }`)
      .then(setFolders);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => setIsVisible(e.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) io.observe(sectionRef.current);
    return () => io.disconnect();
  }, []);

  const openFolder = useMemo(
    () => folders.find((f) => f._id === openFolderId),
    [folders, openFolderId]
  );

  return (
    <section ref={sectionRef} className="projects">
      <h2 className="projects-title">Projects</h2>

      <div className="folders-grid">
        {folders.map((folder, i) => (
          <FolderCard
            key={folder._id}
            folder={folder}
            bounce={!isVisible && !openFolderId}
            delay={i * 0.1}
            onOpen={() => setOpenFolderId(folder._id)}
          />
        ))}
      </div>

      <AnimatePresence>
        {openFolder && (
          <motion.div
            className="folder-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="overlay-bg"
              onClick={() => setOpenFolderId(null)}
            />

            <motion.div
              className="folder-modal"
              initial={{ y: 30, scale: 0.96 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 30, scale: 0.96 }}
            >
              <div className="folder-header">
                <div>
                  <span>{openFolder.year}</span>
                  <h3>{openFolder.title}</h3>
                </div>

                <button onClick={() => setOpenFolderId(null)}>
                  Close
                </button>
              </div>

              <div className="works-grid">
                {openFolder.works.map((w) => (
                  <motion.a
                    key={w._id}
                    href={w.link || "#"}
                    className="work-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <img src={w.imageUrl} alt={w.title || ""} />
                    {w.title && <p>{w.title}</p>}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function FolderCard({ folder, onOpen, bounce, delay }) {
  return (
    <motion.button
      className="folder-card"
      onClick={onOpen}
      animate={bounce ? { y: [0, -12, 0] } : { y: 0 }}
      transition={
        bounce
          ? { duration: 1.4, repeat: Infinity, delay }
          : { duration: 0.2 }
      }
      style={{ background: folder.color }}
    >
      <div className="folder-label">
        <span>{folder.year}</span>
        <strong>{folder.stickerText || folder.title}</strong>
      </div>

      <div className="folder-count">
        {folder.works?.length || 0}
      </div>
    </motion.button>
  );
}