export let commentData = async () => [
  {
    id: 1,
    userName: "Kushal Baragi",
    comment: "its great place to work!!",
    date: dateGenerator(),
    time: timeGenerator(),
    child: [
      {
        id: 2,
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
    id: 3,
    userName: "Mustakim Pendari",
    comment: "growth is immensive!",
    date: dateGenerator(),
    time: timeGenerator(),
    child: [],
  },
  {
    id: 4,
    userName: "Praveen Games",
    comment: "what is the growth last year?",
    date: dateGenerator(),
    time: timeGenerator(),
    child: [
      {
        id: 5,
        userName: "Unknown",
        comment: "Average! Manager is not supportive",
        date: dateGenerator(),
        time: timeGenerator(),
        child: [
          {
            id: 10,
            userName: "Kushal Baragi",
            comment: "its great place to work!!",
            date: dateGenerator(),
            time: timeGenerator(),
            child: [
              {
                id: 109,
                userName: "Kushal Baragi",
                comment: "its great place to work!!",
                date: dateGenerator(),
                time: timeGenerator(),
                child: [],
              }
            ],
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
