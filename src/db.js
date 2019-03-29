
const userList = [{
  id: '1',
  name: 'James',
  email: 'kirk@enterprise.com',
  age: 34
},
{
  id: '2',
  name: 'Sarah',
  email: 'sarah@enterprise.com',
  age: 24
},
{
  id: '3',
  name: 'Spock',
  email: 'spock@enterprise.com',
  age: 94
}]

const postList = [
{
  id: "1",
  title: "hitchhiker's guide to the galaxy",
  body: "See the galaxy.  Hitchhike and make friends.",
  published: true,
  author: "1",
},
{
  id: "2",
  title: "restaurant at the end of the universe",
  body: "See the galaxy.  Hitchhike and make friends.",
  published: true,
  author: "2",
},
{
  id: "3",
  title: "life, universe and everything",
  body: "See the galaxy.  Hitchhike and make friends.",
  published: true,
  author: "3",
},
{
  id: "4",
  title: "So long and thanks for all the fish",
  body: "See the galaxy.  Hitchhike and make friends.",
  published: true,
  author: "3",
}
]

const commentList = [
  {id: "1", text: "nice.", entry: "1" },
  {id: "2", text: "ditto.", entry: "1" },
  {id: "3", text: "cool.", entry: "2" },
  {id: "4", text: "excellent.", entry: "2" },
  {id: "5", text: "awesome.", entry: "3" },
  {id: "6", text: "fine.", entry: "3" },
  {id: "7", text: "impressive.", entry: "4" },
  {id: "8", text: "wow.", entry: "4" }
]

const db = {
  userList,
  postList,
  commentList,
}

export { db as default }
