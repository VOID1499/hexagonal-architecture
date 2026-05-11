import { AppRoutes } from "./routes.js";
import { Server } from "./server.js";
import { envs } from "../config/envs.js";

(()=>{
    main()
})()


async function main(){

    new Server({port:envs.PORT, routes:AppRoutes.createAppRoutes()}).start();

}