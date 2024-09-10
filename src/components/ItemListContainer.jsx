import { useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import Items from "./items";
import Container from "react-bootstrap/Container";
import {
  getFirestore,
  getDocs,
  where,
  query,
  collection,
} from "firebase/firestore";

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([]);
 // const [error, setError] = useState(null);

const {id} = useParams();


useEffect(() => {
    const db = getFirestore();
    
    const ref = !id ? collection(db,"items") : query(collection(db,"items"), where("category", "==", id));
getDocs(ref)
    .then((snapshot) => {
        setItems(
            snapshot.docs.map((doc) => {
                return { id: doc.id, ...doc.data() };
            })
            
        )
    })
}, [id]);

  return (
    <>
      <Container>
        <h1>{greeting}</h1>
        <Items items={items}/>
      </Container>
    </>
  );
}

export default ItemListContainer;
