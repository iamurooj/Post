import axios from "axios";

const instance = create.axios({
    baseURL: "http://localhost:4000/api",
});

export default instance;