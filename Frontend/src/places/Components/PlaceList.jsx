
import React,{ useContext } from 'react'

import { useParams } from 'react-router-dom';
import PlaceItem from './PlaceItem'
import Button from '../../shared/Components/formElements/Button';
import Card from '../../shared/Components/Card';
import { AuthContext } from '../../shared/Context/auth-context';



import "./PlaceList.css"


function PlaceList(props) {
  const auth = useContext(AuthContext)
  const userPageId = useParams().userId

  if (props.items.length===0){
    return(
<div className="place-list center">
{auth.userId!==userPageId ? (<Card>
  <h2>
   User has not uploaded any place, Boring user
  </h2>

</Card>):(<Card>
  <h2>
    No places found. Maybe create one?
  </h2>
  <Button to="/places/new" >Add Place</Button>
</Card>)
}</div>
    )
  }
  return (
<ul className="place-list">
{props.items.map(item=>{ return  <PlaceItem 
       key={item.id} 
       id={item.id}
       image={item.image}
       title={item.title}
       desc={item.description}
       address={item.address}
       creatorId={item.creator}
       coordinates={item.location}
       onDelete={props.onDeletePlace}

      />
    })}
</ul>
  )
}

export default PlaceList