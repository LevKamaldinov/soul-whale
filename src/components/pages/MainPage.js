import { Helmet } from "react-helmet";

import Slider from "../slider/Slider";

const MainPage = () => {
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Main page of SoulWhale"
                />
                <title>SoulWhale главная страница</title>
            </Helmet>
            <Slider/>
        </>
    )
}

export default MainPage;