
const updateHTMLHeader = (title: string, description: string, keywords: string) => {
  window.document.title = title;
  window.document.querySelector('meta[name="description"]')?.setAttribute("content", description);
  window.document.querySelector('meta[name="keywords"]')?.setAttribute("content", keywords);
};

export default updateHTMLHeader;