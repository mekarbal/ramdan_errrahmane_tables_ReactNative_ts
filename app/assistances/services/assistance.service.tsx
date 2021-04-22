import firebase from "firebase";
const db = firebase.firestore();



const  add=(desc:string,long:number,lat:number,city:string,places:number)=>{
    if (db) {
        db.collection("assistancePlace")
          .add({
            description: desc,
            longitude: long,
            latitude: lat,
            city: city,
            places: places,
          })
         
      }
}
export default add;