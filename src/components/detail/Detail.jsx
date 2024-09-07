import "./detail.css";

const Detail = () => {
    return (
        <div className='detail'>
            <div className="user">
                <img src="./avatar.png" alt="" />
                <h2>Blooddescent</h2>
                <p>онлайн 24/7</p>
            </div>
            <div className="info">
                <div className="option">
                    <div className="title">
                        <span>Настройки чата</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Конфиденциальность и помощь</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Общие фотографии</span>
                        <img src="./arrowDown.png" alt="" />
                    </div>
                    <div className="photos">
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://cdn.discordapp.com/attachments/1144118542178979851/1281495979404562466/KZ_1.jpg?ex=66dd3f22&is=66dbeda2&hm=15f61814c0465c96d3c4d3ac86881312c73a39d6cd899c69d15ad1658245b61c&" alt="" />
                                <span>photo_2024_9_6.png</span>
                            </div>
                            <img src="./download.png" alt="" className="icon" />
                        </div>
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Общие файлы</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <button>Заблокировать пользователя</button>
                <button className="logout">Выйти</button>
            </div>
        </div>
    );
};

export default Detail;
