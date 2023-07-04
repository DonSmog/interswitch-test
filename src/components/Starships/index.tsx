import { useGetStarships } from "../../hooks";
import ClipLoader from "react-spinners/ClipLoader";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";

export const StarShips = () => {
  const [search, setSearch] = useState("");
  const [url, setUrl] = useState("https://swapi.dev/api/starships/");
  const [debouncedSearch] = useDebounce(search, 1000);

  const { data, isLoading, refetch } = useGetStarships(url);
  const next = data?.next;
  const previous = data?.previous;
  const count = data?.count;

  useEffect(() => {
    if (!debouncedSearch) return setUrl("https://swapi.dev/api/starships/");
    setUrl(`https://swapi.dev/api/starships/?search=${debouncedSearch}`);
  }, [debouncedSearch]);

  return (
    <div className="flex flex-col items-center py-6 lg:px-32 md:px-12 px-6 gap-10">
      <div className="flex flex-col gap-4 w-full items-center justify-center">
        <h1 className="text-[32px] font-bold text-gray-800">
          Popular Starship
        </h1>
        <input
          className="border border-gray-300 rounded-md bg-white text-primary px-4 py-2 sm:w-1/3 w-[90%] outline-none text-sm"
          placeholder="Search Starship"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center py-10">
          <ClipLoader color="#8d9c37" size={100} />
        </div>
      ) : (
        <>
          {data?.results.length === 0 ? (
            <h1 className="text-primary text-[32px] font-semibold">
              No result found
            </h1>
          ) : (
            <div className="flex gap-10 flex-col w-full items-center justify-center">
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-6 w-full">
                {data?.results.map((starship: any, index: number) => {
                  const { name, model, manufacturer } = starship;

                  return (
                    <div key={index} className="flex flex-col w-full gap-2">
                      <Image
                        src="/assets/starship.jpg"
                        width={`${200}`}
                        height={`${200}`}
                        className="w-full h-auto object-contain hover:transform hover:scale-105 transition-all duration-300 ease-in-out"
                        alt={name}
                      />
                      <h3 className="text-gray-700 font-medium text-md">
                        Name: <b>{name}</b>
                      </h3>
                      <h3 className="text-gray-700 font-medium text-md">
                        Model: <b>{model}</b>
                      </h3>
                      <h3 className="text-gray-700 font-medium text-md">
                        Manufacturer: <b>{manufacturer}</b>
                      </h3>
                    </div>
                  );
                })}
              </div>

              {count > 10 && (
                <div className="flex gap-6 items-center">
                  <button
                    className="bg-primary text-white px-4 py-2 rounded-md disabled:cursor-not-allowed disabled:opacity-50"
                    disabled={!previous}
                    onClick={() => setUrl(previous)}
                  >
                    Previous
                  </button>
                  <button
                    className="bg-primary text-white px-4 py-2 rounded-md disabled:cursor-not-allowed disabled:opacity-50"
                    disabled={!next}
                    onClick={() => setUrl(next)}
                  >
                    Next
                  </button>
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};
