<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>help</title>
    <!-- connected -->
    <link rel="stylesheet" type="text/css" href="css/style.css?v=<?=time()?>">
    <!-- cpnnected bootstrap -->
    <link rel="stylesheet preconnect" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha256-NJWeQ+bs82iAeoT5Ktmqbi3NXwxcHlfaVejzJI2dklU=" crossorigin="anonymous" media="screen" />
</head>
<body class="white">
    <section class="help">
        <div class="title d-flex align-items-center">
            <img src="images/icon/lableIcon.svg" alt="">
            <span>Помощь в подборе и покупке автозапчастей </span>
        </div>
        <div class="title d-flex align-items-center">
            <img src="images/icon/lableIcon.svg" alt="">
            <span>Помощь в подборе и покупке</span>
        </div>
        <div class="title d-flex align-items-center">
            <span>автозапчастей </span>
        </div>
        <div class="info">
            Et justo augue suspendisse neque ut ut. Vel tincidunt et cras odio arcu nulla fames mattis. Neque turpis nunc a purus leo accumsan pellentesque nisl lobortis. Neque vel lectus aliquam arcu vitae nibh quam auctor turpis. Tincidunt pharetra erat venenatis dui. Non dolor pharetra sagittis purus diam imperdiet nulla amet. Mi scelerisque eget semper nibh tristique aliquet morbi. 
        </div>
        <form action="">
            <div class="d-flex align-items-stretch justify-content-between">
                <div class="form-item">
                    <div class="form-title">
                        Данные об автомобиле
                    </div>
                    <div class="inputs d-flex flex-column">
                        <input type="text" placeholder="VIN*" required>
                        <input type="text" placeholder="Марка*" required>
                        <input type="text" placeholder="Модель*" required>
                        <input type="text" placeholder="Дата выпуска*" required>
                        <input type="text" placeholder="Двигатель">
                    </div>             
                </div>
                <div class="form-item">
                    <div class="form-title">
                        Необходимые запчасти 
                    </div>
                    <div class="inputs d-flex flex-column">
                        <input type="text" placeholder="Название*" required>
                        <input type="text" placeholder="Количество, шт">
                        <input type="text" placeholder="МодеПредпочтениель">
                        <textarea name="" id="" cols="30" rows="10" placeholder="Примечание"></textarea>
                    </div>             
                </div>
            </div>
            <div class="form-title">
                ПРИКРЕПИТЬ ФАЙЛ
            </div>
            <label class="file">
                <input type="file" placeholder="Перетащите файлы в эту область или выберите файлы">
                <span class="custom_file"><span>Перетащите файлы в эту область или выберите файлы</span></span>
            </label>
            <p>* - данным символом отмечены все поля, обязательные для заполнения </p>
            <div class="d-flex justify-content-between">
                <div class="d-flex align-items-center">
                    <label class="checkbox d-flex align-items-center">
                        <input type="checkbox">
                        <span class="custom_checkbox"></span>
                        <span>Нажимая на кнопку «Отправить», Вы соглашаетесь <br class="xl">с  <a href="#">Политикой конфиденциальности</a></span>
                    </label>
                    
                </div>
                <button>
                    <a href="#">Отправить</a>
                </button>
            </div>
        </form>
        <div class="close">
            <img src="images/korzina/close_button.svg" alt="">
        </div>
    </section>
</body>
</html>