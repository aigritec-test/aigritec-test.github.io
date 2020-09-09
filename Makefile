# build all
all:	clean styles.css script.js

# clean stuff
clean: 	clean-css clean-js

# clean up css
clean-css:	
	rm -f styles.css

# clean up js
clean-js:
	rm -f script.js
	rm -f script.min.js

# compile new css
styles.css:
	lessc Styles/base.less > $@

# compile new javascript
script.js:	compile minify

# compile all the javascript files
compile:
	#@find ./JavaScript/* -type f -name "*.js" | xargs cat > script.js
	find ./JavaScript -name '*.js' -exec cat {} \; > script.js
	

# minify it
minify:
	# uglifyjs script.js -c > script.min.js
	npx terser script.js --compress --output script.min.js 
