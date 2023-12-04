import { Helmet } from "react-helmet";

import './contacts.css';

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
            <div className="contacts">
                <h2>Контакты</h2>
                <p>Если Вы хотите узнать о нас и нашей продукции больше, Вы можете связаться с нами любым удобным способом:</p>
                <ul>
                    <li className="contacts__li">
                        <a href="#">В сети-которую-нельзя-называть</a>
                    </li>
                    <li className="contacts__li">
                        <a href="#">В нашей группе ВКонтакте</a>
                    </li>
                    <li className="contacts__li">
                        По электронной почте ...
                    </li>
                    <li className="contacts__li">
                        А также в Telegram и WhatsApp по телефону ...
                    </li>
                </ul>

            </div>
        </>
    )
}

export default Contacts;