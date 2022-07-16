import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loading } from "../components/Loading";

export const Foods = () => {
  const [ingredients, setIngredients] = useState([]);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list").then(
      (response) =>
        response
          .json()
          .then((data) => setIngredients(data.meals))
          .catch((err) => {
            console.log(err);
          })
          .finally(() => setLoading(false))
    );
  }, []);

  useEffect(() => {
    setFiltered(
      ingredients.filter((ingredient) =>
        ingredient.strIngredient.toLowerCase().match(search.toLowerCase())
      )
    );
  }, [ingredients, search]);

  const handleGoToMeals = (name) => {
    navigate(`/foods/${name}`);
  };

  return (
    <div className="text-justify space-y-9 flex flex-col items-center">
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
        <p className="text-lg">Ingredient Not Found</p>
      ) : (
        <div className="bg-white grid gap-5 grid-cols-1 md:grid-cols-3 w-full">
          {filtered.map((ingr) => {
            return (
              <div
                className="cursor-pointer w-full h-36 flex items-center justify-center rounded-lg text-center p-5 bg-gray-200 overflow-hidden hover:bg-gray-300"
                onClick={() => handleGoToMeals(ingr.strIngredient)}
                key={ingr.idIngredient}
              >
                <div className="py-10 flex flex-col space-y-2 text-sm">
                  <span className="font-bold">{ingr.strIngredient}</span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
