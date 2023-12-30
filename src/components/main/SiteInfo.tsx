import { siteInfo } from "../../utils/siteData";
const SiteInfo = () => {
  return (
    <section className="grid gap-16 text-slate-900 px-8 py-12 siteInfoSect">
      {siteInfo.map((info, i) => (
        <div key={i} className="site-info-div">
          {info.icon}
          <h1 className="text-3xl sm:text-4xl">{info.title}</h1>
          <p className="text-sm sm:text-lg">{info.paragraph}</p>
        </div>
      ))}
    </section>
  );
};

export default SiteInfo;
