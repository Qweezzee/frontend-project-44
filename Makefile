install: ##скибиди
	npm ci
brain-games: ##сигма бой
	node bin/brain-games.js
publish: ##фортнайт
	npm publish --dry-run
lint:
	npx eslint . --fix
test:
	npm test



