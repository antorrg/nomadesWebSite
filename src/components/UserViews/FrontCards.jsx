import {Suspense} from 'react'
import styled from 'styled-components'
import FrontCard from './FrontCard'

const FCards = styled.div`
width: 85vw;
  margin-left: 8rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr ;
  grid-gap: 1.25rem; 
  @media (max-width: 768px) {
        grid-template-columns: 1fr;
        width:100vw;
        align-items:center;
        justify-items: center;
    }
`
export default function FrontCards ({projects}){


    
    return(
        <Suspense fallback={<div>Loading...</div>}>
        <FCards>
        {projects?.map((project)=>
        <FrontCard key={project.id} project={project}/>
         )}
        </FCards>
         </Suspense>
    )
}