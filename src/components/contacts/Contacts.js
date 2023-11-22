import { Helmet } from "react-helmet";

const Contacts = () => {
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Information about contacts of brand 'SoulWhale'"
                />
                <title>Контакты</title>
            </Helmet>
            <div>
                <h2>Контакты</h2>
                <p>Если вы хотите узнать о нас и нашей продукции больше, вы можете связаться с нами любым удобным способом:</p>
                <ul>
                    <li>
                        <a href="#">В сети-которую-нельзя-называть</a>
                    </li>
                    <li>
                        <a href="#">В нашей группе ВКонтакте</a>
                    </li>
                    <li>
                        По электронной почте ...
                    </li>
                    <li>
                        А также в Telegram и WhatsApp по телефону ...
                    </li>
                </ul>

            </div>
        </>
    )
}

export default Contacts;