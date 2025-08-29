function Card({ img, desc, title, price, visit, rating }) {
  return (
    <>
      <div className="border border-neutral-300 w-[260px]   h-[380px]  p-2 rounded-xl flex flex-col justify-between ">
        <img src={img} className="rounded-xl h-[180px]  object-cover" alt="" />
        <div className="flex justify-between">
          <p className="mt-2 text-xl">{title}</p>
          <span className="m-2 bg-green-500 px-2 rounded-sm">{rating}</span>
        </div>

        <p className="text-sm text-neutral-600">{desc} </p>

        <p className="mt-2 text-sm text-neutral-400">
          {" "}
          When to visit: {visit}{" "}
        </p>

        <div className="  flex justify-between w-full items-center  ">
          <p className="text-m text-neutral-500"> Price: Rs{price}</p>
          <p className="m-2 ">
            {price >= 15000 ? (
              <p className="bg-red-300 text-red-600 px-2  py-1 rounded-sm">
                Expensive
              </p>
            ) : (
              <p className="bg-green-300 text-green-600 px-2  py-1 rounded-sm">
                Cheaper
              </p>
            )}
          </p>
        </div>
      </div>
    </>
  );
}

export default Card;
