import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Resumen'} span={'Resumen'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'EXPERIENCIA LABORAL'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={`Jul-Ago 2021`} 
                        title={'TEACHING ASSISTANT'}
                        subTitle={'Henry Bootcamp '}
                        text={`Cordinacion y asistencia a estudiantes durante su trayecto en el
                                bootcamp.
                                Planificación, desarrollo de actividades y evaluación de dudas.
                                Programa:
                                Javascript, React, Node, Express, PostgreQSL, Sequelize, entre
                                otras.`} 
                    />
                    
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Experiencia Academica'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'Jul 2021'} 
                        title={'FULL STACK DEVELOPER - "POKEMON APP" - JUL 2021'}
                        subTitle={'JUL 2021'}
                        text={`Desarrollo de una SPA (Single Page Application) utilizando React para
                                el Front End y redux como state management. Todos los componentes
                                fueron desarrollados con CSS sin uso de librerías externas.
                                La SPA consume datos de una API (POKEAPI) a través de un Back End
                                desarrollado en Node.js utilizando express, agregando nuevas
                                funcionalidades a la API original.
                                Algunos features del proyecto: Cache de búsquedas, ordenamiento y
                                filtros, formularios para la creación de nuevos pokemones y paginado
                                del mismo.
                                `} 
                    />
                    
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'FORMACION'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'2021 - 2021'} 
                        title={'Full Stack Developer'}
                        subTitle={'Henry Bootcamp'}
                        text={`700 horas de cursado teórico-practico Formación en tecnologias Front-end y Back-end.`} 
                    />
                    <ResumeItem 
                        year={''} 
                        title={'Bachiller en economía'}
                        subTitle={'Formacion nivel medio'}
                        text={'E.M.S nº1 Guernica - Buenos Aires, Argentina'} 
                    />
                </div>
                
                
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume
