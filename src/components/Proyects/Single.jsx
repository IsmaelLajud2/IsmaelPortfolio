import { useRef ,useState,useEffect} from 'react';
import '../Proyects/PorfolioStyles.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import ExternalLink from '../../svg/ExternalLink';

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const [flip, setFlip] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

 
  const handleCardFlip = () => {
    if (isMobile) {
      setFlip(!flip);
    }
  };


  return (
    <section>
      <div className='card-container'>
        <div className='proyect-wrapper'>
        <motion.div
            className='imagen-proyect-container'
            ref={ref}
            style={{ perspective: '1000px' }}
          >
            
            <motion.div
              className='Card'
              initial={{ rotateY: 0 }}
              animate={{ rotateY: flip ? 180 : 0 }}
              whileHover={!isMobile ? { rotateY: 180 } : {}}
              transition={{ duration: 0.7 }}
              onClick={handleCardFlip} 
              style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                transformStyle: 'preserve-3d',
              }}
            >
             
              <motion.video
                autoPlay
                loop
                muted
                alt='proyects-imagen'
                className='front-imagen-proyect'
                src={item.video}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  backfaceVisibility: 'hidden',
                  cursor: 'pointer',
                  transform: 'rotateY(0deg)',
                }}
              />

           
              <motion.div
                className='back'
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  display: 'flex',
                  background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
                  justifyContent: 'center',
                  alignItems: 'center',
                
                  width: '100%',
                  height: '100%',
                  backfaceVisibility: 'hidden',
                  cursor: 'pointer',
                  borderRadius:"10px",
                  transform: 'rotateY(180deg)',
                  color:"#FFFFFF"
                }}
              >
                <div className='div-logo'>
                  <h1 className='logo-title'>Para realizar este proyecto  utilizé:</h1>
                  <ul className='logo-list' >
                {
                  item && item.lenguajes.map((lenguaje,index) =>(
                  
                   

                      <li   key={index}>
                        <img className='logo' src={lenguaje}/>
                        </li>
                  
                    
                   
                  )
                  
                  
                  )
                }
                    </ul>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div style={{ y }} className='proyect-text-container'>
            <h2 className='proyect-title'>{item.title}</h2>
            <p className='proyect-description'>{item.description}</p>
            <button className='proyect-button'>
              <a href={item.link} target='_blank' rel='noopener noreferrer'>
                Visitar <ExternalLink  />
              </a>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Single;
