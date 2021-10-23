import React, { useState } from "react";
import "./App.css";
// import { useDispatch, useSelector } from "react-redux"; //we will use typed hooks

import { addReservation } from "./app/features/reservationSlice";
import { RootState } from "./app/store";
import ReservationCard from "./components/ReservationCard";
import CustomerCard from "./components/CustomerCard";
import { useAppDispatch, useAppSelector } from "./app/reduxHooks";
import {
  useGetRandomJokeQuery,
  useSearchAJokeQuery,
} from "./app/features/jokesSlice";

function App() {
  const reservations = useAppSelector((state) => state.reservations.value);
  const customers = useAppSelector((state) => state.customers.value);

  const dispatch = useAppDispatch();
  const [reservationName, setReservationName] = useState("");

  //SUBMIT add reservation
  const handleAddReservations = () => {
    if (!reservationName) return;
    dispatch(addReservation(reservationName));
    setReservationName("");
  };

  //RTK_Query hook
  // Using a query hook automatically fetches data and returns query values
  const { data: randomJoke, error, isLoading } = useGetRandomJokeQuery("aa");

  // Individual hooks are also accessible under the generated endpoints:
  // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')
  const [jokeSearchterm, setJokeSearchterm] = useState("");
  const { data: jokesList, isFetching } = useSearchAJokeQuery(jokeSearchterm);

  const handleJokeSearch = () => {
    if (!jokeSearchterm) return;
    dispatch(addReservation(reservationName));
    setReservationName("");
  };
  //RETURN
  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map((name, index) => (
                <ReservationCard name={name} key={index} index={index} />
              ))}
            </div>
          </div>
          <div className="reservation-input-container">
            <input
              value={reservationName}
              onChange={(e) => setReservationName(e.target.value)}
            />
            <button onClick={handleAddReservations}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          {customers.map((cust) => (
            <CustomerCard
              key={cust.id}
              id={cust.id}
              name={cust.name}
              food={cust.food}
            />
          ))}
        </div>
      </div>
      <h2>Some jokes</h2>
      <p>{randomJoke?.joke}</p>
      <h2>Serach for more jokes</h2>
      <input
        value={jokeSearchterm}
        onChange={(e) => setJokeSearchterm(e.target.value)}
      />
      <button onClick={handleJokeSearch}>Search</button>
      <div>
        <ul>
          {jokesList?.results?.map((j) => (
            <li>{j.joke}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
