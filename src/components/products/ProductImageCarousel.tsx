import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ProductImageCarouselProps = {
  title: string;
  allImages: string[];
  imageIndex: number;
  setImageIndex: React.Dispatch<React.SetStateAction<number>>;
};

const ProductImageCarousel = ({
  title,
  allImages,
  imageIndex,
  setImageIndex,
}: ProductImageCarouselProps) => {
  const handleImageChange = (direction: "prev" | "next") => {
    setImageIndex((prev) => {
      if (direction === "prev") {
        return prev === 0 ? allImages.length - 1 : prev - 1;
      } else {
        return prev === allImages.length - 1 ? 0 : prev + 1;
      }
    });
  };

  const indicatorImageChange = (index: number) => {
    setImageIndex(index);
  };
  return (
    <div className="imageCarousel">
      <img
        src={allImages[imageIndex]}
        alt={`${title} image`}
        className="rounded-md object-cover shadow-md max-h-[15rem] min-[800px]:max-h-[30rem]"
      />
      <button onClick={() => handleImageChange("prev")} className="btnPrev">
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <button onClick={() => handleImageChange("next")} className="btnNext">
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
      <div className="flex gap-4 items-center absolute -bottom-12 left-1/2 -translate-x-1/2">
        {Array.from({ length: allImages.length }).map((_, i) => (
          <span
            key={i}
            onClick={() => indicatorImageChange(i)}
            className={`${
              i === imageIndex ? "text-sky-400" : "text-slate-400"
            } cursor-pointer text-4xl`}
          >
            •
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProductImageCarousel;
