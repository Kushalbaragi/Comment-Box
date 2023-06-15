export let commentData = async () => [
  {
    id: 1,
    userName: "Kushal Baragi",
    comment: "its great place to work!!",
    parentId: null,
    date: dateGenerator(),
    time:timeGenerator()
  },
  {
    id: 2,
    userName: "Mitchel March",
    comment: "love the work culture, great",
    parentId: null,
    date: dateGenerator(),
    time:timeGenerator()

  },
  {
    id: 3,
    userName: "Mustakim Pendari",
    comment: "growth is immensive!",
    parentId: null,
    date: dateGenerator(),
    time:timeGenerator()
  },
  {
    id: 4,
    userName: "Praveen Games",
    comment: "what is the growth last year?",
    parentId: 3,
    date: dateGenerator(),
    time:timeGenerator()

  },
  {
    id: 5,
    userName: "Unknown",
    comment: "Average! Manager is not supportive",
    parentId: null,
    date: dateGenerator(),
    time:timeGenerator()
  },
];

export let logo = "https://www.adcuratio.com/assets/images/header/logo.png";

export  function dateGenerator(){
    return new Date().toLocaleDateString();
  }

  export  function timeGenerator(){
    let date=new Date();
    return date.getHours() + ":" + date.getMinutes();
  }