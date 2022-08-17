import { useReducer, useEffect } from "react";
import db from './db/firestore';

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
