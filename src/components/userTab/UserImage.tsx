type UserImageTypes = {
  img: string;
};

const UserImage = ({ img }: UserImageTypes) => {
  return (
    <img
      src={img}
      alt="my profiles image"
      className="w-[8rem] h-[8rem] rounded-full bg-white"
    />
  );
};

export default UserImage;
