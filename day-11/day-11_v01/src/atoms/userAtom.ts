import { atom } from 'jotai';

export const userAtom = atom({
    username: '',
    gender : 'male' | 'female',
    age : 0,
})