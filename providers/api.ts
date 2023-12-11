import articlesExample from '../static/articleExample';

export default async function getArticles() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(articlesExample);
    }, 1500);
  });
}