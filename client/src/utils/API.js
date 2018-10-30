import axios from "axios";

export default {
    signUp: function(newUser) {
        return axios.post("/api/user/sign-up", newUser);
    },
    signIn: function(User) {
        return axios.post("/api/user/sign-in", User);
    },
    getDbUser: function() {
        return axios({
            method: "get",
            url: "/api" + window.location.pathname, // /api/user/username
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        });
    }
};
