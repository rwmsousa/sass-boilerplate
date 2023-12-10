import NavDesktop from "../components/navBar/navDesktop";
import NavMobile from "../components/navBar/navMobile";
import useMedia from "../hooks/useMedia";

export default function Layout({ children }) {
  const isMobile = useMedia('(max-width: 768px)');

  return (
    <>
      { isMobile ? <NavMobile /> : <NavDesktop /> }
      <div className="section" style={ { flexDirection: "column" } }>
        { children }
      </div>
    </>
  );
}