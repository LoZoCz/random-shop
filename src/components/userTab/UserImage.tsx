type UserImageTypes = {
  img: string;
};

const UserImage = ({ img }: UserImageTypes) => {
  return (
    <img
      src={img}
      alt="my profiles image"
      className="w-[6rem] h-[6rem] rounded-full bg-white sm:w-[8rem] sm:h-[8rem]"
    />
  );
};

export default UserImage;
