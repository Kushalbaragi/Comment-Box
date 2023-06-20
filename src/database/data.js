import {v4 as uuid} from 'uuid';
import { dateGenerator,timeGenerator } from '../helpers/helpers';

export const commentData ={
  id:1,
  child:[{
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
              userName: "level3",
              comment: "growth is immensive!",
              date: dateGenerator(),
              time: timeGenerator(),
              child: [],
            },
          ],
        },
      ],
    }
    ]
    }