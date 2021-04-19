import instance from "./config";

const index = () => instance.get("/api/dev/food");
const detail = (data) => instance.get("/api/dev/food/" + data);

const apiCulture = {
  index,
  detail,
};

export default apiCulture;
