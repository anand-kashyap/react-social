const posts = [
  {
    "id": 1,
    "title": "Test Post 1",
    "text": "lorem ipsum one two",
    "hasImage": false,
    "imageUrl": "",
    "createdBy": "anand_ak",
    "createdAt": "2020-02-14"
  },
  {
    "id": 2,
    "title": "Test Post 2",
    "text": "lorem ipsum one two three",
    "imageUrl": "",
    "hasImage": false,
    "createdBy": "arun",
    "createdAt": "2020-02-15"
  },
  {
    "id": 3,
    "title": "Test Post 3",
    "text": "lorem ipsum one four",
    "imageUrl": "",
    "hasImage": false,
    "createdBy": "tarun",
    "createdAt": "2020-02-16"
  },
  {
    "id": 4,
    "imageUrl": "",
    "title": "Test Post 4",
    "text": "lorem ipsum one six",
    "hasImage": false,
    "createdBy": "bruce",
    "createdAt": "2020-02-17"
  }
];
const comments = (() => {
  const ids = [1, 2, 3, 4];
  return ids.map(v => ({ // ! in api link only object ids & keep each comment singular as a document
    postId: v,
    comments: [
      {
        id: v,
        user: 'rahul',
        text: 'lorem ipsum one two'
      },
      {
        id: ++v,
        user: 'vicky',
        text: 'lorem ipsum three two'
      },
      {
        id: ++v,
        user: 'deepak',
        text: 'lorem ipsum seven two'
      },
      {
        id: ++v,
        user: 'abi',
        text: 'lorem ipsum eight two'
      }
    ]
  }))
})();

export { posts, comments };
export default posts;