import MobileNotificationBar from "./MobileNotificationBar";
import MobileMenu from "./MobileMenu";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <MobileNotificationBar className="lg:hidden" />

      <div className="lg:flex">
        <Sidebar className="hidden" />

        <main className="sm:px-5 md:px-10 md:py-1 lg:p-0 h-[calc(100vh-110px)] lg:h-auto overflow-auto lg:flex lg:justify-between lg:w-full">
          {children}
        </main>
      </div>

      <MobileMenu className="lg:hidden" />
    </>
  );
};

export default Layout;
