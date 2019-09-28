import defaultImage from './images/default.jpg';
import Nachalo from './images/Nachalo.png';
import ogidanie from './images/ojidanie.png'
import realnost from './images/realnost.png'
import plastic1 from './images/plastic1.png'
import plastic2 from './images/plastic2.png'
import plastic3 from './images/plastic3.png'
import plastic4 from './images/plastic4.png'
import plastic5 from './images/plastic5.png'
import plastic6 from './images/plastic6.png'
import plastic7 from './images/plastic7.png'

import React from 'react';

export const guides = [
    {
        id: 0,
        title: "GoGreen.Начало",
        image: Nachalo,
        article: <div></div>,
    },
    {
        id: 1,
        title: "GoGreen.Ожидание",
        image: ogidanie,
        article: <div></div>,
    },
    {
        id: 2,
        title: "GoGreen.Реальность",
        image: realnost,
        article: <div></div>,
    },
    {
        id: 3,
        title: "GoGreen.Пластик 1",
        image: plastic1,
        article: <div></div>,
    },
    {
        id: 4,
        title: "GoGreen.Пластик 2",
        image: plastic2,
        article: <div></div>,
    },
    {
        id: 5,
        title: "GoGreen.Пластик 3",
        image: plastic3,
        article: <div></div>,
    },
    {
        id: 6,
        title: "GoGreen.Пластик 4",
        image: plastic4,
        article: <div></div>,
    },
    {
        id: 7,
        title: "GoGreen.Пластик 5",
        image: plastic5,
        article: <div></div>,
    },
    {
        id: 8,
        title: "GoGreen.Пластик 6",
        image: plastic6,
        article: <div></div>,
    },
    {
        id: 9,
        title: "GoGreen.Пластик 7",
        image: plastic7,
        article: <div></div>,
    },
];

export const galleries = [
    {
        title: 'Зелёный панцырь',
        guides: [0, 1, 2],
    },
    {
        title: 'Чашуйчатый панцырь, борьба с пластиком',
        guides: [4, 5, 6, 7, 8, 9],
    },
    {
        title: 'Боевой панцырь',
        guides: [1, 0, 1, 0, 1, 0],
    }
];