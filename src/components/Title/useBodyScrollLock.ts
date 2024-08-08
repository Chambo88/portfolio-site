import { useState, useEffect } from "react";

const useBodyScrollLock = (): [boolean, () => void] => {
  const bodyStyle = document.body.style;

  const [isLocked, setIsLocked] = useState<boolean>(true);

  useEffect(() => {
    bodyStyle.overflowY = isLocked ? "hidden" : "auto";
  }, [isLocked, bodyStyle]);

  const unlock = () => setIsLocked(false);

  return [isLocked, unlock];
};

export default useBodyScrollLock;
