import { Post } from './Post';
const baseUrl = 'https://api.poorclu.site/api/v1';
const url = `${baseUrl}/posts`;

function translateStatusToErrorMessage(status: number) {
  switch (status) {
    case 401:
      return 'Please login again.';
    case 403:
      return 'You do not have permission';
    default:
      return 'There was an error here. Please try again.';
  }
}

function checkStatus(response: any) {
  if (response.ok) {
    return response;
  } else {
    const httpErrorInfo = {
      status: response.status,
      statusText: response.statusText,
      url: response.url,
    };
    console.log(`log server http error: ${JSON.stringify(httpErrorInfo)}`);

    let errorMessage = translateStatusToErrorMessage(httpErrorInfo.status);
    throw new Error(errorMessage);
  }
}

function parseJSON(response: Response) {

  return response.json();
}

// eslint-disable-next-line
// function delay(ms: number) {
//   return function (x: any): Promise<any> {
//     return new Promise((resolve) => setTimeout(() => resolve(x), ms));
//   };
// }

function convertToPostModels(data: any[]): any {
  const clone: any = data;

  let posts: Post[] = Object.entries(clone.data.data).map(function (item, i) {
  let cloneItem: any = item[1];

    return new Post({
      id: cloneItem.id,
      title: cloneItem.title,
      title_tag: cloneItem.title_tag,
      summary: cloneItem.summary,
      image: cloneItem.image,
      content: cloneItem.content,
      post_status_id: cloneItem.post_status_id,
      user: cloneItem.user,
      users_id: cloneItem.users_id,
      created_at: cloneItem.created_at,
    });
  });

  return [posts, clone.data];
}

function convertToPostModel(item: any): Post {
  let clonePost: any = item.data;
  return new Post(clonePost);
}

const postAPI = {
  get(page = 1, limit = 20) {
    return fetch(`${url}?page=${page}&_limit=${limit}`)
      .then(parseJSON)
      .then(convertToPostModels)
      .catch((error: TypeError) => {
        throw new Error(
          'There was an error here. Please try again.'
        );
      });
  },
  find(title_tag: string) {
    return fetch(`${url}/${title_tag}`)
      .then(checkStatus)
      .then(parseJSON)
      .then(convertToPostModel);
  },
};

export { postAPI };
