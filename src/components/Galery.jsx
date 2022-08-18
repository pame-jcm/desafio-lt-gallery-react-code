import imgPrueba1 from '../img/img1.jpg';
import imgPrueba2 from '../img/img2.jpg';
import imgPrueba3 from '../img/img3.jpg';
import imgPrueba4 from '../img/img4.jpg';
import imgPrueba5 from '../img/img5.jpg';
import imgPrueba6 from '../img/img6.jpg';
import imgPrueba7 from '../img/img7.jpg';
import imgPrueba8 from '../img/img8.jpg';
import imgPrueba9 from '../img/img9.jpg';
import imgPrueba10 from '../img/img10.jpg';
import imgPrueba11 from '../img/img11.jpg';
import imgPrueba12 from '../img/img12.jpg';
import imgPrueba13 from '../img/img13.jpg';
import imgPrueba14 from '../img/img14.jpg';
import imgPrueba15 from '../img/img15.jpg';
import imgPrueba16 from '../img/img16.jpg';

import CardGalery from './CardGalery';

const Galery = () => {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      <CardGalery imgSrc={imgPrueba1} imgDescription="image 1" imgWidth={'20rem'} titleCard={'Titulo foto'} descriptionCard={'descripción foto'}/>
      <CardGalery imgSrc={imgPrueba2} imgDescription="image 2" paddingTop={'10rem'} imgWidth={'25rem'} titleCard={'Titulo foto'} descriptionCard={'descripción foto'}/>
      <CardGalery imgSrc={imgPrueba3} imgDescription="image 3" imgWidth={'35rem'} titleCard={'Titulo foto'} descriptionCard={'descripción foto'}/>
      <CardGalery imgSrc={imgPrueba4} imgDescription="image 4" imgWidth={'20rem'} titleCard={'Titulo foto'} descriptionCard={'descripción foto'}/>
      
      <CardGalery imgSrc={imgPrueba6} imgDescription="image 6" imgWidth={'35rem'} titleCard={'Titulo foto'} descriptionCard={'descripción foto'}/>
      <CardGalery imgSrc={imgPrueba5} imgDescription="image 5" paddingTop={'10rem'} imgWidth={'27rem'} titleCard={'Titulo foto'} descriptionCard={'descripción foto'}/>
      <CardGalery imgSrc={imgPrueba7} imgDescription="image 7" imgWidth={'32rem'} titleCard={'Titulo foto'} descriptionCard={'descripción foto'}/>
      
      <CardGalery imgSrc={imgPrueba8} imgDescription="image 8" paddingTop={'12rem'} imgWidth={'30rem'} titleCard={'Titulo foto'} descriptionCard={'descripción foto'}/>
      <CardGalery imgSrc={imgPrueba9} imgDescription="image 9" imgWidth={'32rem'} titleCard={'Titulo foto'} descriptionCard={'descripción foto'}/>
      <CardGalery imgSrc={imgPrueba10} imgDescription="image 10" paddingTop={'5rem'} imgWidth={'25rem'} titleCard={'Titulo foto'} descriptionCard={'descripción foto'}/>

      <CardGalery imgSrc={imgPrueba14} imgDescription="image 14" imgWidth={'32rem'} titleCard={'Titulo foto'} descriptionCard={'descripción foto'}/>
      <CardGalery imgSrc={imgPrueba11} imgDescription="image 11" paddingTop={'5rem'} imgWidth={'30rem'} titleCard={'Titulo foto'} descriptionCard={'descripción foto'}/>
      <CardGalery imgSrc={imgPrueba12} imgDescription="image 12" imgWidth={'35rem'} titleCard={'Titulo foto'} descriptionCard={'descripción foto'}/>
      
      <CardGalery imgSrc={imgPrueba13} imgDescription="image 13" paddingTop={'5rem'} imgWidth={'22rem'} titleCard={'Titulo foto'} descriptionCard={'descripción foto'}/>
      <CardGalery imgSrc={imgPrueba15} imgDescription="image 15" imgWidth={'35rem'} titleCard={'Titulo foto'} descriptionCard={'descripción foto'}/>
      <CardGalery imgSrc={imgPrueba16} imgDescription="image 16" paddingTop={'5rem'} imgWidth={'22rem'} titleCard={'Titulo foto'} descriptionCard={'descripción foto'}/>
    </div>
  );
}

export default Galery;
