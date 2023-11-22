

const soulWhaleServices = () => {

    const getResource = async () => {
        let res = await fetch('../recources/data/db.json');

        if (!res.ok) { // в случае ошибки будет выводиться сообщение об этом
            throw new Error(`Could not fetch ${'../recources/data/db.json'}, status: ${res.status}`);
        }

        return await res.json(); // если всё хорошо, будут возвращаться данные в формате json
    };

    // getResource('http://localhost:3000/menu') // обращаемся к серверу за данными
    // .then(data => { // полученные от сервера данные в виде массива перебираем, превращая каждый элемент в карточку меню
    //     data.forEach(({img, altimg, title, descr, price}) => { // используем деструктуризацию, чтобы меньше писать в аргументах new MenuCard
    //         new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
    //     });
    // });

}

export default soulWhaleServices;