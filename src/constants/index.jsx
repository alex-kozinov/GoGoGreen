import defaultImage from './images/default.jpg';
import React from 'react';

export const guides = [
    {
        id: 0,
        title: "Почему эта важно",
        description: "Рассматривается статистика загрезнения пластиком",
        image: defaultImage,
        article: <div>Теккккст</div>,
    },
    {
        id: 1,
        title: "Виды пластика",
        description: "Основные категории пластика с их описаниями",
        image: defaultImage,
        article: "",
    },
];

export const galleries = [
    {
        title: 'Example',
        guides: [0, 1, 1, 0, 1, 0],
    },
];

export const questions = [
    {
        id: 0,
        text: "",
        answers: [
            {
                next_id: 1,
                text: "1"
            },
            {
                next_id: 2,
                text: "2"
            },
            {
                next_id: 3,
                text: "3"
            },
            {
                next_id: 4,
                text: "4"
            },
        ]
    }
];