import { Helmet } from "react-helmet";

import Slider from "../slider/Slider";
import Timer from "../timer/Timer";

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
            <Timer time='2024-02-28'/>
        </>
    )
}

export default MainPage;