import styles from './Home.module.css';
import cn from 'classnames';
import { useContext } from 'react';
import { EnvContext } from '../services/EnvContext';


const Button = ({ label, portal }: { label: string, portal: string }) => {
  const envContext = useContext(EnvContext);

  return (
    <button
      className={cn(
        styles.button,
        { [styles.activeButton]: envContext.portal === portal }
      )}
      onClick={() => envContext.update(portal)}
    >
      {label}
    </button>
  );
};


const CustomPortal = () => {
  const envContext = useContext(EnvContext);



  return (
    <div>
      <p>or set custom portal domain <strong>
        https://
        <input
          type="text"
          value={envContext.portal}
          onChange={({ target }) => envContext.update(target.value)}
        />
        .over-haul.com/
      </strong>....
      </p>
    </div>
  );
}

export const Home = () => {
  const envContext = useContext(EnvContext);

  return <div className={styles.container}>
    <h3 className={styles.description}>This is the website for test integration overhaul iframe inside windblade website</h3>
    <h3 className={styles.description}>iframe url will be: <a href={envContext.url}>{envContext.url}</a></h3>
    <div className={styles.buttonbar}>
      <Button
        label='Qa env'
        portal='qa-app'
      />
      <Button
        label='Stage env'
        portal='stage'
      />
      <Button
        label='Prod env'
        portal='app'
      />
    </div>
    <CustomPortal />
  </div >
}