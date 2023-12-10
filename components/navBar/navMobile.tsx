import { AnimatePresence, motion } from 'framer-motion';
import { Squash as Hamburger } from 'hamburger-react';
import { useEffect, useRef, useState } from 'react';
import { useClickAway } from 'react-use';
import routes from './navRoutes';
import style from './navMobile.module.scss';

const NavMobile = () => {
  const [ isOpen, setOpen ] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  useEffect(() => {
    const hamburger = document.getElementById('hamburgerIcon');

    if(isOpen){
     hamburger.setAttribute('class', 'hamOpen');
    }else{
      hamburger.setAttribute('class', 'hamClose');
    }
  }, [ isOpen ]);
  
  return (
    <nav ref={ ref } className={ style.navMobile }>
      <span id='hamburgerIcon' className={style.hamburger} >
        <Hamburger toggled={ isOpen } size={ 20 } toggle={ setOpen } />
        </span>
      <AnimatePresence>
        { isOpen && (
          <motion.div
            initial={ { opacity: 0 } }
            animate={ { opacity: 1 } }
            exit={ { opacity: 0 } }
            transition={ { duration: 0.2 } }
            className={ style.navMobileMenu}
          >
            <ul>
              { routes.map((route, idx) => {
                const { Icon } = route;

                return (
                  <motion.li
                    initial={ { scale: 0, opacity: 0 } }
                    animate={ { scale: 1, opacity: 1 } }
                    transition={ {
                      type: 'spring',
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + idx / 10,
                    } }
                    key={ route.title }
                  >
                    <a
                      onClick={ () => setOpen((prev) => !prev) }
                      href={ route.href }
                    >
                      <span>{ route.title }</span>
                      <Icon />
                    </a>
                  </motion.li>
                );
              }) }
            </ul>
          </motion.div>
        ) }
      </AnimatePresence>
    </nav>
  );
};

export default NavMobile;