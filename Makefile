install: ##скибиди
	npm ci
brain-games: ##сигма бой
	node bin/brain-games.js
brain-even:
	node bin/brain-even.js
brain-calc:
	node bin/brain-calc.js
brain-gcd:
	node bin/brain-gcd.js
brain-progression:
	node bin/brain-progression.js
brain-prime:
	node bin/brain-prime.js
publish: ##фортнайт
	npm publish --dry-run
lint: ##ligmabols
	npx eslint . --fix
test:
	npm test
