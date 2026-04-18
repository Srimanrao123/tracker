import { Link, useLocation, useNavigate } from 'react-router-dom';
import { scrollToSectionId } from '../lib/scrollToSection';

/**
 * Scroll to a section on the home page. React Router often does not scroll when
 * `Link to="/#products"` is used while already on `/` — this fixes that.
 */
export function HashSectionLink({ sectionId, children, className, onNavigate, ...rest }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (e) => {
    onNavigate?.();

    if (location.pathname === '/') {
      e.preventDefault();
      scrollToSectionId(sectionId);
      navigate({ pathname: '/', hash: sectionId }, { replace: true });
      return;
    }

    e.preventDefault();
    navigate({ pathname: '/', hash: sectionId });
  };

  return (
    <Link
      to={{ pathname: '/', hash: sectionId }}
      onClick={handleClick}
      className={className}
      {...rest}
    >
      {children}
    </Link>
  );
}
