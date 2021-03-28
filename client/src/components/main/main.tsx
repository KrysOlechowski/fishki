import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components'

import { CreateCard } from '../create-card'
import { getAllCards } from '../../utils';

import { Card } from '../../types'
import { CardComponent } from '../../organisms/card'
interface MainProps {
}


export const Main: FC<MainProps> = () => {
   const [cards, setCards] = useState<Array<Card> | null>(null)
   const [hasError, setError] = useState(false)

   useEffect(() => {
      getAllCards().then(cards => {
         console.log(cards)
         setCards(cards)
      }).catch(() => setError(true))
   }, [])

   return (
      <MainWrapper>
         <MenuWrapper>
            <CreateCard />
         </MenuWrapper>

         <CardsWrapper>

            {cards && cards.map(card => {
               return <CardComponent card={card} key={card._id} />
            })}
         </CardsWrapper>
         {hasError && (
            <h1>Error while loading the cards</h1>
         )}
      </MainWrapper>
   )
};

const MainWrapper = styled.div`
display:flex;
flex-direction:column;
`

const MenuWrapper = styled.div`

`

const CardsWrapper = styled.div`
display:flex;
`
