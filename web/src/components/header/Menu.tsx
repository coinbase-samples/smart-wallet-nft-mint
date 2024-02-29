import Navbar from './Navbar';
import NavbarMobile from './NavbarMobile';
import BuildHeader from './BuildHeader';

function Menu() {
  return (
    <>
      <BuildHeader className=" py-8 md:hidden" />
      {/* <div className="z-10 mt-4 h-[72px] md:hidden">
        <NavbarMobile />
      </div> */}
      <div className="container z-10 mt-6 h-[72px] md:mt-0 md:block">
        <Navbar />
      </div>
      <BuildHeader className="hidden w-full md:mt-4 md:block" />
    </>
  );
}

export default Menu;
