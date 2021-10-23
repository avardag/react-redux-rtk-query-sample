import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFoodToCustomer } from "../app/features/customerSlice";

interface ICustomerCardProps {
  id: string;
  name: string;
  food: string[];
}
function CustomerCard({ id, name, food }: ICustomerCardProps) {
  const dispatch = useDispatch();
  const [foodName, setFoodName] = useState("");

  const onFoodAddClick = () => {
    if (!foodName) return;
    dispatch(addFoodToCustomer({ id, food: foodName }));
    setFoodName("");
  };
  //RETURN
  return (
    <div className="customer-food-card-container">
      <p>{name}</p>
      <div className="customer-foods-container">
        <div className="customer-food">
          {food.map((f, index) => (
            <p key={index}>{f}</p>
          ))}
        </div>
        <div className="customer-food-input-container">
          <input
            value={foodName}
            onChange={(e) => setFoodName(e.target.value)}
          />
          <button onClick={onFoodAddClick}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default CustomerCard;
