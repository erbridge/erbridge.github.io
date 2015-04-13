---
title: "The Island - Dev Log #1: Setting Sail"
date: 2015-04-03 16:22
categories:
  - blog
  - gamedev
  - the-island
hashtags:
  - gamedev
  - theisland
---
We've already decided we're going to make *The Island* in 3d, so picking an engine is an obvious starting point. As a Linux user (and reluctant Windows dual booter), I need an engine that I can develop on Linux with. I've used Unity on OS X in the past, and its richly featured editor has spoiled my expectations of what an engine should deliver. That coupled with the need for 3d support doesn't leave many choices. While lots of engines support Linux as a build target, very few have any kind of visual IDE or editor that will run on the platform.


## Godot

At first, we decided to try out [Godot](http://www.godotengine.org/){:target="_blank"}, an [open source](https://github.com/okamstudio/godot){:target="_blank"} engine with 2d and 3d support, an integrated code editor, a wide range of build targets, and an editor which, while not being as sleek as Unity's, appeared to be sufficient for our needs.

**Spoiler Alert**: it wasn't...


### Scenes

Godot uses a nested scene structure, where rather than having one scene populated with a collection of objects, each object can actually be a scene in itself. This means that each scene can be self contained and run in isolation, making working on individual parts of the game much easier.

On the other hand, modifying scenes in tandem can get a bit tedious. You need to keep switching scenes to make changes, since there's currently no way to push modifications into the source scene once it's imported into another one.


### Editor

[![Godot test scene](/images/blog/godot-test-scene.png)](/images/blog/godot-test-scene.png){:target="_blank"}

Godot's editor looks a lot like that of Unity. It's well featured, with a scene view, a node tree graph, a property editor, etc. It also has a built in script editor with code completion and a built in debugger. I prefer to use [Sublime Text](http://www.sublimetext.com/){:target="_blank"} for editing code, but Godot's support for external editors is pretty lacking, particularly when it comes to debugging. I found myself constantly fighting files opened by Godot due to an error prompting about how to handle a reload after making a change in Sublime.

[![Do you want to revert that change?](/images/blog/godot-reload-prompt.png)](/images/blog/godot-reload-prompt.png){:target="_blank"}

The editor has a number of other usability issues, for example: no laptop numpad alternative function support (home, end, delete); no visual distinction between radio and check buttons; and reliance on a middle mouse button for scene navigation. There's also no live view of a running game (though it is planned for a future release).


### Scripting

Godot uses its own scripting language, [GDScript](https://github.com/okamstudio/godot/wiki/gdscript){:target="_blank"}, which is a typed version of Python with a subset of its features (though programming directly in C++ is also possible). Despite being familiar with Python, I've had some teething problems learning GDScript, mostly due to API mismatches with Python proper, and the language's lack of built in functions. Thankfully someone had already made a [GDScript syntax plugin for Sublime](https://github.com/beefsack/GDScript-sublime){:target="_blank"}, so at least I didn't have to fight it in unformatted plain text...


### Documentation

Godot's documentation exists in the [GitHub wiki](https://github.com/okamstudio/godot/wiki){:target="_blank"}, and is the place where the engine falls down the most. Many of the [class references](https://github.com/okamstudio/godot/wiki/class_list){:target="_blank"} have no descriptions, and the function names can be [pretty opaque](https://github.com/okamstudio/godot/wiki/class_physicsserver){:target="_blank"}. The [tutorials](https://github.com/okamstudio/godot/wiki#tutorials){:target="_blank"} are pretty good, however, and combined with the [demo projects](https://github.com/okamstudio/godot/tree/master/demos){:target="_blank"}, there was more than enough to get started, at least on the programming side.


### Summary

Godot has promise, but the clunkiness of the UI, the lack of documentation (particularly for Luke), and the fact that it's new and relatively untested, all meant that after a few weeks of playing aorund with it, we decided to look elsewhere.


## Unreal Engine 4

Luckily, after getting back from GDC I discovered that the newer versions of Unreal Engine 4 have an editor that runs on Linux, and version 4.7 added lots of stability fixes. It's still marked as "not ready for use in production", but I've never paid much attention to that kind of warning...

I use [Arch Linux](https://www.archlinux.org/){:target="_blank"}, which is supposed to have some build issues from what I've read, but after setting up my Epic Games account, connecting it to GitHub, and checking out the repository, I was only missing a couple of dependencies to get the build working: `mono` and `clang35` (and `dos2unix`, though I'm not convinced I actually need that). Then it was just a matter of running the build steps, and the editor launched!

[![UE4 start screen](/images/blog/ue4-start-screen.png)](/images/blog/ue4-start-screen.png){:target="_blank"}

The next hurdle I hit was in getting Unreal to let me use C++. Unreal needs you to have an IDE set up before you can use code (which I think is a bit strange...), and out of the box, it only supports [KDevelop](https://www.kdevelop.org/){:target="_blank"}. After a bit of digging, I found [SensibleEditorSourceCodeAccess](https://github.com/fire/SensibleEditorSourceCodeAccess){:target="_blank"}, which I adapted to run Sublime Text, with little problem (SublimeTextSourceCodeAccess is available [here](https://github.com/erbridge/SublimeTextSourceCodeAccess){:target="_blank"}).

With that set up. I created a new blank project to get going.

[![UE4 new project](/images/blog/ue4-new-project.png)](/images/blog/ue4-new-project.png){:target="_blank"}

I'm sure there will be some teething issues to come, but let's see how it goes from here!


## Technical Prototype

To test the engine, we've decided to build a technical prototype: a textured island with an animated boat or two, a player character with a follow camera, an NPC and some basic interaction UI. The next few posts will probably be about that.
