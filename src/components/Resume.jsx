function Resume() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Siddharth_Resume.pdf';
    link.download = 'Siddharth_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="resume-section" id="resume">
      <h2 className="resume-headline sr">
        Want the<br /><em>full picture?</em>
      </h2>
      <p className="resume-desc sr sr-d1">
        Download my resume for a complete overview of my background,
        education, skills and experience.
      </p>
      <div className="sr sr-d2">
        <button className="hero-link-btn primary" onClick={handleDownload}>
          Download Resume
        </button>
      </div>
    </section>
  );
}

export default Resume;
