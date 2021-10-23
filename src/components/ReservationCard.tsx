import React from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid4 } from "uuid";
import { removeReservation } from "../app/features/reservationSlice";
import { addCustomer } from "../app/features/customerSlice";

interface IResercationCard {
  name: string;
  index: number;
}
function ReservationCard({ name, index }: IResercationCard) {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => {
        dispatch(removeReservation(index));
        dispatch(
          addCustomer({
            id: uuid4(),
            name,
            food: [],
          })
        );
      }}
      className="reservation-card-container"
    >
      {name}
    </div>
  );
}

export default ReservationCard;
