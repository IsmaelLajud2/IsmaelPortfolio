import  {useState} from 'react'
import '../Contact/ContactStyles.css'
import CopySvg from '../../svg/CopySVG'

const CopyButton = () => {
    const [hover,setHover]=useState(false)
    const [texto, setTexto] = useState("Copiar");


    const textoParaCopiar = "ismael.lajud65@gmail.com";

const manejarClic = () => {
  navigator.clipboard.writeText(textoParaCopiar)
    .then(() => {
     setTexto("Copiado!")
     
      setTimeout(() => {
        setTexto("Copiar")
        setHover(false)
      },1000 );
      
    })
    .catch(err => {
      console.error("Error al copiar: ", err);
    });
};
  return (

   <>
  
  
    <CopySvg onMouseEnter={() =>setHover(true)}  onMouseLeave={()=>setHover(false)}
                className="copy-svg" onClick={manejarClic}/>
         {
            hover && (
           

                <span 
                title='click para enviarme un correo'
                style={{ 
                  position: 'absolute', 
                  top: '5px', 
                  left: '60%', 
                  transform: 'translateX(-100%)',
                  backgroundColor: 'white', 
                  padding: '5px 10px', 
                  border: '1px solid #ccc', 
                  borderRadius: '5px',
                  zIndex: 1,
                  color:"black",
                  whiteSpace: 'nowrap' 
                  
                }}
                
              > 
              {texto}
              </span>
            )
         }
           </>
  )
}

export default CopyButton