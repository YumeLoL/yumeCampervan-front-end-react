import { useEffect, useRef, useState } from "react";

const useClickClose = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let handle = (e: any) => {
      if (!menuRef.current?.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handle);

    return () => document.removeEventListener("mousedown", handle);
  }, []);

  return { menuRef, isOpen, setIsOpen };
};

export default useClickClose;
