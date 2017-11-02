# Funny Group Chat

Group chat with ReactJS & Firebase

### Features:
* Group chat
* Select text background color
* Send emoji
* Use emoji as avatar

[**DEMO**](https://nutanek.github.io/funny-group-chat/)

<p align="center">
    <img src="https://user-images.githubusercontent.com/26755833/32313203-441671d4-bfd4-11e7-9c47-6090ce10e1b8.jpg" alt="Funny Group Chat"/>
</p>

## Installation

#### Setup Firebase
1. Initial Firebase database
2. Change Database rule 
```json
{
  "rules": {
    ".read": "auth != null",
    ".write": "auth != null",
    "profiles": {
      ".indexOn": ["created"]
    },
    "messages": {
      ".indexOn": ["created"]
    }
  }
}
```
3. Change file **config.js.sample** to **config.js**
4. Copy Firebase API configs to **config.js**

#### Setup Group Chat
```bash
yarn install
yarn start
```

## Compilation
```bash
yarn build
```
You will get **build** folder and you can use it on production


## Authors

* **NutAnek** -  [https://github.com/nutanek](https://github.com/nutanek)

## License

Released under the [MIT License](http://www.opensource.org/licenses/MIT).fit in URLs
