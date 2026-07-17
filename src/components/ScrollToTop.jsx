import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Source - https://stackoverflow.com/a/79536508
// Posted by Sheikh Wahab Mahmood
// Retrieved 2026-07-17, License - CC BY-SA 4.0
export default function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return null;
}
