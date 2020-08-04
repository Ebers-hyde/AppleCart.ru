const iP8PSG = "images/models/8-plus-sg.jpg";
const iP8PG = "images/models/8-plus-g.jpg";
const iP8PS = "images/models/8-plus-s.jpg";
const iPSEB = "images/models/se-b.jpg";
const iPSES = "images/models/se-s.jpg";
const iPSER = "images/models/se-r.jpg";
const iPXB = "images/models/xr-b.jpg";
const iPXG = "images/models/xr-g.jpg";
const iPXS = "images/models/xr-s.jpg";
const iPXR = "images/models/xr-r.jpg";
const iP11PSG = "images/models/11-pro-sg.jpg";
const iP11PG = "images/models/11-pro-g.jpg";
const iP11PS = "images/models/11-pro-s.jpg";
const iP11PMSG = "images/models/11-pro-max-sg.jpg";
const iP11PMG = "images/models/11-pro-max-g.jpg";
const iP11PMS = "images/models/11-pro-max-s.jpg";



$(document).ready(function(){
    $('.about-bgr').height($(window).height());
    
    //Синхронизация заголовка и цены с названием модели и характеристиками, которые выбирает пользователь 
    $('.shop_form').on('change', function() {
        let model_name = 'Apple ' + $('#phone_model option:selected').text() + ' ' + 
        $('#model_color input:checked').attr('data-color') + ' ' + $('#phone_memory option:selected').text();
        let model_price = +$('#phone_model option:selected').attr('data-price');
        let memory_addition = +$('#phone_memory option:selected').attr('data-price');
        let acc_addition = 0;
        if($('#acc1').prop('checked') == true) {
            acc_addition += +$('#acc1').attr('data-price');
        }
        if($('#acc2').prop('checked') == true) {
            acc_addition += +$('#acc2').attr('data-price');
        }
        if($('#acc3').prop('checked') == true) {
            acc_addition += +$('#acc3').attr('data-price');
        }
        let sum_price = 0; 
        if (acc_addition > 0) {
            sum_price = (model_price + memory_addition + acc_addition) + "₽";
        }
        else {
            sum_price = (model_price + memory_addition) + "₽";
        };
        let format_price = sum_price.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
       $('#phone_name').text(model_name);
       $('#phone_price').text(format_price);

        //Подгрузка фото в соответствии с выбранной моделью и её цветом (необходимо рефакторить, дублирование)

        if ($('#phone_model option[value=1]').prop('selected') == true) {
            if ($('#model_color input:checked').attr('data-color') == 'Space Gray') {
                $('.buy img').attr('src', iP8PSG);
            }
            else if ($('#model_color input:checked').attr('data-color') == 'Gold') {
                $('.buy img').attr('src', iP8PG);
            }
            else if ($('#model_color input:checked').attr('data-color') == 'Silver') {
                $('.buy img').attr('src', iP8PS);
            }
        };

        if ($('#phone_model option[value=2]').prop('selected') == true) {
            if ($('#model_color input:checked').attr('data-color') == 'Space Gray') {
                $('.buy img').attr('src', iPSEB);
            }
            if ($('#model_color input:checked').attr('data-color') == 'Silver') {
                $('.buy img').attr('src', iPSES);
            }
            if ($('#model_color input:checked').attr('data-color') == 'Red') {
                $('.buy img').attr('src', iPSER);
            }
        };
        
        if ($('#phone_model option[value=3]').prop('selected') == true) {
            if ($('#model_color input:checked').attr('data-color') == 'Space Gray') {
                $('.buy img').attr('src', iPXB);
            }
            if ($('#model_color input:checked').attr('data-color') == 'Gold') {
                $('.buy img').attr('src', iPXG);
            }
            if ($('#model_color input:checked').attr('data-color') == 'Silver') {
                $('.buy img').attr('src', iPXS);
            }
            if ($('#model_color input:checked').attr('data-color') == 'Red') {
                $('.buy img').attr('src', iPXR);
            }
        };

        if ($('#phone_model option[value=4]').prop('selected') == true) {
            if ($('#model_color input:checked').attr('data-color') == 'Space Gray') {
                $('.buy img').attr('src', iP11PSG);
            }
            if ($('#model_color input:checked').attr('data-color') == 'Gold') {
                $('.buy img').attr('src', iP11PG);
            }
            if ($('#model_color input:checked').attr('data-color') == 'Silver') {
                $('.buy img').attr('src', iP11PS);
            }
        };

        if ($('#phone_model option[value=5]').prop('selected') == true) {
            if ($('#model_color input:checked').attr('data-color') == 'Space Gray') {
                $('.buy img').attr('src', iP11PMSG);
            }
            if ($('#model_color input:checked').attr('data-color') == 'Gold') {
                $('.buy img').attr('src', iP11PMG);
            }
            if ($('#model_color input:checked').attr('data-color') == 'Silver') {
                $('.buy img').attr('src', iP11PMS);
            }
        };
    });
    
    //Работа с модальным окном корзины, добавление модели

    $('#to-cart').on('click', function() {

        $('.modal-body div.container-fluid').append(`
            <div class="row my-3">
                <div class="col-3">
                    <div class="text-center" id="photo_container" style="height: 100px; width: 80px; border: 1px solid #2a9f2a;">
                        <img src='${$('.buy img').attr('src')}' />
                    </div>
                    </div>
                <div class="col-5">
                    <h6 class="text-center" id="cart_name">${$('#phone_name').text()}</h6>
                </div>
                <div class="col-3">
                    <h6 class="text-center" id="cart_price">${+$('#phone_model option:selected').attr('data-price') + +$('#phone_memory option:selected').attr('data-price')}</h6>
                </div>
                <div class='col-1'>
                    <button type="button" class="close dismiss"><span aria-hidden="true">&times;</span></button>
                </div>
            </div>
      `);
        
        //Добавление аксессуаров (необходимо рефакторить, дублирование)

      if($('#acc1').prop('checked') == true) {
        $('.modal-body div.container-fluid').append(`
        <div class="row my-3">
            <div class="col-3">
                <div class="text-center" id="photo_container" style="height: 100px; width: 100px; border: 1px solid #2a9f2a;">
                    <img src='images/accessories/airpods-pro.png' />
                </div>
                </div>
            <div class="col-5">
                <h6 class="text-center" id="cart_name">Гарнитура беспроводная Apple AirPods Pro</h6>
            </div>
            <div class="col-3">
                <h6 class="text-center" id="cart_price">${$('#acc1').attr('data-price')}</h6>
            </div>
            <div class='col-1'>
                <button type="button" class="close dismiss"><span aria-hidden="true">&times;</span></button>
            </div>
        </div>
        `);
      };

      if($('#acc2').prop('checked') == true) {
        $('.modal-body div.container-fluid').append(`
        <div class="row my-3">
            <div class="col-3">
                <div class="text-center" id="photo_container" style="height: 100px; width: 100px; border: 1px solid #2a9f2a;">
                    <img src='images/accessories/leather-bumper.png' />
                </div>
                </div>
            <div class="col-5">
                <h6 class="text-center" id="cart_name">Кожаный чехол для Apple iPhone</h6>
            </div>
            <div class="col-3">
                <h6 class="text-center" id="cart_price">${$('#acc2').attr('data-price')}</h6>
            </div>
            <div class='col-1'>
                <button type="button" class="close dismiss"><span aria-hidden="true">&times;</span></button>
            </div>
        </div>
        `);
      };

      if($('#acc3').prop('checked') == true) {
        $('.modal-body div.container-fluid').append(`
        <div class="row my-3">
            <div class="col-3">
                <div class="text-center" id="photo_container" style="height: 100px; width: 100px; border: 1px solid #2a9f2a;">
                    <img src='images/accessories/boost.png' />
                </div>
                </div>
            <div class="col-5">
                <h6 class="text-center" id="cart_name">Подставка для беспроводной зарядки Boost Up</h6>
            </div>
            <div class="col-3">
                <h6 class="text-center" id="cart_price">${$('#acc3').attr('data-price')}</h6>
            </div>
            <div class='col-1'>
                <button type="button" class="close dismiss"><span aria-hidden="true">&times;</span></button>
            </div>
        </div>
        `);
      };

      //Счётчик количества товаров на иконке корзины в хэдере

      let cart_items = +$('.container-fluid div.row').length;
        $('span.badge').text(cart_items);

      //Удаление товара из корзины

      $('.dismiss').on('click', function() {
        $(this).parent().parent().remove();
        let cart_items = +$('.container-fluid div.row').length;
        $('span.badge').text(cart_items);
      })

    });
   });