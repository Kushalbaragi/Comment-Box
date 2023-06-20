import { v4 as uuid } from "uuid";

export let logo = "https://www.adcuratio.com/assets/images/header/logo.png";

export function dateGenerator() {
  return new Date().toLocaleDateString();
}

export function timeGenerator() {
  let date = new Date();
  return date.getHours() + ":" + date.getMinutes();
}

export let UUID = () => {
  return uuid().slice(0, 8);
};

export const editNode = (tree, commentId, value) => {
  if (tree.id === commentId) {
    tree.comment = value;
    return tree;
  }

  tree.child.map((ob) => {
    return editNode(ob, commentId, value);
  });

  return { ...tree };
};

export const deleteNode = (tree, id) => {
  for (let i = 0; i < tree.child.length; i++) {
    const currentItem = tree.child[i];
    if (currentItem.id === id) {
      tree.child.splice(i, 1);
      return tree;
    } else {
      deleteNode(currentItem, id);
    }
  }
  return tree;
};

export function commentTemplate(comment, name) {
  return {
    id: UUID(),
    comment: comment,
    userName: name,
    date: dateGenerator(),
    time: timeGenerator(),
    child: [],
  };
}

export const insertNode = function (tree, commentId, item, name) {
  if (tree.id === commentId) {
    tree.child.push(commentTemplate(item, name));

    return tree;
  }

  let latestNode = [];
  latestNode = tree.child.map((ob) => {
    return insertNode(ob, commentId, item, name);
  });

  return { ...tree, child: latestNode };
};
