import React from 'react';
import './styles.css';
import Product from '../../Components/Product/index';

function index() {
  return (
    <div className="home">
      <div className="container">
        <img
          className="image"
          src="https://images-na.ssl-images-amazon.com/images/G/32/prime/Merchandising/2020_Graphics/Shipping/XCM_Manual_ORIGIN_1249933_1307106_BR_BR_DesktopHero_copy_1_3308715_1500x600_1X_pt_BR._CB406090573_.jpg"
        />
        <div className="row">
          <Product
            id="1a23"
            title="havaianas Azul "
            price={29.99}
            image="https://havaianas.com.br/dw/image/v2/BDDJ_PRD/on/demandware.static/-/Sites-havaianas-master/default/dwdffef835/product-images/4119507_0093_HAVAIANAS%20CONSERVA__O%20INTERNACIONAL_A.png?sw=720&sh=720&sm=fit"
            rating={5}
          />
          <Product
            id="12"
            title="Smartphone Samsung Galaxy A71 Preto 128GB"
            price={2199.0}
            image="https://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=1245042239"
            rating={4}
          />
        </div>
        <div className="row">
          <Product
            id="12"
            title="Forno de Micro-ondas Electrolux MI41S com Painel Integrado - 31L"
            price={2199.0}
            image="https://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=856802888"
            rating={4}
          />
          <Product
            id="12"
            title="Purificador de Água Electrolux PE11B Bivolt - Branco"
            price={499.0}
            image="https://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=860423670"
            rating={3}
          />
          <Product
            id="12a3"
            title='Smart TV LED 58" UHD 4K Samsung 58TU7020 Crystal UHD, HDR'
            price={2784.0}
            image="https://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=1454151957"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default index;
