import ProductFilters from "./ProductFilters";
import Recommended from "./Recommended";
import SiteInfo from "./SiteInfo";

const MainHome = () => {
  return (
    <main className="grid grid-rows-3 gap-24 justify-center py-16 px-4 2xl:px-24 xl:px-16">
      <Recommended />
      <ProductFilters />
      <SiteInfo />
    </main>
  );
};

export default MainHome;
