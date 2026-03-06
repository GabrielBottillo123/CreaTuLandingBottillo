import { getFirestore, collection, getDocs, query, where, doc, getDoc, addDoc } from "firebase/firestore";
import { app } from './config';

const db = getFirestore(app);

export const getItems = async (category, setProducts) => {
    console.log("Categoría recibida para filtrar:", category);
    const items = [];

    if (!category) {
        const allItems = await getDocs(collection(db, 'items'));
        allItems.forEach((doc) => {
            items.push({ ...doc.data(), id: doc.id });
        });
    } else {
        const q = query(collection(db, "items"), where("category", "==", category));
        const itemsByCategory = await getDocs(q);
        itemsByCategory.forEach((doc) => {
            items.push({ ...doc.data(), id: doc.id });
        });
    }

    setProducts(items); 
}

export const getCategories = async () => {
    const querySnapshot = await getDocs(collection(db, 'categories'));
    const categories = [];

    querySnapshot.forEach((doc) => {
        categories.push(doc.data().name);
    });

    return categories;
}

export const getItem = async (id) => {
    const docRef = doc(db, "items", id);
    const docSnap = await getDoc(docRef); 

    if (docSnap.exists()) {
        return { ...docSnap.data(), id: docSnap.id };
    } else {
        console.log("No existe ese documento!");
        return null;
    }
}

export const createOrder = async (order) => {
    try {
        const docRef = await addDoc(collection(db, "orders"), order);
        console.log("Document written with ID: ", docRef.id);
        return docRef.id; 
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}