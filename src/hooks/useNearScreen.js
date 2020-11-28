import { useState, useEffect, useRef} from "react";

const useNearScreen = ({externalRef, distance} = {}) => {
  const [once, setOnce] = useState(true)
  const elementRef = useRef();
  const [show, setShow] = useState(false);
  useEffect(() => {
    let observer;

    const element = externalRef ? externalRef.current : elementRef.current;
    const onChange = (entries, observer) => {
      const element = entries[0];
      if (element.isIntersecting) {
        setShow(true);
        once && observer.disconnect();
      }else {
        !once && setShow(false);
      }
    };
    observer = new IntersectionObserver(onChange, {
      rootMargin: distance ? distance : '100px',
    });
    if (element) observer.observe(element)
    return () => observer && observer.disconnect();
  });
  return { show, elementRef, setOnce};
};

export default useNearScreen;
