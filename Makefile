install: ##скибиди
	npm ci
brain-games: ##сигма бой
	node bin/brain-games.js
brain-even:
	node bin/brain-even.js
brain-calc:
	node bin/brain-calc.js
publish: ##фортнайт
	npm publish --dry-run
lint:
	npx eslint . --fix
test:
	npm test



