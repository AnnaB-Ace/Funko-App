import axios from "axios";

export const getEventsList = async () => {
  return await axios({
    method: "get",
    url: `https://funko-app.herokuapp.com/api/events`,
  });
};
