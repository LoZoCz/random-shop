const ProductSkeletonLoading = () => {
  return (
    <div className="rounded-md overflow-hidden p-4 border-slate-300 border-2 border-solid h-full product-box">
      <div className="h-3/5 w-full bg-slate-300 rounded-sm animate-pulse" />
      <div className="mt-4 h-2/5">
        <h2 className="h-7 w-32 bg-slate-300 rounded-sm animate-pulse"></h2>
        <p className="mb-3 mt-2 h-4 bg-slate-300 w-20 rounded-sm animate-pulse"></p>
        <p className="h-6 w-16 bg-slate-300 rounded-sm animate-pulse"></p>
      </div>
    </div>
  );
};

export default ProductSkeletonLoading;
