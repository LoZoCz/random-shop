import { siteInfo } from "../../utils/siteData";
const SiteInfo = () => {
  // const { scrWidth } = useUserContext();

  return (
    <section className="flex gap-16 place-items-center text-slate-900 px-8 py-12">
      {siteInfo.map((info, i) => (
        <div key={i} className={`site-info-div`}>
          {info.icon}
          <h1 className="text-4xl">{info.title}</h1>
          <p>{info.paragraph}</p>
        </div>
      ))}
    </section>
  );
};

export default SiteInfo;

// TODO 1 przy mneijszej szerkosci ekranu zrob z tego pokaz slajdow, ktory sam sie zmienia po np 3sek
