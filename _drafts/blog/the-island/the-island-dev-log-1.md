---
title: "The Island - Dev Log #1: Setting Sail"
categories:
  - gamedev
  - the-island
hashtags:
  - gamedev
  - theisland
---
We've already decided we're going to make *The Island* in 3d, so picking an engine is an obvious starting point. As a Linux user (and reluctant Windows dual booter), I want an engine that I can develop on Linux with. I've used Unity on OS X in the past, and its richly featured editor has spoiled my expectations of what an engine should deliver. That coupled with the need for 3d support doesn't leave many choices. While lots of engines support Linux as a build target, very few have any kind of visual IDE or editor that will run on the platform.


## Godot

In the end we've decided to try out [Godot](http://www.godotengine.org/), an [open source](https://github.com/okamstudio/godot) engine with 2d and 3d support, an integrated code editor, a wide range of build targets, and an editor which, while not being as sleek as Unity's, appears to be sufficient for our needs.


### Scenes

Godot uses a nested scene structure, where rather than having one scene populated with a collection of objects, each object can actually be a scene in itself. This means that each scene can be self contained and run in isolation, making working on individual parts of the game much easier.

On the other hand, modifying scenes in tandem can get a bit tedious. You need to keep switching scenes to make changes, since there's currently no way to push modifications into the source scene once it's imported into another one.


### Editor

![Godot test scene](/images/blog/godot-test-scene.png)

Godot's editor looks a lot like that of Unity. It's well featured, with a scene view, a node tree graph, a property editor, etc. It also has a built in script editor with code completion and a build in debugger. I prefer to use [Sublime Text](http://www.sublimetext.com/) for editing code, but Godot's support for an external editor is pretty lacking, particularly when it comes to debugging. I find myself constantly fighting files opened by Godot due to an error prompting about how to handle a reload after making a change in Sublime.

![Do you want to revert that change?](/images/blog/godot-reload-prompt.png)

The editor has a number of other usability issues, for example: no laptop numpad alternative function support (home, end, delete); no visual distinction between radio and check buttons; and reliance on a middle mouse button for scene navigation. There's also no live view of a running game (though it is planned for a future release).

None of the issues are bad enough to prevent use in practice, however, and for the most part, it's pretty well designed.


### Scripting

Godot uses its own scripting language, [GDScript](https://github.com/okamstudio/godot/wiki/gdscript), which is a typed version of Python with a subset of its features (though programming directly in C++ is also possible). Despite being familiar with Python, I've had some teething problems learning GDScript, mostly due to API mismatches with Python proper, and the language's lack of built in functions. Thankfully someone had already made a [GDScript syntax plugin for Sublime](https://github.com/beefsack/GDScript-sublime), so at least I don't have to fight it in plain text...


### Documentation

Godot's documentation exists in the [GitHub wiki](https://github.com/okamstudio/godot/wiki), and is the place where the engine falls down the most. Many of the [class references](https://github.com/okamstudio/godot/wiki/class_list) have no descriptions, and the function names can be [pretty opaque](https://github.com/okamstudio/godot/wiki/class_physicsserver). The [tutorials](https://github.com/okamstudio/godot/wiki#tutorials) are pretty good, however, and combined with the [demo projects](https://github.com/okamstudio/godot/tree/master/demos), there's more than enough to get started.


## Technical Prototype

To test the engine, we've decided to build a technical prototype: a textured island with an animated boat or two, a player character with a follow camera, an NPC and some basic interaction UI. The next few posts will probably be about that.
