        import React from 'react'
        import Carditem from './Carditem'
        import './Cards.css'

        function Cards() {
            return (
                <div className='cards'>
                    <h1>Conheça nossos lindos pontos turísticos!</h1>
                    <div className='cards__container'>

                    <div className='cards__wrapper'>
                            <ul className='cards__items'>
                                <Carditem 
                                src='../images/aru1.jpg'
                                text='Explore nossas praias e visite nosso majestoso morro dos conventos'
                                label='Aventura'
                                path='/'
                                />
                                <Carditem 
                                src='../images/aru6.jpg'
                                text='Santuário Nossa Senhora Mãe dos Homens, construída em 1816'
                                label='Religião'
                                path='/'
                                />
                            </ul>
                    

                        
                            <ul className='cards__items'>
                                <Carditem 
                                src='../images/aru2.jpg'
                                text='O comércio e a prestação de serviços públicos e privados se destaca como a principal atividade econômica do município, fazendo de Araranguá uma cidade-polo regional.'
                                label='Cidade'
                                path='/'
                                />

                                <Carditem 
                                src='../images/aru3.jpg'
                                text='Dentre os lugares pelos quais passa o rio Araranguá, destacam-se o morro dos Conventos e a comunidade de Ilhas.'
                                label='Natureza'
                                path='/'
                                />

                                <Carditem 
                                src='../images/aru4.jpg'
                                text='Araranguá é conhecida como a “Cidade das Avenidas”. '
                                label='Avenidas'
                                path='/'
                                />
                            </ul>



                            </div>
                    </div>
                </div>
            );
        }

        export default Cards
