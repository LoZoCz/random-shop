import ProductFilters from "./ProductFilters";
import Recommended from "./Recommended";
import SiteInfo from "./SiteInfo";

const MainHome = () => {
  return (
    <main className="grid grid-rows-3 gap-24 justify-center main-pad">
      <Recommended />
      <ProductFilters />
      <SiteInfo />
    </main>
  );
};

export default MainHome;
