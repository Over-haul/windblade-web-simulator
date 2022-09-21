import { useContext } from "react";
import { EnvContext } from "../services/EnvContext";

export const OverhaulIframe = () => {
  const envContext = useContext(EnvContext);
  return <iframe
    src={envContext.url}
    title='overhaul-iframe'
    id='overhaul-iframe'
    sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
  />
}