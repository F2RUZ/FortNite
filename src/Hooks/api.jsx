export async function getProduct() {
  const response = await fetch(`https://fortniteapi.io/v1/shop?lang=en`, {
    headers: {
      Authorization: "5da52d6b-a9ee2289-ce31a667-ad7fceb1",
    },
  }).then((res) => res.json());
  console.log(response);
  return response;
}
