import { app } from "@/lib/firebase_config";
import PackageDetail from "../component/package_detail";
import { getDatabase, ref, set } from "firebase/database";
import { PackageDetails } from "../component/data";
import { useAppSelector } from "@/lib/store";

export function saveToDb(packageDetail:PackageDetails){
    const receiver = useAppSelector((state)=>state.item);
    const db = getDatabase(app);


}