import React, { useState, createContext } from 'react';

const defaultUrl = 'https://qa-app.over-haul.com/wb/dashboard';
const defaultPortal = 'qa-app';

export interface EnvService {
  url: string,
  portal: string,
  update: (value: string) => void
}


export const EnvContext = createContext<EnvService>({
  url: defaultUrl,
  portal: defaultPortal,
  update: (_) => { }
});

interface Props {
  children: React.ReactNode
}
export const EnvProvider = (props: Props) => {
  const [value, setValue] = useState(defaultUrl)
  const [portal, setPortal] = useState(defaultPortal)

  const update = (newPortal: string) => {
    setPortal(newPortal);
    setValue(`https://${newPortal}.over-haul.com/wb/dashboard`);
  }

  return <EnvContext.Provider value={{
    url: value,
    portal: portal,
    update: update,
  }}>{props.children}</EnvContext.Provider>;
};