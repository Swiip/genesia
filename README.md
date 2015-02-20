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
- [ ] Material UI
- [ ] React + SVG
- [ ] Offline
- [ ] PouchDb Authenticated
- [ ] Init server

# Architecture
                                           /-----------------------\
                       HTTP                v                       |
+-------+    +-------+  |  +-------+    +-------+    +------+    +-----+
|Node   |<-->|CouchDB|<-|->|PouchDB|<-->|Flux   |--->|Flux  |)-->|React|
|Backend|    +-------+  |  +-------+    |Actions|    |Stores|    +-----+
+-------+                               +-------+    +------+
