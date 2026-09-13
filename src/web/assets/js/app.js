import "../css/app.css";
import { HSStaticMethods } from "preline/non-auto";
import { ForgotPasswordData, ResetPasswordData, SignupData } from "./components/auth.data.js";
import AppData from "./components/app.data.js";
import mask from "@alpinejs/mask";
import Alpine from "alpinejs";
import _ from "lodash";

window.HSStaticMethods = HSStaticMethods;
window.Alpine = Alpine;
window._ = _;

Alpine.plugin(mask);
Alpine.data('AppData', AppData);
Alpine.data('ForgotPasswordData', ForgotPasswordData);
Alpine.data('ResetPasswordData', ResetPasswordData);
Alpine.data('SignupData', SignupData);

document.addEventListener("alpine:initialized", () => {
    HSStaticMethods.autoInit();
});

Alpine.start();
