SHELL := /bin/bash

dev:
	npm run start

lint:
	npm run lint

format:
	node_modules/typescript-formatter/bin/tsfmt -r

formatCheck:
	node_modules/typescript-formatter/bin/tsfmt --verify

build:
	npm run build

prepublish:
	npm run ngc
	node_modules/.bin/tsc -d
	npm run umd

publish:
	npm publish --registry http://registry.npmjs.org
