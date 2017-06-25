import React from 'react';

import { Switch, Route } from 'react-router-dom';

import './Module1.css';

// import Task1 from './Task1';
// import Task2 from './Task2';
// import Task3 from './Task3';

class Main extends React.Component {

    render() {
        return (
            // <main>
            //     {/*<Route path='/Task1' component={Task1} />
            //     <Route path='/Task2' component={Task2} />*/}
            //     {/*<Route path='/Task3' render={() => <Task3 config={config.config} />} />*/}
            // </main>
            <div className="Module1">
                <header>
                    <div className="first-menu-wrapper">
                        <div className="container">
                            <img src={require("../images/logo.png")} alt="logo" />
                            <span className="slogan">Открой мир кино вместе с нами</span>
                            <div className="main-menu">
                                <ul>
                                    <li><a href="">кино</a></li>
                                    <li><a href="">сериалы</a></li>
                                    <li><a href="">афиша</a></li>
                                    <li><a href="">тексты</a></li>
                                    <li><a href="">рейтинг</a></li>
                                    <li><a href="">программы и шоу</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="second-menu-wrapper">
                        <div className="container">
                            <img src={require("../images/first-triangle.png")} alt="triangle" className="first-triangle" />
                            <div className="auth">
                                <ul>
                                    <li><a href="">Создать аккаунт</a></li>
                                    <li>|</li>
                                    <li><a href="">Войти</a></li>
                                </ul>
                            </div>
                            <div className="search-bar">
                                <div className="second-triangle"></div>
                                <div className="third-triangle"></div>
                                <ul>
                                    <li><a href="">Поиск</a></li>
                                    <li>
                                        <div className="search">
                                            <input type="search" placeholder="Что будем искать)" />
                                            <span className="advanced">
                                                <a href="">расширенный поиск•что ищут?</a>
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </header>
                <section className="content">
                    <h2 className="slider-title">Рейтинг ожиданий</h2>
                    <div className="slider-wrapper">
                        <div className="slider">
                            <button className="left-button">
                            </button>
                            <div className="description">
                                <div className="movie-info">
                                    <h3 className="title">Мадагаскар 3</h3>
                                    <h4 className="subtitle">Madagascar 3: Europe's Most Wanted</h4>
                                    <div className="date-mark">
                                        <div className="number">0</div>
                                        <div className="number">7</div>
                                        <div className="date">
                                            <span className="on-site">На сайте</span> <br />
                                            <span className="month">Июня</span>
                                        </div>
                                        <img src={require("../images/rate.png")} className="rate" alt="rate" />
                                        <div className="rate-mark">
                                            9.5/10
                        </div>
                                    </div>
                                    <div className="plot">
                                        <p>Бегемотиха Глория, жираф Мелман, зебра Марти и, конечно, лев Алекс решают вернуться
                            в Нью-Йорк после их побега в Африку. Из-за механических инновации пресловутого шимпанзе и
                            сумасшедших пингвинов, весь план рушится. </p>
                                    </div>
                                </div>
                                <div className="posters">
                                    <ul>
                                        <li><a href=""><img src={require("../images/poster-1.png")} alt="poster-1" /></a></li>
                                        <li><a href=""><img src={require("../images/poster-2.png")} alt="poster-2" /></a></li>
                                        <li><a href=""><img src={require("../images/poster-3.png")} alt="poster-3" /></a></li>
                                    </ul>
                                </div>
                            </div>
                            <button className="right-button">
                            </button>
                        </div>
                    </div>
                    <div className="updates">
                        <div className="container">
                            <h3>Пусть к вам проникнет наше настроение и останется только хорошее впечатление!
                <b> Наслаждайтесь просмотром!</b>
                            </h3>
                            <img src={require("../images/left-image.png")} className="left-image" alt="left" />
                            <section className="movie">
                                <div className="title">
                                    <h4>Новый Человек-паук (2012)</h4>
                                </div>
                                <div className="poster">
                                    <img src={require("../images/movie-1.png")} alt="movie-1" />
                                    <img src={require("../images/rate.png")} className="mark" alt="rate" />
                                    <img src={require("../images/poster-triangle.png")} className="poster-triangle" alt="triangle" />

                                </div>
                                <div className="horizontal-divider"></div>
                                <div className="plot">
                                    Получив сверхчеловеческие способности, Питер Паркер пытается вести нормальную жизнь и разобраться,
                    кем же он теперь стал. Но сейчас на нормальную жизнь ...
                </div>
                                <button>Смотреть сейчас</button>
                            </section>
                            <section className="movie">
                                <div className="title">
                                    <h4>Авраам Линкольн: Охотник на вампиров (2012)</h4>
                                </div>
                                <div className="poster">
                                    <img src={require("../images/movie-2.png")} alt="movie-2" />
                                    <img src={require("../images/rate.png")} className="mark" alt="rate" />
                                    <img src={require("../images/poster-triangle.png")} className="poster-triangle" alt="triangle" />
                                </div>
                                <div className="horizontal-divider"></div>
                                <div className="plot">
                                    Убита мать президента Линкольна, и все указывает на вампиров. После этой трагедии Линкольн
                    объявляет войну до полного уничтожения ...
                </div>
                                <button>Смотреть сейчас</button>
                            </section>
                            <section className="movie">
                                <div className="title">
                                    <h4>Темный рыцарь: Возрождение легенды (2012)</h4>
                                </div>
                                <div className="poster">
                                    <img src={require("../images/movie-3.png")} alt="movie-3" />
                                    <img src={require("../images/rate.png")} className="mark" alt="rate" />
                                    <img src={require("../images/poster-triangle.png")} className="poster-triangle" alt="triangle" />
                                </div>
                                <div className="horizontal-divider"></div>
                                <div className="plot">
                                    Восемь лет спустя после событий Темного Рыцаря, в Готэм приходит новый лидер террористов, Бэйн,
                    неся с собой хаос и разрушения ...
                </div>
                                <button>Смотреть сейчас</button>
                            </section>
                            <aside className="update-aside">
                                <div className="update-title">
                                    Обновления <span className="red">на сайте</span>
                                </div>
                                <div className="aside-movie">
                                    <div className="aside-poster">
                                        <img src={require("../images/poster-aside-1.png")} alt="aside-poster" />
                                    </div>
                                    <div className="aside-description">
                                        <a href="">G.I. Joe: Бросок кобры 2 (2012)</a>
                                        <p>G.I. Joe: Retaliation</p>
                                        <p>Жанр: Триллер, Боевик, Фантастика, Приключения</p>
                                    </div>
                                </div>
                                <div className="aside-movie">
                                    <div className="aside-poster">
                                        <img src={require("../images/poster-aside-2.png")} alt="aside-poster" />
                                    </div>
                                    <div className="aside-description">
                                        <a href="">Ледниковый период 4: Континентальный дрейф (2012)</a>
                                        <p>Жанр: Мультфильм</p>
                                    </div>
                                </div>
                                <div className="divider"></div>
                                <div className="aside-footer">
                                    <a href="">Смотреть все обновления...</a>
                                </div>
                            </aside>
                        </div>
                    </div>
                    <div className="main-content">
                        <div className="container">
                            <div className="info">Информация о фильме</div>
                            <div className="main-left">
                                <div className="main-left-image">
                                    <img src={require("../images/main-left-image.png")} alt="main" />
                                </div>
                                <h3>Актеры:</h3>
                                <p>Джейсон Стэтхэм, Дональд Сазерленд, Бен Фостер, Тони Голдуин, Джефф Чейз, Мини Анден, Джеймс Логан,
                    Эдди
                    Дж.
                    Фернандез, Джошуа Бриджуотер, Джон МакКоннелл</p>
                                <h3>Продюссер:</h3>
                                <p>Рене Бессон, Роберт Чартофф, Уильям Чартофф, Роб Кауэн</p>
                                <h3>Режиссер:</h3>
                                <p>Саймон Уэст</p>
                                <h3>Сценарист:</h3>
                                <p>Льюис Джон Карлино, Ричард Уэнк</p>
                                <div className="budget">
                                    <div className="budget-left">
                                        <h3>Бюджет:</h3>
                                        <p>$40 000 000</p>
                                        <h3>Сборы в США:</h3>
                                        <p>$29 121 498</p>
                                    </div>
                                    <div className="budget-right">
                                        <h3>Сборы в мире:</h3>
                                        <p>$51 070 807</p>
                                        <h3>Релиз на DVD:</h3>
                                        <p>25 февраля 2011</p>
                                    </div>
                                </div>
                            </div>
                            <div className="main-center">
                                <div className="main-info">
                                    <div className="main-head">
                                        <div className="title-wrapper">
                                            <h1>Механик</h1>
                                            <h2>The mechanic</h2>
                                        </div>
                                        <div className="main-rate">9.8/10</div>
                                    </div>
                                    <span className="info-option">Год выпуска:</span>
                                    <span>2010</span><br />
                                    <span className="info-option">Страна:</span>
                                    <span>США</span><br />
                                    <span className="info-option">Жанр:</span>
                                    <span>Боевики, Триллеры, Криминал</span><br />
                                    <span className="info-option">Продолжительность:</span>
                                    <span>89 мин.</span><br />
                                    <span className="info-option">Рейтинг фильма:</span>
                                    <span>MDB: 6.5</span><br />
                                    <h2 className="main-plot">Сюжет:</h2>
                                    <p>Артур Бишоп очень хорошо знает свое дело. А дело его – убивать. Он наемник, лучший среди лучших.
                        Артур всегда работает один, но ему приходится сотрудничать с молодым парнем. Теперь они команда.
                        Вот только им все равно предстоит вступить в бой друг с другом, из которого хотя бы одному
                        не уйти живым.</p>
                                </div>
                                <div className="video">
                                    <video controls poster="images/video-frame.png">
                                        {/*<source src={require("../video/trailer.mp4")} type="video/mp4" />*/}
                                    </video>
                                </div>
                                <div className="comments">
                                    <div className="comment-block">
                                        <div className="comment">
                                            <div className="avatar">
                                                <img src={require("../images/avatar.png")} alt="avatar" />
                                                <a href="" className="reply">Ответить</a>
                                            </div>
                                            <div className="comment-body">
                                                <div className="comment-header">
                                                    <a href="">TritonGrown</a>
                                                    <span className="comment-date">26.05.2012 в 18:40</span>
                                                </div>
                                                <div className="comment-text">
                                                    Фильмище супер,а для тех кто любит гонки вообще найлучшое что может быть.Для
                                    семейного
                                    просмотра тоже идеал.Фильм + 5
                                </div>
                                            </div>
                                        </div>

                                        <div className="comment answer">
                                            <div className="avatar">
                                                <img src={require("../images/avatar.png")} alt="avatar" />
                                                <a href="" className="reply">Ответить</a>
                                            </div>
                                            <div className="comment-body">
                                                <div className="comment-header">
                                                    <a href="">TritonGrown</a>
                                                    <span className="comment-date">26.05.2012 в 18:40</span>
                                                </div>
                                                <div className="comment-text">
                                                    Согласен с тобой))) фильм отличный ))) мне тоже понравился
                                    Советую посмотреть!!!
                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="add-comment">
                                    <textarea placeholder="текст..." cols="63" rows="3"></textarea>
                                    <button>Отправить сообщение</button>
                                </div>
                                <div className="pagination">
                                    <ul>
                                        <li className="active-page"><a href="">1</a></li>
                                        <li><a href="">2</a></li>
                                        <li><a href="">3</a></li>
                                        <li><a href="">4</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="main-right">
                                <div className="main-right-wrapper">
                                    <div className="main-right-block-1">
                                        <div className="main-right-title">
                                            Кинокасса России • <span className="red">руб.</span>
                                        </div>
                                        <ul>
                                            <li>
                                                <div className="right-film">
                                                    <div className="film-title">
                                                        <h2>
                                                            <span className="red">1.</span>
                                                            Люди в черном 3
                                        </h2>
                                                        <h3>Men in Black III</h3>
                                                    </div>
                                                    <div className="sum">
                                                        533 050 190
                                    </div>
                                                </div>

                                            </li>
                                            <li>
                                                <div className="right-film">
                                                    <div className="film-title">
                                                        <h2>
                                                            <span className="red">2.</span>
                                                            Запретная зона
                                        </h2>
                                                        <h3>Chernobyl Diaries</h3>
                                                    </div>
                                                    <div className="sum">
                                                        45 965 000
                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="right-film">
                                                    <div className="film-title">
                                                        <h2>
                                                            <span className="red">3.</span>
                                                            Диктатор
                                        </h2>
                                                        <h3>The Dictator</h3>
                                                    </div>
                                                    <div className="sum">
                                                        33 295 425
                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="right-film">
                                                    <div className="film-title">
                                                        <h2>
                                                            <span className="red">4.</span>
                                                            Мрачные тени
                                        </h2>
                                                        <h3>Dark Shadows</h3>
                                                    </div>
                                                    <div className="sum">
                                                        19 700 249
                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="right-film">
                                                    <div className="film-title">
                                                        <h2>
                                                            <span className="red">5.</span>
                                                            Мстители
                                        </h2>
                                                        <h3>The Avengers</h3>
                                                    </div>
                                                    <div className="sum">
                                                        18 684 876
                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="main-right-block-2">
                                        <div className="main-right-title">
                                            Последние комментарии
                        </div>
                                        <div className="last-comment">
                                            <h2>Рыцарь дня</h2>
                                            <p>Давно пройшли часи лицарства і героїзму, коли лише за посмішку благородної дами
                                творилися подвиги. Крістофер Нолан вдихнув нове життя в філософію рицарства.</p>
                                        </div>
                                        <div className="last-comment">
                                            <h2>Неудержимые</h2>
                                            <p>Нестримні/The Expendables - Хоч про це вже казано і переказано, але...Сталоне, Стетхем,
                                Джет Лі, Брюс Віліс, Мікі Рурк, Арнольд Шварцнегер у одному фільмі. Ви колись таке чули
                                чи бачили? </p>
                                        </div>
                                    </div>
                                    <div className="main-right-block-3">
                                        <div className="main-right-title">
                                            Запросы-фильмы <span className="red">всего</span>
                                        </div>
                                        <ul>
                                            <li>
                                                <div className="right-film">
                                                    <div className="film-title">
                                                        <h2>Прометей</h2>
                                                        <h3>Prometheus</h3>
                                                    </div>
                                                    <div className="sum">
                                                        31.05
                                    </div>
                                                </div>

                                            </li>
                                            <li>
                                                <div className="right-film">
                                                    <div className="film-title">
                                                        <h2>Мадагаскар 3</h2>
                                                        <h3>Madagascar 3: Europe's Most
                                            Wanted</h3>
                                                    </div>
                                                    <div className="sum">
                                                        07.06
                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="right-film">
                                                    <div className="film-title">
                                                        <h2>Белоснежка и охотник</h2>
                                                        <h3>Snow White and the Huntsman</h3>
                                                    </div>
                                                    <div className="sum">
                                                        14.06
                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="right-film">
                                                    <div className="film-title">
                                                        <h2>Президент Линкольн: Охотник на вампиров</h2>
                                                        <h3>Abraham Lincoln: Vampire Hunter</h3>
                                                    </div>
                                                    <div className="sum">
                                                        21.06
                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="right-film">
                                                    <div className="film-title">
                                                        <h2>Лето. Одноклассники. Любовь</h2>
                                                        <h3>LOL</h3>
                                                    </div>
                                                    <div className="sum">
                                                        28.06
                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="main-right-block-4">
                                        <h2 className="random-film">Случайный фильм</h2>
                                        <img src={require("../images/random-film.png")} alt="random-film" className="random-film-poster" />
                                        <img src={require("../images/shadow.png")} alt="shadow" className="shadow" />
                                        <h4 className="random-film-title">Морской бой</h4>
                                        <a href="" className="another-film">другой случайный фильм</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <footer>
                    <img src={require("../images/footer-image.png")} alt="footer" className="footer-image" />
                    <div className="container">
                        <div className="footer-menu">
                            <div className="footer-menu-block">
                                <h2 className="footer-menu-title">Фильмы</h2>
                                <a href="">База фильмов</a>
                                <a href="">Афиша</a>
                                <a href="">В кинотеатрах</a>
                                <a href="">Скоро</a>
                                <a href="">Аниме</a>
                            </div>
                            <div className="footer-menu-block">
                                <h2 className="footer-menu-title">Люди</h2>
                                <a href="">Актеры</a>
                            </div>
                            <div className="footer-menu-block">
                                <h2 className="footer-menu-title">Мультимедиа</h2>
                                <a href="">Трейлеры</a>
                                <a href="">Фото</a>
                                <a href="">Обои</a>
                                <a href="">Саундтреки</a>
                            </div>
                            <div className="footer-menu-block">
                                <h2 className="footer-menu-title">Общение</h2>
                                <a href="">Форум</a>
                            </div>
                            <div className="footer-menu-block">
                                <h2 className="footer-menu-title">Рейтинги</h2>
                                <a href="">Лучшие фильмы</a>
                                <a href="">Вох Office</a>
                            </div>
                            <div className="footer-menu-block">
                                <h2 className="footer-menu-title">Новости</h2>
                                <a href="">Новости кино</a>
                            </div>
                            <div className="footer-menu-block">
                                <h2 className="footer-menu-title">Пользователи</h2>
                                <a href="">Регистрация</a>
                                <a href="">Войти на сайт</a>
                            </div>
                            <div className="footer-menu-block">
                                <h2 className="footer-menu-title">Контакты</h2>
                                <a href="">Форма обратной связи</a>
                                <a href="">Реклама на kinobase</a>
                            </div>
                        </div>
                        <div className="footer-logo">
                            <a href=""><img src={require("../images/logo.png")} alt="footer-logo" /></a>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Main;