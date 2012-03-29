======================
 NotesPlusPortability
======================
Make your Notes Plus notes readable on non-iPad browsers
========================================================

About
-----

`Notes Plus`_ is a great iPad note-taking tool.
Especially because it lets you take notes on top of PDFs.
Unfortunately, because of the way that it saves things, you can't view your notes on top of the thing that you took them on.
This could be a problem for you.

This is a stupid bash script that will convert PDF backgrounds into images so that they can be viewed in web browsers, and hack around some of the assumptions the NotesPlus developers make about what you're using to view your backed-up notes.

This should work on Mac OSX or Linux, but it relies on ImageMagick_, specifically the ``convert`` tool, to make the pictures.
It looks like the best ways to install ImageMagick on OSX all involve a package tool (homebrew_, macports_, or fink_).
So good luck there.

On the plus side, Linux users can get it from their package repos with a simple ``apt-get`` or ``yum`` install.

.. _Notes Plus: http://notesplusapp.com
.. _ImageMagick: http://imagemagick.org/
.. _homebrew: http://mxcl.github.com/homebrew/
.. _macports: http://www.macports.org/
.. _fink: http://finkproject.org/

Warning
-------

I (Brandon W Maister) wrote this, and to the best of my knowledge it will not break anything, but **I have only tested this on *my* computer**: I *highly* recommend making a backup of your notes (*outside* of your DropBox folder) before running this!

Please, dear god, make a backup of anything important.

That said: please email me (quodlibetor@gmail.com) if you have any problems or want any features.

Usage
-----

Download fix_, and use it as a command in the terminal.
``fix`` expects the path to your Notes Plus *notebook* directory::

    $ ./fix "~/DropBox/NotesPlus/GeographyNotes/chapter 1"

Would work if your notes were in ``"~/DropBox/NotesPlus/GeographyNotes/chapter 1"``.
I recommend using the quotes unless you're sure that you don't need them.

**Do Not** give ``fix`` the path to your NotesPlus folder!
Things will break.
Give it the path to a notebook folder.

.. _fix: https://raw.github.com/quodlibetor/NotesPlusNotesPortability/master/fix

License
-------

Most of this is some js written by the NotesPlus devs.
All of the additional Javascript that I (Brandon) have written is hereby released into the Public Domain, no rights reserved.
Please, NotesPlus Devs, feel free to use this if you'd like, with or without attribution.

The bash script is MIT licensed: I like occasionally getting thank you letters, but use it as you will and don't blame me if things go horribly awry.

TODO
----

- Add a ``-h``/``--help`` message
- Add a ``--restore`` option to take advantage of the backups that we're making.
- Create a homepage so that ``fix`` doesn't need to just live in this dir.
