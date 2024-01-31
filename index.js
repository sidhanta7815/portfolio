function ResumeDownload() {
    var resume_url="";
    var anchor = document.createElement("a");
  anchor.setAttribute("href", resume_url);
  document.body.appendChild(anchor);
  anchor.click();
  anchor.parentNode.removeChild(anchor);
}
