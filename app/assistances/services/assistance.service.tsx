import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
const db = firebase.firestore();



const  add=(desc:string,long:number,lat:number)=>{
    if (db) {
        db.collection("assistancePlace")
          .add({
            description: desc,
            longitude: long,
            latitude: lat,
          })
         
      }
}
export default add;