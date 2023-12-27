import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ItemWrapperSkeletoLoading = () => {
  return (
    <section
      className="grid place-items-center grid-cols-2 gap-6 px-32 py-16"
      style={{ height: "calc(100vh - 7rem)" }}
    >
      <div className="flex justify-center items-center relative">
        <img
          className="rounded-md max-h-[30rem] object-cover bg-slate-300 animate-pulse"
          height={450}
          width={800}
        />
        <div className="bg-slate-300 w-12 aspect-square rounded-full absolute top-1/2 -translate-y-1/2 -left-[4rem] animate-pulse"></div>
        <div className="bg-slate-300 w-12 aspect-square rounded-full absolute top-1/2 -translate-y-1/2 -right-[4rem] animate-pulse"></div>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="h-16 w-[35rem] bg-slate-300 rounded-sm animate-pulse"></h1>
        <p className="h-4 w-32 bg-slate-300 rounded-sm animate-pulse"></p>
        <div>
          <p className="h-8 w-[30rem] bg-slate-300 rounded-sm animate-pulse mb-4"></p>
          <p className="h-8 w-[20rem] bg-slate-300 rounded-sm animate-pulse"></p>
        </div>
        <p className="h-16 w-[10rem] bg-slate-300 rounded-sm animate-pulse"></p>
        <div className="flex justify-between items-center pt-8">
          <div className="flex gap-2 items-center">
            <FontAwesomeIcon
              icon={faStar}
              className="text-md text-yellow-400"
            />{" "}
            <p className="h-7 w-12 bg-slate-300 rounded-sm animate-pulse"></p>
          </div>
          <p className="h-7 w-24 bg-slate-300 rounded-sm animate-pulse"></p>
        </div>
        <div className="w-32 h-10 bg-slate-300 rounded-sm animate-pulse self-center"></div>
      </div>
    </section>
  );
};

export default ItemWrapperSkeletoLoading;
