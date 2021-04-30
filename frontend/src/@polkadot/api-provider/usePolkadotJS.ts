import { useContext } from "react";
import { Context } from "./PolkadotJSProvider";

const usePolkadotJS = () => useContext(Context);

export default usePolkadotJS;
