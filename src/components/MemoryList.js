import React from "react";
import PropTypes from "prop-types";
import Memory from "./Memory";
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';


function MemoryList(props){
  useFirestoreConnect([
    {collection: 'memories'}
  ]);
  const memories = useSelector(state => state.firestore.ordered.memories);
  if (isLoaded(memories)){
    return (
      <>
        <hr/>
        {memories.map((memory)=>{
          return <Memory
          whenMemoryClicked = {props.onMemorySelection}
          name = {memory.name}
          description = {memory.description}
          date = {memory.date}
          id = {memory.id}
          key={memory.id} />
        })}
      </>
    );
  } else {
    return (
      <>
        <h3> Loading... </h3>
      </>
    );
  }
}

MemoryList.propTypes={
  onMemorySelection: PropTypes.func
}

export default MemoryList;