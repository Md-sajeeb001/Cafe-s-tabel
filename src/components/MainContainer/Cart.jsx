/* eslint-disable react/prop-types */

const Cart = ({ cart }) => {
  const { ingredients, time, name, food_img, description, calories } = cart;
  return (
    <div>
      <div className="card bg-base-100 border h-full">
        <figure className="px-4 pt-4 ">
          <img
            src={food_img}
            alt="Shoes"
            className="rounded-xl w-full h-[220px] object-cover"
          />
        </figure>
        <div className="px-4 py-4 space-y-4">
          <h2 className="card-title text-2xl font-semibold">{name}</h2>
          <p>{description}</p>
          <hr />
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-slate-800">
              ingredients: {ingredients.length}
            </h2>
            <ul className="pl-8">
              {ingredients.map((ing, idx) => (
                <li className="list-disc text-slate-600" key={idx}>
                  {ing}
                </li>
              ))}
            </ul>
          </div>
          <hr />
          <div className="flex items-center justify-between">
            <p>
              <i className="fa-regular fa-clock text-lg"></i> {time} minutes
            </p>
            <p>
              <i className="fa-solid fa-fire-flame-curved text-xl"></i>{" "}
              {calories} Calories
            </p>
          </div>
          <div className="card-actions">
            <button className="btn bg-green-400 sm:text-lg text-sm font-medium rounded-full sm:px-12 px-8">
              Want to Cook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
