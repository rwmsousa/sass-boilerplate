import Image from 'next/image';
import routes from './navRoutes';
import style from './navDesktop.module.scss';

const NavDesktop = () => (
  <nav className={ style.navDesktop }>
    <span>
      { <Image src='/img/whippet.png' alt={ process.env.DOMAIN_NAME || 'Logo' } width={ 50 } height={ 50 } /> || <h1>{ process.env.DOMAIN_NAME || 'Logo' }</h1> }
    </span>
    <ul>
      { routes.map((route) => {
        const { Icon, href, title } = route;
        return (
          <li>
            <a
              href={ href }>
              <Icon />
              { title }
            </a>
          </li>
        );
      }) }
    </ul>
  </nav>
);

export default NavDesktop;