# moodly
Talk to your screen and watch it paint. [Try it here](https://jamesformica.github.io/moodly)

## what is?
I love playing with canvas apps and wanted to create an app where you can talk to the screen and based on the **_sentiment_** of what you are saying it would start painting.

So as you talk, based on whether the sentiment of the sentence is HAPPY/NEUTRAL/SAD it will paint in different styles and different colours.

## example
![snapshot 1](/img/snapshot3.png)
![snapshot 2](/img/snapshot1.png)
![snapshot 2](/img/snapshot2.png)
![snapshot 2](/img/snapshot4.png)

## how I do?
This app uses cognitive services from Microsoft Azure, specifically the Speech API and the Text API. I have included my subscription keys that allow 5000 calls per month. You can get your own keys for **FREE** by following these links to the
[Speech API](https://azure.microsoft.com/en-us/services/cognitive-services/speech/) and the
[Text API](https://azure.microsoft.com/en-gb/services/cognitive-services/text-analytics/).

## how use?
This is what all the icons on the right side of the canvas do:
* **keys**: opens a modal where you can enter your own api keys
* **mic on**: starts/resumes listening to you so you can ramble on like a madman
* **mic off**: stops listening to you so you can take a breather
* **restart**: literally refreshes the page so you can start again cause I'm lazy like that
* **script**: opens a modal displaying all the things you've said and what sentiment they were given (pretty neato)
* **image**: downloads whatever is currently on the canvas as an .png (super neato). NOTE: the downloaded image will have a transparent background, not a white one, but you can add that back easily in your favourite pirated version of photoshop 😉

## what now?
Why are you still reading this? Go talk to a screen and make some ridiculous art! 🎨
