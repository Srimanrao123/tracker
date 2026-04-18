/**
 * Scroll to a section on the home page. "home" scrolls to the top of the window.
 */
export function scrollToSectionId(sectionId, { behavior = 'smooth' } = {}) {
  if (!sectionId) return;
  const id = String(sectionId).trim();
  if (!id) return;

  if (id === 'home') {
    window.scrollTo({ top: 0, left: 0, behavior });
    return;
  }

  document.getElementById(id)?.scrollIntoView({ behavior, block: 'start' });
}
