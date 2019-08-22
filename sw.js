console.log('Hello from service-worker.js');

importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

workbox.precaching.precacheAndRoute([
  {
    "url": "css/style.css",
    "revision": "08c24ee4ea6a48f1dd16201b76c589cd"
  },
  {
    "url": "img/box1.png",
    "revision": "acae9a5a589ec78f323d58990c5e43d0"
  },
  {
    "url": "img/box2.png",
    "revision": "4037bb8da3472ebf7e369d0d7c163b90"
  },
  {
    "url": "img/box3.png",
    "revision": "8c74d7236da4cb57283e3fca052253fa"
  },
  {
    "url": "img/showcase1.jpg",
    "revision": "259dab902f8eb7e9559fd3e6d729034f"
  },
  {
    "url": "index.html",
    "revision": "fcbf9f053ab9e8e052b21d6f4b07ea50"
  },
  {
    "url": "manifest.json",
    "revision": "f1c5d2bf7b927e3f15258002fd5ebea2"
  },
  {
    "url": "maths/maths.html",
    "revision": "b3167d87ef88dd71aa4cdc178d71acac"
  },
  {
    "url": "other/other.html",
    "revision": "54524599fc79b59fd089b92adc02bcd2"
  },
  {
    "url": "statistics/statistics.html",
    "revision": "f2da3ab6759965b5271bb4ebbdd9fa75"
  }
]);

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI notify the user they can add to home screen
  showInstallPromotion();
});

btnAdd.addEventListener('click', (e) => {
  // hide our user interface that shows our A2HS button
  btnAdd.style.display = 'none';
  // Show the prompt
  deferredPrompt.prompt();
  // Wait for the user to respond to the prompt
  deferredPrompt.userChoice
    .then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
      deferredPrompt = null;
    });
});

window.addEventListener('appinstalled', (evt) => {
  console.log('a2hs installed');
});
