cp -r ./node_modules/bootswatch/dist/materia ./assets/sass/vendors-extensions/materia
cp -r ./node_modules/bootstrap/scss ./assets/sass/vendors-extensions/bootstrap
cp ./node_modules/animate.css/animate.css ./assets/sass/vendors-extensions/_animate.scss
cp ./node_modules/normalize.css/normalize.css ./assets/sass/vendors-extensions/_normalize.scss

cp ./node_modules/katex/dist/katex.min.css ./static/katex.css
cp -r ./node_modules/katex/dist/fonts ./static/fonts

cp ./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js ./assets/js/bootstrap.min.js
cp ./node_modules/jquery/dist/jquery.min.js ./assets/js/jquery.min.js
cp ./node_modules/fuse.js/dist/fuse.js ./assets/js/fuse.js
cp ./node_modules/katex/dist/katex.min.js ./assets/js/katex.min.js
cp ./node_modules/katex/dist/contrib/auto-render.min.js ./assets/js/auto-render.min.js