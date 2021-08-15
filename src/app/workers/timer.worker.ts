/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  const response = `Worker for ${data}`;
  postMessage(response);
});
