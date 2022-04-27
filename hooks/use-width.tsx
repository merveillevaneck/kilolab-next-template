import {useState, useEffect} from 'react';

export const useWidth = () => {
  const [width, setWidth] = useState<number>(768);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const onchange = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', onchange);
    onchange();
    return () => window.removeEventListener('resize', onchange);
  }, [])

  return width;
}