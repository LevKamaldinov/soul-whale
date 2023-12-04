

const soulWhaleServices = () => {

    const getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${'../recources/data/db.json'}, status: ${res.status}`);
        }

        return await res.json();
    };

    return {
        getResource
    }
}

export default soulWhaleServices;