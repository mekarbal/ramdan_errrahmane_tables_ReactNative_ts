import firebase from "firebase";
const db = firebase.firestore();



const  add=(desc:string,long:number,lat:number,city:string,places:number)=>{
    if (db) {
        db.collection("breakfastPlace")
          .add({
            description: desc,
            longitude: long,
            latitude: lat,
            city: city,
            places: places,
          })
         
      }
}

const getAllBfs =async ()=>{
    if (db) {
        const allMessages = db
        .collection("breakfastPlace")
        .onSnapshot((querySnapshot) => {
          const data = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
         console.log(data);
         
        })
         
      }
}


export  {add,getAllBfs};