import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, getDoc, doc } from 'firebase/firestore';
import ItemDetail from './ItemDetail';

const ItemDetailsContainer = () => {
  const [items, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const refDoc = doc(db, "items", id);
    getDoc(refDoc)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setItem({ ...snapshot.data(), id: snapshot.id });
        } else {
          console.error("No such document!");
        }
      })
      .catch((error) => {
        console.error("Error getting document:", error);
      });
  }, [id]);

  useEffect(() => {
    if (items) {
      console.log("items:", items);
    } else {
      console.log("items null");
    }
  }, [items]);

  

  return (
    <>
      <ItemDetail items={items} />
    </>
  );
};

export default ItemDetailsContainer;
