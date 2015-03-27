# Genesia

This repo is both:
- an old personal side project which may or may not go further
- an experimental tech stack with ES6 (Babel), React and PouchDB

# Todo

- [x] Gulp
- [x] Browserify
- [x] Babelify
- [x] JSX
- [x] BrowserSync
- [x] React 0.13
- [x] Hello React
- [x] Sourcemaps
- [x] Alt
- [x] React Router
- [x] PouchDB
- [x] Material UI
- [x] PouchDb write
- [ ] Flex Layout
- [ ] React + SVG
- [ ] Babel EsLint
- [ ] Gulp build
- [ ] Sourcemaps
- [ ] Offline
- [ ] OAuth
- [ ] PouchDb Authenticated
- [ ] Init server

# Architecture

<pre>
                                           /-----------------------\
                       HTTP                v                       |
+-------+    +-------+  |  +-------+    +-------+    +------+    +-----+
|Node   |&lt;--&gt;|CouchDB|&lt;-|-&gt;|PouchDB|&lt;--&gt;|Flux   |---&gt;|Flux  |---&gt;|React|
|Backend|    +-------+  |  +-------+    |Actions|    |Stores|    +-----+
+-------+                               +-------+    +------+
</pre>
