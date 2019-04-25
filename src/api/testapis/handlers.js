export let hello = (request, h) => {
  console.log(request);
  return 'Hello'+h;
};

