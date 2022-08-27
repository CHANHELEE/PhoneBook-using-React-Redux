import React from 'react'
import SearchBox from './SearchBox'
import { useSelector } from 'react-redux'
import List from './List'
const PhoneList = () => {
  
  const list = useSelector(state => state.list);
  return (
    <div>
      <div className="list">
        <SearchBox/>
        <br></br>
        <div className="num">Members : {list.length}</div>

        {list.map((member) => <List member={member} key={member.id}/>)}
      </div>
      

    
    </div>
  )
}

export default PhoneList