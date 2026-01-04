import Navbar from "../components/Navbar";
import CircularMenu from "../components/CircularMenu";

function ResumePage() {
  return (
    <>
      <Navbar />
      <CircularMenu />
      <main>
        <section id="resume" className="resume-section">
          <h2>Resume</h2>
          <p>Your resume content goes here. You can embed a PDF viewer or link to your resume document.</p>
        </section>
      </main>
    </>
  );
}

export default ResumePage;
