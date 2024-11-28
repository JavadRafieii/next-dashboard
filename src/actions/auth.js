import registerUser from "./register";
import loginUser from "./login";

export default function auth(mode, locale, formData) {
    if (mode === "register") {
        return registerUser(formData, locale);
    }
    return loginUser(formData, locale);
}