import  express  from "express";
import {login,setotp,signup} from "../Controllers/auth.js"
import {getAlluser,updateprofile} from "../Controllers/User.js"
import auth from "../Middleware/auth.js"
// import {SENDOTP} from "../Controllers/UserController.js"
const router = express.Router();

router.post("/signup",signup)
router.post("/login",login);
router.post("/setotp",setotp);
router.get("/getAlluser",getAlluser)
router.patch("/update/:id",auth,updateprofile)

export default router
