<?php require_once('header_white.php'); ?>
<section class="signUp">
    <div class="container">
        <div class="d-flex justify-content-between align-items-scretch">
            <div class="left">
                <div class="singleTitle signup">
                    <div class="mainCatalogTitle productsTitle">
                        <div class="titleBlock">
                            <img src="images/icon/lableIcon.svg" alt="">
                            <h2>Регистрация</h2>
                        </div>        
                    </div>
                </div>
                <div class="signUp_body">
                    <form action="">
                        <label class="d-flex align-items-center radio">
                            <input type="radio" name="category" checked data-navbat="0">
                            <span class="custom_radio"><span></span></span>
                            <span>Физическое лицо</span>
                        </label>
                        <div class="accardion_body active" id="item0">
                            <input type="text" placeholder="ФИО">
                            <input type="text" placeholder="Город">
                            <input type="email" placeholder="Введите ваш email">
                            <input type="tel" placeholder="Ваш номер телефона"> 
                        </div>
                        <label class="d-flex align-items-center radio">
                            <input type="radio" name="category" data-navbat="1">
                            <span class="custom_radio"><span></span></span>
                            <span>Юридическое лицо</span>
                        </label>
                        <div class="accardion_body" id="item1">
                            <input type="text" placeholder="ФИО">
                            <input type="text" placeholder="Город">
                            <input type="text" placeholder="ИНН">
                            <input type="email" placeholder="Введите ваш email">
                            <input type="tel" placeholder="Ваш номер телефона"> 
                        </div>   
                        <p>Установите предпочтительное время для обратной связи</p> 
                        <div class="d-flex time">
                            <input type="time" value="11:00"> 
                            <span></span>
                            <input type="time" value="00:00">
                        </div>
                        <label class='checkbox'>
                            <input type="checkbox" name="sss">
                            <span class="custom_checkbox"></span>
                            <span>Мой часовой пояс совпадает с указанным городом</span>
                        </label>  
                        <p>Укажите предпочтительный способ связи:</p>
                        <div class="d-flex justify-content-between network">
                            <label>
                                <input type="checkbox" name="ddd">
                                <span class="custom_network">
                                    <img src="images/signUp/contact.svg" alt="">
                                </span>
                            </label>
                            <label>
                                <input type="checkbox" name="ddd">
                                <span class="custom_network">
                                    <img src="images/signUp/contact2.svg" alt="">
                                </span>
                            </label>
                            <label>
                                <input type="checkbox" name="ddd">
                                <span class="custom_network">
                                    <img src="images/signUp/contact3.svg" alt="">
                                </span>
                            </label>
                            <label>
                                <input type="checkbox" name="ddd">
                                <span class="custom_network">
                                    <img src="images/signUp/contact4.svg" alt="">
                                </span>
                            </label>
                            <label>
                                <input type="checkbox" name="ddd">
                                <span class="custom_network">
                                    <img src="images/signUp/contact5.svg" alt="">
                                </span>
                            </label>
                        </div>
                        <textarea name="" id="" cols="30" rows="1"  placeholder="Другое (укажите ваш вариант)"></textarea>
                        <a href="#">Загрузить карточку предприятия</a>
                        <button>
                            <a href="#">Зарегистрироваться</a>
                        </button>
                    </form>
                </div>
            </div>
            <div class="right">
                <div class="d-flex justify-content-end flex-column h-100">
                    <p>Уже зарегестрированы?</p>
                    <a href="#">Войти</a>
                </div>
            </div>
        </div>
    </div>
</section>
<?php require_once('footer.php'); ?>