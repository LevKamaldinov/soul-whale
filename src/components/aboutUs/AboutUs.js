import { Helmet } from "react-helmet";

const AboutUs = () => {
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Information about brand 'SoulWhale'"
                />
                <title>О нас</title>
            </Helmet>
            <h2>О нас</h2>
            <p>Мы молодой и классный бренд, покупайте нашу продукцию!</p>
        </>
    )
}

export default AboutUs;