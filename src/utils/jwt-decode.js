import jwt_decode from "jwt-decode";
const { id } = jwt_decode(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).userData).currentUser.jwt);

export const getToken = () => {
    return JSON.parse(JSON.parse(localStorage.getItem("persist:root")).userData).currentUser.jwt
}