let initialState={
  list:[],
  findList:[]
}

function reducer(state=initialState,action){
  switch(action.type){
    case "INSERT":
      return  {...state,list:[...state.list,{id:action.payload.memberNum,name:action.payload.name,num:action.payload.num}]}

    case "DELETE":
      state.list.splice(action.payload.id-1,1)
      return {...state,list:[...state.list]}

    case "FIND":
      action.payload.index.forEach((index)=> state.findList.push(state.list[index]));
      console.log(state.findList)
      return {...state,list:state.findList}

    default:
      return {...state}

   }
}

export default reducer