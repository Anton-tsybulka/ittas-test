import { BsArrowUp, BsArrowUpRight, BsArrowRight, BsArrowDownRight, BsArrowDown, BsArrowDownLeft, BsArrowLeft, BsArrowUpLeft } from 'react-icons/bs';

const dataConversion = (data) => {
    const dayNumber = data.getDate();
    const month = data.getMonth();
    const year = data.getFullYear();
    const hours = data.getHours();
    const minutes = data.getMinutes();
    const seconds = data.getSeconds();
    const listMonth = [
        'Января',
        'Февраля',
        'Марта',
        'Апреля',
        'Мая',
        'Июня',
        'Июля',
        'Августа',
        'Сентября',
        'Октября',
        'Ноября',
        'Декабря'
    ];

    const dateFormatted = `${dayNumber} ${listMonth[month]} ${year} ${hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;

    return dateFormatted;
};

const windDirection = (direction) => {
    if (10 >= direction || direction >= 350) {
        return <BsArrowUp />;
    } else if (10 < direction && direction < 80) {
        return <BsArrowUpRight />;
    } else if (80 <= direction && direction <= 100) {
        return <BsArrowRight />;
    } else if (100 < direction && direction < 170) {
        return <BsArrowDownRight />;
    } else if (170 <= direction && direction <= 190) {
        return <BsArrowDown />;
    } else if (190 < direction && direction < 260) {
        return <BsArrowDownLeft />;
    } else if (260 <= direction && direction <= 280) {
        return <BsArrowLeft />;
    } else if (280 < direction && direction < 350) {
        return <BsArrowUpLeft />;
    };
};

export {
    dataConversion,
    windDirection
};