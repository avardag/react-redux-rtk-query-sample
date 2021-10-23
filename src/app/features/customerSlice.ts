import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICustomer {
  id: string;
  name: string;
  food: string[];
}
interface CustomerState {
  value: ICustomer[];
}
interface AddFoodToCustomerPayload {
  id: string;
  food: string;
}
const initialState: CustomerState = {
  value: [],
};

export const customerSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    addCustomer: (state, action: PayloadAction<ICustomer>) => {
      state.value.push(action.payload);
    },
    addFoodToCustomer: (
      state,
      action: PayloadAction<AddFoodToCustomerPayload>
    ) => {
      state.value.forEach((customer) => {
        if (customer.id === action.payload.id) {
          customer.food.push(action.payload.food);
        }
      });
    },
  },
});

//createSlice generated actions:
//actions to update state(updates a reservations part of state)
export const { addCustomer, addFoodToCustomer } = customerSlice.actions;
//reducer . to be added to configureStore method in store file
export default customerSlice.reducer;
