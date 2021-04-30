import { useContext } from "react";

import { AppContext } from "../App";

const useAppContext = () => {
  return useContext(AppContext);
};

export default useAppContext;
