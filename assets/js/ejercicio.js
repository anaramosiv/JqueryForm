
$('#formulario').submit (function (evt) {


     evt.preventDefault();
     
    const estrellasProducto = (estrellas) =>{
        let resultado =[];
        for (let i =1; i <=parseInt(estrellas); i++){
            resultado.push(`<li><i class="fa fa-star"></i></li>`)
        }
        return resultado.join("")
    }

    $('#productos').append(`
            <div class="col-lg-6 col-md-6 all des">
                <div class="product-item">
                  <a href="#"><img src="${$(this)[0].children[5].children[0].children[0].value}" alt=""></a>
                  <div class="down-content">
                    <a href="#">
                      <h4>${$(this)[0].children[0].children[0].children[0].value}</h4>
                    </a>
                    <h6>${$(this)[0].children[2].children[0].children[0].value}</h6>
                    <p>${$(this)[0].children[1].children[0].children[0].value}</p>
                    <ul class="stars">
                     ${estrellasProducto($("#stars").val())}
                    </ul>
                    <span>Reviews (${$(this)[0].children[4].children[0].children[0].value})</span>
                  </div>
                </div>
              </div>
`);

   
});