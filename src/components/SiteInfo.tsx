import { siteInfo } from "../utils/siteData";
const SiteInfo = () => {
  return (
    <section
      data-name="company-info"
      className="flex gap-16 place-items-center text-slate-900 px-8 py-12"
    >
      {siteInfo.map((info, i) => (
        <div
          key={i}
          data-name={info.dataName}
          className={`bg-slate-100 flex-1 relative rounded-md p-8 flex flex-col gap-4 ${
            i == 0 ? "self-start" : i == 1 ? "self-center" : "self-end"
          } items-start h-80`}
        >
          {info.icon}
          <h1 className="text-4xl">{info.title}</h1>
          <p>{info.paragraph}</p>
        </div>
      ))}
    </section>
  );
};

export default SiteInfo;
