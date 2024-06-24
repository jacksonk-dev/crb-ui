export async function postData(url: string, data?: null | unknown, requestParams?: undefined | {[key: string]: string}) {

  if(!data && requestParams) {

    url += '?';

    for(const key in requestParams) {
      url += `${key}=${requestParams[key]}`;
    }
  }

  const response = await fetch(url, {
    method: 'POST',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  
  return response.json();
}