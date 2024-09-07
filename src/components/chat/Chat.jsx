import { useEffect, useRef, useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
    const [open, setOpen] = useState(false);
    const [text, setText] = useState("");

    const endRef = useRef(null);

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: "smooth" });
    }, []);

    const handleEmoji = e => {
        setText(prev => prev + e.emoji);
        setOpen(false);
    };

    return (
        <div className='chat'>
            <div className="top">
                <div className="user">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <span>Lokis</span>
                        <p>Был в сети 5 минут назад...</p>
                    </div>
                </div>
                <div className="icons">
                    <img src="./phone.png" alt="" />
                    <img src="./video.png" alt="" />
                    <img src="./info.png" alt="" />
                </div>
            </div>
            <div className="center">
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="text">
                        <p>Привет</p>
                        <span>5 минут назад</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="text">
                        <img src="https://cdn.discordapp.com/attachments/1144118542178979851/1281495979404562466/KZ_1.jpg?ex=66dd3f22&is=66dbeda2&hm=15f61814c0465c96d3c4d3ac86881312c73a39d6cd899c69d15ad1658245b61c&" alt="" />
                        <span>минуту назад</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="text">
                        <p>Ого, вот это новости</p>
                        <span>минутy назад</span>
                    </div>
                </div>
                <div ref={endRef}></div>
            </div>
            <div className="bottom">
                <div className="icons">
                    <img src="./img.png" alt="" />
                    <img src="./camera.png" alt="" />
                    <img src="./mic.png" alt="" />
                </div>
                <input
                    type="text"
                    placeholder="Написать сообщение..."
                    onChange={e => setText(e.target.value)}
                    value={text}
                />
                <div className="emoji">
                    <img
                        src="./emoji.png"
                        alt=""
                        onClick={() => setOpen(prev => !prev)}
                    />
                    <div className="picker">
                        <EmojiPicker open={open} onEmojiClick={handleEmoji} />
                    </div>
                </div>
                <button className="sendButton">Отправить</button>
            </div>
        </div>
    );
};

export default Chat;
