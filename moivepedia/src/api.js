export async function getReviews(order = "createAt") {
  const query = `order=${order}`;
  const response = await fetch(
    `https://learn.codeit.kr/0609/film-reviews?${query}`
  );
  const body = await response.json();
  return body;
}

//await > 네트워크 request를 기다렸다가
// > response에서 json함수를 호출하고
// > json 변환이 끝나면 body를 리턴한다.
