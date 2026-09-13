import ForgotPasswordPage from "@/src/web/domains/auth/ForgotPassword.ts";
import ResetPasswordPage from "@/src/web/domains/auth/ResetPassword.ts";
import SignupPage from "@/src/web/domains/auth/Signup.ts";
import SystemCtrl from "@/src/web/domains/systems/SystemCtrl.ts";
import LoginPage from "@/src/web/domains/auth/LoginPage.ts";
import HomePage from "@/src/web/domains/home/HomePage.ts";
import middlewares from "./middlewares.ts";
import { compress } from "hono/compress";
import { serveStatic } from "hono/deno"
import { fromFileUrl } from "@std/path";
import { Hono } from "hono";

// Relativo ao módulo (não ao cwd): no exe compilado aponta para os arquivos embutidos
const publicDir = fromFileUrl(new URL("../../public", import.meta.url));

const appRoutes = new Hono({ strict: false }).basePath("/");

// MIDDLEWARES
appRoutes.use(compress());
appRoutes.notFound(middlewares.notFound);
appRoutes.onError(middlewares.onError);

// APP ROUTES
appRoutes.use("/assets/*", serveStatic({ root: publicDir }));
appRoutes.use("/favicon.ico", serveStatic({ root: publicDir, path: "assets/img/favicon.png" }));
appRoutes.get("/login", LoginPage);
appRoutes.get("/forgot-password", ForgotPasswordPage);
appRoutes.get("/reset-password", ResetPasswordPage);
appRoutes.get("/signup", SignupPage);
appRoutes.get("/", HomePage);

// API ROUTES
const apiRoutes = new Hono({ strict: false }).basePath("/api/v1");
apiRoutes.get("/version", SystemCtrl.info);

// MERGE ROUTES
appRoutes.route("/", apiRoutes);

export default appRoutes;
