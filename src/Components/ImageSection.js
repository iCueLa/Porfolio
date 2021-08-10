import React from 'react'
import styled from 'styled-components';
import resume from '../img/resume.jpg';
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt=""/>
            </div>
            <div className="right-content">
                <h4>Hola soy <span>Javier Kevin Ojeda</span></h4>
                <p className="paragraph">
                    Nací el 27 de diciembre de 1998 en Argentina. Soy apasionado por la tecnología y el deporte desde que tengo memoria, a lo largo de mi vida laboral me he encontrado con muchos retos, y ser autodidacta me ha ayudado a resolverlos. Trabajar en equipo y buscar el exito grupal, es algo que considero muy importante, aunque nunca descarto algún reto personal. Como desarrollador soy proactivo, organizado y metodico, me adapto facilmente ante cambios y estoy abierto a aprender nuevas tecnologías y lenguajes.
                    
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Nombre Completo</p>
                        <p>Edad</p>
                        <p>Nacionalidad </p>
                        <p>Languajes </p>
                        <p>Nacionalidad</p>
                        <p>Especialidad</p>
                    </div>
                    <div className="info">
                        <p>: Javier Kevin Ojeda</p>
                        <p>: 22</p>
                        <p>: Argentina </p>
                        <p>: Español </p>
                        <p>: Buenos Aires, Argentina</p>
                        <p>: Full Stack Developer</p>
                    </div>
                </div>
                <PrimaryButton title={'Download Cv'} />
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;
