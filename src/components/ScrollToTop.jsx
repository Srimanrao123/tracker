import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Ensures product and other non-home routes open at the top of the page.
 */
export function ScrollToTop() {
  const location = useLocation();

  useLayoutEffect(() => {
    if (location.pathname !== '/') {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  }, [location.pathname]);

  return null;
}
