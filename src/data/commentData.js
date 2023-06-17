import {v4 as uuid} from 'uuid';

export let commentData = async () => [
  {
    id:uuid().slice(0,8),
    userName: "Kushal Baragi",
    comment: "its great place to work!!",
    date: dateGenerator(),
    time: timeGenerator(),
    child: [
      {
        id:uuid().slice(0,8),
        userName: "Mitchel Marsh",
        comment: "love the work culture, great",
        date: dateGenerator(),
        time: timeGenerator(),
        child: [
          
        ],
      },
    ],
  },

  {
    id:uuid().slice(0,8),
    userName: "Mustakim Pendari",
    comment: "growth is immensive!",
    date: dateGenerator(),
    time: timeGenerator(),
    child: [],
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

export function findObj(arr,id){
for(let obj of arr){
  if(obj.id===id){
    return obj;
  }
  if(obj.child){
    let returnObj=findObj(obj.child,id)
    if(returnObj) return returnObj;
  }

}
return undefined;
}

export function deleteObj(arr,id){
  for(let obj of arr){
    if(obj.id===id){
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
export function reply(arr,id){
       

        for(let obj of arr){
          if(obj.id===id){
            return arr.filter(ele=>ele.id!==id)
          }
          if(obj.child){
            let returnObj=findObj(obj.child,id)
            if(returnObj) return returnObj;
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