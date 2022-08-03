import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>'

import { useReducer } from "react"

const firebaseConfig = {
  apiKey: "AIzaSyC6jq82BDjIMyjQB7omvXxhbJeW4ijpZR8",
  authDomain: "sign-out-app-340de.firebaseapp.com",
  projectId: "sign-out-app-340de",
  storageBucket: "sign-out-app-340de.appspot.com",
  messagingSenderId: "303750817967",
  appId: "1:303750817967:web:028c39604d6be246fa4c5a"
};

// Initialize Firebase
app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// TODO Cause the created objects below to be
// created in the Firestore db

const randomID = () => Math.random().toString()

const createStudent = (studName) => ({ id: randomID(), studName })

const types = {
    ADD: 'ADD',
    REMOVE: 'REMOVE',
}

export const actionCreators = {
    add: (studName) => ({ type: types.ADD, payload: createStudent(studName) }),
    remove: (id) => ({ type: types.REMOVE, payload: id }),
}

export const initialState = {
    students: [
        createStudent('Julia'),
        createStudent('Samuel'),
        createStudent('Matt'),
        createStudent('Kim'),
    ],
}

export function reducer(state, action) {
    switch (action.type) {
        case types.ADD:
            return {...state, students: [...state.students, action.payload] }
        case types.REMOVE:
            return {
                ...state,
                students: state.students.filter((student) => student.id !== action.payload),
            }
    }
}
