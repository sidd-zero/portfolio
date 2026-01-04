function Resume() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/siddharth resume ta.pdf';
    link.download = 'Siddharth_Dwivedi_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="resume">
      <div className="resume-content">
        <h3>Resume</h3>
        <button className="resume-btn" onClick={handleDownload}>
          DOWNLOAD
        </button>
      </div>
    </section>
  );
}

export default Resume;

