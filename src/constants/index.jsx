import defaultImage from './images/default.jpg'

export const pages = [
    {
        id: 0,
        title: "Почему эта важно",
        description: "Рассматривается статистика загрезнения пластиком",
        image: defaultImage,
    },
    {
        id: 1,
        title: "Виды пластика",
        description: "Основные категории пластика с их описаниями",
        image: defaultImage,
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