import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore";

import { db } from "../firebase/config";

/* ==================================================
   ALOJAMIENTOS
================================================== */

export async function addFavorite(
  userId: string,
  propertyId: number
) {
  const favoriteRef = doc(
    db,
    "users",
    userId,
    "favorites",
    String(propertyId)
  );

  await setDoc(favoriteRef, {
    propertyId,
  });
}

export async function removeFavorite(
  userId: string,
  propertyId: number
) {
  const favoriteRef = doc(
    db,
    "users",
    userId,
    "favorites",
    String(propertyId)
  );

  await deleteDoc(favoriteRef);
}

export async function isFavorite(
  userId: string,
  propertyId: number
) {
  const favoriteRef = doc(
    db,
    "users",
    userId,
    "favorites",
    String(propertyId)
  );

  const snapshot = await getDoc(favoriteRef);

  return snapshot.exists();
}

export async function getFavorites(userId: string) {
  const favoritesRef = collection(
    db,
    "users",
    userId,
    "favorites"
  );

  const snapshot = await getDocs(favoritesRef);

  return snapshot.docs
    .map((favorite) => favorite.data().propertyId)
    .filter(
      (propertyId): propertyId is number =>
        typeof propertyId === "number"
    );
}

/* ==================================================
   DESTINOS
================================================== */

export async function addDestinationFavorite(
  userId: string,
  destinationId: number
) {
  const favoriteRef = doc(
    db,
    "users",
    userId,
    "favorites",
    `destination_${destinationId}`
  );

  await setDoc(favoriteRef, {
    destinationId,
    type: "destination",
  });
}

export async function removeDestinationFavorite(
  userId: string,
  destinationId: number
) {
  const favoriteRef = doc(
    db,
    "users",
    userId,
    "favorites",
    `destination_${destinationId}`
  );

  await deleteDoc(favoriteRef);
}

export async function isDestinationFavorite(
  userId: string,
  destinationId: number
) {
  const favoriteRef = doc(
    db,
    "users",
    userId,
    "favorites",
    `destination_${destinationId}`
  );

  const snapshot = await getDoc(favoriteRef);

  return snapshot.exists();
}

export async function getDestinationFavorites(
  userId: string
) {
  const favoritesRef = collection(
    db,
    "users",
    userId,
    "favorites"
  );

  const snapshot = await getDocs(favoritesRef);

  return snapshot.docs
    .map((favorite) => favorite.data().destinationId)
    .filter(
      (destinationId): destinationId is number =>
        typeof destinationId === "number"
    );
}