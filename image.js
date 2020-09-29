//Write a program that takes a plaintex file as
//an aurgument and downloads all images//And stores then on local hard disk (LS)

//Priorities:
//1. Separation of concerns: taken care by different components
//on this application: function and a class, each with its own task

//2. Testing ?

//3. Error handling: by making the local storage a promise,
//error can be handled by a catch feature, in case there are no images to download.

//Local Storage--> LS

class Store {
  //1. We get the image's URLs
  static getUrls() {
    let urls = [];
    if (localStorage.getItem("url") === null) {
      urls = [];
    } else {
      urls = JSON.parse(localStorage.getItem("urls"));
    }
    return urls;
  }
  //2. After, we add them to LS
  static addImagesLocalStorage(url) {
    const myUrls = Store.getUrls();
    myUrls.push(url);
    localStorage.setItem("urls", JSON.stringify(myUrls));
  }
}

function imageFetcher(url) {
  // console.log("image fetcher"); //tests the image fetcher
  //1. Define an empty array to place our images
  const downloadImages = [];
  //2. Iterate
  for (let i = 0; i < url.length; i++) {
    const element = url[i];
    const myImages = downloadImages.push("url"); //Push the urls to the empty []
  }

  Store.addImagesLocalStorage(url);

  return downloadImages;
}

console.log(imageFetcher("url"));
