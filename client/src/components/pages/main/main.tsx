/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useCallback, useEffect, } from 'react';
import styled from "styled-components/macro"

import { CreateCard } from '../../organisms/create-card'
import { CreateCollection } from '../../organisms/create-collection'

import { Card } from '../../../types'
import { CardComponent } from '../../organisms/card'
import { Statistics } from '../../organisms/statistics'
import { Lesson } from '../../organisms/lesson'
import { Button } from '../../molecules/button'

import { useMainContext } from '../../../utils'

import '../../../theme/variables.scss'
interface MainProps {
}


export const Main: FC<MainProps> = () => {
   const { cards, error, fetchCards } = useMainContext()
   const context = useMainContext()
   console.log(context)
   useEffect(() => {
      fetchCards()
   }, [])

   const toggleTestMode = useCallback(
      (_e) => {
         const testMode = context.isTestMode
         context.setIsTestMode(!testMode)
      },
      [context],
   )

   return (
      <MainWrapper>
         <Button label="Test Mode" onClick={toggleTestMode} className="test-button" />
         <Statistics />
         <MenuWrapper>
            <CreateCard />
         </MenuWrapper>

         <Lesson />

         <CardsWrapper>
            {cards && cards.map((card: Card) => {
               return <CardComponent card={card} key={card._id} />
            })}
         </CardsWrapper>
         {error && (
            <h1>Error while loading the cards</h1>
         )}
         <CreateCollection />
      </MainWrapper>
   )
};

const MainWrapper = styled.div`
   display:flex;
   flex-direction:column;
   background-color:var(--tundora);

   .test-button{
   max-width:100px;
}
`

const MenuWrapper = styled.div`
`

const CardsWrapper = styled.div`
display:flex;

`