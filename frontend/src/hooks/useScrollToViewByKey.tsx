import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollToViewByKey = (idPrefixName?: string, paramsKey?: string) => {
  const { search } = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(search);
    const key = params.get(paramsKey || "id");

    if (key) {
      const elm = document.querySelector(
        `#${idPrefixName ? idPrefixName : ""}${key}`
      );
      if (elm) {
        elm.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [search, paramsKey, idPrefixName]);
};

export default useScrollToViewByKey;
