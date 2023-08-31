import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProjectData } from "/src/assets/myFiles/ProjectData.jsx";
import { Link } from "react-router-dom";

export default function Project() {
  const [project, setProject] = useState({});

  const params = useParams();
  const projectId = params.projectId;

  const getProject = () => {
    for (let project of ProjectData) {
      if (projectId == project.id) {
        return project;
      }
    }
  };

  useEffect(() => {
    setProject(getProject());
  }, [project]);

  const getBullets = () => {
    return project.projectBullets.map((bullet, index) => (
      <li key={index}>{bullet}</li>
    ));
  };

  const getMoreDetails = () => {
    return project.moreDetail.map((detail, index) => (
      <p key={index}>{detail}</p>
    ));
  };

  const getImages = () => {
    return project.images.map((image, index) => (
      <swiper-slide
        key={index}
        // style={{ display: "flex", justifyContent: "center" }}
      >
        <img src={image} alt={project.projectName} />
      </swiper-slide>
    ));
  };

  return (
    <div className="ProjectDetail">
      <article>
        <section>
          <h1>{project.projectName}</h1>
          <br />
          <p>{project.summary}</p>
          <swiper-container
            slides-per-view="1"
            loop="true"
            css-mode="true"
            navigation="true"
            pagination="true"
          >
            {project.images ? getImages() : <div></div>}
          </swiper-container>
        </section>
        <section>
          {project.projectBullets ? <ul>{getBullets()}</ul> : <div></div>}
        </section>

        <section>
          <h4>More detail</h4>
          <br />
          {project.moreDetail ? getMoreDetails() : <div></div>}
          <h4>Built with</h4>
          <p>{project.stack}</p>

          <div className="ProjectNavButtons">
            <button className="RepoLink outline">
              <a href={project.repolink}>
                <img src="src/assets/images/gh-white-logo.png" alt="" />
              </a>
            </button>

            <button className="outline BackToProjects">
              <Link to="/projects">&#x2303;</Link>
            </button>
          </div>
        </section>
      </article>
    </div>
  );
}
