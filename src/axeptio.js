export const loadAxeptio = () => {
  window.axeptioSettings = {
    clientId: "6437627266c987ad7f30b56b",
    cookiesVersion: "elitizon-en",
  };
  
  const script = document.createElement("script");
  script.async = true;
  script.src = "//static.axept.io/sdk.js";
  
  const head = document.getElementsByTagName("head")[0];
  head.appendChild(script);
};
