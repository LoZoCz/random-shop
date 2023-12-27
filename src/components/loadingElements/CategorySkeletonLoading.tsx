const CategorySkeletonLoading = () => {
  return (
    <div className="outline outline-2 outline-slate-300 aspect-video grid place-items-center rounded-md relative">
      <div className="w-3/4 aspect-video rounded-lg bg-slate-300 animate-pulse" />
      <h3 className="h-9 w-32 bg-slate-300 rounded-sm animate-pulse"></h3>
    </div>
  );
};

export default CategorySkeletonLoading;
