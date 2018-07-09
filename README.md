# Chatagonia

This final project for Xtern Bootcamp 2018 Session 3.

## Day 8 Homework

* Set the current room when you click a room in the sidebar.

### Bonus Credit

* Sync the list of rooms with firebase (using `base.syncState()`).

### Super Mega Bonus Credit

* Sync each room's messages seperately.

### Super Mega Bonus Credit Hyper Fighting

* Add a form to create a new room.

## Day 7 Homework

ALL HYPER FIGHTING, ALL THE TIME!

* Add the [re-base](https://github.com/tylermcginnis/re-base) package to your project. At the command-line, type:

```shell
yarn add re-base
```

Confirm that `re-base` is now listed under `dependencies` in `package.json`.

* Update `base.js` to initialize and export `Rebase`.

_Hint_: `export default Rebase.createClass(db)`

* Use `base.syncState()` to sync your messages with Firebase.

## Day 6 Homework

* Create and style more components, based on the `chat-static` content. There should be approximately one css file per component.

### Super Mega Bonus Credit Hyper Fighting

* Make a `SignIn` component with a form that taks a user name or email.
* When the form is submitted, save that user in the `state` of the `App` component.
* When `state.user` is not set, show the `SignIn` component.
* When `state.user` is set, show the `Main` component.