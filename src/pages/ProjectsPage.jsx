import Navbar from "../components/Navbar";
import CircularMenu from "../components/CircularMenu";

function ProjectsPage() {
  return (
    <>
      <Navbar />
      <CircularMenu />
      <main>
        <section id="projects" className="projects">
          <h2>Projects</h2>
          <p>Projects will be listed here.</p>
        </section>
      </main>
    </>
  );
}

export default ProjectsPage;
