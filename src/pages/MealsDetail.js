import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "../components/Loading";

export const MealsDetail = () => {
  const { id } = useParams();
  const [mealDetail, setMealDetail] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`).then(
      (response) =>
        response
          .json()
          .then((data) => setMealDetail(data.meals))
          .catch((err) => {
            console.log(err);
          })
          .finally(() => setLoading(false))
    );
  }, [id]);

  return (
    <div className="text-justify ">
      {loading ? (
        <div className="flex items-center justify-center">
          <Loading />
        </div>
      ) : (
        mealDetail.map((meal) => {
          let vid = meal.strYoutube;
          let video = vid.replace("watch?v=", "embed/");
          return (
            <div className="space-y-4 md:space-y-9" key={meal.idMeal}>
              <h1 className="text-xl md:text-3xl font-black">{meal.strMeal}</h1>
              <div>
                <p className="text-red-500">{meal.strArea} Culinary</p>
                <div className="flex flex-col md:flex-row">
                  <div className="w-full">
                    <img src={meal.strMealThumb} className="rounded-2xl" />
                  </div>
                  <div className="w-full md:px-6 space-y-7 pt-7 md:pt-0">
                    <div className="space-y-3">
                      <p className="text-2xl font-medium">Instruski</p>
                      <p>{meal.strInstructions}</p>
                    </div>
                    <div className="space-y-3">
                      <p className="text-2xl font-medium">Recipes</p>
                      <ul className="list-disc px-6">
                        {meal.strIngredient1 ? (
                          <li>
                            {meal.strMeasure1 + " " + meal.strIngredient1}
                          </li>
                        ) : (
                          ""
                        )}
                        {meal.strIngredient2 ? (
                          <li>
                            {meal.strMeasure2 + " " + meal.strIngredient2}
                          </li>
                        ) : (
                          ""
                        )}
                        {meal.strIngredient3 ? (
                          <li>
                            {meal.strMeasure3 + " " + meal.strIngredient3}
                          </li>
                        ) : (
                          ""
                        )}
                        {meal.strIngredient4 ? (
                          <li>
                            {meal.strMeasure4 + " " + meal.strIngredient4}
                          </li>
                        ) : (
                          ""
                        )}
                        {meal.strIngredient5 ? (
                          <li>
                            {meal.strMeasure5 + " " + meal.strIngredient5}
                          </li>
                        ) : (
                          ""
                        )}
                        {meal.strIngredient6 ? (
                          <li>
                            {meal.strMeasure6 + " " + meal.strIngredient6}
                          </li>
                        ) : (
                          ""
                        )}
                        {meal.strIngredient7 ? (
                          <li>
                            {meal.strMeasure7 + " " + meal.strIngredient7}
                          </li>
                        ) : (
                          ""
                        )}
                        {meal.strIngredient8 ? (
                          <li>
                            {meal.strMeasure8 + " " + meal.strIngredient8}
                          </li>
                        ) : (
                          ""
                        )}
                        {meal.strIngredient9 ? (
                          <li>
                            {meal.strMeasure9 + " " + meal.strIngredient9}
                          </li>
                        ) : (
                          ""
                        )}
                        {meal.strIngredient10 ? (
                          <li>
                            {meal.strMeasure10 + " " + meal.strIngredient10}
                          </li>
                        ) : (
                          ""
                        )}
                        {meal.strIngredient11 ? (
                          <li>
                            {meal.strMeasure11 + " " + meal.strIngredient11}
                          </li>
                        ) : (
                          ""
                        )}
                        {meal.strIngredient12 ? (
                          <li>
                            {meal.strMeasure12 + " " + meal.strIngredient12}
                          </li>
                        ) : (
                          ""
                        )}
                        {meal.strIngredient13 ? (
                          <li>
                            {meal.strMeasure13 + " " + meal.strIngredient13}
                          </li>
                        ) : (
                          ""
                        )}
                        {meal.strIngredient14 ? (
                          <li>
                            {meal.strMeasure14 + " " + meal.strIngredient14}
                          </li>
                        ) : (
                          ""
                        )}
                        {meal.strIngredient15 ? (
                          <li>
                            {meal.strMeasure15 + " " + meal.strIngredient15}
                          </li>
                        ) : (
                          ""
                        )}
                        {meal.strIngredient16 ? (
                          <li>
                            {meal.strMeasure16 + " " + meal.strIngredient16}
                          </li>
                        ) : (
                          ""
                        )}
                        {meal.strIngredient17 ? (
                          <li>
                            {meal.strMeasure17 + " " + meal.strIngredient17}
                          </li>
                        ) : (
                          ""
                        )}
                        {meal.strIngredient18 ? (
                          <li>
                            {meal.strMeasure18 + " " + meal.strIngredient18}
                          </li>
                        ) : (
                          ""
                        )}
                        {meal.strIngredient19 ? (
                          <li>
                            {meal.strMeasure19 + " " + meal.strIngredient19}
                          </li>
                        ) : (
                          ""
                        )}
                        {meal.strIngredient20 ? (
                          <li>
                            {meal.strMeasure20 + " " + meal.strIngredient20}
                          </li>
                        ) : (
                          ""
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center mt-7 space-y-3">
                  <p className="text-2xl font-medium">Tutorials</p>
                  <iframe
                    className="w-full h-96 rounded-2xl"
                    src={video}
                  ></iframe>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};
