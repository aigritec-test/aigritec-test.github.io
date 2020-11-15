# build all
all:	clean-css styles.css #minify

# clean up css
clean-css:	
	rm -f styles.css

# compile new css
styles.css:
	lessc Styles/base.less > $@

# minify it
#minify:
	# uglifyjs script.js -c > script.min.js

