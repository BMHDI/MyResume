document.getElementById('downloadButton').addEventListener('click', function() {
  const element = document.getElementById('resume-content');
  const opt = {
      margin: 10,
      filename: 'tarik-boumehdi-resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 1 }, // Adjusted scale for text clarity
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  html2pdf()
      .from(element)
      .set(opt)
      .save();
});
