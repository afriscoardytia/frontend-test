import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Loading } from "../components/Loading";

export const Meals = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [meal, setMeal] = useState([]);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${name}`).then(
      (response) =>
        response
          .json()
          .then((data) => setMeal(data.meals))
          .catch((err) => {
            console.log(err);
          })
          .finally(() => setLoading(false))
    );
  }, [name]);

  useEffect(() => {
    setFiltered(
      meal.filter((meals) =>
        meals.strMeal.toLowerCase().match(search.toLowerCase())
      )
    );
  }, [meal, search]);

  const handleGoToMealsDetail = (id) => {
    navigate(`/foods/${name}/${id}`);
  };

  return (
    <div className="text-justify space-y-9 flex flex-col items-start">
      <h1 className="text-3xl font-black text-center">
        See All The Delicious Foods
      </h1>
      <div>
        <input
          type="text"
          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-700 focus:outline-none
      "
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {loading ? (
        <Loading />
      ) : filtered == 0 && search != "" ? (
        <p className="text-lg">Meal Not Found</p>
      ) : (
        <div className="bg-white grid gap-5 grid-cols-1 md:grid-cols-3 w-full">
          {filtered.map((m) => {
            return (
              <div>
                <div
                  className="cursor-pointer w-full h-36 flex items-center justify-center rounded-lg overflow-hidden p-5 text-center"
                  onClick={() => handleGoToMealsDetail(m.idMeal)}
                  key={m.idMeal}
                  style={{
                    background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${m.strMealThumb})`,
                    backgroundSize: "cover",
                  }}
                >
                  <div className="py-10 flex flex-col space-y-2 text-sm z-20">
                    <span className="font-bold text-white">{m.strMeal}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
