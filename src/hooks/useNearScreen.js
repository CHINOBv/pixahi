import { useState, useEffect, useRef} from "react";

const useNearScreen = () => {
  const elementRef = useRef();
  const [show, setShow] = useState(false);
  useEffect(() => {
    let observer;

    const element = elementRef.current
    const onChange = (entries, observer) => {
      const element = entries[0];
      if (element.isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    };
    observer = new IntersectionObserver(onChange, {
      rootMargin: "100px",
    });
    if (element) observer.observe(element)
    return () => observer.disconnect();
  });
  return { show, elementRef};
};

export default useNearScreen;
