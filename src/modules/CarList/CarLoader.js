import carData from "../../Mockup";

export const CarListDataLoader = async () => {
  const resp = carData;
  return resp;
};

export const CarDetailsLoader = async ({ params }) => {
  const { id } = params;
  const res = carData[id - 1];
  return res;
};
