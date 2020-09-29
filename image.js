//Write a program that takes a plaintex file as
//an aurgument and downloads all images//And stores then on local hard disk (LS)

//Priorities:
//1. Separation of concerns: taken care by different components
//on this application: function and a class, each with its own task

//2. Testing ?

//3. Error handling: by making the local storage a promise,
//error can be handled by a catch feature, in case there are no images to download.

function imageFetcher(url) {
  // console.log("image fetcher");
  const downloadImages = [];
  for (let i = 0; i < url.length; i++) {
    const element = url[i];
    const myImages = downloadImages.push("url"); //push the urls to the empty []
  }

  return downloadImages;
}

console.log(imageFetcher("url"));

//Local Storage
