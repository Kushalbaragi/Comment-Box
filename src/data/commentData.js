import {v4 as uuid} from 'uuid';

export let commentData = async () => [
  {
    id:uuid().slice(0,8),
    userName: "level1",
    comment: "growth is immensive!",
    date: dateGenerator(),
    time: timeGenerator(),
    child: [
      {
        id:uuid().slice(0,8),
        userName: "level2",
        comment: "growth is immensive!",
        date: dateGenerator(),
        time: timeGenerator(),
        child: [
          {
            id:uuid().slice(0,8),
            userName: "level4",
            comment: "growth is immensive!",
            date: dateGenerator(),
            time: timeGenerator(),
            child: [],
          },
        ],
      },
    ],
  },
];

export let logo = "https://www.adcuratio.com/assets/images/header/logo.png";

export function dateGenerator() {
  return new Date().toLocaleDateString();
}

export function timeGenerator() {
  let date = new Date();
  return date.getHours() + ":" + date.getMinutes();
}

export  let UUID=()=>{
  return uuid().slice(0,8);
}

function commentTemplate(comment,name){
  return {
    id: UUID(),
    comment: comment,
    userName: name,
    date: dateGenerator(),
    time: timeGenerator(),
    child:[]
  };
}

export function deleteObj(arr,id){
  for(let obj of arr){
    if(obj.id===id){
      return arr.filter(a=>a.id!==id);
    }
    if(obj.child){
      return arr.filter(a=>a.id!==id);
    }
  }
}

export function editObj(arr,text,id){
      for(let obj of arr){
        if(obj.id===id){
          obj.comment=text
          return arr
        }
        if(obj.child){
          let returnObj=editObj(obj.child,id)
          if(returnObj) return returnObj;
        }
      }
      return undefined;
}

export function replyObj(arr,commentReply,id){
  let reply=commentTemplate(commentReply,'kushal baragi');
  for(let obj of arr){
    if(obj.id===id){
     obj.child=[...obj.child,reply];
      return arr;
    }
    else if(obj.child){
      let hold=replyObj(obj.child,commentReply,id);
      if(hold) {
        return [...obj.child,hold]
      }
    }
  }
  return undefined;
      
}


// {
//   id:uuid().slice(0,8),
//   userName: "Praveen Games",
//   comment: "what is the growth last year?",
//   date: dateGenerator(),
//   time: timeGenerator(),
//   child: [
//     {
//       id:uuid().slice(0,8),
//       userName: "Unknown",
//       comment: "Average! Manager is not supportive",
//       date: dateGenerator(),
//       time: timeGenerator(),
//       child: [
//         {
//           id:uuid().slice(0,8),
//           userName: "Kushal Baragi",
//           comment: "its great place to work!!",
//           date: dateGenerator(),
//           time: timeGenerator(),
//           child: [
//             {
//               id:uuid().slice(0,8),
//               userName: "Kushal Baragi",
//               comment: "its great place to work!!",
//               date: dateGenerator(),
//               time: timeGenerator(),
//               child: [],
//             }
//           ],
//         },
//       ],
//     },
//   ],
// },